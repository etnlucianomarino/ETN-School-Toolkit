import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Brain, FileText, Music, Workflow, ChevronDown } from 'lucide-react';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { DataHandling } from './pages/DataHandling';
import { PrivacyManagement } from './pages/PrivacyManagement';
import ThankYouPage from './pages/ThankYouPage';
import { translations, languageLabels, toolLinks, Language, Translation } from './translations';

export function ToolkitSignupForm({ t }: { t: Translation }) {
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
        alert(t.formError);
      }
    } catch (error) {
      console.error('Errore:', error);
      alert(t.formError);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold">{t.formTitle}</h2>
      <input type="text" name="Nome" placeholder={t.namePlaceholder} value={formData.Nome} onChange={handleChange} required className="w-full border px-4 py-2 rounded" />
      <input type="email" name="Email" placeholder={t.emailPlaceholder} value={formData.Email} onChange={handleChange} required className="w-full border px-4 py-2 rounded" />
      <input type="text" name="Scuola" placeholder={t.schoolPlaceholder} value={formData.Scuola} onChange={handleChange} className="w-full border px-4 py-2 rounded" />
      <input type="text" name="Materia insegnata" placeholder={t.subjectPlaceholder} value={formData['Materia insegnata']} onChange={handleChange} className="w-full border px-4 py-2 rounded" />
      <label className="flex items-center space-x-2">
        <input type="checkbox" name="Newsletter" checked={formData.Newsletter} onChange={handleChange} />
        <span>{t.newsletterLabel}</span>
      </label>
      <button type="submit" className="w-full bg-[#7FD1C0] text-white py-3 rounded hover:bg-[#6BC1AE] font-semibold">
        {t.submitButton}
      </button>
    </form>
  );
}

function HomePage({
  t,
  language,
  onLanguageChange,
}: {
  t: Translation;
  language: Language;
  onLanguageChange: (language: Language) => void;
}) {
  const tools = [
    { key: 'mindMaps', icon: <Brain className="w-8 h-8 text-green-600" />, link: toolLinks.mindMaps },
    { key: 'latex', icon: <FileText className="w-8 h-8 text-blue-600" />, link: toolLinks.latex },
    { key: 'music', icon: <Music className="w-8 h-8 text-purple-600" />, link: toolLinks.music },
    { key: 'flows', icon: <Workflow className="w-8 h-8 text-orange-600" />, link: toolLinks.flows },
  ] as const;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="container mx-auto px-6 flex justify-end pt-6">
          <LanguageSelector language={language} onChange={onLanguageChange} label={t.languageSelectorLabel} />
        </div>
      </header>
      <main className="flex-grow">
        <section className="relative bg-gradient-to-b from-blue-50 to-white pt-24 pb-20">
          <div className="container mx-auto px-6 text-center">
            <a href="https://www.etnschool.it" target="_blank" rel="noopener noreferrer">
              <img src="https://i.postimg.cc/RCGzPwv1/Logo-ETNSchool-01.png" alt="ETN School Logo" className="mx-auto mb-8 h-20 md:h-24 hover:opacity-90 transition-opacity" />
            </a>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">{t.heroTitle}</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-3xl mx-auto">{t.heroSubtitle}</p>

            <div id="tools" className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {tools.map(tool => (
                <ToolCard
                  key={tool.key}
                  icon={tool.icon}
                  title={
                    tool.key === 'mindMaps'
                      ? 'Easy Mind Maps'
                      : tool.key === 'latex'
                      ? 'Easy LaTeX'
                      : tool.key === 'music'
                      ? 'Easy Music'
                      : 'Easy Flows'
                  }
                  desc={
                    tool.key === 'mindMaps'
                      ? t.tools.mindMapsDesc
                      : tool.key === 'latex'
                      ? t.tools.latexDesc
                      : tool.key === 'music'
                      ? t.tools.musicDesc
                      : t.tools.flowsDesc
                  }
                  link={tool.link}
                  ctaText={t.tools.cta}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t.communityTitle}
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {t.communityDescription}
            </p>
            <a
              href={t.communityLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[#7FD1C0] text-white rounded-lg text-lg font-semibold hover:bg-[#6BC1AE] transition-colors shadow-lg hover:shadow-xl"
            >
              {t.communityLabel}
            </a>
          </div>
        </section>
      </main>

      <Footer t={t} />
      <CookieConsent t={t} />
    </div>
  );
}

function ToolCard({
  icon,
  title,
  desc,
  link,
  ctaText,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  link: string;
  ctaText: string;
}) {
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
      >
        {ctaText}
      </a>
    </div>
  );
}

function LanguageSelector({
  language,
  onChange,
  label,
}: {
  language: Language;
  onChange: (language: Language) => void;
  label: string;
}) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow transition"
        onClick={() => setOpen(prev => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={label}
      >
        <span>{languageLabels[language]}</span>
        <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-white border border-gray-100 overflow-hidden z-30">
          {Object.entries(languageLabels).map(([code, name]) => (
            <button
              key={code}
              onClick={() => {
                onChange(code as Language);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                code === language ? 'font-semibold text-gray-900' : 'text-gray-700'
              }`}
              role="option"
              aria-selected={code === language}
            >
              {name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language | null;
    return saved && translations[saved] ? saved : 'it';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = translations[language];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage t={t} language={language} onLanguageChange={setLanguage} />} />
        <Route path="/thank-you" element={<ThankYouPage t={t} />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/data-handling" element={<DataHandling />} />
        <Route path="/privacy-management" element={<PrivacyManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
