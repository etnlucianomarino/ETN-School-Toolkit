import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function DataHandling() {
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

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Gestione dei Dati</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Come Gestiamo i Tuoi Dati</h2>
            <p className="text-gray-600 mb-4">
              ETN School si impegna a proteggere e gestire i tuoi dati personali con la massima cura e trasparenza.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Raccolta dei Dati</h3>
            <p className="text-gray-600 mb-2">
              Raccogliamo solo i dati necessari per:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Fornirti i servizi richiesti</li>
              <li>Migliorare la tua esperienza sulla piattaforma</li>
              <li>Comunicare aggiornamenti importanti</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Conservazione dei Dati</h3>
            <p className="text-gray-600 mb-2">
              I tuoi dati vengono conservati:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>In modo sicuro su server protetti</li>
              <li>Per il tempo necessario a fornire il servizio</li>
              <li>Nel rispetto delle normative sulla privacy</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Cancellazione dei Dati</h3>
            <p className="text-gray-600">
              Puoi richiedere la cancellazione dei tuoi dati in qualsiasi momento scrivendo a privacy@etnschool.it
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}