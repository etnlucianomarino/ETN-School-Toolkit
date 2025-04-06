import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="py-4 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 flex justify-center">
        <div className="space-x-4 text-xs text-gray-500">
          <Link to="/data-handling" className="hover:text-gray-700 hover:underline">
            Gestione Dati
          </Link>
          <span>•</span>
          <Link to="/privacy-management" className="hover:text-gray-700 hover:underline">
            Gestione Privacy
          </Link>
          <span>•</span>
          <Link to="/privacy-policy" className="hover:text-gray-700 hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}