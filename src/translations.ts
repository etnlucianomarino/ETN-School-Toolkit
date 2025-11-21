export type Language = 'it' | 'en' | 'es' | 'pl' | 'bg' | 'fr';

export const languageLabels: Record<Language, string> = {
  it: 'Italiano',
  en: 'English',
  es: 'Español',
  pl: 'Polski',
  bg: 'Български',
  fr: 'Français',
};

export const toolLinks = {
  mindMaps: 'https://easymindmaps.app',
  latex: 'https://easylatex.app',
  music: 'https://easy-music.app',
  flows: 'https://easyflows.app',
};

type ThankYouParagraph = {
  before: string;
  highlight: string;
  after: string;
};

type ThankYouParagraphWithTwoHighlights = {
  before: string;
  highlight1: string;
  middle: string;
  highlight2: string;
  after: string;
};

export type Translation = {
  heroTitle: string;
  heroSubtitle: string;
  communityTitle: string;
  communityDescription: string;
  communityCta: string;
  formTitle: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  schoolPlaceholder: string;
  subjectPlaceholder: string;
  newsletterLabel: string;
  submitButton: string;
  formError: string;
  tools: {
    mindMapsDesc: string;
    latexDesc: string;
    musicDesc: string;
    flowsDesc: string;
    cta: string;
  };
  languageSelectorLabel: string;
  cookie: {
    message: string;
    policyLink: string;
    afterLink: string;
    accept: string;
    close: string;
  };
  thankYou: {
    title: string;
    paragraph1: ThankYouParagraph;
    paragraph2: ThankYouParagraphWithTwoHighlights;
    startHere: string;
    emailNote: string;
    tools: {
      mindMaps: string;
      latex: string;
      music: string;
    };
  };
  footer: {
    dataHandling: string;
    privacyManagement: string;
    privacyPolicy: string;
  };
};

