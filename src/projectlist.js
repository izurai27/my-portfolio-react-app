import dailyrecipe from './images/mockupdailyrecipe.png'
import rockpaperscissor from './images/mockuprockpaper.png'
import restcountriesapi from './images/mockupwhereintheworld.png'
import danasyariah from './images/mockupdanasyariah.png'
// import faq from './images/FAQAccordionCard.png'
// import chatApp from './images/chat-app.png'

const projectlist = [
  {   id: 'project1', 
      name: 'daily Recipe',
      description: 'a website that collects recipes from Youtube',
      preview: dailyrecipe,
      techUsed:['https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433',
        "fa-brands fa-node", 'faAxios', 'faMongoDb' , 'faFirebase'],
      link:'https://dailyrecipeapp.netlify.app/',
      color:'#e45c29',
      fontcolor:'white',
      buttoncolor: '#fa7c4d'
  },
  {   id: 'project4', 
      name: 'Dana Syariah',
      description: 'a simple landing page for financial institution',
      preview: danasyariah,
      techUsed:['faReact',  'faExpress', 'faNodejs', 'faAxios', 'faMongoDb' , 'faFirebase'],
      link:'https://dana-syariah.netlify.app/',
      color:'#0ac974',
      fontcolor:'white',
      buttoncolor:"#0dd57c"   
  },
  {   id: 'project3', 
      name: 'rest countries api',
      description: 'frontendmentor.io challenge to build out Rock, Paper, Scissors game and get it looking as close to the design as possible',
      preview: restcountriesapi,
      techUsed:['faReact',  'faExpress', 'faNodejs', 'faAxios', 'faMongoDb' , 'faFirebase'],
      link:'https://izurai27.github.io/rest-countries-api-with-color-theme-switcher-master/' ,
      color:'#01529b',
      fontcolor:'white',
      buttoncolor: '#1065b1'
  },
  {   id: 'project2', 
      name: 'Rock Paper Scissor',
      description: 'frontendmentor.io challenge challenge is to integrate with the [REST Countries V2 API] to pull country data and display it like in the designs',
      preview: rockpaperscissor,
      techUsed:['faReact',  'faExpress', 'faNodejs', 'faAxios', 'faMongoDb' , 'faFirebase'],
      link:'https://izurai27.github.io/rock-paper-scissors/',
      color:'#db3e5b',
      fontcolor:'white'  ,
      buttoncolor:'#fa6682'
  },
//   {   id: 'project5', 
//       name: 'Frontendmentor-faq-accordion-card-main',
//       description: 'Challenge dari frontendmentor.io',
//       preview: faq,
//       techUsed:'html, sass, javascript',
//       link:'https://izurai27.github.io/Frontendmentor-faq-accordion-card-main/' ,
//       color:'#ddc913' 
//   },
//   {   id: 'project6', 
//       name: 'chat-app-css-illustration-master',
//       description: 'Challenge dari frontendmentor.io',
//       preview: chatApp,
//       techUsed:'html, sass, javascript',
//       link:'https://izurai27.github.io/chat-app-css-illustration-master/' ,
//       color:'#ddc913' 
//   },
  
  
]

export default projectlist