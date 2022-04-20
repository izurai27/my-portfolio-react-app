import dailyrecipe from './images/dailyrecipe.png'
import rockpaperscissor from './images/rockpaperscissor.png'
import restcountriesapi from './images/restcountriesapi.png'
import danasyariah from './images/DanaSyariah.png'

const projectlist = [
  {   id: 'project1', 
      name: 'daily Recipe',
      description: 'Aplikasi untuk mencari resep dan membuat daftar belanja bahan makanan dari resep tersebut',
      preview: dailyrecipe,
      techUsed:'reactjs, express, nodejs, axios, mongoDb Atlas, firebase',
      link:'https://dailyrecipeapp.netlify.app/' 
  },
  {   id: 'project4', 
      name: 'Landing Page Dana Syariah',
      description: 'Landing page untuk lembaga keuangan syariah di depok',
      preview: danasyariah,
      techUsed:'html, css, javascript',
      link:'https://dana-syariah.netlify.app/' 
  },
  {   id: 'project2', 
      name: 'Rock Paper Scissor',
      description: 'Challenge dari frontendmentor.io, merupakan aplikasi game suit rock paper scissor',
      preview: rockpaperscissor,
      techUsed:'html, sass, javascript',
      link:'https://izurai27.github.io/rock-paper-scissors/' 
  },
  {   id: 'project3', 
      name: 'rest-countries-api',
      description: 'Challenge dari frontendmentor.io, merupakan aplikasi menampilkan semua negara di dunia',
      preview: restcountriesapi,
      techUsed:'html, sass, javascript',
      link:'https://izurai27.github.io/rest-countries-api-with-color-theme-switcher-master/' 
  },
  
  
]

export default projectlist