(() => {
      'use strict';

      /* ------------------------------------------------------------------ */
      /* MULTILINGUAL SUPPORT & TRANSLATIONS (EN / FR)                      */
      /* ------------------------------------------------------------------ */
      let currentLang = 'en';
      try {
        const savedLang = localStorage.getItem('portfolio_lang');
        if (savedLang === 'fr' || savedLang === 'en') currentLang = savedLang;
      } catch (e) {}

      const I18N = {
        en: {
          navTitle: 'Selected Work —',
          navRoom1: '01 Studio',
          navRoom2: '02 Impact',
          navRoom3: '03 Makers',
          navRoom4: '04 Worlds',
          navRoom5: '05 Connect',
          scrollHint: 'Scroll to explore',
          drawerClose: 'Close ✕',
          galleryCaption: 'Additional Visuals & Materials',

          // Room 1
          r1LabelL: '(01) — The Creative Tech Studio',
          r1LabelR: 'Selected Work — 05 Rooms',
          r1Side: 'Technology — Interaction — Experimentation',
          r1Formation: 'Master 2 Engineering Student <span class="it">in Creative Technology</span>',
          r1Lead: 'Showcasing creativity and innovation in engineering projects. Exploring the intersection of digital technology, interactive systems, and hands-on experimentation.',
          hotspotAboutAction: 'Click here ↗',
          hotspotAboutText: 'Who Am I & Methodology',

          // Room 2
          r2Kicker: '02 — Professional Experience',
          r2Title: 'CORPORATE IMPACT<br><span class="it">&amp; EXPERIENCES</span>',
          r2Sub: 'Product Design, User Research &amp; Digital Marketing',
          hotspotOfficienceAction: 'Explore →',
          hotspotOfficienceText: 'Internship — Officience',

          // Room 3
          r3Kicker: '03 — Hardware &amp; Makers',
          r3Title: 'DIGITAL FABRICATION<br><span class="it">&amp; PROTOTYPING</span>',
          r3Sub: 'Electronics, PCB Soldering &amp; Physical Computing',
          hotspotDreamlogueAction: 'Explore →',
          hotspotDreamlogueText: 'Dreamlogue — Smart Mirror & AI',
          hotspotHtmmaAction: 'Explore →',
          hotspotHtmmaText: 'How to Make Almost Anything',
          hotspotPastescraperAction: 'Explore →',
          hotspotPastescraperText: 'Kickstarter : PasteScraper',

          // Room 4
          r4Kicker: '04 — Digital Worlds &amp; Creative Arts',
          r4Title: 'INTERACTIVE WORLDS<br><span class="it">&amp; CREATIVE ARTS</span>',
          r4Sub: 'Virtual Environments, Mobile Interfaces &amp; Brand Communication',
          hotspotUnityAction: 'Explore →',
          hotspotUnityText: 'Unity 3D World',
          hotspotFlowperAction: 'Explore →',
          hotspotFlowperText: 'Flowper App',
          hotspotVisualartAction: 'Explore →',
          hotspotVisualartText: 'Visual Art & Design',

          // Room 5
          r5Kicker: '05 — Connect &amp; Collaborate',
          r5Title: 'LET\'S CONNECT <br><span class="it">&amp; COLLABORATE</span>',
          r5Sub: 'Open for Master 2 graduation internship, creative engineering projects &amp; collaborations',
          contactEmailMono: 'Direct Email',
          contactLinkedinMono: 'LinkedIn Network',
          contactCvMono: 'Curriculum Vitae',
          contactCvText: 'Download Resume (PDF) ↓'
        },
        fr: {
          navTitle: 'Projets Sélectionnés —',
          navRoom1: '01 Studio',
          navRoom2: '02 Expérience',
          navRoom3: '03 Makers',
          navRoom4: '04 Mondes',
          navRoom5: '05 Contact',
          scrollHint: 'Défiler pour explorer',
          drawerClose: 'Fermer ✕',
          galleryCaption: 'Visuels & Documents Complémentaires',

          // Room 1
          r1LabelL: '(01) — Le Studio Creative Tech',
          r1LabelR: 'Projets Sélectionnés — 05 Pièces',
          r1Side: 'Technologie — Interaction — Expérimentation',
          r1Formation: 'Étudiante Ingénieure en Master 2 <span class="it">en Creative Technology</span>',
          r1Lead: 'Mise en valeur de la créativité et de l\'innovation à travers des projets d\'ingénierie. À la croisée du numérique, des systèmes interactifs et de l\'expérimentation concrète.',
          hotspotAboutAction: 'Cliquez ici ↗',
          hotspotAboutText: 'Qui suis-je & Méthodologie',

          // Room 2
          r2Kicker: '02 — Expérience Professionnelle',
          r2Title: 'IMPACT EN ENTREPRISE<br><span class="it">&amp; EXPÉRIENCES</span>',
          r2Sub: 'Design Produit, Recherche Utilisateur &amp; Marketing Digital',
          hotspotOfficienceAction: 'Explorer →',
          hotspotOfficienceText: 'Stage — Officience',

          // Room 3
          r3Kicker: '03 — Hardware &amp; Makers',
          r3Title: 'FABRICATION NUMÉRIQUE<br><span class="it">&amp; PROTOTYPAGE</span>',
          r3Sub: 'Électronique, Soudure PCB &amp; Informatique Physique',
          hotspotDreamlogueAction: 'Explorer →',
          hotspotDreamlogueText: 'Dreamlogue — Miroir Connecté & IA',
          hotspotHtmmaAction: 'Explorer →',
          hotspotHtmmaText: 'How to Make Almost Anything',
          hotspotPastescraperAction: 'Explorer →',
          hotspotPastescraperText: 'Kickstarter : PasteScraper',

          // Room 4
          r4Kicker: '04 — Mondes Numériques &amp; Arts Créatifs',
          r4Title: 'MONDES INTERACTIFS<br><span class="it">&amp; ARTS CRÉATIFS</span>',
          r4Sub: 'Environnements Virtuels, Interfaces Mobiles &amp; Communication de Marque',
          hotspotUnityAction: 'Explorer →',
          hotspotUnityText: 'Monde 3D Unity',
          hotspotFlowperAction: 'Explorer →',
          hotspotFlowperText: 'Application Flowper',
          hotspotVisualartAction: 'Explorer →',
          hotspotVisualartText: 'Art Visuel & Design',

          // Room 5
          r5Kicker: '05 — Contact &amp; Collaboration',
          r5Title: 'CONTACT &amp; <br><span class="it">COLLABORATION</span>',
          r5Sub: 'Disponible pour un stage de fin d\'études Master 2, projets d\'ingénierie créative &amp; collaborations',
          contactEmailMono: 'Email direct',
          contactLinkedinMono: 'Réseau LinkedIn',
          contactCvMono: 'Curriculum Vitae',
          contactCvText: 'Télécharger mon CV (PDF) ↓'
        }
      };

      /* ------------------------------------------------------------------ */
      /* STRATEGIC PROJECTS DATA (BILINGUAL EN / FR)                        */
      /* ------------------------------------------------------------------ */
      const PROJECTS = {
        // 1. ROOM 01 — WHO AM I & METHODOLOGY
        about: {
          portrait: true,
          images: ['./assets/lam_oceane_photo.webp', './assets/lam_oceane_photo.jpeg'],
          en: {
            category: 'Profile & Methodology',
            title: 'About Océane LAM — Engineering Student in Creative Technology',
            date: 'Master 2 — ESILV Paris',
            tags: ['Master 2 Creative Tech', 'Iterative Prototyping', 'Project-Based Learning', 'Video Editing', 'Sports & Discipline'],
            pdf: {
              url: './my_cv/cv_lam_oceane_english.pdf',
              label: 'Download CV (PDF) ↓'
            },
            text: `I am currently an **engineering student** in my first year of a Master’s degree in **Creative Technology**, a multidisciplinary curriculum blending **software development**, **emerging technology**, and **creative design**.

Our program is taught through an active **project-based approach**, guided by international professors and innovators. This pedagogical model prioritizes **hands-on experimentation**, **rapid prototyping**, and learning by solving tangible real-world problems. It empowers me to architect **innovative technical solutions** while placing human empathy and **user interaction** at the heart of every system.

Beyond academics, I cultivate a strong creative and physical discipline through two major personal passions: **video editing**, where I experiment with visual pacing, narrative rhythm, and color grading; and regular **sports training**, which instills focus, endurance, and mental rigor. Both passions directly fuel my **creative drive** and **uncompromising execution** in technology and engineering.`
          },
          fr: {
            category: 'Profil & Méthodologie',
            title: 'À propos d\'Océane LAM — Étudiante Ingénieure en Creative Technology',
            date: 'Master 2 — ESILV Paris',
            tags: ['Master 2 Creative Tech', 'Prototypage Itératif', 'Pédagogie par Projet', 'Montage Vidéo', 'Sport & Discipline'],
            pdf: {
              url: './my_cv/cv_lam_oceane_english.pdf',
              label: 'Télécharger le CV (PDF) ↓'
            },
            text: `Je suis actuellement **étudiante ingénieure** en première année de Master en **Creative Technology**, un cursus pluridisciplinaire alliant **développement logiciel**, **technologies émergentes** et **design créatif**.

Notre formation repose sur une **pédagogie active par projet**, guidée par des professeurs et innovateurs internationaux. Ce modèle privilégie **l'expérimentation concrète**, le **prototypage rapide** et l'apprentissage par la résolution de problématiques réelles. Il me permet de concevoir des **solutions techniques innovantes** tout en plaçant l'empathie humaine et **l'interaction utilisateur** au cœur de chaque système.

Au-delà de mes études, je cultive une discipline créative et physique rigoureuse à travers deux passions majeures : le **montage vidéo**, où j'explore le rythme visuel, la narration et l'étalonnage des couleurs ; et la **pratique sportive régulière**, qui m'apporte concentration, endurance et rigueur mentale. Ces deux moteurs nourrissent directement ma **dynamique créative** et mon **exigence d'exécution** en ingénierie.`
          }
        },

        // 2. ROOM 02 — PROFESSIONAL EXPERIENCE (OFFICIENCE)
        officience: {
          carousel: true,
          topImages: [
            './assets/offinity_web_app.png',
            './assets/offinity_web_app2.png',
            './assets/offinity_app_mobile.png'
          ],
          galleryImages: [
            './assets/offinity_web_app3.png'
          ],
          en: {
            category: 'Internship — Officience',
            title: 'Internship at Officience: Product Design, UX/UI & Digital Marketing',
            date: 'International Professional Experience',
            tags: ['Internship — Officience', 'UX/UI Design', 'User Research', 'Digital Marketing', 'Product Lifecycle'],
            text: `I actively contribute to the **conception**, **optimization**, and **promotion** of the company's application through key responsibilities in **interface design**, **user research**, and **digital marketing**.

Key areas of work:

- **User Research & UX Design**: Conducting user interviews to identify core needs, and streamlining user journeys and interfaces to ensure the application is seamless and intuitive.

- **UI Design**: Designing design system components, high-fidelity mockups, and interactive prototypes.

- **Digital Marketing**: Creating and deploying multimedia communication assets (visual identities, pitch decks, promotional videos) to support the application's launch and market visibility.

This position allows me to thrive in an **international environment** and acquire a **comprehensive end-to-end perspective on the product lifecycle**, from discovery to go-to-market execution.`
          },
          fr: {
            category: 'Stage — Officience',
            title: 'Stage chez Officience : Product Design, UX/UI & Marketing Digital',
            date: 'Expérience Professionnelle Internationale',
            tags: ['Stage — Officience', 'Design UX/UI', 'Recherche Utilisateur', 'Marketing Digital', 'Cycle de Vie Produit'],
            text: `Je contribue activement à la **conception**, l'**optimisation** et la **promotion** de l'application de l'entreprise à travers des responsabilités clés en **design d'interface**, **recherche utilisateur** et **marketing digital**.

Axes majeurs de mon travail :

- **Recherche Utilisateur & Design UX** : Conduite d'entretiens utilisateurs pour cerner les besoins essentiels, simplification des parcours utilisateurs et des interfaces pour garantir une expérience fluide et intuitive.

- **Design UI** : Création des composants du design system, maquettes haute fidélité et prototypes interactifs.

- **Marketing Digital** : Conception et déploiement de supports de communication multimédias (identités visuelles, pitch decks, vidéos promotionnelles) pour soutenir le lancement et la visibilité de l'application.

Cette opportunité me permet d'évoluer dans un **environnement international** et d'acquérir une **vision globale à 360° du cycle de vie produit**, de la phase d'idéation jusqu'au déploiement sur le marché.`
          }
        },

        // 3. ROOM 03 — HARDWARE & MAKERS (FLAGSHIP PROJECT FIRST)
        dreamlogue: {
          heroVideo: true,
          video: './Dreamlogue/dreamlogue.mp4',
          images: [
            './Dreamlogue/WhatsApp Image 2026-10-27 at 20.01.12.jpeg',
            './Dreamlogue/WhatsApp Image 2026-10-27 at 20.01.53.jpeg'
          ],
          galleryImages: [
            './Dreamlogue/WhatsApp Image 2026-10-27 at 20.01.12.jpeg',
            './Dreamlogue/WhatsApp Image 2026-10-27 at 20.01.53.jpeg'
          ],
          en: {
            category: 'Master 2 Final Year Project (PFE) — Connected Hardware & Generative AI',
            title: 'Dreamlogue — Interactive Smart Mirror & Connected AI Dream Journal',
            date: 'Master 2 Final Year Project (PFE) — 2026',
            tags: ['Final Year Project (PFE)', 'Interactive Smart Mirror', 'Generative AI', 'IoT & Connected Journal', 'Product Design'],
            text: `**Dreamlogue** is an innovative, immersive concept that redefines how we explore and record our dream lives. Sitting at the crossroads of **traditional journaling** and **cutting-edge technology**, the project merges a **connected journal** with an **interactive smart mirror** to literally bring your dreams to life.

Users record their dreams either by writing or speaking into their **connected journal** right upon waking up. Leveraging advanced **Generative AI algorithms**, the narrative is analyzed, interpreted, and transformed into a **vivid visual representation**, such as high-quality images, animations, or visual atmospheres.

Once generated, the visual is seamlessly projected onto the device's **interactive mirror**. Users can watch their dreams materialize life-size, immerse themselves in their **nocturnal subconscious worlds**, and track the evolution of their recurring dream motifs and emotions over time.

The project creates a unique bridge between the **unconscious mind** and the real world through **AI-driven visual art**, while facilitating deep **self-awareness and introspection**. Blending smart IoT connectivity with elegant lifestyle design, **Dreamlogue** delivers a **furniture-grade tech object** that fits naturally into any bedroom space.`
          },
          fr: {
            category: 'Projet de Fin d\'Études (PFE) Master 2 — Hardware Connecté & IA Générative',
            title: 'Dreamlogue — Miroir Interactif & Journal de Rêves Connecté par IA',
            date: 'Projet de Fin d\'Études (PFE) Master 2 — 2026',
            tags: ['Projet de Fin d\'Études (PFE)', 'Miroir Connecté Interactif', 'IA Générative', 'IoT & Journal Connecté', 'Design Produit'],
            text: `**Dreamlogue** est un concept immersif et innovant qui redéfinit notre manière d'explorer et d'enregistrer notre vie onirique. À la croisée du **journal intime traditionnel** et des **technologies de pointe**, le projet associe un **journal connecté** à un **miroir interactif intelligent** pour donner littéralement vie à vos rêves.

Les utilisateurs consignent leurs songes par écrit ou par la voix dans leur **journal connecté** dès le réveil. Grâce à des **algorithmes d'IA générative avancés**, le récit est analysé, interprété et transformé en une **représentation visuelle vivante** (illustrations haute qualité, animations ou atmosphères immersives).

Une fois généré, le visuel est projeté de manière fluide sur le **miroir interactif**. Les utilisateurs peuvent contempler leurs rêves grandeur nature, s'immerger dans leurs **univers subconscients nocturnes** et suivre l'évolution de leurs émotions et motifs oniriques récurrents au fil du temps.

Le projet crée un pont unique entre l'**inconscient** et le monde réel grâce à l'**art visuel guidé par l'IA**, tout en stimulant l'**introspection et la connaissance de soi**. Alliant connectivité IoT et design lifestyle épuré, **Dreamlogue** s'impose comme un **objet technologique digne d'une pièce de mobilier**, s'intégrant harmonieusement dans tout espace de nuit.`
          }
        },

        htmma: {
          images: ['./assets/how_to_make_almost_anything.png'],
          galleryImages: [
            './assets/how_to_make_almost_anything (2).png',
            './assets/how_to_make_almost_anything.jpeg',
            './assets/WhatsApp Image 2026-01-05 at 11.41..jpeg',
            './assets/WhatsApp Image 2026-01-05 at 11.41.08.jpeg',
            './assets/WhatsApp Image 2026-01-06 at 17.13.32.jpeg',
            './assets/WhatsApp Image 2026-02-06 at 16.21.24.jpeg',
            './assets/WhatsApp Image 26-02-06 at 16.21.34.jpeg'
          ],
          en: {
            category: 'Digital Fabrication & Hardware',
            title: 'How to Make Almost Anything',
            date: '2025',
            tags: ['Digital Fabrication', 'PCB Soldering', '3D Modeling', 'VGA Signal Output', 'Connect Four Game'],
            pdf: {
              url: './assets/how_to_make_almost_anything.pdf',
              label: 'View Course Documentation (PDF) ↗'
            },
            text: `This intensive course in **digital fabrication** provided end-to-end hands-on experience in building physical and electronic systems from the ground up.

Throughout the curriculum, we created several functional projects: **3D modeling** and custom enclosure manufacturing, building a wooden acoustic flute, experimenting with **VGA video output** to produce on-screen graphic patterns, and mastering the full **assembly and soldering of a custom electronic PCB board**.

Soldering the electronic components onto the PCB was a demanding challenge requiring high precision, which I executed with rigor. Leveraging this functional board, we programmed interactive applications, from displaying a penguin on a CRT monitor to coding an autonomous **Connect Four game** running directly on the microcontroller. An invaluable foundation to **learn by building** and master hardware engineering from scratch.`
          },
          fr: {
            category: 'Fabrication Numérique & Hardware',
            title: 'How to Make Almost Anything',
            date: '2025',
            tags: ['Fabrication Numérique', 'Soudure PCB', 'Modélisation 3D', 'Signal Vidéo VGA', 'Jeu Puissance 4'],
            pdf: {
              url: './assets/how_to_make_almost_anything.pdf',
              label: 'Consulter la Documentation du Cours (PDF) ↗'
            },
            text: `Ce cours intensif en **fabrication numérique** a offert une expérience pratique complète de conception et réalisation de systèmes physiques et électroniques de A à Z.

Tout au long du programme, nous avons conçu plusieurs projets fonctionnels : **modélisation 3D** et fabrication de boîtiers sur mesure, création d'une flûte acoustique en bois, expérimentation avec la **génération de signal vidéo VGA** pour produire des motifs graphiques à l'écran, et maîtrise complète de l'**assemblage et soudure d'un circuit imprimé (PCB) sur mesure**.

La soudure des composants électroniques sur le PCB a représenté un défi exigeant une grande précision, mené avec rigueur. En exploitant cette carte fonctionnelle, nous avons programmé des applications interactives, allant de l'affichage d'un pingouin sur un écran cathodique jusqu'à la programmation d'un **jeu Puissance 4 autonome** exécuté directement sur microcontrôleur. Un socle précieux pour **apprendre en construisant** et maîtriser l'ingénierie hardware depuis ses fondations.`
          }
        },

        pastescraper: {
          images: ['./assets/pasteScrapper1.jpeg'],
          galleryImages: [
            './assets/pastescraper.jpeg',
            './assets/PasteScrapper.jpeg',
            './assets/pasteScapper1.jpeg'
          ],
          en: {
            category: 'Product Design & Crowdfunding',
            title: 'Kickstarter : The PasteScraper',
            date: 'April 2023',
            tags: ['Product Design', 'Kickstarter Launch', 'Physical Prototyping', 'Eco-Design'],
            text: `Developed within the Quickstarter class with the objective of engineering a tangible product designed for commercialization on **Kickstarter**.

**PasteScraper** was born from a ubiquitous everyday frustration: the significant **toothpaste waste** left behind in tubes that seem empty. Engineered as an ergonomic, durable, and accessible tool, it maximizes paste extraction while encouraging **sustainable daily habits**. From initial sketches to **functional 3D prototypes**, studio product photography, and crowdfunding campaign storytelling, this project exemplifies a disciplined **user-centered design methodology** transforming an everyday observation into a **market-ready product**.`
          },
          fr: {
            category: 'Design Produit & Crowdfunding',
            title: 'Kickstarter : Le PasteScraper',
            date: 'Avril 2023',
            tags: ['Design Produit', 'Campagne Kickstarter', 'Prototypage Physique', 'Éco-Conception'],
            text: `Développé dans le cadre du cours Quickstarter avec pour ambition de concevoir un produit physique viable destiné à une commercialisation sur **Kickstarter**.

Le **PasteScraper** est né d'une frustration du quotidien : le **gaspillage considérable de dentifrice** piégé au fond des tubes jugés vides. Conçu comme un outil ergonomique, durable et accessible à tous, il optimise l'extraction de la pâte tout en encourageant des **habitudes quotidiennes écoresponsables**. Des premiers croquis aux **prototypes 3D fonctionnels**, en passant par la photographie de produit en studio et le storytelling de campagne, ce projet illustre une **méthodologie de design centrée utilisateur** transformant une observation quotidienne en un **produit prêt pour le marché**.`
          }
        },

        // 4. ROOM 04 — DIGITAL WORLDS & CREATIVE ARTS
        unity: {
          images: ['./assets/unity_project.jpg'],
          galleryImages: [
            './assets/Capture d\'écran 2026-01-20 115355.png',
            './assets/Capture d\'écran 2026-01-20 115540.png',
            './assets/unity1.png'
          ],
          en: {
            category: 'Virtual Worlds & 3D Environment',
            title: 'Unity 3D Virtual World',
            date: 'December 2025',
            tags: ['Unity 3D', 'Safe Place', 'Level Design', 'Contemplative Atmosphere', 'Shaders & Lighting'],
            text: `A real-time interactive environment sculpted in **Unity 3D**, exploring the conceptual notion of a **'Safe Place'** and inner sanctuary.

Inspired by Asian alpine landscapes, **Sakura blossom trees**, and traditional sanctuary architecture, the world immerses the user in a soft, peaceful, and restorative atmosphere. Volumetric lighting, custom shaders, and environmental composition were crafted to evoke a feeling of **safety**, **emotional comfort**, and serene contemplation away from everyday noise. The overarching artistic intent is to cultivate a place **that feels like home without being a physical house**.`
          },
          fr: {
            category: 'Mondes Virtuels & Environnements 3D',
            title: 'Monde Virtuel Unity 3D',
            date: 'Décembre 2025',
            tags: ['Unity 3D', 'Safe Place', 'Level Design', 'Ambiance Contemplative', 'Shaders & Éclairage'],
            text: `Un environnement interactif en temps réel conçu sous **Unity 3D**, explorant le concept de **« Safe Place »** et de sanctuaire intérieur.

Inspiré des paysages alpins asiatiques, des **cerisiers Sakura en fleurs** et de l'architecture traditionnelle des sanctuaires, cet univers enveloppe l'utilisateur dans une atmosphère douce, paisible et réparatrice. L'éclairage volumétrique, les shaders sur mesure et la composition paysagère ont été minutieusement travaillés pour susciter un sentiment de **sécurité**, de **réconfort émotionnel** et de contemplation sereine, à l'écart du tumulte quotidien. L'intention artistique centrale : faire ressentir un lieu **où l'on se sent chez soi sans qu'il ne s'agisse d'une maison physique**.`
          }
        },

        flowper: {
          images: ['./assets/flowper1.jpg'],
          video: './assets/flowper_video.mp4',
          galleryImages: [
            './assets/flowper2.jpg',
            './assets/flowper3.jpg',
            './assets/flowper4.jpg',
            './assets/flowper_figma .png'
          ],
          en: {
            category: 'Mobile UX/UI & Health Innovation',
            title: 'Flowper — Student Productivity App',
            date: 'May 2025',
            tags: ['UI/UX Design', 'Figma Prototyping', 'Health Innovation', 'Grand Challenge Ingénieurs'],
            text: `Designed for the national engineering competition **Le Grand Challenge des Écoles d’Ingénieurs** (featured in **L'Usine Nouvelle**) under the theme **Health & Wellness Innovation**.

We engineered **Flowper**, a **mobile application crafted by students for students**, directly targeting challenges in **deep focus**, **time management**, and mental load reduction. The project encompassed the full product design spectrum: problem definition, user interviews, **UX research**, **comprehensive UI design in Figma**, interactive prototyping, and pitching to a **distinguished jury of industry leaders**.`
          },
          fr: {
            category: 'UX/UI Mobile & Innovation Santé',
            title: 'Flowper — Application de Productivité Étudiante',
            date: 'Mai 2025',
            tags: ['Design UI/UX', 'Prototypage Figma', 'Innovation Santé', 'Grand Challenge Ingénieurs'],
            text: `Conçu pour le concours national **Le Grand Challenge des Écoles d’Ingénieurs** (relayé par **L'Usine Nouvelle**) sur la thématique **Innovation Santé & Bien-être**.

Nous avons développé **Flowper**, une **application mobile imaginée par des étudiants pour les étudiants**, répondant directement aux enjeux de **concentration profonde**, de **gestion du temps** et d'allègement de la charge mentale. Le projet a couvert l'ensemble du cycle de conception : définition de la problématique, entretiens utilisateurs, **recherche UX**, **design d'interface complet sous Figma**, prototypage interactif et soutenance face à un **jury prestigieux d'experts de l'industrie**.`
          }
        },

        visualart: {
          images: ['./visual_art/visual.png'],
          galleryGroups: [
            {
              id: 'social-media',
              en: {
                title: '01 / Social Media & Content Architecture',
                desc: 'Editorial grid layouts, feed curation, and mobile-first visual storytelling.'
              },
              fr: {
                title: '01 / Réseaux Sociaux & Architecture de Contenu',
                desc: 'Mise en page éditoriale, harmonie du feed et storytelling visuel mobile-first.'
              },
              items: [
                {
                  src: './visual_art/gallery.png',
                  span2: true,
                  en: { tag: 'Feed Architecture', title: 'Curated Grid & Aesthetic Flow' },
                  fr: { tag: 'Architecture de Grille', title: 'Flux Esthétique & Harmonie du Feed' }
                },
                {
                  src: './visual_art/post.png',
                  isTall: true,
                  en: { tag: 'Editorial Post', title: 'Single Mobile Post Template' },
                  fr: { tag: 'Post Éditorial', title: 'Modèle de Post Mobile' }
                },
                {
                  src: './visual_art/profile.png',
                  isTall: true,
                  en: { tag: 'Brand Profile', title: 'Profile Header & Bio Strategy' },
                  fr: { tag: 'Profil de Marque', title: 'Stratégie de Profil & Bio' }
                }
              ]
            },
            {
              id: 'trip-asia',
              en: {
                title: '02 / Editorial Series — "Trip Asia with Sisters"',
                desc: 'Typography-driven poster collection capturing travel memories, chromatic warmth, and minimalist Swiss-inspired layouts.'
              },
              fr: {
                title: '02 / Série Éditoriale — « Trip Asia with Sisters »',
                desc: 'Collection d\'affiches typographiques capturant souvenirs de voyage, chaleur chromatique et composition d\'inspiration suisse.'
              },
              items: [
                {
                  src: './visual_art/trip asia with sisters.png',
                  isTall: true,
                  en: { tag: 'Edition 01', title: 'Volume I — Editorial Cover Poster' },
                  fr: { tag: 'Édition 01', title: 'Volume I — Affiche Éditoriale Couverture' }
                },
                {
                  src: './visual_art/trip asia with sisters (1).png',
                  isTall: true,
                  en: { tag: 'Edition 02', title: 'Volume II — Minimalist Typographic Study' },
                  fr: { tag: 'Édition 02', title: 'Volume II — Étude Typographique Minimaliste' }
                }
              ]
            },
            {
              id: 'brand-identity',
              en: {
                title: '03 / Brand Identity & Visual Explorations',
                desc: 'The Coffee Shop identity system, tactile studio moodboards, and abstract compositional studies.'
              },
              fr: {
                title: '03 / Identité de Marque & Explorations Visuelles',
                desc: 'Système d\'identité The Coffee Shop, moodboard tactile d\'atelier et études de composition abstraites.'
              },
              items: [
                {
                  src: './visual_art/visualart.jpeg',
                  isTall: true,
                  en: { tag: 'Brand Identity', title: 'The Coffee Shop — Editorial Poster Concept' },
                  fr: { tag: 'Identité de Marque', title: 'The Coffee Shop — Affiche Conceptuelle' }
                },
                {
                  src: './visual_art/visualart3.jpg',
                  en: { tag: 'Packaging Design', title: 'Artisan Packaging & Merchandise Concept' },
                  fr: { tag: 'Design Packaging', title: 'Packaging Artisanal & Déclinaisons' }
                },
                {
                  src: './visual_art/visual_art5.png',
                  span2: true,
                  en: { tag: 'Form Study', title: 'Minimalist Layout Composition' },
                  fr: { tag: 'Étude de Forme', title: 'Composition & Équilibre de Formes' }
                }
              ]
            }
          ],
          galleryImages: [
            './visual_art/gallery.png',
            './visual_art/post.png',
            './visual_art/profile.png',
            './visual_art/trip asia with sisters.png',
            './visual_art/trip asia with sisters (1).png',
            './visual_art/visualart.jpeg',
            './visual_art/visualart3.jpg',
            './visual_art/visual_art5.png'
          ],
          en: {
            category: 'Visual Identity & Graphic Design',
            title: 'Visual Art & Digital Communication',
            date: 'Ongoing Creative Works',
            tags: ['Art Direction', 'Color Theory', 'Figma & Canva', 'Visual Identity', 'Social Media'],
            text: `Alongside my technical engineering endeavors, I dedicate substantial creative time to **art direction**, **conceptual poster design** (such as The Coffee Shop branding project), moodboarding, and digital visual communication.

Mastery of **color theory**, palette harmony, and contrast balance guides every composition. I approach color and layout not merely as aesthetic ornaments, but as vital drivers of **visual empathy**, **information hierarchy**, and **emotional human-computer interaction**.`
          },
          fr: {
            category: 'Identité Visuelle & Design Graphique',
            title: 'Art Visuel & Communication Digitale',
            date: 'Créations en continu',
            tags: ['Direction Artistique', 'Théorie des Couleurs', 'Figma & Canva', 'Identité Visuelle', 'Réseaux Sociaux'],
            text: `Parallèlement à mes projets d'ingénierie technique, je consacre une part importante de mon temps créatif à la **direction artistique**, au **design d'affiches conceptuelles** (notamment le projet de branding The Coffee Shop), au moodboarding et à la communication visuelle numérique.

La maîtrise de la **théorie des couleurs**, de l'harmonie des palettes et de l'équilibre des contrastes guide chacune de mes compositions. J'envisage la couleur et la mise en page non comme de simples ornements esthétiques, mais comme des leviers majeurs d'**empathie visuelle**, de **hiérarchie de l'information** et d'**interaction homme-machine émotionnelle**.`
          }
        }
      };

      /* ------------------------------------------------------------------ */
      /* DOM ELEMENTS & RIG SETUP                                           */
      /* ------------------------------------------------------------------ */
      const $ = (s, c = document) => c.querySelector(s);
      const $$ = (s, c = document) => [...c.querySelectorAll(s)];

      const rooms = $$('.room');
      const navDots = $$('.nav-dot');
      const roomIndexEl = $('#room-index');
      const progressBar = $('#progress-bar');
      const drawer = $('#drawer');
      const overlay = $('#drawer-overlay');
      const lightbox = $('#lightbox');
      const lightboxImg = $('#lightbox-img');
      const lightboxClose = $('#lightbox-close');

      const MAX_SCALE = 1.25;
      const WHEEL_SENSITIVITY = 0.0042;
      const OVERSHOOT_LIMIT = 60;

      let current = 0, progress = 0, overshoot = 0;
      let transitioning = false, drawerOpen = false, started = false;
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      /* Fallback handling for missing images */
      $$('img.layer').forEach(img => {
        const hide = () => img.classList.add('is-missing');
        img.addEventListener('error', hide);
        if (img.complete && img.naturalWidth === 0) hide();
      });

      /* GSAP Rig with parallax and dolly zoom */
      const rig = rooms.map(room => {
        const stage = $('.stage', room), bg = $('.bg', room), fore = $('.fore', room), copy = $('.copy', room);
        const qt = (el, prop, d) => el ? gsap.quickTo(el, prop, { duration: d, ease: 'power3.out' }) : null;
        return {
          room, stage, bg, fore, copy,
          bgX: qt(bg, 'x', 0.65), bgY: qt(bg, 'y', 0.65),
          foreX: qt(fore, 'x', 0.5), foreY: qt(fore, 'y', 0.5),
          scaleTo: qt(stage, 'scale', 0.28),
          foreScale: qt(fore, 'scale', 0.28),
          foreOpacity: qt(fore, 'opacity', 0.28)
        };
      });

      const mouse = { x: 0, y: 0 };
      function applyParallax(r) {
        if (reduced) return;
        r.bgX(-mouse.x * 14); r.bgY(-mouse.y * 9);
        if (r.foreX) { r.foreX(-mouse.x * 38); r.foreY(-mouse.y * 22); }
      }

      window.addEventListener('mousemove', e => {
        mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
        mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
        applyParallax(rig[current]);
      });

      function applyDolly(p) {
        const r = rig[current];
        r.scaleTo(1 + (MAX_SCALE - 1) * p);
        if (r.foreScale) { r.foreScale(1 + 0.12 * p); r.foreOpacity(1 - 0.35 * p); }
        gsap.to(r.copy, { opacity: 1 - 0.55 * p, y: -20 * p, duration: 0.22, overwrite: 'auto' });
        gsap.to(progressBar, { width: (p * 100) + '%', duration: 0.18, overwrite: 'auto' });
      }

      /* ------------------------------------------------------------------ */
      /* ROOM TRANSITIONS                                                   */
      /* ------------------------------------------------------------------ */
      function copyIntro(r) {
        const targets = $$('.kicker, .mega span, .r1-name, .r1-formation, .r1-divider, .big, .sub, .lead, .contact a', r.copy);
        gsap.set(r.copy, { opacity: 1, y: 0 });
        gsap.fromTo(targets, { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.32, stagger: 0.025, ease: 'power2.out', delay: 0.04 });
      }

      function updateUI(index) {
        roomIndexEl.textContent = String(index + 1).padStart(2, '0');
        navDots.forEach((d, i) => d.classList.toggle('is-active', i === index));
        try { history.replaceState(null, '', '#room' + (index + 1)); } catch (e) { }
      }

      function goTo(index, instantProgress = 0) {
        if (transitioning || index === current || index < 0 || index >= rooms.length) return;
        if (drawerOpen) closeDrawer();
        transitioning = true;

        const forward = index > current;
        const from = rig[current], to = rig[index];

        gsap.set(to.room, { visibility: 'visible', opacity: 0, zIndex: 2 });
        gsap.set(from.room, { zIndex: 1 });
        gsap.set(to.stage, { scale: forward ? 0.92 : 1.2, x: 0 });
        if (to.fore) gsap.set(to.fore, { scale: 1, opacity: 1 });
        gsap.set(to.copy, { opacity: 0 });

        const tl = gsap.timeline({
          onComplete: () => {
            from.room.classList.remove('is-active');
            gsap.set(from.room, { visibility: 'hidden', opacity: 0, zIndex: 0 });
            gsap.set(from.stage, { scale: 1 });
            if (from.fore) gsap.set(from.fore, { scale: 1, opacity: 1 });
            gsap.set(from.copy, { opacity: 1, y: 0 });
            to.room.classList.add('is-active');
            gsap.set(to.room, { zIndex: 1 });
            current = index; progress = instantProgress; overshoot = 0;
            transitioning = false;
          }
        });

        tl.to(from.stage, { scale: forward ? 1.3 : 0.88, duration: 0.34, ease: 'power2.out' }, 0)
          .to(from.room, { opacity: 0, duration: 0.28, ease: 'power2.inOut' }, 0.03)
          .to(to.room, { opacity: 1, duration: 0.32, ease: 'power2.inOut' }, 0.03)
          .to(to.stage, { scale: 1, duration: 0.36, ease: 'power2.out' }, 0);

        copyIntro(to);
        updateUI(index);
        applyParallax(to);
        gsap.to(progressBar, { width: '0%', duration: 0.2 });
      }

      /* ------------------------------------------------------------------ */
      /* INPUT CONTROLS                                                     */
      /* ------------------------------------------------------------------ */
      function handleDelta(delta) {
        if (!started || transitioning || drawerOpen) return;
        if (delta > 0) {
          if (progress < 1) {
            progress = Math.min(1, progress + delta * WHEEL_SENSITIVITY); overshoot = 0; applyDolly(progress);
          } else if (current < rooms.length - 1) {
            overshoot += delta;
            if (overshoot > OVERSHOOT_LIMIT) goTo(current + 1);
          }
        } else if (delta < 0) {
          if (progress > 0) {
            progress = Math.max(0, progress + delta * WHEEL_SENSITIVITY); overshoot = 0; applyDolly(progress);
          } else if (current > 0) {
            overshoot += delta;
            if (overshoot < -OVERSHOOT_LIMIT) goTo(current - 1, 1);
          }
        }
      }

      window.addEventListener('wheel', e => {
        if (drawerOpen) return;
        e.preventDefault();
        handleDelta(Math.max(-120, Math.min(120, e.deltaY)));
      }, { passive: false });

      window.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
          if (lightbox && lightbox.classList.contains('is-open')) return closeLightbox();
          if (drawerOpen) return closeDrawer();
        }
        if (['ArrowDown', 'PageDown', ' '].includes(e.key)) { e.preventDefault(); handleDelta(OVERSHOOT_LIMIT * 0.7); }
        if (['ArrowUp', 'PageUp'].includes(e.key)) { e.preventDefault(); handleDelta(-OVERSHOOT_LIMIT * 0.7); }
      });

      let touchY = null;
      window.addEventListener('touchstart', e => { touchY = e.touches[0].clientY; }, { passive: true });
      window.addEventListener('touchmove', e => {
        if (touchY === null || drawerOpen) return;
        const y = e.touches[0].clientY;
        handleDelta((touchY - y) * 2.4); touchY = y;
      }, { passive: true });
      window.addEventListener('touchend', () => { touchY = null; });

      $$('[data-goto]').forEach(el => el.addEventListener('click', e => {
        e.preventDefault();
        if (!started) return;
        const i = parseInt(el.dataset.goto, 10);
        if (i === current && progress > 0) { progress = 0; applyDolly(0); return; }
        goTo(i);
      }));

      /* ------------------------------------------------------------------ */
      /* FULLSCREEN LIGHTBOX                                                */
      /* ------------------------------------------------------------------ */
      function openLightbox(src, alt = 'Preview') {
        if (!lightbox || !lightboxImg) return;
        lightboxImg.src = src;
        lightboxImg.alt = alt;
        lightbox.classList.add('is-open');
        lightbox.setAttribute('aria-hidden', 'false');
      }

      function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove('is-open');
        lightbox.setAttribute('aria-hidden', 'true');
      }

      if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
      if (lightbox) {
        lightbox.addEventListener('click', e => {
          if (e.target !== lightboxImg) closeLightbox();
        });
      }

      /* ------------------------------------------------------------------ */
      /* DRAWER SYSTEM (HERO TOP + BOLD TEXT + GALLERY)                     */
      /* ------------------------------------------------------------------ */
      let lastFocus = null;

      function formatDrawerText(text) {
        if (!text) return '';
        const formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        const blocks = formatted.split(/\n\s*\n/);
        return blocks.map(block => {
          block = block.trim();
          if (!block) return '';
          if (block.startsWith('- ')) {
            const items = block.split(/\n-\s*/).map(item => item.replace(/^- /, '').trim()).filter(Boolean);
            return '<ul class="drawer-bullets">' + items.map(li => `<li>${li}</li>`).join('') + '</ul>';
          }
          if (block.endsWith(':')) {
            return `<p class="drawer-subtitle"><strong>${block}</strong></p>`;
          }
          return `<p class="drawer-para">${block}</p>`;
        }).join('');
      }

      function renderImage(container, src, title, isPortrait = false) {
        const wrap = document.createElement('div');
        wrap.className = isPortrait ? 'drawer-hero-img-wrap portrait-wrap' : 'drawer-hero-img-wrap';

        const img = new Image();
        img.alt = title;
        img.addEventListener('error', () => {
          if (src.startsWith('./assets/')) {
            img.src = src.replace('./assets/', './');
            return;
          }
          if (src.startsWith('./Dreamlogue/')) {
            img.src = src.replace('./Dreamlogue/', './assets/');
            return;
          }
          if (src.startsWith('./visual_art/')) {
            img.src = src.replace('./visual_art/', './assets/');
            return;
          }
          const ph = document.createElement('div');
          ph.className = 'ph';
          ph.innerHTML = '<span class="mono">Visual media</span><b></b>';
          $('b', ph).textContent = title;
          wrap.replaceWith(ph);
        });
        img.src = encodeURI(src);
        img.title = 'Click to view fullscreen';
        img.addEventListener('click', () => openLightbox(img.src, title));
        wrap.appendChild(img);
        container.appendChild(wrap);
      }

      function buildCarousel(container, images, title) {
        let activeIndex = 0;
        const wrapper = document.createElement('div');
        wrapper.className = 'drawer-carousel';

        const viewport = document.createElement('div');
        viewport.className = 'carousel-viewport';

        const track = document.createElement('div');
        track.className = 'carousel-track';

        images.forEach((src, idx) => {
          const slide = document.createElement('div');
          slide.className = 'carousel-slide';
          const img = new Image();
          img.alt = `${title} — View ${idx + 1}`;
          img.loading = idx === 0 ? 'eager' : 'lazy';
          img.addEventListener('error', () => {
            if (src.startsWith('./assets/')) {
              img.src = src.replace('./assets/', './');
              return;
            }
            const ph = document.createElement('div');
            ph.className = 'ph';
            ph.innerHTML = '<span class="mono">Preview</span><b></b>';
            $('b', ph).textContent = `${title} (${idx + 1})`;
            slide.replaceChildren(ph);
          });
          img.src = encodeURI(src);
          img.title = 'Click to view fullscreen';
          img.addEventListener('click', () => openLightbox(img.src, `${title} — View ${idx + 1}`));
          slide.appendChild(img);
          track.appendChild(slide);
        });

        viewport.appendChild(track);

        const counter = document.createElement('div');
        counter.className = 'carousel-counter mono';
        counter.innerHTML = `<span class="cur">01</span> / ${String(images.length).padStart(2, '0')}`;
        viewport.appendChild(counter);

        if (images.length > 1) {
          const prevBtn = document.createElement('button');
          prevBtn.className = 'carousel-btn prev';
          prevBtn.setAttribute('aria-label', 'Previous image');
          prevBtn.innerHTML = '‹';

          const nextBtn = document.createElement('button');
          nextBtn.className = 'carousel-btn next';
          nextBtn.setAttribute('aria-label', 'Next image');
          nextBtn.innerHTML = '›';

          viewport.appendChild(prevBtn);
          viewport.appendChild(nextBtn);

          const thumbs = document.createElement('div');
          thumbs.className = 'carousel-thumbs';

          images.forEach((src, idx) => {
            const thumb = document.createElement('button');
            thumb.className = `carousel-thumb ${idx === 0 ? 'is-active' : ''}`;
            thumb.setAttribute('aria-label', `View image ${idx + 1}`);
            const tImg = new Image();
            tImg.alt = `Thumbnail ${idx + 1}`;
            tImg.src = encodeURI(src);
            tImg.addEventListener('error', () => {
              if (src.startsWith('./assets/')) tImg.src = src.replace('./assets/', './');
            });
            thumb.appendChild(tImg);
            thumb.addEventListener('click', () => setSlide(idx));
            thumbs.appendChild(thumb);
          });

          wrapper.appendChild(viewport);
          wrapper.appendChild(thumbs);

          function setSlide(i) {
            activeIndex = (i + images.length) % images.length;
            track.style.transform = `translateX(-${activeIndex * 100}%)`;
            $('.cur', counter).textContent = String(activeIndex + 1).padStart(2, '0');
            $$('.carousel-thumb', thumbs).forEach((tb, idx) => {
              tb.classList.toggle('is-active', idx === activeIndex);
            });
          }

          prevBtn.addEventListener('click', e => { e.stopPropagation(); setSlide(activeIndex - 1); });
          nextBtn.addEventListener('click', e => { e.stopPropagation(); setSlide(activeIndex + 1); });
        } else {
          wrapper.appendChild(viewport);
        }

        container.appendChild(wrapper);
      }

      function buildDrawerMedia(project) {
        const hero = $('#drawer-hero');
        const videoCont = $('#drawer-video-container');
        const gallery = $('#drawer-gallery');
        hero.innerHTML = '';
        videoCont.innerHTML = '';
        gallery.innerHTML = '';

        const projectTitle = (project[currentLang] && project[currentLang].title) || (project.en && project.en.title) || project.title || '';

        // 1. VIDEO AS HERO (TOP OF DRAWER, e.g. Dreamlogue)
        if (project.heroVideo && project.video) {
          const vWrap = document.createElement('div');
          vWrap.className = 'drawer-video-wrap drawer-hero-video-wrap';
          vWrap.style.marginTop = '0';
          vWrap.style.marginBottom = '1.8rem';
          const altVideo = project.video.startsWith('./Dreamlogue/')
            ? project.video.replace('./Dreamlogue/', './assets/')
            : project.video.replace('./assets/', './Dreamlogue/');
          vWrap.innerHTML = `
            <video class="drawer-video" controls playsinline preload="metadata">
              <source src="${project.video}" type="video/mp4">
              <source src="${altVideo}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          `;
          hero.appendChild(vWrap);
        }
        // 2. CAROUSEL TOP (e.g. 3 screens for Officience)
        else if (project.carousel && project.topImages && project.topImages.length > 0) {
          buildCarousel(hero, project.topImages, projectTitle);
        }
        // 3. SINGLE HERO IMAGE TOP (Always on top for each project)
        else if (project.images && project.images.length > 0) {
          renderImage(hero, project.images[0], projectTitle, !!project.portrait);
        }

        // 4. OPTIONAL EMBEDDED VIDEO (FOR NON-HERO VIDEO PROJECTS, e.g. Flowper)
        if (project.video && !project.heroVideo) {
          const vWrap = document.createElement('div');
          vWrap.className = 'drawer-video-wrap';
          const altVideo = project.video.startsWith('./Dreamlogue/')
            ? project.video.replace('./Dreamlogue/', './assets/')
            : project.video.replace('./assets/', './Dreamlogue/');
          vWrap.innerHTML = `
            <video class="drawer-video" controls playsinline preload="metadata" poster="${project.images && project.images[0] ? project.images[0] : ''}">
              <source src="${project.video}" type="video/mp4">
              <source src="${altVideo}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          `;
          videoCont.appendChild(vWrap);
        }

        // 4. SECONDARY GALLERY BELOW TEXT WITH ALL PROJECT VISUALS
        if (project.galleryGroups && project.galleryGroups.length > 0) {
          const cap = document.createElement('div');
          cap.className = 'gallery-caption mono';
          cap.textContent = (I18N[currentLang] || I18N.en).galleryCaption;
          gallery.appendChild(cap);

          project.galleryGroups.forEach(group => {
            const grpEl = document.createElement('div');
            grpEl.className = 'gallery-group';

            const gData = group[currentLang] || group.en || group;
            const groupTitle = gData.title || '';
            const groupDesc = gData.desc || '';

            const headerEl = document.createElement('div');
            headerEl.className = 'gallery-group-header';
            headerEl.innerHTML = `
              <div class="gallery-group-title">
                <span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:#8a6a3d;"></span>
                <span>${groupTitle}</span>
              </div>
              ${groupDesc ? `<p class="gallery-group-desc">${groupDesc}</p>` : ''}
            `;
            grpEl.appendChild(headerEl);

            const gridEl = document.createElement('div');
            gridEl.className = 'gallery-group-grid';

            (group.items || []).forEach(item => {
              const card = document.createElement('div');
              card.className = 'gallery-card' + (item.span2 ? ' span-2' : '') + (item.isTall ? ' is-tall' : '');
              card.tabIndex = 0;
              card.setAttribute('role', 'button');

              const itmData = item[currentLang] || item.en || item;
              const itemTitle = itmData.title || projectTitle;
              const itemTag = itmData.tag || '';

              card.setAttribute('aria-label', itemTitle);
              card.title = itemTitle;

              const imgWrap = document.createElement('div');
              imgWrap.className = 'gallery-card-img-wrap';

              const img = new Image();
              img.alt = itemTitle;
              img.loading = 'lazy';
              const src = item.src;
              img.addEventListener('error', () => {
                if (src.startsWith('./assets/')) img.src = src.replace('./assets/', './');
                if (src.startsWith('./Dreamlogue/')) img.src = src.replace('./Dreamlogue/', './assets/');
                if (src.startsWith('./visual_art/')) img.src = src.replace('./visual_art/', './assets/');
              });
              img.src = encodeURI(src);

              const zoomHint = document.createElement('div');
              zoomHint.className = 'gallery-card-zoom-hint';
              zoomHint.innerHTML = '⤢';

              imgWrap.appendChild(img);
              imgWrap.appendChild(zoomHint);
              card.appendChild(imgWrap);

              if (itemTag || itemTitle) {
                const footer = document.createElement('div');
                footer.className = 'gallery-card-footer';
                if (itemTag) {
                  const tagEl = document.createElement('span');
                  tagEl.className = 'gallery-card-tag';
                  tagEl.textContent = itemTag;
                  footer.appendChild(tagEl);
                }
                if (itemTitle) {
                  const tEl = document.createElement('span');
                  tEl.className = 'gallery-card-title';
                  tEl.textContent = itemTitle;
                  footer.appendChild(tEl);
                }
                card.appendChild(footer);
              }

              const handleOpen = () => openLightbox(img.src, itemTitle);
              card.addEventListener('click', handleOpen);
              card.addEventListener('keydown', e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpen();
                }
              });

              gridEl.appendChild(card);
            });

            grpEl.appendChild(gridEl);
            gallery.appendChild(grpEl);
          });
        } else {
          const galleryImgs = project.galleryImages || (project.images && project.images.length > 1 ? project.images.slice(1) : []);
          if (galleryImgs && galleryImgs.length > 0) {
            const cap = document.createElement('div');
            cap.className = 'gallery-caption mono';
            cap.textContent = (I18N[currentLang] || I18N.en).galleryCaption;
            gallery.appendChild(cap);

            galleryImgs.forEach(src => {
              const wrap = document.createElement('div');
              wrap.className = 'gallery-img-wrap';

              const img = new Image();
              img.alt = projectTitle;
              img.loading = 'lazy';
              img.addEventListener('error', () => {
                if (src.startsWith('./assets/')) img.src = src.replace('./assets/', './');
                if (src.startsWith('./Dreamlogue/')) img.src = src.replace('./Dreamlogue/', './assets/');
                if (src.startsWith('./visual_art/')) img.src = src.replace('./visual_art/', './assets/');
              });
              img.src = encodeURI(src);
              img.title = 'Click to view fullscreen';
              img.addEventListener('click', () => openLightbox(img.src, projectTitle));

              wrap.appendChild(img);
              gallery.appendChild(wrap);
            });
          }
        }
      }

      let activeProjectKey = null;

      function renderDrawerContent(key) {
        const project = PROJECTS[key];
        if (!project) return;
        const p = project[currentLang] || project.en || project;

        // Category Badge
        const catEl = $('#drawer-category');
        if (catEl) {
          catEl.textContent = p.category || '';
          catEl.style.display = p.category ? 'inline-block' : 'none';
        }

        // Subtitle / Date
        const dateEl = $('#drawer-date');
        dateEl.textContent = p.date || '';
        dateEl.style.display = p.date ? '' : 'none';

        // Title
        $('#drawer-title').textContent = p.title || '';

        // Tags
        const tags = $('#drawer-tags');
        tags.innerHTML = '';
        (p.tags || []).forEach(t => {
          const li = document.createElement('li');
          li.textContent = t;
          tags.appendChild(li);
        });

        // Formatted description with bold keywords
        const textContainer = $('#drawer-text');
        textContainer.innerHTML = formatDrawerText(p.text);

        // Optional documentation or portfolio document link
        const docCont = $('#drawer-doc-container');
        if (docCont) {
          docCont.innerHTML = '';
          const pdf = p.pdf || project.pdf;
          if (pdf) {
            const a = document.createElement('a');
            a.className = 'drawer-doc-link';
            a.href = encodeURI(pdf.url);
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.innerHTML = `<span>📄</span><span>${pdf.label}</span>`;
            docCont.appendChild(a);
          }
        }

        // Gallery caption
        const cap = $('.gallery-caption', $('#drawer-gallery'));
        if (cap) {
          cap.textContent = (I18N[currentLang] || I18N.en).galleryCaption;
        }
      }

      function openDrawer(key, trigger) {
        const project = PROJECTS[key];
        if (!project) return;
        activeProjectKey = key;
        lastFocus = trigger || null;

        renderDrawerContent(key);
        buildDrawerMedia(project);

        $('#drawer-scroll').scrollTop = 0;

        drawerOpen = true;
        drawer.classList.add('is-open');
        overlay.classList.add('is-open');
        drawer.setAttribute('aria-hidden', 'false');

        gsap.fromTo('#drawer-scroll > *', { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.35, stagger: 0.035, ease: 'power2.out', delay: 0.08 });

        $('#drawer-close').focus({ preventScroll: true });
        gsap.to(rig[current].stage, { x: -24, duration: 0.4, ease: 'power2.out' });
      }

      function applyLanguage(lang) {
        currentLang = lang;
        try { localStorage.setItem('portfolio_lang', lang); } catch (e) {}
        document.documentElement.lang = lang;

        const t = I18N[lang] || I18N.en;

        // Language toggle buttons
        $$('.lang-btn').forEach(btn => {
          const isActive = btn.dataset.lang === lang;
          btn.classList.toggle('is-active', isActive);
          btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });

        // Top navigation
        const navTitle = $('.nav-title');
        if (navTitle) navTitle.textContent = t.navTitle;
        const nr1 = $('#nav-room1'); if (nr1) nr1.textContent = t.navRoom1;
        const nr2 = $('#nav-room2'); if (nr2) nr2.textContent = t.navRoom2;
        const nr3 = $('#nav-room3'); if (nr3) nr3.textContent = t.navRoom3;
        const nr4 = $('#nav-room4'); if (nr4) nr4.textContent = t.navRoom4;
        const nr5 = $('#nav-room5'); if (nr5) nr5.textContent = t.navRoom5;

        // Bottom scroll hint
        const scrollHint = $('.scroll-hint');
        if (scrollHint) scrollHint.innerHTML = `<span class="line"></span>${t.scrollHint}`;

        // Drawer close button
        const drawerClose = $('#drawer-close');
        if (drawerClose) drawerClose.textContent = t.drawerClose;

        // Room 1
        const r1L = $('.r1-label.l'); if (r1L) r1L.textContent = t.r1LabelL;
        const r1R = $('.r1-label.r'); if (r1R) r1R.textContent = t.r1LabelR;
        const r1S = $('.r1-side'); if (r1S) r1S.textContent = t.r1Side;
        const r1Form = $('.r1-formation'); if (r1Form) r1Form.innerHTML = t.r1Formation;
        const r1Lead = $('.r1-block .lead'); if (r1Lead) r1Lead.textContent = t.r1Lead;
        const hAbout = $('#hotspot-about');
        if (hAbout) {
          const a = $('.badge-action', hAbout); if (a) a.textContent = t.hotspotAboutAction;
          const b = $('.badge-text', hAbout); if (b) b.textContent = t.hotspotAboutText;
        }

        // Room 2
        const r2 = $('#room2');
        if (r2) {
          const k = $('.kicker', r2); if (k) k.textContent = t.r2Kicker;
          const b = $('.big', r2); if (b) b.innerHTML = t.r2Title;
          const s = $('.sub', r2); if (s) s.innerHTML = t.r2Sub;
        }
        const hOff = $('#hotspot-officience');
        if (hOff) {
          const a = $('.badge-action', hOff); if (a) a.textContent = t.hotspotOfficienceAction;
          const b = $('.badge-text', hOff); if (b) b.textContent = t.hotspotOfficienceText;
        }

        // Room 3
        const r3 = $('#room3');
        if (r3) {
          const k = $('.kicker', r3); if (k) k.innerHTML = t.r3Kicker;
          const b = $('.big', r3); if (b) b.innerHTML = t.r3Title;
          const s = $('.sub', r3); if (s) s.innerHTML = t.r3Sub;
        }
        const hDream = $('#hotspot-dreamlogue');
        if (hDream) {
          const a = $('.badge-action', hDream); if (a) a.textContent = t.hotspotDreamlogueAction;
          const b = $('.badge-text', hDream); if (b) b.textContent = t.hotspotDreamlogueText;
        }
        const hHtmma = $('#hotspot-htmma');
        if (hHtmma) {
          const a = $('.badge-action', hHtmma); if (a) a.textContent = t.hotspotHtmmaAction;
          const b = $('.badge-text', hHtmma); if (b) b.textContent = t.hotspotHtmmaText;
        }
        const hPaste = $('#hotspot-pastescraper');
        if (hPaste) {
          const a = $('.badge-action', hPaste); if (a) a.textContent = t.hotspotPastescraperAction;
          const b = $('.badge-text', hPaste); if (b) b.textContent = t.hotspotPastescraperText;
        }

        // Room 4
        const r4 = $('#room4');
        if (r4) {
          const k = $('.kicker', r4); if (k) k.innerHTML = t.r4Kicker;
          const b = $('.big', r4); if (b) b.innerHTML = t.r4Title;
          const s = $('.sub', r4); if (s) s.innerHTML = t.r4Sub;
        }
        const hUnity = $('#hotspot-unity');
        if (hUnity) {
          const a = $('.badge-action', hUnity); if (a) a.textContent = t.hotspotUnityAction;
          const b = $('.badge-text', hUnity); if (b) b.textContent = t.hotspotUnityText;
        }
        const hFlowper = $('#hotspot-flowper');
        if (hFlowper) {
          const a = $('.badge-action', hFlowper); if (a) a.textContent = t.hotspotFlowperAction;
          const b = $('.badge-text', hFlowper); if (b) b.textContent = t.hotspotFlowperText;
        }
        const hVis = $('#hotspot-visualart');
        if (hVis) {
          const a = $('.badge-action', hVis); if (a) a.textContent = t.hotspotVisualartAction;
          const b = $('.badge-text', hVis); if (b) b.textContent = t.hotspotVisualartText;
        }

        // Room 5
        const r5 = $('#room5');
        if (r5) {
          const k = $('.kicker', r5); if (k) k.innerHTML = t.r5Kicker;
          const b = $('.big', r5); if (b) b.innerHTML = t.r5Title;
          const s = $('.sub', r5); if (s) s.innerHTML = t.r5Sub;
        }
        const cEmail = $('#contact-email');
        if (cEmail) {
          const m = $('.mono', cEmail); if (m) m.textContent = t.contactEmailMono;
        }
        const cLinkedin = $('#contact-linkedin');
        if (cLinkedin) {
          const m = $('.mono', cLinkedin); if (m) m.textContent = t.contactLinkedinMono;
        }
        const cCv = $('#contact-cv');
        if (cCv) {
          cCv.innerHTML = `<span class="mono">${t.contactCvMono}</span>${t.contactCvText}`;
        }

        // If drawer is currently open, refresh drawer texts and media
        if (drawerOpen && activeProjectKey) {
          renderDrawerContent(activeProjectKey);
          buildDrawerMedia(PROJECTS[activeProjectKey]);
        }
      }

      function closeDrawer() {
        drawerOpen = false;
        drawer.classList.remove('is-open');
        overlay.classList.remove('is-open');
        drawer.setAttribute('aria-hidden', 'true');

        // Pause any playing video when closing drawer
        $$('#drawer video').forEach(v => v.pause());

        gsap.to(rig[current].stage, { x: 0, duration: 0.38, ease: 'power2.out' });
        if (lastFocus) lastFocus.focus({ preventScroll: true });
      }

      // Event listeners for hotspots & drawers
      $$('.hotspot').forEach(h => h.addEventListener('click', () => openDrawer(h.dataset.project, h)));
      $('#drawer-close').addEventListener('click', closeDrawer);
      overlay.addEventListener('click', closeDrawer);

      // Event listeners for language switcher
      $$('.lang-btn').forEach(btn => {
        btn.addEventListener('click', e => {
          e.preventDefault();
          e.stopPropagation();
          const lang = btn.dataset.lang;
          if (lang && lang !== currentLang) {
            applyLanguage(lang);
          }
        });
      });

      /* ------------------------------------------------------------------ */
      /* INITIALIZATION & LOADER                                            */
      /* ------------------------------------------------------------------ */
      function init() {
        applyLanguage(currentLang);

        const m = location.hash.match(/room(\d)/);
        const n = m ? parseInt(m[1], 10) : 1;
        const startIndex = n >= 1 && n <= rooms.length ? n - 1 : 0;
        current = startIndex;

        rooms.forEach((r, i) => {
          r.classList.toggle('is-active', i === startIndex);
          gsap.set(r, { opacity: i === startIndex ? 1 : 0, visibility: i === startIndex ? 'visible' : 'hidden' });
        });
        updateUI(startIndex);

        const counter = { v: 0 };
        const countEl = $('#loader-count');
        gsap.to(counter, {
          v: 100, duration: 1.4, ease: 'power2.inOut',
          onUpdate: () => { countEl.textContent = String(Math.round(counter.v)).padStart(3, '0'); },
          onComplete: () => {
            gsap.to('#loader', { yPercent: -100, duration: 0.95, ease: 'power4.inOut', onComplete: () => $('#loader').remove() });
            gsap.from(rig[current].stage, { scale: 1.3, duration: 1.6, ease: 'power3.out', delay: 0.2 });
            copyIntro(rig[current]);
            gsap.from('.ui', { opacity: 0, duration: 1, delay: 0.8, stagger: 0.1 });
            started = true;
          }
        });
      }

      if (typeof gsap === 'undefined') {
        const l = $('#loader'); if (l) l.remove();
        applyLanguage(currentLang);
        rooms[0].classList.add('is-active');
      } else {
        init();
      }
    })();
