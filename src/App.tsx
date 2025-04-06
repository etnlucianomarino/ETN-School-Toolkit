import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Brain, FileText, Music, ChevronDown } from 'lucide-react';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { DataHandling } from './pages/DataHandling';
import { PrivacyManagement } from './pages/PrivacyManagement';
import ThankYouPage from './pages/ThankYouPage';

function HomePage() {
  const navigate = useNavigate();

  const scrollToTools = () => {
    document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch('/.netlify/functions/submit', {
        method: 'POST',
        body: formData,
      });

      navigate('/thank-you');
    } catch (error) {
      console.error("Errore durante l'invio:", error);
      alert("Errore durante l'invio. Riprova più tardi.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-6 text-center">
            <a href="https://www.etnschool.it" target="_blank" rel="noopener noreferrer">
              <img
                src="https://i.postimg.cc/RCGzPwv1/Logo-ETNSchool-01.png"
                alt="ETN School Logo"
                className="mx-auto mb-12 h-24 md:h-32 hover:opacity-90 transition-opacity"
              />
            </a>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              ETN School – L'intelligenza artificiale che lavora per te
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Strumenti gratuiti per aiutarti ogni giorno in classe
            </p>
            <button
              onClick={scrollToTools}
              className="px-8 py-4 text-white bg-[#7FD1C0] hover:bg-[#6BC1AE] rounded-lg text-lg font-semibold transition-colors inline-flex items-center"
            >
              Scopri gli strumenti
            </button>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-gray-400" />
          </div>
        </section>

        {/* Tools */}
        <section id="tools" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <ToolCard icon={<Brain className="w-8 h-8 text-green-600" />} title="Easy Mind Maps" desc="Mappe concettuali generate in pochi secondi con AI." />
              <ToolCard icon={<FileText className="w-8 h-8 text-blue-600" />} title="Easy LaTeX" desc="Crea esercizi da codice e scarica PDF perfetti." />
              <ToolCard icon={<Music className="w-8 h-8 text-purple-600" />} title="Easy Music" desc="Scrivi spartiti, MIDI e audio da codice LilyPond." />
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-2xl">
            <h2 className="text-3xl font-bold text-center mb-12">Richiedi il tuo AI Teaching Toolkit</h2>
            <form
              name="etn-form"
              method="POST"
              action="/.netlify/functions/submit"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <InputField name="nome" label="Nome" required />
              <InputField name="email" label="Email" type="email" required />
              <InputField name="scuola" label="Scuola" required />
              <InputField name="materia" label="Materia insegnata" required />

              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="newsletter"
                  id="newsletter"
                  className="mt-1 h-4 w-4 text-[#7FD1C0]"
                />
                <label htmlFor="newsletter" className="ml-3 text-sm text-gray-600">
                  Voglio ricevere aggiornamenti sugli strumenti ETN School
                </label>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 text-white bg-[#7FD1C0] hover:bg-[#6BC1AE] rounded-lg text-lg font-semibold"
              >
                Ricevi il Toolkit
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
}

function ToolCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition-shadow">
      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

function InputField({ name, label, type = "text", required = false }: { name: string, label: string, type?: string, required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <input type={type} name={name} id={name} required={required} className="w-full px-4 py-2 rounded-lg border border-gray-300" />
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