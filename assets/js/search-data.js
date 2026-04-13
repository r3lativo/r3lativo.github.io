// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-started-my-research-internship-at-articulab-within-the-almanach-team-at-inria-paris",
          title: 'Started my research internship at ArticuLab within the ALMAnaCH team at Inria Paris....',
          description: "",
          section: "News",},{id: "news-continued-at-articulab-to-write-my-master-s-thesis-on-situated-dialogue-and-common-ground",
          title: 'Continued at ArticuLab to write my Master’s thesis on situated dialogue and common...',
          description: "",
          section: "News",},{id: "news-marika-is-presenting-our-work-mllms-construction-company-at-clic-it-2025-in-cagliari",
          title: 'Marika is presenting our work MLLMs Construction Company at CLiC-iT 2025 in Cagliari!...',
          description: "",
          section: "News",},{id: "news-graduated-with-a-master-s-degree-in-cognitive-science-from-cimec-university-of-trento",
          title: 'Graduated with a Master’s degree in Cognitive Science from CIMeC, University of Trento!...',
          description: "",
          section: "News",},{id: "news-joined-almanach-at-inria-paris-as-a-research-engineer-working-with-djamé-seddah-on-computational-propaganda",
          title: 'Joined ALMAnaCH at Inria Paris as a Research Engineer, working with Djamé Seddah...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
