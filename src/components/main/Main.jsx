import './main.css';
import logo3 from '../../assets/WELBEX.svg';
import logo4 from '../../assets/mainLogo.svg';
import logo5 from '../../assets/mobileWELBEX.svg';
import logo6 from '../../assets/mobileMainLogo.svg';
import bgImg3 from '../../assets/redSmallBall.svg';
import line from '../../assets/line.svg';

const Main = () => {
  return (
    <>
      <div className='mainContainer'>
        <div className='appImgWrapper3'>
          <img className='appImg3' src={bgImg3} alt="bgImg3" />
        </div>
        
        {/* LEFT PART */}
        <div className="mainLeftPart">
          <div className='mainTitle1'>Зарабатывайте больше</div>
          <img src={logo3} alt="logo3" />
          <div className='mainText1'>Развиваем и контролируем продажи за вас</div>
        </div>
        {/* RIGHT PART */}
        <div className="mainRightPart">
          <img src={logo4} alt="logo4"/>
          {/* CARDS PART */}
          <div className="cardPart">
            <div className='card'>
              <div className="mainTitle2">Виджеты</div>
              <div className="mainText2">30 готовых решений</div>
            </div>
            <div className='card'>
              <div className="mainTitle2">Dashboard</div>
              <div className="mainText2">с показателями вашего бизнеса</div>
            </div>
            <div className='card'>
              <div className="mainTitle2">Skype Аудит</div>
              <div className="mainText2">отдела продаж и CRM системы</div>
            </div>
            <div className='card'>
              <div className="mainTitle2">35 дней</div>
              <div className="mainText2">использования CRM</div>
            </div>
          </div>
          {/* BUTTON */}
          <button className='mainButton'>Получить консультацию</button>
        </div>
      </div>
      <div className="mobileMainMenu">
        <div className="mobileMainTitle1">Зарабатывайте больше</div>
        <img src={logo5} alt="logo5" />
        <div className="mobileMainText1">Развиваем и контролируем продажи за вас</div>
        <img src={logo6} alt="logo6"/>
        <div className="mobileCardPart">
          <div className="mobileCard">
            <img src={line} alt="line" className='line'/>
            <div className='mobileMainText2'>Skype аудит</div>
            </div>
          <div className="mobileCard">
            <img src={line} alt="line" className='line'/>
            <div className='mobileMainText2'>30 виджетов</div>
          </div>
          <div className="mobileCard">
            <img src={line} alt="line" className='line'/>
            <div className='mobileMainText2'>Dashboard</div>
          </div>
          <div className="mobileCard">
            <img src={line} alt="line" className='line'/>
            <div className='mobileMainText2'>Месяц аmoCRM</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main;