(() => {
  'use strict';

  const translations = {
    ar: {
      skip:'تجاوز إلى المحتوى', brand:'مِيزان', brandSub:'مكتب للمحاماة والاستشارات', navHome:'الرئيسية', navExpertise:'مجالات العمل', navApproach:'منهجيتنا', navAbout:'عن المكتب', navFaq:'أسئلة شائعة', navContact:'اتصل بنا', headerCta:'احجز استشارة',
      heroEyebrow:'وضوح في الرؤية. قوة في التمثيل.', heroTitle:'حين تكون <em>القرارات</em><br>مهمة، ابدأ من<br>موقف قانوني واضح.', heroLead:'نرافق الأفراد والمؤسسات في فهم خياراتهم القانونية، وبناء خطوات مدروسة، والدفاع عن مصالحهم بمهنية وسرية.', heroCta:'ناقش قضيتك', heroSecondary:'اكتشف مجالات عملنا', heroTrust:'السرية والوضوح أساس كل تواصل', visualLabel:'القانون • المسؤولية • الثقة', heroStat1Value:'+14', heroStat1Label:'سنة خبرة', heroStat2Value:'+850', heroStat2Label:'عميل راضٍ', heroStat3Value:'+320', heroStat3Label:'قضية ناجحة', heroStat4Value:'+1,200', heroStat4Label:'استشارة قانونية', heroBottom:'خدمات قانونية للأفراد والمؤسسات',
      principle1Title:'سرية مهنية', principle1Text:'احترام خصوصية المعلومات والملفات.', principle2Title:'رؤية واضحة', principle2Text:'شرح الخيارات والخطوات دون تعقيد.', principle3Title:'متابعة مسؤولة', principle3Text:'تواصل منظم ومتابعة وفق الاتفاق.',
      expertiseEyebrow:'مجالات الممارسة', expertiseTitle:'خبرة قانونية<br><em>تبدأ من فهم التفاصيل.</em>', expertiseIntro:'تختلف كل قضية عن الأخرى. لذلك نبدأ بفهم الوقائع والهدف، ثم نحدد المسار القانوني الأنسب ضمن نطاق اختصاص المكتب.', service1Title:'القانون المدني', service1Text:'النزاعات المدنية، الالتزامات، العقود، والتعويضات.', service2Title:'القانون التجاري', service2Text:'العقود التجارية، المنازعات، ومرافقة الأنشطة المهنية.', service3Title:'قانون الشركات', service3Text:'التأسيس، الحوكمة، العلاقات بين الشركاء، والعقود.', service4Title:'العقار والملكية', service4Text:'المعاملات العقارية، الملكية، والإيجارات والنزاعات.', service5Title:'قانون الأسرة', service5Text:'المسائل الأسرية، الأحوال الشخصية، وتسوية الخلافات.', service6Title:'المنازعات والتمثيل', service6Text:'دراسة النزاع، إعداد الملفات، والتمثيل وفق التكليف.', serviceLink:'ناقش احتياجك',
      approachEyebrow:'طريقة العمل', approachTitle:'خطوات مدروسة.<br><em>لا وعود جاهزة.</em>', approachText:'الممارسة القانونية الجيدة تبدأ بالاستماع والتحقق، لا بالاستنتاج السريع. نوضح لك ما نعرفه، وما يحتاج إلى مراجعة، وما يمكن فعله بعد ذلك.', approachCta:'ابدأ محادثة مهنية', step1Title:'الاستماع الأولي', step1Text:'فهم موجز للموضوع والهدف، وتحديد ما يلزم توفيره قبل دراسة الملف.', step2Title:'التقييم القانوني', step2Text:'مراجعة الوقائع والوثائق ذات الصلة وتحديد الخيارات والمخاطر المحتملة.', step3Title:'الاتفاق على المسار', step3Text:'شرح نطاق المهمة والأتعاب والخطوات المتوقعة قبل بدء التكليف.', step4Title:'التنفيذ والمتابعة', step4Text:'تنفيذ ما تم الاتفاق عليه وإبقاء التواصل واضحًا بشأن المستجدات.',
      aboutSeal:'مهنية • دقة • التزام', aboutQuote:'أفضل قرار قانوني هو القرار المبني على فهم كامل للوقائع.', aboutEyebrow:'عن المكتب', aboutTitle:'القانون ليس نصوصًا فقط.<br><em>بل قرارات تمس الحياة.</em>', aboutText:'نؤمن أن العلاقة المهنية الناجحة تقوم على الثقة، والوضوح في شرح الخيارات، والالتزام بحدود المهمة المتفق عليها. هدفنا أن يحصل كل عميل على فهم واقعي لوضعه وخطواته التالية.', aboutPoint1:'تحليل قبل التوصية', aboutPoint2:'تواصل مفهوم ومنظم', aboutPoint3:'التزام بالسرية المهنية', aboutLink:'تعرّف على المكتب', quoteText:'الوضوح ليس وعدًا بالنتيجة؛ إنه التزام بأن تعرف أين تقف، وما الخيارات المتاحة أمامك.', quoteLabel:'فلسفة العمل',
      faqEyebrow:'قبل التواصل', faqTitle:'أسئلة تستحق<br><em>إجابة واضحة.</em>', faqText:'إليك إجابات أولية عن آلية التواصل والتكليف. تبقى التفاصيل مرتبطة بطبيعة كل ملف.', faqLink:'لديك سؤال آخر؟', faq1Q:'كيف أطلب استشارة أولية؟<span aria-hidden="true">＋</span>', faq1A:'يمكنك إرسال طلب تواصل مختصر عبر النموذج، وسيُفتح واتساب برسالة تتضمن بياناتك لمراجعتها وإرسالها.', faq2Q:'هل إرسال الطلب يعني قبول القضية؟<span aria-hidden="true">＋</span>', faq2A:'لا. إرسال طلب التواصل لا ينشئ علاقة تمثيل قانوني ولا يعني قبول الملف. يبدأ التكليف بعد التحقق والاتفاق الصريح على نطاق العمل.', faq3Q:'ما الوثائق التي يجب تحضيرها؟<span aria-hidden="true">＋</span>', faq3A:'تختلف حسب الموضوع. لا ترسل وثائق أو بيانات حساسة عبر نموذج عام؛ انتظر تعليمات المكتب بشأن قناة الاستلام المناسبة.', faq4Q:'كيف تُحدد أتعاب المحاماة؟<span aria-hidden="true">＋</span>', faq4A:'تُحدد بعد فهم طبيعة المهمة ونطاقها والوقت والإجراءات اللازمة، ويجب توضيحها والاتفاق عليها قبل بدء العمل.', faq5Q:'هل يمكن الحصول على نتيجة مضمونة؟<span aria-hidden="true">＋</span>', faq5A:'لا يمكن ضمان نتيجة النزاع. يمكن شرح التقييم المهني والخيارات والمخاطر بناءً على المعلومات المتاحة.',
      contactEyebrow:'تواصل معنا', contactTitle:'ابدأ بخطوة<br><em>واضحة ومدروسة.</em>', contactText:'املأ بياناتك، ثم اضغط إرسال لفتح واتساب وإرسال طلب التواصل إلى المكتب.', contactPhoneLabel:'الهاتف', contactPhoneValue:'رقم هاتف المكتب', contactEmailLabel:'البريد الإلكتروني', contactEmailValue:'بريد المكتب', contactAddressLabel:'العنوان', contactAddressValue:'عنوان المكتب — الجزائر', privacyNote:'احمِ خصوصيتك: لا تكتب تفاصيل القضية الحساسة أو أرقام الوثائق أو كلمات المرور في أي تواصل إلكتروني.', formEyebrow:'طلب تواصل', formTitle:'كيف يمكننا مساعدتك؟', formIntro:'اترك بيانات التواصل الأساسية، دون مشاركة تفاصيل سرية.', formName:'الاسم الكامل', formPhone:'رقم الهاتف', formSubject:'مجال الطلب', formSelect:'اختر المجال', formOption1:'القانون المدني', formOption2:'القانون التجاري والشركات', formOption3:'العقار والملكية', formOption4:'قانون الأسرة', formOption5:'نزاع أو تمثيل قانوني', formOption6:'موضوع آخر', formMessage:'رسالة مختصرة (اختياري)', formConsent:'أوافق على استخدام بياناتي للتواصل معي بخصوص هذا الطلب.', formSubmit:'إرسال طلب التواصل', namePlaceholder:'مثال: محمد أحمد', phonePlaceholder:'05 xx xx xx xx', messagePlaceholder:'اكتب وصفًا عامًا دون تفاصيل حساسة...',
      footerTagline:'مقاربة قانونية واضحة، من أول تواصل إلى آخر خطوة.', backTop:'العودة للأعلى', footerCopyright:'مِيزان. جميع الحقوق محفوظة.', invalidForm:'يرجى ملء الحقول المطلوبة والتحقق من الموافقة.', whatsAppError:'تعذر فتح واتساب. يرجى المحاولة مرة أخرى.', sentWhatsApp:'تم فتح واتساب مع تجهيز رسالة طلب التواصل. راجع الرسالة واضغط إرسال.',
    },
    fr: {
      skip:'Aller au contenu', brand:'MIZAN', brandSub:'Cabinet d’avocats et de conseil', navHome:'Accueil', navExpertise:'Domaines', navApproach:'Méthode', navAbout:'Le cabinet', navFaq:'FAQ', navContact:'Contact', headerCta:'Demander un rendez-vous',
      heroEyebrow:'Une vision claire. Une défense engagée.', heroTitle:'Quand les <em>décisions</em><br>comptent, partez<br>sur des bases juridiques claires.', heroLead:'Nous accompagnons particuliers et entreprises dans la compréhension de leurs options, la définition de démarches réfléchies et la défense de leurs intérêts avec professionnalisme et confidentialité.', heroCta:'Présenter votre situation', heroSecondary:'Découvrir nos domaines', heroTrust:'Confidentialité et clarté à chaque échange', visualLabel:'DROIT • RESPONSABILITÉ • CONFIANCE', heroStat1Value:'+14', heroStat1Label:'ans d’expérience', heroStat2Value:'+850', heroStat2Label:'clients satisfaits', heroStat3Value:'+320', heroStat3Label:'affaires gagnées', heroStat4Value:'+1 200', heroStat4Label:'consultations juridiques', heroBottom:'Services juridiques pour particuliers et entreprises',
      principle1Title:'Confidentialité', principle1Text:'Respect de la vie privée et des dossiers.', principle2Title:'Clarté', principle2Text:'Des options et des étapes expliquées simplement.', principle3Title:'Suivi rigoureux', principle3Text:'Des échanges structurés selon l’accord.',
      expertiseEyebrow:'Domaines d’intervention', expertiseTitle:'Une pratique juridique<br><em>attentive aux détails.</em>', expertiseIntro:'Chaque dossier est différent. Nous commençons par comprendre les faits et l’objectif, puis identifions la voie appropriée dans le périmètre d’intervention du cabinet.', service1Title:'Droit civil', service1Text:'Litiges civils, obligations, contrats et indemnisation.', service2Title:'Droit commercial', service2Text:'Contrats commerciaux, litiges et accompagnement professionnel.', service3Title:'Droit des sociétés', service3Text:'Constitution, gouvernance, relations entre associés et contrats.', service4Title:'Droit immobilier', service4Text:'Transactions, propriété, locations et litiges immobiliers.', service5Title:'Droit de la famille', service5Text:'Questions familiales, statut personnel et règlement des différends.', service6Title:'Contentieux et représentation', service6Text:'Analyse du litige, préparation du dossier et représentation sur mandat.', serviceLink:'Parler de votre besoin',
      approachEyebrow:'Notre méthode', approachTitle:'Des étapes réfléchies.<br><em>Aucune promesse facile.</em>', approachText:'Une bonne pratique juridique commence par l’écoute et la vérification, non par une conclusion hâtive. Nous expliquons ce qui est établi, ce qui doit être examiné et les suites envisageables.', approachCta:'Établir un premier contact', step1Title:'Premier échange', step1Text:'Comprendre brièvement le sujet et l’objectif, puis identifier les éléments nécessaires à l’étude du dossier.', step2Title:'Évaluation juridique', step2Text:'Examiner les faits et les documents pertinents, puis cerner les options et les risques éventuels.', step3Title:'Définition de la mission', step3Text:'Préciser le périmètre, les honoraires et les étapes envisagées avant le début du mandat.', step4Title:'Mise en œuvre et suivi', step4Text:'Exécuter ce qui a été convenu et communiquer clairement sur les évolutions.',
      aboutSeal:'PROFESSIONNALISME • PRÉCISION • ENGAGEMENT', aboutQuote:'La meilleure décision juridique repose sur une compréhension complète des faits.', aboutEyebrow:'À propos', aboutTitle:'Le droit ne se limite pas aux textes.<br><em>Il touche aux décisions de vie.</em>', aboutText:'Nous pensons qu’une relation professionnelle solide repose sur la confiance, l’explication claire des options et le respect du périmètre convenu. Notre objectif est de donner à chaque client une compréhension réaliste de sa situation et des prochaines étapes.', aboutPoint1:'Analyse avant recommandation', aboutPoint2:'Communication claire et structurée', aboutPoint3:'Respect de la confidentialité', aboutLink:'Découvrir le cabinet', quoteText:'La clarté ne promet pas un résultat ; elle permet de savoir où l’on se trouve et quelles options sont ouvertes.', quoteLabel:'Notre philosophie',
      faqEyebrow:'Avant de nous contacter', faqTitle:'Des questions qui méritent<br><em>des réponses claires.</em>', faqText:'Quelques premières réponses sur la prise de contact et le mandat. Les modalités dépendent de chaque dossier.', faqLink:'Une autre question ?', faq1Q:'Comment demander une première consultation ?<span aria-hidden="true">＋</span>', faq1A:'Vous pouvez envoyer une demande succincte via le formulaire. WhatsApp s’ouvrira avec vos coordonnées préremplies pour vérification et envoi.', faq2Q:'La demande signifie-t-elle que le dossier est accepté ?<span aria-hidden="true">＋</span>', faq2A:'Non. Une demande de contact ne crée pas de relation de représentation et ne vaut pas acceptation du dossier. Le mandat commence après vérification et accord explicite sur la mission.', faq3Q:'Quels documents faut-il préparer ?<span aria-hidden="true">＋</span>', faq3A:'Cela dépend du sujet. N’envoyez pas de documents ni de données sensibles via un formulaire général ; attendez les instructions du cabinet sur le canal approprié.', faq4Q:'Comment les honoraires sont-ils fixés ?<span aria-hidden="true">＋</span>', faq4A:'Ils sont déterminés après compréhension de la nature et du périmètre de la mission, du temps et des démarches nécessaires. Ils doivent être expliqués et convenus avant le début du travail.', faq5Q:'Un résultat peut-il être garanti ?<span aria-hidden="true">＋</span>', faq5A:'L’issue d’un litige ne peut être garantie. Une évaluation professionnelle des options et des risques peut être présentée à partir des informations disponibles.',
      contactEyebrow:'Nous contacter', contactTitle:'Commencez par une démarche<br><em>claire et réfléchie.</em>', contactText:'Renseignez vos coordonnées, puis envoyez la demande pour ouvrir WhatsApp et contacter le cabinet.', contactPhoneLabel:'Téléphone', contactPhoneValue:'Téléphone du cabinet', contactEmailLabel:'E-mail', contactEmailValue:'E-mail du cabinet', contactAddressLabel:'Adresse', contactAddressValue:'Adresse du cabinet — Algérie', privacyNote:'Protégez votre vie privée : ne saisissez pas de détails sensibles sur l’affaire, de numéros de documents ni de mots de passe dans toute communication électronique.', formEyebrow:'Demande de contact', formTitle:'Comment pouvons-nous vous aider ?', formIntro:'Laissez vos coordonnées essentielles, sans détail confidentiel.', formName:'Nom complet', formPhone:'Numéro de téléphone', formSubject:'Objet de la demande', formSelect:'Choisir un domaine', formOption1:'Droit civil', formOption2:'Droit commercial et sociétés', formOption3:'Immobilier et propriété', formOption4:'Droit de la famille', formOption5:'Litige ou représentation', formOption6:'Autre sujet', formMessage:'Message bref (facultatif)', formConsent:'J’accepte que mes coordonnées soient utilisées pour me répondre au sujet de cette demande.', formSubmit:'Envoyer la demande', namePlaceholder:'Ex. : Mohamed Ahmed', phonePlaceholder:'05 xx xx xx xx', messagePlaceholder:'Décrivez le sujet de manière générale, sans détail sensible…',
      footerTagline:'Une approche juridique claire, du premier échange à la dernière étape.', backTop:'Retour en haut', footerCopyright:'MIZAN. Tous droits réservés.', invalidForm:'Veuillez remplir les champs requis et confirmer votre accord.', whatsAppError:'Impossible d’ouvrir WhatsApp. Veuillez réessayer.', sentWhatsApp:'WhatsApp a été ouvert avec votre demande. Vérifiez le message, puis appuyez sur Envoyer.',
    },
    en: {
      skip:'Skip to content', brand:'MIZAN', brandSub:'Law office & legal counsel', navHome:'Home', navExpertise:'Practice areas', navApproach:'Our approach', navAbout:'About', navFaq:'FAQ', navContact:'Contact us', headerCta:'Request a consultation',
      heroEyebrow:'Clear perspective. Strong representation.', heroTitle:'When <em>decisions</em><br>matter, start with<br>a clear legal position.', heroLead:'We help individuals and organizations understand their legal options, plan considered next steps, and protect their interests with professionalism and discretion.', heroCta:'Discuss your matter', heroSecondary:'Explore our practice areas', heroTrust:'Confidentiality and clarity in every exchange', visualLabel:'LAW • RESPONSIBILITY • TRUST', heroStat1Value:'+14', heroStat1Label:'years of experience', heroStat2Value:'+850', heroStat2Label:'satisfied clients', heroStat3Value:'+320', heroStat3Label:'successful cases', heroStat4Value:'+1,200', heroStat4Label:'legal consultations', heroBottom:'Legal services for individuals and organizations',
      principle1Title:'Professional discretion', principle1Text:'Respect for the privacy of information and files.', principle2Title:'Clear guidance', principle2Text:'Options and next steps explained without jargon.', principle3Title:'Responsible follow-through', principle3Text:'Structured communication and agreed follow-up.',
      expertiseEyebrow:'Practice areas', expertiseTitle:'Legal support<br><em>grounded in the details.</em>', expertiseIntro:'Every matter is different. We begin by understanding the facts and your objective, then identify an appropriate path within the office’s actual scope of practice.', service1Title:'Civil law', service1Text:'Civil disputes, obligations, contracts, and compensation.', service2Title:'Commercial law', service2Text:'Commercial contracts, disputes, and business support.', service3Title:'Corporate law', service3Text:'Formation, governance, shareholder relations, and contracts.', service4Title:'Property law', service4Text:'Real estate transactions, ownership, leases, and disputes.', service5Title:'Family law', service5Text:'Family matters, personal status, and dispute resolution.', service6Title:'Disputes and representation', service6Text:'Dispute assessment, file preparation, and representation by mandate.', serviceLink:'Discuss your needs',
      approachEyebrow:'How we work', approachTitle:'Considered steps.<br><em>No easy promises.</em>', approachText:'Good legal practice begins with listening and verification, not quick conclusions. We explain what is known, what needs review, and what may be done next.', approachCta:'Start a professional conversation', step1Title:'Initial discussion', step1Text:'Understand the issue and objective at a high level, then identify what is needed to review the matter.', step2Title:'Legal assessment', step2Text:'Review relevant facts and documents, then identify available options and potential risks.', step3Title:'Agree on the engagement', step3Text:'Explain the scope, fees, and expected steps before work begins.', step4Title:'Action and follow-up', step4Text:'Carry out the agreed work and communicate clearly about developments.',
      aboutSeal:'PROFESSIONALISM • PRECISION • COMMITMENT', aboutQuote:'The soundest legal decision begins with a full understanding of the facts.', aboutEyebrow:'About the office', aboutTitle:'Law is more than written rules.<br><em>It shapes decisions that matter.</em>', aboutText:'We believe a strong professional relationship is built on trust, clear explanations of available options, and respect for the agreed scope of work. Our aim is to help every client understand their position realistically and identify the next steps.', aboutPoint1:'Analysis before recommendation', aboutPoint2:'Clear, structured communication', aboutPoint3:'Commitment to confidentiality', aboutLink:'Get to know the office', quoteText:'Clarity is not a promise of an outcome; it is a commitment to understanding where you stand and what options are available.', quoteLabel:'Our philosophy',
      faqEyebrow:'Before contacting us', faqTitle:'Questions deserve<br><em>clear answers.</em>', faqText:'A few initial answers about contacting the office and engaging its services. Details depend on each matter.', faqLink:'Have another question?', faq1Q:'How do I request an initial consultation?<span aria-hidden="true">＋</span>', faq1A:'Submit a brief request through the form. WhatsApp will open with your details prefilled so you can review and send the message.', faq2Q:'Does submitting a request mean the case is accepted?<span aria-hidden="true">＋</span>', faq2A:'No. A contact request does not create a legal representation relationship or mean the matter has been accepted. Engagement begins only after checks and explicit agreement on the scope of work.', faq3Q:'What documents should I prepare?<span aria-hidden="true">＋</span>', faq3A:'This depends on the matter. Do not send documents or sensitive information through a general form; wait for instructions on an appropriate secure channel.', faq4Q:'How are legal fees determined?<span aria-hidden="true">＋</span>', faq4A:'Fees are determined after assessing the nature and scope of the work, time, and required procedures. They should be explained and agreed before work begins.', faq5Q:'Can an outcome be guaranteed?<span aria-hidden="true">＋</span>', faq5A:'The outcome of a dispute cannot be guaranteed. A professional assessment of options and risks can be provided based on the information available.',
      contactEyebrow:'Contact', contactTitle:'Start with a step<br><em>that is clear and considered.</em>', contactText:'Enter your details, then submit the request to open WhatsApp and contact the office.', contactPhoneLabel:'Phone', contactPhoneValue:'Office phone', contactEmailLabel:'Email', contactEmailValue:'Office email', contactAddressLabel:'Address', contactAddressValue:'Office address — Algeria', privacyNote:'Protect your privacy: do not include sensitive case details, document numbers, or passwords in any electronic communication.', formEyebrow:'Contact request', formTitle:'How can we help?', formIntro:'Share essential contact details only — no confidential information.', formName:'Full name', formPhone:'Phone number', formSubject:'Area of your request', formSelect:'Select an area', formOption1:'Civil law', formOption2:'Commercial and corporate law', formOption3:'Property and real estate', formOption4:'Family law', formOption5:'Dispute or representation', formOption6:'Other matter', formMessage:'Brief message (optional)', formConsent:'I agree that my details may be used to contact me about this request.', formSubmit:'Send contact request', namePlaceholder:'e.g. Mohamed Ahmed', phonePlaceholder:'+213 …', messagePlaceholder:'Describe the topic generally without sensitive details…',
      footerTagline:'A clear legal approach, from the first contact to the final step.', backTop:'Back to top', footerCopyright:'MIZAN. All rights reserved.', invalidForm:'Please complete the required fields and confirm your consent.', whatsAppError:'Could not open WhatsApp. Please try again.', sentWhatsApp:'WhatsApp opened with your contact request. Review the message and tap Send.',
    }
  };

  const config = window.MIZAN_CONFIG || {};
  const root = document.documentElement;
  const languageTrigger = document.getElementById('languageTrigger');
  const languageMenu = document.getElementById('languageMenu');
  const languageCurrent = document.getElementById('languageCurrent');
  const menuToggle = document.getElementById('menuToggle');
  const primaryNav = document.getElementById('primaryNav');
  let currentLanguage = 'ar';

  function setLanguage(language) {
    if (!Object.prototype.hasOwnProperty.call(translations, language)) return;
    currentLanguage = language;
    const dict = translations[language];
    root.lang = language === 'ar' ? 'ar' : language === 'fr' ? 'fr' : 'en';
    root.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.title = language === 'ar' ? 'مِيزان | مكتب محاماة' : language === 'fr' ? 'MIZAN | Cabinet d’avocats' : 'MIZAN | Law Office';
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = language === 'ar' ? 'مكتب ميزان للمحاماة — تمثيل قانوني واستشارات مهنية بمنهج واضح وسرية في التعامل.' : language === 'fr' ? 'MIZAN — accompagnement juridique et représentation professionnelle, avec clarté et confidentialité.' : 'MIZAN — professional legal support and representation with clarity and discretion.';

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.getAttribute('data-i18n');
      if (Object.prototype.hasOwnProperty.call(dict, key)) element.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
      const key = element.getAttribute('data-i18n-placeholder');
      if (Object.prototype.hasOwnProperty.call(dict, key)) element.setAttribute('placeholder', dict[key]);
    });

    const names = { ar: 'العربية', fr: 'Français', en: 'English' };
    languageCurrent.textContent = names[language];
    languageMenu.querySelectorAll('[data-lang]').forEach((button) => {
      button.setAttribute('aria-checked', String(button.dataset.lang === language));
    });
    document.querySelector('.brand').setAttribute('aria-label', language === 'ar' ? 'ميزان — الرئيسية' : language === 'fr' ? 'MIZAN — Accueil' : 'MIZAN — Home');
    languageMenu.hidden = true;
    languageTrigger.setAttribute('aria-expanded', 'false');
    if (formStatus) formStatus.textContent = '';
    updateContactDetails();
  }

  languageTrigger.addEventListener('click', () => {
    const isOpen = languageTrigger.getAttribute('aria-expanded') === 'true';
    languageTrigger.setAttribute('aria-expanded', String(!isOpen));
    languageMenu.hidden = isOpen;
  });
  languageMenu.querySelectorAll('[data-lang]').forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.lang));
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.language-picker') && !languageMenu.hidden) {
      languageMenu.hidden = true;
      languageTrigger.setAttribute('aria-expanded', 'false');
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !languageMenu.hidden) {
      languageMenu.hidden = true;
      languageTrigger.setAttribute('aria-expanded', 'false');
      languageTrigger.focus();
    }
  });

  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    primaryNav.classList.toggle('is-open', !isOpen);
  });
  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      primaryNav.classList.remove('is-open');
    });
  });

  const form = document.getElementById('consultationForm');
  const formStatus = document.getElementById('formStatus');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) {
      formStatus.textContent = translations[currentLanguage].invalidForm;
      return;
    }
    const whatsapp = String(config.whatsapp || '').replace(/[^0-9]/g, '');
    if (!/^[0-9]{8,15}$/.test(whatsapp)) {
      formStatus.textContent = translations[currentLanguage].whatsAppError;
      return;
    }
    const data = new FormData(form);
    const subject = document.querySelector('#subject option:checked').textContent;
    const labels = currentLanguage === 'ar'
      ? ['طلب تواصل من الموقع', 'الاسم', 'الهاتف', 'المجال', 'رسالة']
      : currentLanguage === 'fr'
        ? ['Demande de contact depuis le site', 'Nom', 'Téléphone', 'Domaine', 'Message']
        : ['Website contact request', 'Name', 'Phone', 'Area', 'Message'];
    const message = [labels[0], `${labels[1]}: ${data.get('name')}`, `${labels[2]}: ${data.get('phone')}`, `${labels[3]}: ${subject}`, data.get('message') ? `${labels[4]}: ${data.get('message')}` : ''].filter(Boolean).join('\n');
    const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
    const opened = window.open(url, '_blank');
    if (opened) {
      opened.opener = null;
      formStatus.textContent = translations[currentLanguage].sentWhatsApp;
    } else {
      window.location.assign(url);
    }
  });

  document.getElementById('year').textContent = String(new Date().getFullYear());

  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealItems = document.querySelectorAll('.service-card,.step,.about__content,.faq-item,.principle');
    revealItems.forEach((element) => element.classList.add('reveal'));
    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          instance.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    revealItems.forEach((element) => observer.observe(element));
  }

  // Apply verified email and address details; the phone display remains a label, not a number.
  function updateContactDetails() {
    const email = String(config.email || '').trim();
    const address = String(config.address || '').trim();
    const emailNode = document.querySelector('[data-i18n="contactEmailValue"]');
    const addressNode = document.querySelector('[data-i18n="contactAddressValue"]');
    if (email && emailNode) emailNode.textContent = email;
    if (address && addressNode) addressNode.textContent = address;
  }

  setLanguage('ar');
})();
