import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import Home from './components/home';
import Hobbies from './components/hobbies';
import Projects from './components/projects';
import Contact from './components/contact'

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Hobbies/>
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;
