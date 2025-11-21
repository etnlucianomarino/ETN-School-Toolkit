import React from 'react';
import { Link } from 'react-router-dom';
import { Translation } from '../translations';

export function Footer({ t }: { t: Translation }) {
  return (
    <footer className="py-4 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 flex justify-center">
        <div className="space-x-4 text-xs text-gray-500">
          <Link to="/data-handling" className="hover:text-gray-700 hover:underline">
            {t.footer.dataHandling}
          </Link>
          <span>•</span>
          <Link to="/privacy-management" className="hover:text-gray-700 hover:underline">
            {t.footer.privacyManagement}
          </Link>
          <span>•</span>
          <Link to="/privacy-policy" className="hover:text-gray-700 hover:underline">
            {t.footer.privacyPolicy}
          </Link>
        </div>
      </div>
    </footer>
  );
}
