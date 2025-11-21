import React from 'react';
import { Brain, FileText, Music } from 'lucide-react';
import { Translation } from '../translations';

export default function ThankYouPage({ t }: { t: Translation }): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <img
          src="https://i.postimg.cc/RCGzPwv1/Logo-ETNSchool-01.png"
          alt="ETN School"
          className="mx-auto mb-8 h-20 md:h-28"
        />

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {t.thankYou.title}
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          {t.thankYou.paragraph1.before}
          <strong>{t.thankYou.paragraph1.highlight}</strong>
          {t.thankYou.paragraph1.after}
        </p>

        <p className="text-gray-600 mb-10">
          {t.thankYou.paragraph2.before}
          <strong>{t.thankYou.paragraph2.highlight1}</strong>
          {t.thankYou.paragraph2.middle}
          <strong>{t.thankYou.paragraph2.highlight2}</strong>
          {t.thankYou.paragraph2.after}
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          {t.thankYou.startHere}
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-left mb-12">
          <a href="https://easymindmaps.netlify.app" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="text-green-500 w-6 h-6" />
              <h3 className="text-lg font-bold text-gray-900">Easy Mind Maps</h3>
            </div>
            <p className="text-sm text-gray-600">
              {t.thankYou.tools.mindMaps}
            </p>
          </a>

          <a href="https://easylatex.app" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-blue-500 w-6 h-6" />
              <h3 className="text-lg font-bold text-gray-900">Easy LaTeX</h3>
            </div>
            <p className="text-sm text-gray-600">
              {t.thankYou.tools.latex}
            </p>
          </a>

          <a href="https://easy-music.app" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-4">
              <Music className="text-purple-500 w-6 h-6" />
              <h3 className="text-lg font-bold text-gray-900">Easy Music</h3>
            </div>
            <p className="text-sm text-gray-600">
              {t.thankYou.tools.music}
            </p>
          </a>
        </div>

        <p className="text-gray-700 text-sm">
          📨 {t.thankYou.emailNote}
        </p>
      </div>
    </div>
  );
}
