import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PrivacyManagement() {
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

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Gestione della Privacy</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Le Tue Preferenze sulla Privacy</h2>
            <p className="text-gray-600 mb-4">
              Qui puoi gestire le tue preferenze sulla privacy e l'utilizzo dei dati su ETN School.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Impostazioni Cookie</h3>
            <p className="text-gray-600 mb-2">
              Puoi gestire le tue preferenze sui cookie:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Cookie essenziali (sempre attivi)</li>
              <li>Cookie analitici</li>
              <li>Cookie di terze parti</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Newsletter e Comunicazioni</h3>
            <p className="text-gray-600 mb-2">
              Gestisci le tue preferenze di comunicazione:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Aggiornamenti sui servizi</li>
              <li>Newsletter educative</li>
              <li>Comunicazioni sui nuovi strumenti</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">I Tuoi Diritti</h3>
            <p className="text-gray-600">
              Hai il diritto di accedere, modificare o cancellare i tuoi dati in qualsiasi momento.
              Per esercitare questi diritti, contattaci a privacy@etnschool.it
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}