export const translations: Record<Language, Translation> = {
  it: {
    heroTitle: 'ETN School – App intelligenti che lavorano per te',
    heroSubtitle: 'AI e strumenti gratuiti pensati per aiutarti ogni giorno in classe',
    communityTitle: "Iscriviti alla Comunità di Pratiche sull'apprendimento dell'AI Generativa per la didattica",
    communityDescription: "Unisciti a educatori e docenti che stanno esplorando l'intelligenza artificiale nella didattica",
    communityCta: 'Unisciti alla Comunità',
    formTitle: 'Iscriviti al Toolkit AI',
    namePlaceholder: 'Nome',
    emailPlaceholder: 'Email',
    schoolPlaceholder: 'Scuola',
    subjectPlaceholder: 'Materia insegnata',
    newsletterLabel: 'Desidero ricevere la newsletter',
    submitButton: 'Invia',
    formError: "Errore durante l'invio.",
    tools: {
      mindMapsDesc: 'Mappe concettuali generate in pochi secondi con AI.',
      latexDesc: 'Crea esercizi da codice e scarica PDF perfetti.',
      musicDesc: 'Scrivi spartiti, MIDI e audio da codice LilyPond.',
      flowsDesc: 'Crea diagrammi di flusso in modo semplice e veloce.',
      cta: "Vai all'App",
    },
    languageSelectorLabel: 'Seleziona la lingua',
    cookie: {
      message: 'Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito. Continuando a navigare, accetti la nostra',
      policyLink: 'Privacy Policy',
      afterLink: " e l'uso dei cookie.",
      accept: 'Accetta',
      close: 'Chiudi',
    },
    thankYou: {
      title: 'Benvenuto nel Toolkit AI di ETN School!',
      paragraph1: {
        before: 'Hai appena compiuto un passo importante: non verso la tecnologia, ma verso una ',
        highlight: 'didattica più semplice, più leggera e più condivisa',
        after: '.',
      },
      paragraph2: {
        before: 'Dopo aver formato oltre ',
        highlight1: '600 docenti',
        middle: ', abbiamo ascoltato i vostri bisogni e creato strumenti pratici, gratuiti e immediati. Questo è il punto di partenza per costruire insieme una ',
        highlight2: 'comunità di pratiche',
        after: ' dove la tecnologia lavora davvero per voi.',
      },
      startHere: 'Inizia da qui 👇',
      emailNote: 'Riceverai nei prossimi giorni 3 email, una per ciascuno strumento, con esempi pratici, video tutorial e idee pronte all\'uso.',
      tools: {
        mindMaps: 'Genera mappe concettuali in pochi secondi. Perfette per lezioni, schemi e ripassi.',
        latex: 'Crea esercizi da codice o AI e scaricali in PDF. Matematica, fisica e oltre.',
        music: 'Scrivi una melodia in testo e genera spartiti, MIDI e anteprima audio.',
      },
    },
    footer: {
      dataHandling: 'Gestione Dati',
      privacyManagement: 'Gestione Privacy',
      privacyPolicy: 'Privacy Policy',
    },
  },
  en: {
    heroTitle: 'ETN School – Smart apps that work for you',
    heroSubtitle: 'AI and free tools designed to help you every day in class',
    communityTitle: 'Join the Community of Practice on Generative AI for teaching',
    communityDescription: 'Join educators exploring artificial intelligence in education',
    communityCta: 'Join the community',
    formTitle: 'Sign up for the AI Toolkit',
    namePlaceholder: 'Name',
    emailPlaceholder: 'Email',
    schoolPlaceholder: 'School',
    subjectPlaceholder: 'Subject taught',
    newsletterLabel: 'I want to receive the newsletter',
    submitButton: 'Send',
    formError: 'Error while submitting.',
    tools: {
      mindMapsDesc: 'Concept maps generated in seconds with AI.',
      latexDesc: 'Create exercises from code and download perfect PDFs.',
      musicDesc: 'Write sheet music, MIDI, and audio from LilyPond code.',
      flowsDesc: 'Create flow diagrams quickly and easily.',
      cta: 'Go to the app',
    },
    languageSelectorLabel: 'Select language',
    cookie: {
      message: 'We use cookies to improve your experience on our site. By continuing to browse, you accept our',
      policyLink: 'Privacy Policy',
      afterLink: ' and the use of cookies.',
      accept: 'Accept',
      close: 'Close',
    },
    thankYou: {
      title: 'Welcome to the ETN School AI Toolkit!',
      paragraph1: {
        before: 'You just took an important step: not toward technology, but toward ',
        highlight: 'simpler, lighter, and more collaborative teaching',
        after: '.',
      },
      paragraph2: {
        before: 'After training over ',
        highlight1: '600 teachers',
        middle: ', we listened to your needs and built practical, free, and immediate tools. This is the starting point to build together a ',
        highlight2: 'community of practice',
        after: ' where technology truly works for you.',
      },
      startHere: 'Start here 👇',
      emailNote: 'You will receive 3 emails in the next few days, one for each tool, with practical examples, video tutorials, and ready-to-use ideas.',
      tools: {
        mindMaps: 'Generate concept maps in seconds. Perfect for lessons, outlines, and reviews.',
        latex: 'Create exercises from code or AI and download them as PDFs. Math, physics, and more.',
        music: 'Write a melody in text and generate sheet music, MIDI, and an audio preview.',
      },
    },
    footer: {
      dataHandling: 'Data Handling',
      privacyManagement: 'Privacy Management',
      privacyPolicy: 'Privacy Policy',
    },
  },
  es: {
    heroTitle: 'ETN School – Apps inteligentes que trabajan por ti',
    heroSubtitle: 'IA y herramientas gratuitas pensadas para ayudarte cada día en clase',
    communityTitle: 'Únete a la Comunidad de Prácticas sobre la IA generativa para la enseñanza',
    communityDescription: 'Únete a docentes que están explorando la inteligencia artificial en la educación',
    communityCta: 'Únete a la comunidad',
    formTitle: 'Apúntate al Toolkit de IA',
    namePlaceholder: 'Nombre',
    emailPlaceholder: 'Correo electrónico',
    schoolPlaceholder: 'Escuela',
    subjectPlaceholder: 'Asignatura que impartes',
    newsletterLabel: 'Quiero recibir el boletín',
    submitButton: 'Enviar',
    formError: 'Error al enviar.',
    tools: {
      mindMapsDesc: 'Mapas conceptuales generados en segundos con IA.',
      latexDesc: 'Crea ejercicios desde código y descarga PDFs perfectos.',
      musicDesc: 'Escribe partituras, MIDI y audio desde código LilyPond.',
      flowsDesc: 'Crea diagramas de flujo de forma rápida y sencilla.',
      cta: 'Ir a la app',
    },
    languageSelectorLabel: 'Selecciona el idioma',
    cookie: {
      message: 'Usamos cookies para mejorar tu experiencia en nuestro sitio. Al continuar navegando, aceptas nuestra',
      policyLink: 'Política de privacidad',
      afterLink: ' y el uso de cookies.',
      accept: 'Aceptar',
      close: 'Cerrar',
    },
    thankYou: {
      title: '¡Bienvenido al Toolkit de IA de ETN School!',
      paragraph1: {
        before: 'Acabas de dar un paso importante: no hacia la tecnología, sino hacia una ',
        highlight: 'enseñanza más simple, ligera y compartida',
        after: '.',
      },
      paragraph2: {
        before: 'Tras formar a más de ',
        highlight1: '600 docentes',
        middle: ', hemos escuchado vuestras necesidades y creado herramientas prácticas, gratuitas e inmediatas. Este es el punto de partida para construir juntos una ',
        highlight2: 'comunidad de práctica',
        after: ' donde la tecnología trabaja realmente para vosotros.',
      },
      startHere: 'Empieza aquí 👇',
      emailNote: 'En los próximos días recibirás 3 correos, uno por cada herramienta, con ejemplos prácticos, vídeos tutoriales e ideas listas para usar.',
      tools: {
        mindMaps: 'Genera mapas conceptuales en segundos. Perfectos para clases, esquemas y repasos.',
        latex: 'Crea ejercicios desde código o IA y descárgalos en PDF. Matemáticas, física y más.',
        music: 'Escribe una melodía en texto y genera partituras, archivos MIDI y una vista previa de audio.',
      },
    },
    footer: {
      dataHandling: 'Gestión de datos',
      privacyManagement: 'Gestión de privacidad',
      privacyPolicy: 'Política de privacidad',
    },
  },
  pl: {
    heroTitle: 'ETN School – Inteligentne aplikacje, które pracują za Ciebie',
    heroSubtitle: 'Sztuczna inteligencja i darmowe narzędzia stworzone, by pomagać Ci każdego dnia w klasie',
    communityTitle: 'Dołącz do społeczności praktyków zajmującej się generatywną AI w edukacji',
    communityDescription: 'Dołącz do nauczycieli, którzy badają sztuczną inteligencję w dydaktyce',
    communityCta: 'Dołącz do społeczności',
    formTitle: 'Zapisz się do Toolkit AI',
    namePlaceholder: 'Imię',
    emailPlaceholder: 'Email',
    schoolPlaceholder: 'Szkoła',
    subjectPlaceholder: 'Nauczany przedmiot',
    newsletterLabel: 'Chcę otrzymywać newsletter',
    submitButton: 'Wyślij',
    formError: 'Błąd podczas wysyłania.',
    tools: {
      mindMapsDesc: 'Mapy koncepcyjne tworzone w kilka sekund dzięki AI.',
      latexDesc: 'Twórz zadania z kodu i pobieraj perfekcyjne pliki PDF.',
      musicDesc: 'Pisz nuty, MIDI i audio z kodu LilyPond.',
      flowsDesc: 'Twórz schematy blokowe szybko i łatwo.',
      cta: 'Przejdź do aplikacji',
    },
    languageSelectorLabel: 'Wybierz język',
    cookie: {
      message: 'Używamy plików cookie, aby ulepszyć Twoje doświadczenie na naszej stronie. Kontynuując przeglądanie, akceptujesz naszą',
      policyLink: 'Polityka prywatności',
      afterLink: ' oraz korzystanie z plików cookie.',
      accept: 'Akceptuj',
      close: 'Zamknij',
    },
    thankYou: {
      title: 'Witamy w Toolkit AI ETN School!',
      paragraph1: {
        before: 'Właśnie zrobiłeś ważny krok: nie w stronę technologii, ale w stronę ',
        highlight: 'prostszego, lżejszego i bardziej współdzielonego nauczania',
        after: '.',
      },
      paragraph2: {
        before: 'Po przeszkoleniu ponad ',
        highlight1: '600 nauczycieli',
        middle: ' wysłuchaliśmy waszych potrzeb i stworzyliśmy praktyczne, darmowe i natychmiastowe narzędzia. To punkt wyjścia, by wspólnie budować ',
        highlight2: 'społeczność praktyków',
        after: ', w której technologia naprawdę pracuje dla was.',
      },
      startHere: 'Zacznij tutaj 👇',
      emailNote: 'W najbliższych dniach otrzymasz 3 wiadomości e-mail, po jednej na każde narzędzie, z praktycznymi przykładami, wideo tutorialami i gotowymi pomysłami.',
      tools: {
        mindMaps: 'Generuj mapy koncepcyjne w kilka sekund. Idealne na lekcje, plany i powtórki.',
        latex: 'Twórz ćwiczenia z kodu lub AI i pobieraj je jako pliki PDF. Matematyka, fizyka i więcej.',
        music: 'Zapisz melodię w tekście i generuj nuty, pliki MIDI oraz podgląd audio.',
      },
    },
    footer: {
      dataHandling: 'Zarządzanie danymi',
      privacyManagement: 'Zarządzanie prywatnością',
      privacyPolicy: 'Polityka prywatności',
    },
  },
  bg: {
    heroTitle: 'ETN School – Умни приложения, които работят вместо вас',
    heroSubtitle: 'AI и безплатни инструменти, създадени да ви помагат всеки ден в клас',
    communityTitle: 'Присъединете се към общността за генеративен AI в образованието',
    communityDescription: 'Присъединете се към преподаватели, които изследват изкуствения интелект в обучението',
    communityCta: 'Включете се в общността',
    formTitle: 'Запишете се за AI Toolkit',
    namePlaceholder: 'Име',
    emailPlaceholder: 'Имейл',
    schoolPlaceholder: 'Училище',
    subjectPlaceholder: 'Преподаван предмет',
    newsletterLabel: 'Искам да получавам бюлетина',
    submitButton: 'Изпрати',
    formError: 'Грешка при изпращането.',
    tools: {
      mindMapsDesc: 'Концептуални карти, генерирани за секунди с помощта на AI.',
      latexDesc: 'Създавайте упражнения от код и изтегляйте перфектни PDF файлове.',
      musicDesc: 'Пишете ноти, MIDI и аудио от код на LilyPond.',
      flowsDesc: 'Създавайте блок-схеми бързо и лесно.',
      cta: 'Към приложението',
    },
    languageSelectorLabel: 'Избор на език',
    cookie: {
      message: 'Използваме бисквитки, за да подобрим вашето изживяване на сайта. Продължавайки, приемате нашата',
      policyLink: 'Политика за поверителност',
      afterLink: ' и използването на бисквитки.',
      accept: 'Приеми',
      close: 'Затвори',
    },
    thankYou: {
      title: 'Добре дошли в AI Toolkit на ETN School!',
      paragraph1: {
        before: 'Току-що направихте важна стъпка: не към технологията, а към ',
        highlight: 'по-просто, по-леко и по-споделено преподаване',
        after: '.',
      },
      paragraph2: {
        before: 'След като обучихме над ',
        highlight1: '600 учители',
        middle: ', чухме вашите нужди и създадохме практични, безплатни и незабавни инструменти. Това е началната точка, за да изградим заедно ',
        highlight2: 'общност на практиката',
        after: ', в която технологията наистина работи за вас.',
      },
      startHere: 'Започнете оттук 👇',
      emailNote: 'В следващите дни ще получите 3 имейла, по един за всеки инструмент, с практични примери, видеоуроци и готови идеи.',
      tools: {
        mindMaps: 'Генерирайте мисловни карти за секунди. Перфектни за уроци, схеми и преговори.',
        latex: 'Създавайте упражнения от код или AI и ги изтегляйте като PDF. Математика, физика и други.',
        music: 'Запишете мелодия като текст и генерирайте ноти, MIDI и аудио предварителен преглед.',
      },
    },
    footer: {
      dataHandling: 'Управление на данни',
      privacyManagement: 'Управление на поверителност',
      privacyPolicy: 'Политика за поверителност',
    },
  },
  fr: {
    heroTitle: 'ETN School – Des apps intelligentes qui travaillent pour vous',
    heroSubtitle: 'IA et outils gratuits pensés pour vous aider chaque jour en classe',
    communityTitle: "Rejoignez la communauté de pratique sur l'IA générative pour l'enseignement",
    communityDescription: "Rejoignez des enseignants qui explorent l'intelligence artificielle en éducation",
    communityCta: 'Rejoindre la communauté',
    formTitle: 'Inscrivez-vous au Toolkit IA',
    namePlaceholder: 'Nom',
    emailPlaceholder: 'Email',
    schoolPlaceholder: 'École',
    subjectPlaceholder: 'Matière enseignée',
    newsletterLabel: 'Je souhaite recevoir la newsletter',
    submitButton: 'Envoyer',
    formError: "Erreur lors de l'envoi.",
    tools: {
      mindMapsDesc: "Cartes mentales générées en quelques secondes grâce à l'IA.",
      latexDesc: 'Créez des exercices à partir du code et téléchargez des PDF parfaits.',
      musicDesc: "Écrivez des partitions, des fichiers MIDI et de l'audio à partir de code LilyPond.",
      flowsDesc: 'Créez des organigrammes simplement et rapidement.',
      cta: "Aller à l'app",
    },
    languageSelectorLabel: 'Choisir la langue',
    cookie: {
      message: 'Nous utilisons des cookies pour améliorer votre expérience sur notre site. En continuant à naviguer, vous acceptez notre',
      policyLink: 'Politique de confidentialité',
      afterLink: " et l'utilisation des cookies.",
      accept: 'Accepter',
      close: 'Fermer',
    },
    thankYou: {
      title: "Bienvenue dans le Toolkit IA d'ETN School !",
      paragraph1: {
        before: 'Vous venez de faire un pas important : non pas vers la technologie, mais vers ',
        highlight: 'un enseignement plus simple, plus léger et plus partagé',
        after: '.',
      },
      paragraph2: {
        before: 'Après avoir formé plus de ',
        highlight1: '600 enseignants',
        middle: ", nous avons écouté vos besoins et créé des outils pratiques, gratuits et immédiats. C'est le point de départ pour construire ensemble une ",
        highlight2: 'communauté de pratique',
        after: ' où la technologie travaille vraiment pour vous.',
      },
      startHere: 'Commencez ici 👇',
      emailNote: "Vous recevrez dans les prochains jours 3 emails, un pour chaque outil, avec des exemples pratiques, des tutoriels vidéo et des idées prêtes à l'emploi.",
      tools: {
        mindMaps: 'Générez des cartes mentales en quelques secondes. Parfaites pour les cours, schémas et révisions.',
        latex: "Créez des exercices à partir du code ou de l'IA et téléchargez-les en PDF. Mathématiques, physique et plus encore.",
        music: 'Écrivez une mélodie en texte et générez partitions, fichiers MIDI et aperçu audio.',
      },
    },
    footer: {
      dataHandling: 'Gestion des données',
      privacyManagement: 'Gestion de la confidentialité',
      privacyPolicy: 'Politique de confidentialité',
    },
  },
};
