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
        },{id: "nav-projects",
          title: "projects",
          description: "A selection of research and course projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "news-started-my-research-internship-at-articulab-within-the-almanach-team-at-inria-paris",
          title: 'Started my research internship at ArticuLab within the ALMAnaCH team at Inria Paris!...',
          description: "",
          section: "News",},{id: "news-continued-at-articulab-to-write-my-master-s-thesis-on-situated-dialogue-and-common-ground",
          title: 'Continued at ArticuLab to write my Master’s thesis on situated dialogue and common...',
          description: "",
          section: "News",},{id: "news-marika-is-presenting-our-work-mllms-construction-company-at-clic-it-2025-in-cagliari",
          title: 'Marika is presenting our work MLLMs Construction Company at CLiC-iT 2025 in Cagliari!...',
          description: "",
          section: "News",},{id: "news-graduated-with-a-master-39-s-degree-in-cognitive-science-from-cimec-university-of-trento",
          title: 'Graduated with a Master&amp;#39;s degree in Cognitive Science from CIMeC, University of Trento!...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_4/";
            },},{id: "news-re-joined-almanach-as-a-research-engineer-working-with-djamé-seddah",
          title: 'Re-joined ALMAnaCH as a Research Engineer, working with Djamé Seddah.',
          description: "",
          section: "News",},{id: "projects-fedx-mod",
          title: 'FedX-mod',
          description: "Federated learning with SimSiam as a lightweight alternative to contrastive methods, evaluated on CIFAR-10 and SVHN.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fedx-mod/";
            },},{id: "projects-fine-tuning-llms",
          title: 'Fine-tuning LLMs',
          description: "Fine-tuning large language models for NLP tasks using standard fine-tuning, LoRA, and quantization.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fine-tuning-llms/";
            },},{id: "projects-mllms-construction-company",
          title: 'MLLMs Construction Company',
          description: "Investigating multimodal LLMs&#39; communicative skills in a collaborative building task.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mllms-construction-company/";
            },},{id: "projects-neural-network-from-scratch",
          title: 'Neural Network from Scratch',
          description: "Reimplementing a neural network from scratch in Python to build a hands-on understanding of backpropagation and training dynamics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nn-experiment/";
            },},{id: "projects-synth4indiref",
          title: 'synth4indiref',
          description: "Synthesize NL dialogues from algorithmically generated complex scenarios to create challenging comprehension questions.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/synth4indiref/";
            },},{
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
