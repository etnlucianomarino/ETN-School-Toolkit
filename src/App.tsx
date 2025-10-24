import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Brain, FileText, Music, Workflow, ChevronDown } from 'lucide-react';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { DataHandling } from './pages/DataHandling';
import { PrivacyManagement } from './pages/PrivacyManagement';
import ThankYouPage from './pages/ThankYouPage';

function ToolkitSignupForm() {
  const [formData, setFormData] = useState({
    Nome: '',
    Email: '',
    Scuola: '',
    'Materia insegnata': '',
    Newsletter: false,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://form.etnschool.it/api/iscrizione', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        navigate('/thank-you');
      } else {
        alert("Errore durante l'invio.");
      }
    } catch (error) {
      console.error('Errore:', error);
      alert("Errore durante l'invio.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold">Iscriviti al Toolkit AI</h2>
      <input type="text" name="Nome" placeholder="Nome" value={formData.Nome} onChange={handleChange} required className="w-full border px-4 py-2 rounded" />
      <input type="email" name="Email" placeholder="Email" value={formData.Email} onChange={handleChange} required className="w-full border px-4 py-2 rounded" />
      <input type="text" name="Scuola" placeholder="Scuola" value={formData.Scuola} onChange={handleChange} className="w-full border px-4 py-2 rounded" />
      <input type="text" name="Materia insegnata" placeholder="Materia insegnata" value={formData['Materia insegnata']} onChange={handleChange} className="w-full border px-4 py-2 rounded" />
      <label className="flex items-center space-x-2">
        <input type="checkbox" name="Newsletter" checked={formData.Newsletter} onChange={handleChange} />
        <span>Desidero ricevere la newsletter</span>
      </label>
      <button type="submit" className="w-full bg-[#7FD1C0] text-white py-3 rounded hover:bg-[#6BC1AE] font-semibold">Invia</button>
    </form>
  );
}

function HomePage() {
  const scrollToTools = () => {
    document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-grow">
        <section className="relative bg-gradient-to-b from-blue-50 to-white pt-16 pb-20">
          <div className="container mx-auto px-6 text-center">
            <a href="https://www.etnschool.it" target="_blank" rel="noopener noreferrer">
              <img src="https://i.postimg.cc/RCGzPwv1/Logo-ETNSchool-01.png" alt="ETN School Logo" className="mx-auto mb-8 h-20 md:h-24 hover:opacity-90 transition-opacity" />
            </a>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">ETN School – App intelligenti che lavorano per te</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-3xl mx-auto">AI e strumenti gratuiti pensati per aiutarti ogni giorno in classe</p>

            <div id="tools" className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
              <ToolCard icon={<Brain className="w-8 h-8 text-green-600" />} title="Easy Mind Maps" desc="Mappe concettuali generate in pochi secondi con AI." link="https://easymindmaps.app" />
              <ToolCard icon={<FileText className="w-8 h-8 text-blue-600" />} title="Easy LaTeX" desc="Crea esercizi da codice e scarica PDF perfetti." link="https://easylatex.app" />
              <ToolCard icon={<Music className="w-8 h-8 text-purple-600" />} title="Easy Music" desc="Scrivi spartiti, MIDI e audio da codice LilyPond." link="https://easy-music.app" />
              <ToolCard icon={<Workflow className="w-8 h-8 text-orange-600" />} title="Easy Flows" desc="Crea diagrammi di flusso in modo semplice e veloce." link="https://easyflows.app" />
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Iscriviti alla Comunità di Pratiche sull'apprendimento dell'AI Generativa per la didattica
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Unisciti a educatori e docenti che stanno esplorando l'intelligenza artificiale nella didattica
            </p>
            <a
              href="https://comunita66.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[#7FD1C0] text-white rounded-lg text-lg font-semibold hover:bg-[#6BC1AE] transition-colors shadow-lg hover:shadow-xl"
            >
              Unisciti alla Comunità
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
}

function ToolCard({ icon, title, desc, link }) {
  return (
    <div 
      className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition-shadow flex flex-col justify-between"
    >
      <div>
        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6">{icon}</div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 mb-4">{desc}</p>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 px-4 py-2 bg-[#7FD1C0] text-white rounded-lg font-medium hover:bg-[#6BC1AE] transition-colors inline-block text-center"
      >Vai all'App</a>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/data-handling" element={<DataHandling />} />
        <Route path="/privacy-management" element={<PrivacyManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
