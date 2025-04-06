const Airtable = require('airtable');

// Configurazione headers CORS
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json'
};

exports.handler = async (event) => {
  // Gestione delle richieste OPTIONS per CORS
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'OK' })
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: 'Method Not Allowed' })
    };
  }

  try {
    const apiKey = process.env.AIRTABLE_API_KEY;
    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableName = process.env.AIRTABLE_TABLE_NAME || 'Richieste Toolkit';

    if (!apiKey || !baseId) {
      console.error("Errore: Variabili d'ambiente Airtable non impostate!");
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          success: false,
          message: "Errore di configurazione del server." 
        })
      };
    }

    let data;
    try {
      data = JSON.parse(event.body);
    } catch (e) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          success: false,
          message: 'Invalid JSON payload' 
        })
      };
    }

    if (!data.nome || !data.email || !data.scuola || !data.materia) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          success: false,
          message: 'Per favore, compila tutti i campi obbligatori.' 
        })
      };
    }

    const base = new Airtable({ apiKey }).base(baseId);
    
    // Aggiungi un log per debugging
    console.log('Tentativo di creazione record in Airtable:', {
      nome: data.nome,
      email: data.email,
      scuola: data.scuola,
      materia: data.materia,
      newsletter: data.newsletter
    });

    const record = await base(tableName).create([
      {
        fields: {
          'Nome': data.nome,
          'Email': data.email,
          'Scuola': data.scuola,
          'Materia Insegnata': data.materia,
          'Newsletter': data.newsletter || false
        },
      },
    ]);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true,
        message: 'Grazie! La tua richiesta per il Toolkit è stata inviata.',
        recordId: record[0].getId()
      })
    };

  } catch (error) {
    console.error('Errore durante l\'invio ad Airtable:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        success: false,
        message: 'Si è verificato un errore durante l\'invio. Riprova più tardi.',
        error: error.message
      })
    };
  }
};
