import './header.css';
import logo1 from '../../assets/logo1.svg';
import logo2 from '../../assets/logo2.svg';
import icon1 from '../../assets/telegram.svg';
import icon2 from '../../assets/viber.svg';
import icon3 from '../../assets/whatsapp.svg';
import bgImg1 from '../../assets/purpleBall.svg';
import bgImg2 from '../../assets/redBigBall.svg';
import bgImg4 from '../../assets/purpleLight.svg';

const Header = () => {
  return (
    <>
      <div className='headerContainer'>
        <div className='appImgWrapper1'>
          <img className='appImg1' src={bgImg1} alt="" />
        </div>
        <div className='appImgWrapper2'>
          <img className='appImg2' src={bgImg2} alt="" />
        </div>
        <div className='appImgWrapper4'>
          <img className='appImg4' src={bgImg4} alt="" />
        </div>
        
        {/* LOGO PART */}
        <div className='logoPart'>
          <div className='logoRow1'>
            <img className='logo1' src={logo1} alt="logo1"/>
            <img className='logo2' src={logo2} alt="logo2"/>
          </div>
          <div className='logoRow2'>
            <div className='logoText'>крупный интегратор CRM в Росcии и ещё 8 странах</div>
          </div>
        </div>
        {/* MENU PART */}
        <div className='menuPart'>
          <div className='menuItem'>Услуги</div>
          <div className='menuItem'>Виджеты</div>
          <div className='menuItem'>Интеграции</div>
          <div className='menuItem'>Кейсы</div>
          <div className='menuItem'>Сертификаты</div>
        </div>
        {/* PHONE PART */}
        <div className='phonePart'>
          +7 555 555-55-55
        </div>
        {/* ICON PART */}
        <div className='headerIconPart'>
          <img className="icon" src={icon1} alt="icon1" />
          <img className="icon" src={icon2} alt="icon2" />
          <img className="icon" src={icon3} alt="icon3" />
        </div>
      </div>
      <div className="mobileHeaderMenu">
        <div className='mobileHeaderMenuItem'>Услуги</div>
        <div className='mobileHeaderMenuItem'>Виджеты</div>
        <div className='mobileHeaderMenuItem'>Интеграции</div>
        <div className='mobileHeaderMenuItem'>Кейсы</div>
    </div>
  </>
  )
}

export default Header