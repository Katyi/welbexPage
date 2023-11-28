import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import bgImg5 from './assets/redLight.svg';

function App() {
  return (
    <div className='appContainer'>
      <div className='appImgWrapper5'>
        <img className='appImg5' src={bgImg5} alt="bgImg5" />
      </div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
