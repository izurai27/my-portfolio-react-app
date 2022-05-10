import dailyrecipe from './images/mockupdailyrecipe.png'
import rockpaperscissor from './images/mockuprockpaper.png'
import restcountriesapi from './images/restcountriesapi.png'
import danasyariah from './images/mockupdanasyariah copy.png'
import faq from './images/FAQAccordionCard.png'
import chatApp from './images/chat-app.png'

const projectlist = [
  {   id: 'project1', 
      name: 'daily Recipe',
      description: 'Aplikasi untuk mencari resep dan membuat daftar belanja bahan makanan dari resep tersebut',
      preview: dailyrecipe,
      techUsed:'reactjs, express, nodejs, axios, mongoDb Atlas, firebase',
      link:'https://dailyrecipeapp.netlify.app/',
      color:'#e45c29',
      fontcolor:'white' 
  },
  {   id: 'project4', 
      name: 'Landing Page Dana Syariah',
      description: 'Landing page untuk lembaga keuangan syariah di depok',
      preview: danasyariah,
      techUsed:'html, css, javascript',
      link:'https://dana-syariah.netlify.app/',
      color:'#0df08b',
      fontcolor:'white'   
  },
  {   id: 'project2', 
      name: 'Rock Paper Scissor',
      description: 'Challenge dari frontendmentor.io, merupakan aplikasi game suit rock paper scissor',
      preview: rockpaperscissor,
      techUsed:'html, sass, javascript',
      link:'https://izurai27.github.io/rock-paper-scissors/',
      color:'#db3e5b',
      fontcolor:'white'  
  },
  {   id: 'project3', 
      name: 'rest-countries-api',
      description: 'Challenge dari frontendmentor.io, merupakan aplikasi menampilkan semua negara di dunia',
      preview: restcountriesapi,
      techUsed:'html, sass, javascript',
      link:'https://izurai27.github.io/rest-countries-api-with-color-theme-switcher-master/' ,
      color:'#ddc913' 
  },
  {   id: 'project5', 
      name: 'Frontendmentor-faq-accordion-card-main',
      description: 'Challenge dari frontendmentor.io',
      preview: faq,
      techUsed:'html, sass, javascript',
      link:'https://izurai27.github.io/Frontendmentor-faq-accordion-card-main/' ,
      color:'#ddc913' 
  },
  {   id: 'project6', 
      name: 'chat-app-css-illustration-master',
      description: 'Challenge dari frontendmentor.io',
      preview: chatApp,
      techUsed:'html, sass, javascript',
      link:'https://izurai27.github.io/chat-app-css-illustration-master/' ,
      color:'#ddc913' 
  },
  
  
]

export default projectlist