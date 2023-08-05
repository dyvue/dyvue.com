const data = [
  {
    name: "Cek Hoax",
    release: "2023 Jul",
    technologies: ["Vuejs"],
    description: "Frontend developer",
    link: "https://cekhoax.id",
    screenshoot: "cek-hoax.jpg",
    category: {
      name: "Vue PWA (Progresive Web Application)"
    }
  },
  {
    name: "Cuwit",
    release: "2023 Jan",
    technologies: ["Flutter"],
    description: "",
    link: "https://github.com/dyvue/cuwit",
    screenshoot: "cuwit.jpg",
    category: {
      name: "Flutter Opensource Social Media"
    }
  },
  {
    name: "metalogika.de",
    release: "2023 Jan",
    technologies: ["Laravel"],
    description: "",
    link: null,
    screenshoot: "metalogika.jpg",
    category: {
      name: "Laravel Company Profile"
    }
  },
  {
    name: "Business Indonesia",
    release: "2022 Jul",
    technologies: ["Laravel"],
    description: "Business-Indonesia’s purpose is to ​promote business in and with Indonesia, by providing information, connecting companies and developing partnerships.",
    link: null,
    screenshoot: "business-indonesia.jpg",
    category: {
      name: "Laravel Web Application"
    }
  },
  {
    name: "EPR Indonesia",
    release: "2022 Apr",
    technologies: ["Laravel"],
    description: "One-stop-shop platform for all EPR-related information in Indonesia",
    link: null,
    screenshoot: "epr-indonesia.jpg",
    category: {
      name: "Laravel Web Application"
    }
  },
  {
    name: "Education Indonesia",
    release: "2021 Jul",
    technologies: ["Laravel"],
    description: "Education Indonesia is a brand of German-Indonesian Chamber of Industry and Commerce",
    link: null,
    screenshoot: "education-indonesia.jpg",
    category: {
      name: "Laravel Web Application"
    }
  },
  {
    name: "Hermina Risk Management",
    release: "2021 Jun",
    technologies: ["Nuxtjs", "Nodejs", "Go", "AWS"],
    description: "Hospital risk management applications with good architecture.",
    link: null,
    screenshoot: "risk-management-hermina.jpg",
    category: {
      name: "Nuxt PWA (Progresive Web Application), Go, Node.js"
    }
  },
  {
    name: "Uang Kerja",
    release: "2021 Jul",
    technologies: ["Nuxtjs"],
    description: "Platform edukasi keuangan untuk Zillennials.",
    link: "https://www.uangkerja.id",
    screenshoot: "uang-kerja.png",
    category: {
      name: "Vue PWA (Progresive Web Application)"
    }
  },
  {
    name: "Mangan",
    release: "2023 Jun",
    technologies: ["Vuejs"],
    description: "Laravel developer",
    link: "https://github.com/dyvue/wp2_mangan",
    screenshoot: "mangan.jpg",
    category: {
      name: "Codeigniter 4 Web Application"
    }
  },
  {
    name: "Vicare",
    release: "2021 Mar",
    technologies: ["Tailwind CSS"],
    description: "Virtual healthcare for you",
    link: "https://github.com/dyvue/vicare",
    screenshoot: "vicare.jpg",
    category: {
      name: "HTML Web Template"
    }
  },
  {
    name: "INDOHP Rekber",
    release: "2020 Dec",
    technologies: ["Nuxtjs"],
    description: "INDOHP Rekber",
    link: "https://indohp.org",
    screenshoot: "indohp-rekber.png",
    category: {
      name: "Laravel Web Application"
    }
  },
  {
    name: "INDOHP Katalog",
    release: "2020 Nov",
    technologies: ["Nuxtjs"],
    description: "INDOHP Katalog",
    link: "https://katalog.indohp.co.id",
    screenshoot: "product-catalog.jpg",
    category: {
      name: "Laravel Web Application"
    }
  },
  {
    name: "Nabila",
    release: "2019 July",
    technologies: ["Private School Project"],
    description:
      "Artificial Intelligence, Speech Recognition",
    link: "https://github.com/dyvue/romadhanedy.my.id/blob/main/assets/video/nabila.mp4?raw=true",
    screenshoot: "nabila.png",
    category: {
      name: "Vanilla Javascript Voice Assistant, Integrated with raspberrypi"
    }
  },
  {
    name: "Seni Indonesia",
    release: "2019 July",
    technologies: ["Cordova", "Sqlite"],
    description:
      "Seni Indonesia (Lomba Aplikasi Mobile Ki Hajar 2019 - Kemendikbud)",
    link: "https://www.youtube.com/watch?v=vh422u6T-PY",
    screenshoot: "seni-indonesia.jpg",
    category: {
      name: "Android Application"
    }
  },
  {
    name: "Dychord",
    release: "2020 Mar",
    technologies: ["Cordova", "Sqlite"],
    description: "Guitar chord app",
    link: "https://github.com/dyvue/dychord",
    screenshoot: "dychord.jpg",
    category: {
      name: "Android Application"
    }
  },
  {
    name: "Dyresto",
    release: "2020 Feb",
    technologies: ["Laravel", "Mysql"],
    description: "Restaurant cashier app",
    link: "https://github.com/dyvue/dyresto",
    screenshoot: "dyresto.jpg",
    category: {
      name: "Laravel Web Application"
    }
  },
  {
    name: "Dygoo",
    release: "2020 Oct",
    technologies: ["Nuxtjs", "Nodejs", "Socketio"],
    description: "Chat App",
    link: "https://dygoo.netlify.app",
    screenshoot: "dygoo.jpg",
    category: {
      name: "Nuxt PWA (Progresive Web Application), chat app using redis"
    }
  },
  {
    name: "Dyposten",
    release: "2019 Nov",
    technologies: ["Laravel", "Mysql"],
    description: "Point of sale (LSP SMKN 10 Jakarta)",
    link: "https://github.com/dyvue/dyposten",
    screenshoot: "dyposten.jpg",
    category: {
      name: "Laravel Web Application"
    }
  },
  {
    name: "Disposisi",
    release: "2019 Mar",
    technologies: ["PHP", "Mysql"],
    description: "BNPB Indonesia - Aplikasi Disposisi",
    link: "https://github.com/dyvue/bnpb-disposisi",
    screenshoot: "disposisi.jpg",
    category: {
      name: "PHP Native Web Application"
    }
  },
  {
    category_id: 1,
    name: "Bantuan BPBD",
    release: "2019 Feb",
    technologies: ["Laravel", "Mysql"],
    description: "BNPB Indonesia - Aplikasi Pendataan Bantuan BPBD",
    link: "https://github.com/dyvue/bnpb-bantuan-bpbd",
    screenshoot: "bantuan-bpbd.jpg",
    category: {
      name: "Laravel Web Application"
    }
  },
  {
    name: "Realisasi Anggaran",
    release: "2019 Jan",
    technologies: ["Laravel", "Mysql"],
    description: "BNPB Indonesia - Aplikasi Realiasasi Anggaran",
    link: "https://github.com/dyvue/bnpb-realisasi-anggaran",
    screenshoot: "realisasi-anggaran.jpg",
    category: {
      name: "Laravel Web Application"
    }
  },
  // {
  //   name: "Vista Sastra",
  //   release: "2020 Mar",
  //   technologies: ["Laravel", "Mysql"],
  //   description:
  //     "Badan Pengembangan dan Pembinaan Bahasa - Artist Gallery (Literature)",
  //   link: null,
  //   screenshoot: "vista-sastra.jpg",
  //   category: {
  //     name: "Laravel Web Application"
  //   }
  // },
  // {
  //   name: "Netrans",
  //   release: "2020 May",
  //   technologies: ["Laravel", "Mysql"],
  //   description: "Netrans Admin Application",
  //   link: null,
  //   screenshoot: "netrans.jpg",
  //   category: {
  //     name: "Laravel Web Application"
  //   }
  // },
  // {
  //   name: "INDOHP Task Report",
  //   release: "2020 Jun",
  //   technologies: ["Laravel", "Mysql"],
  //   description: "INDOHP Task Report Application",
  //   link: "https://gitlab.com/dyvue/indohptaskreport",
  //   screenshoot: "indohp-taskreport.jpg",
  //   category: {
  //     name: "Laravel Web Application"
  //   }
  // },
  // {
  //   name: "Digitoys API",
  //   release: "2020 Aug",
  //   technologies: ["Lumen", "Mysql"],
  //   description: "Digitoys API",
  //   link: null,
  //   screenshoot: "digitoys.jpg",
  //   category: {
  //     name: "Lumen Backend API"
  //   }
  // }
]

export default data
