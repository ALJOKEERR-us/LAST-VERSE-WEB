(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const translations = {
    en: {
      navHome:'Home',navFeatures:'Features',navPolicies:'Privacy & Policies',navSupport:'Support & Contact',navAria:'Main navigation',phoneAlt:'Concept phone showing a dark green messaging interface',
      status:'In development — not launched yet',official:'OFFICIAL WEBSITE',heroLead:'An all-in-one messaging platform in development, bringing private conversations, groups, broadcast channels, and voice and video calls together in an elegant dark experience with customizable privacy settings.',explore:'Explore features',contact:'Support & Contact',note:'This is the official information website. The application itself is not available yet.',concept:'Initial interface concept',notFinal:'Early concept — in development',
      statLanguages:'Planned languages',statLanguagesSub:'Arabic · English · Turkish · French',statGroups:'Members approximately',statGroupsSub:'Target group capacity',statMods:'Maximum moderators',statModsSub:'Per broadcast channel',inDev:'In development',statStatus:'Project status',statStatusSub:'Not officially launched yet',
      aboutLabel:'ABOUT THE PROJECT',aboutTitle:'What is LAST VERSE PRO?',aboutText:'LAST VERSE PRO is a messaging application in development, aiming to offer a modern and simple communication experience that brings private conversations, groups, broadcast channels, posts, stories, and voice and video calls together in an elegant dark interface with customizable settings.',
      cardConnectTitle:'An integrated communication experience',cardConnectText:'Private chats, groups, broadcast channels, posts, stories, and voice and video calls — planned together in one application.',cardPrivacyTitle:'Privacy you can control',cardPrivacyText:'Planned privacy settings include an option to hide your typing status from others.',cardWorldTitle:'Designed for the world',cardWorldText:'Planned support for Arabic, English, Turkish, and French, with an eye-comfortable dark interface.',
      previewLabel:'A QUICK LOOK',previewTitle:'What we are building',previewText:'All items below are planned features and have not launched yet.',allFeatures:'View all features',privateChats:'Private conversations',privateChatsText:'Direct individual conversations through a simple, fast interface.',groups:'Groups up to about 400 members',groupsText:'Groups planned for approximately 300 to 400 members.',broadcast:'Broadcast channels',broadcastText:'One owner and up to 20 moderators per channel.',stories:'Posts and stories',storiesText:'A planned space for sharing posts and moments.',calls:'Voice and video calls',callsText:'Voice and video communication planned for the application.',privacySettings:'Privacy settings',privacySettingsText:'Planned controls, including the option to hide typing status.',
      followProject:'FOLLOW THE PROJECT',closingTitle:'Everything starts with an idea.',closingText:'Explore the planned features or contact us for questions and collaboration.',contactUs:'Contact us',footerDesc:'A messaging platform in development.',rights:'All rights reserved.',
      featureEyebrow:'PROJECT CAPABILITIES',featureHero:'LAST VERSE PRO Features',featureLead:'A closer look at the features being developed for an integrated communication experience.',allPlanned:'Features in development',planned:'PLANNED',dPrivate:'Direct individual conversations between users through a simple and fast interface.',dGroups:'The target capacity for groups is approximately 300 to 400 members. This is a project target, not a currently available feature.',memberTarget:'approximate target members',dBroadcast:'The planned channel structure has exactly one owner per channel, with the ability to appoint up to 20 moderators.',channelOne:'Exactly one owner per channel.',channelTwenty:'Up to 20 moderators.',channelHidden:'Ordinary viewers will not see the owner or moderators’ names or counts.',feed:'Posts and feed',dFeed:'A planned space for sharing posts and exploring content through an organized feed.',dStories:'Sharing moments and short content through a planned stories feature.',dCalls:'Voice and video communication are features targeted for development within the application.',typing:'Typing status controls',dTyping:'A typing indicator, with a planned setting that lets users hide their typing status from others.',account:'Account system',dAccount:'Application sign-in is planned to use a username and password only, without phone-number or Gmail login. This website has no sign-in forms.',verificationLabel:'PROPOSED PLANS',verificationTitle:'Optional verification subscriptions',verificationNote:'The following prices are proposed and may change before launch. Subscriptions are not available for purchase currently.',basic:'Basic',monthly:'monthly',sixMonths:'6 months',yearly:'yearly',staffLabel:'INTERNAL BADGE',staffTitle:'Staff badge',staffText:'A free staff badge is reserved for specific project roles:',owner:'Project Owner',admins:'Administrators',reviewers:'Report Reviewers / Moderation Review Team',staffNote:'Ordinary channel moderators do not automatically receive the staff badge.',languagesLabel:'LANGUAGE SUPPORT',languagesTitle:'Four planned languages',uploadLabel:'FILE SHARING',uploadTitle:'More room to share content',uploadNote:'The following upload limits and capabilities are planned and have not been confirmed as available.',photos:'Photos',videos:'Videos',otherFiles:'Other files',upTo:'up to',tus:'Resumable uploads using TUS',persistent:'Persistent storage',resume:'Resume uploads after closing the app',
      policyEyebrow:'TRANSPARENCY & TRUST',policyHero:'Privacy & Policies',policyLead:'The principles and rules intended to guide the use of LAST VERSE PRO and explain users’ rights.',draftAlert:'These pages are preliminary drafts and must be reviewed and approved before the official launch.',policyOne:'01 / PRIVACY',privacyPolicy:'Privacy Policy',privacyPolicyText:'This policy is intended to explain how user data will be handled when the application launches. The types of data that may be processed, purposes of use, user choices, and rights will be defined after the project’s actual practices are confirmed.',draftOnly:'Preliminary draft — not final',policyTwo:'02 / USE',terms:'Terms of Use',termsText:'The terms will explain account rules, use of features, content handling, and available actions in case of misuse. They will only become final after review and approval before the application is made available.',policyThree:'03 / COMMUNITY',community:'Community Guidelines',communityText:'The guidelines will define expected user behavior, including respecting others and avoiding harassment, impersonation, or content that violates the rules adopted by the project.',policyFour:'04 / COOKIES',cookies:'Cookies Policy',cookiesText:'This policy will explain whether the website or application uses cookies or similar technologies, their purposes, and how related choices can be managed, after actual usage is determined.',policyImportant:'Important note',policyImportantText:'The project’s final operational and technical details have not yet been confirmed. These drafts therefore make no claims about server locations, encryption methods, data-retention periods, or sharing data with other parties.',
      supportEyebrow:'WE ARE HERE TO HELP',supportHero:'Support & Contact',supportLead:'For project inquiries, collaboration, or financial support, use the appropriate contact method.',generalContact:'GENERAL CONTACT',inquiriesTitle:'Inquiries & Collaboration',inquiriesText:'For general inquiries, project questions, business, partnerships, and collaboration.',whatsappButton:'Contact via WhatsApp',whatsappPurpose:'This number is for inquiries and collaboration through WhatsApp.',financialSupport:'FINANCIAL SUPPORT',cashText:'Financial support for the project through Vodafone Cash only.',copyNumber:'Copy number',copyHint:'Tap to copy the Vodafone Cash number.',cashPurpose:'This number is exclusively for financial support through Vodafone Cash.',supportReminder:'Please use each number for its stated purpose: WhatsApp for inquiries and collaboration, and Vodafone Cash for financial support only.',skipToContent:'Skip to content'
    }
  };
  const pageCopy = {
    'index.html': {
      title: { ar: 'LAST VERSE PRO — الموقع الرسمي', en: 'LAST VERSE PRO — Official Website' },
      description: {
        ar: 'الموقع الرسمي لمشروع LAST VERSE PRO — تطبيق مراسلة قيد التطوير.',
        en: 'The official LAST VERSE PRO project website — a messaging application in development.'
      }
    },
    'features.html': {
      title: { ar: 'المزايا — LAST VERSE PRO', en: 'Features — LAST VERSE PRO' },
      description: {
        ar: 'مزايا LAST VERSE PRO المخطط تطويرها.',
        en: 'Planned features of LAST VERSE PRO.'
      }
    },
    'policies.html': {
      title: { ar: 'الخصوصية والسياسات — LAST VERSE PRO', en: 'Privacy & Policies — LAST VERSE PRO' },
      description: {
        ar: 'مسودات الخصوصية والسياسات الخاصة بمشروع LAST VERSE PRO.',
        en: 'Preliminary privacy and policy drafts for LAST VERSE PRO.'
      }
    },
    'support.html': {
      title: { ar: 'الدعم والتواصل — LAST VERSE PRO', en: 'Support & Contact — LAST VERSE PRO' },
      description: {
        ar: 'الدعم والتواصل الرسمي لمشروع LAST VERSE PRO.',
        en: 'Official support and contact information for LAST VERSE PRO.'
      }
    }
  };

  const getCurrentPage = () => {
    const declaredPage = document.documentElement.dataset.page;
    const lastPart = declaredPage || window.location.pathname.split('/').filter(Boolean).pop();
    return pageCopy[lastPart || 'index.html'] ? (lastPart || 'index.html') : 'index.html';
  };

  const menuButton = $('.menu-toggle');
  const nav = $('.main-nav');
  const closeMenu = () => {
    if (!menuButton || !nav) return;
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', document.documentElement.lang === 'en' ? 'Open navigation menu' : 'فتح القائمة');
  };

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = !nav.classList.contains('open');
      nav.classList.toggle('open', open);
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open
        ? (document.documentElement.lang === 'en' ? 'Close navigation menu' : 'إغلاق القائمة')
        : (document.documentElement.lang === 'en' ? 'Open navigation menu' : 'فتح القائمة'));
    });

    nav.addEventListener('click', (event) => {
      const target = event.target;
      if (target instanceof Element && target.closest('a')) closeMenu();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });

    document.addEventListener('click', (event) => {
      if (!(event.target instanceof Node)) return;
      if (!nav.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 980) closeMenu();
    }, { passive: true });
  }

  const year = $('#year');
  if (year) year.textContent = String(new Date().getFullYear());

  let langButtons = Array.from(document.querySelectorAll('.lang-toggle'));
  // Defensive fallback: keep the language switch available if a future page omits its button.
  if (langButtons.length === 0) {
    const navWrap = $('.nav-wrap');
    if (navWrap) {
      const generatedButton = document.createElement('button');
      generatedButton.className = 'lang-toggle';
      generatedButton.type = 'button';
      generatedButton.textContent = 'EN';
      generatedButton.setAttribute('aria-label', 'التبديل إلى الإنجليزية');
      generatedButton.title = 'تغيير اللغة';
      navWrap.appendChild(generatedButton);
      langButtons = [generatedButton];
    }
  }

  const translatedElements = Array.from(document.querySelectorAll('[data-i18n]'));
  translatedElements.forEach((element) => {
    if (!Object.prototype.hasOwnProperty.call(element.dataset, 'arText')) {
      element.dataset.arText = element.textContent || '';
    }
  });

  const updatePageMetadata = (english) => {
    const copy = pageCopy[getCurrentPage()];
    if (!copy) return;
    document.title = copy.title[english ? 'en' : 'ar'];
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', copy.description[english ? 'en' : 'ar']);
  };

  const applyLanguage = (language) => {
    const english = language === 'en';
    document.documentElement.lang = english ? 'en' : 'ar';
    document.documentElement.dir = english ? 'ltr' : 'rtl';
    document.body.classList.toggle('english', english);

    translatedElements.forEach((element) => {
      const key = element.getAttribute('data-i18n');
      const translated = english ? translations.en[key] : element.dataset.arText;
      if (typeof translated === 'string') element.textContent = translated;
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
      const key = element.getAttribute('data-i18n-aria-label');
      const translated = english ? translations.en[key] : element.dataset.arAriaLabel;
      if (typeof translated === 'string') element.setAttribute('aria-label', translated);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
      const key = element.getAttribute('data-i18n-alt');
      const translated = english ? translations.en[key] : element.dataset.arAlt;
      if (typeof translated === 'string') element.setAttribute('alt', translated);
    });

    langButtons.forEach((button) => {
      button.textContent = english ? 'عربي' : 'EN';
      button.setAttribute('aria-label', english ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية');
      button.setAttribute('aria-pressed', String(english));
      button.title = english ? 'Switch language to Arabic' : 'تغيير اللغة إلى الإنجليزية';
    });

    updatePageMetadata(english);
    if (menuButton) {
      menuButton.setAttribute('aria-label', english ? 'Open navigation menu' : 'فتح القائمة');
    }

    try { localStorage.setItem('lv-language', language); } catch (_) { /* Storage can be unavailable in private contexts. */ }
  };

  let currentLanguage = 'ar';
  try {
    const savedLanguage = localStorage.getItem('lv-language');
    if (savedLanguage === 'en' || savedLanguage === 'ar') currentLanguage = savedLanguage;
  } catch (_) { /* Keep Arabic as the safe default. */ }
  applyLanguage(currentLanguage);

  langButtons.forEach((button) => {
    button.addEventListener('click', () => {
      currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
      applyLanguage(currentLanguage);
      closeMenu();
    });
  });

  const copyButton = $('.copy-button');
  if (copyButton) {
    copyButton.addEventListener('click', async () => {
      const value = copyButton.dataset.copy || '';
      const feedback = $('.copy-feedback');
      let success = false;

      if (value) {
        try {
          if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
            await navigator.clipboard.writeText(value);
            success = true;
          }
        } catch (_) { /* Try the compatibility fallback below. */ }

        if (!success) {
          const field = document.createElement('textarea');
          field.value = value;
          field.setAttribute('readonly', '');
          field.style.position = 'fixed';
          field.style.opacity = '0';
          field.style.pointerEvents = 'none';
          document.body.appendChild(field);
          field.select();
          try { success = document.execCommand('copy'); } catch (_) { success = false; }
          field.remove();
        }
      }

      if (feedback) {
        feedback.textContent = success
          ? (document.documentElement.lang === 'en' ? 'Number copied successfully.' : 'تم نسخ الرقم بنجاح.')
          : (document.documentElement.lang === 'en'
            ? 'Copy is unavailable here. Please select the number and copy it manually.'
            : 'النسخ غير متاح هنا. يرجى تحديد الرقم ونسخه يدويًا.');
      }
    });
  }
})();
