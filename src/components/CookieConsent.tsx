import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4 md:p-6 z-50">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-gray-600 text-sm md:text-base">
            Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito. Continuando a navigare, accetti la nostra{' '}
            <a
              href="/privacy-policy"
              className="text-[#7FD1C0] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>{' '}
            e l'uso dei cookie.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={acceptCookies}
            className="px-6 py-2 bg-[#7FD1C0] hover:bg-[#6BC1AE] text-white rounded-lg font-medium transition-colors"
          >
            Accetta
          </button>
          <button
            onClick={() => setShowConsent(false)}
            className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Chiudi"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}