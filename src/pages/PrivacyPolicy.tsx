import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link 
          to="/" 
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          <span>Torna alla pagina principale</span>
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Informativa sulla Privacy</h2>
            <p className="text-gray-600 mb-4">
              La presente informativa descrive le modalità di trattamento dei dati personali degli utenti che consultano il sito web di ETN School.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Titolare del Trattamento</h3>
            <p className="text-gray-600">
              Il titolare del trattamento è ETN School, con sede in Italia.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Tipologie di Dati Raccolti</h3>
            <p className="text-gray-600 mb-2">
              Raccogliamo le seguenti tipologie di dati:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Dati di navigazione</li>
              <li>Cookie tecnici e di analisi</li>
              <li>Dati forniti volontariamente dall'utente attraverso i form</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Finalità del Trattamento</h3>
            <p className="text-gray-600 mb-2">
              I dati vengono trattati per le seguenti finalità:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Fornire i servizi richiesti</li>
              <li>Migliorare l'esperienza di navigazione</li>
              <li>Inviare comunicazioni relative ai servizi (se richiesto)</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Cookie Policy</h3>
            <p className="text-gray-600 mb-2">
              Il nostro sito utilizza:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Cookie tecnici necessari al funzionamento del sito</li>
              <li>Cookie analitici per comprendere l'utilizzo del sito</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Diritti dell'Interessato</h3>
            <p className="text-gray-600 mb-2">
              L'utente ha il diritto di:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Accedere ai propri dati personali</li>
              <li>Richiedere la rettifica o la cancellazione dei dati</li>
              <li>Richiedere la limitazione del trattamento</li>
              <li>Opporsi al trattamento</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Contatti</h3>
            <p className="text-gray-600">
              Per qualsiasi informazione sulla privacy, puoi contattarci all'indirizzo email: privacy@etnschool.it
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}