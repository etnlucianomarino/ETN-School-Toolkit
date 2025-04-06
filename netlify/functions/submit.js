const fetch = require('node-fetch');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  const formData = new URLSearchParams(event.body);

  const nome = formData.get('nome');
  const email = formData.get('email');
  const scuola = formData.get('scuola');
  const materia = formData.get('materia');
  const newsletter = formData.get('newsletter') === 'on';

  const AIRTABLE_PAT = process.env.AIRTABLE_PAT;
  const AIRTABLE_BASE_ID = 'app9jECfshQHYcWRJ';
  const AIRTABLE_TABLE_ID = 'tbl5CRYT0GIaR3lVy';

  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`;

  const record = {
    fields: {
      Nome: nome,
      Email: email,
      Scuola: scuola,
      Materia: materia,
      Newsletter: newsletter,
    },
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${AIRTABLE_PAT}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(record),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Errore API Airtable:', result);
      return {
        statusCode: response.status,
        body: JSON.stringify(result),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error('Errore generico:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Errore interno' }),
    };
  }
};
