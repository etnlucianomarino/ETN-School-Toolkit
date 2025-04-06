import React from 'react';
import { Brain, FileText, Music } from 'lucide-react';

export default function ThankYouPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <img
          src="https://i.postimg.cc/RCGzPwv1/Logo-ETNSchool-01.png"
          alt="ETN School"
          className="mx-auto mb-8 h-20 md:h-28"
        />

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Benvenuto nel Toolkit AI di ETN School!
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          Hai appena compiuto un passo importante: non verso la tecnologia, ma verso una
          <strong> didattica più semplice, più leggera e più condivisa</strong>.
        </p>

        <p className="text-gray-600 mb-10">
          Dopo aver formato oltre <strong>600 docenti</strong>, abbiamo ascoltato i vostri bisogni e creato strumenti pratici, gratuiti e immediati. Questo è il punto di partenza per costruire insieme
          una <strong>comunità di pratiche</strong> dove la tecnologia lavora davvero per voi.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Inizia da qui 👇
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-left mb-12">
          <a href="https://easymindmaps.netlify.app" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="text-green-500 w-6 h-6" />
              <h3 className="text-lg font-bold text-gray-900">Easy Mind Maps</h3>
            </div>
            <p className="text-sm text-gray-600">
              Genera mappe concettuali in pochi secondi. Perfette per lezioni, schemi e ripassi.
            </p>
          </a>

          <a href="https://easylatex.app" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-blue-500 w-6 h-6" />
              <h3 className="text-lg font-bold text-gray-900">Easy LaTeX</h3>
            </div>
            <p className="text-sm text-gray-600">
              Crea esercizi da codice o AI e scaricali in PDF. Matematica, fisica e oltre.
            </p>
          </a>

          <a href="https://easy-music.app" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-4">
              <Music className="text-purple-500 w-6 h-6" />
              <h3 className="text-lg font-bold text-gray-900">Easy Music</h3>
            </div>
            <p className="text-sm text-gray-600">
              Scrivi una melodia in testo e genera spartiti, MIDI e anteprima audio.
            </p>
          </a>
        </div>

        <p className="text-gray-700 text-sm">
          📨 Riceverai nei prossimi giorni 3 email, una per ciascuno strumento, con esempi pratici, video tutorial e idee pronte all’uso.
        </p>
      </div>
    </div>
  );
}
