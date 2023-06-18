import React from 'react'
import ReactDom from 'react-dom'
import MustaphaL from './images/MustaphaL.jpeg'

// Headr Componenet 

const Header = () => (
  <header>
    <div className='head'>
      <h1>Welcome My Dear Friend This my First React App</h1>
      <img src={MustaphaL} alt='Mustapha' />
      <p>Mustapha Liaichi</p>
      <h4>Web Scraper/Developer From Morroco</h4>
    </div>
  </header>
)

// Create a techlist that have all the skills 

const Techlist = () => {
  const Tech = ['HTML', 'CSS', 'JavaScript', 'Prompt Enginnering', 'Solidity', 'Python', 'PineScript']
  const TechFormated = Tech.map((skill) => <li key={skill}>{skill}</li>)
  return TechFormated
}

// Main Section

const Main = () => (
  <main>
    <div className='main'>
        <p>My Humble Skills ar :</p>
        <ul>
          <Techlist />
        </ul>
    </div>
  </main>
)

//Create The Footer 

const Footer = () => (
  <footer>
    <div className="foot">
      <p>Made With Love By MHL</p>
    </div>
  </footer>
)

// Create The App

const App = () => (
  <div className='app'>
    <Header />
    <Main />
    <Footer />
  </div>
)

// Get The root Element

const rootElement = document.getElementById('root')

// Render The app

ReactDom.render(<App />, rootElement)
