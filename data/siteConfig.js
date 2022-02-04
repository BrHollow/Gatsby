module.exports = {
  siteTitle: 'Meu Portifólio',
  siteDescription: `Create your online curriculum in just a few minutes with this starter`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Francisco Santos',
  twitterUsername: '_franciscodf',
  githubUsername: 'santosfrancisco',
  authorAvatar: '/images/myperfil.jpeg',
  authorDescription: ` Formado em Técnico em informática (Pós-medio) pela EEEP Doutor Salomão Alves de Moura e 
  atualmente cursando Ciência da Computação na Universidade Federal do Ceará. Ex-Bolsista do núcleo de apoio do INOVE Quixadá e 
  atual participante da Startup <i>Code Reader</i> ex concorrente dos corredores digitais. Atualmente meu foco de área de estudo é
  desenvolvimento de sistemas web (foco em front-end) e tenho afinidade com a área de empreendedorismo.`,
  skills: [
    {
      name: 'HTML',
      level: 100
    },
    {
      name: 'CSS',
      level: 100
    },
    {
      name: 'Javascript',
      level: 100
    },
    {
      name: 'NodeJs',
      level: 100
    },
    {
      name: 'React',
      level: 100
    },
    {
      name: 'Git',
      level: 100
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: "Gympass",
      begin: {
        month: 'sep',
        year: '2019'
      },
      duration: null,
      occupation: "Frontend developer",
      description: "I am part of the Corporate team, responsible for the development and maintenance of the employee management platform, giving more and more autonomy to partner companies."
  
    },  {
      company: "Lendico",
      begin: {
        month: 'apr',
        year: '2018'
      },
      duration: null,
      occupation: "Frontend developer",
      description: "I integrate the Frontend team responsible for developing and maintaining the online lending platform."
  
    }, {
      company: "Anapro",
      begin: {
        month: 'dec',
        year: '2016'
      },
      duration: '1 yr e 5 mos',
      occupation: "Fullstack developer",
      description: "Development and maintenance, corrective and preventive, of web applications for the real estate market."
    }, {
      company: "Anapro",
      begin: {
        month: 'set',
        year: '2012'
      },
      duration: '4 yrs e 3 mos',
      occupation: "Support Technician",
      description: "Responsible for the implementation and parameterization of the system, training and customer support. Acting also in person in real estate launches guaranteeing the success and good use of the tool."
  
    },
  ],
  portifolio: [
    {
      image: "/images/gatsby-starter-cv.png",
      description: "Gatsby starter CV template",
      url: "https://www.gatsbyjs.org/starters/santosfrancisco/gatsby-starter-cv/"
    },
    {
      image: "/images/awesome-grid.png",
      description: "Responsive grid for ReactJS",
      url: "https://github.com/santosfrancisco/react-awesome-styled-grid"
    },
    /* more portifolio items here */
  ],
  social: {
    twitter: "https://twitter.com/_franciscodf",
    linkedin: "https://www.linkedin.com/in/santos-francisco",
    github: "https://github.com/santosfrancisco",
    email: "yoshi.df@gmail.com"
  },
  siteUrl: 'https://santosfrancisco.github.io/gatsbystarter-cv',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portifolio',
      url: '/portifolio',
    }
  ]
}