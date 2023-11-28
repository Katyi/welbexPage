import './footer.css';
import icon1 from '../../assets/telegram.svg';
import icon2 from '../../assets/viber.svg';
import icon3 from '../../assets/whatsapp.svg';

const Footer = () => {
  return (
    <>
      <div className='footerContainer'>
        {/* FOOTER COLUMN 1 */}
        <div className='column1'>
          <div className="footerTitle">О компании</div>
          <div className="footerMenuItem1">Партнёрская программа</div>
          <div className="footerMenuItem1">Вакансии</div>
        </div>
        {/* FOOTER COLUMN 2 */}
        <div className='column2'>
          <div className="footerTitle">Меню</div>
          <div className="footerWrapMenu">
            <div className="footerMenuItem1 subColumn2">Расчёт стоимости</div>
            <div className="footerMenuItem1 subColumn2">Кейсы</div>
            <div className="footerMenuItem1 subColumn2">Услуги</div>
            <div className="footerMenuItem1 subColumn2">Благодарственные письма</div>
            <div className="footerMenuItem1 subColumn2">Виджеты</div>
            <div className="footerMenuItem1 subColumn2">Сертификаты</div>
            <div className="footerMenuItem1 subColumn2">Интеграции</div>
            <div className="footerMenuItem1 subColumn2">Блог на Youtube</div>
            <div className="footerMenuItem1 subColumn2">Наши клиенты</div>
            <div className="footerMenuItem1 subColumn2">Вопрос / Ответ</div>
          </div>
        </div>
        {/* FOOTER COLUMN 3 */}
        <div className='column3'>
          <div className="footerTitle">Контакты</div>
          <div className="footerMenuItem1 footerMenuItem1Col3 footerPhone">+7 555 555-55-55</div>
          {/* ICONS */}
          <div className='footerIconPart'>
            <img className="icon" src={icon1} alt="icon1" />
            <img className="icon" src={icon2} alt="icon2" />
            <img className="icon" src={icon3} alt="icon3" />
          </div>
          <div className="footerMenuItem1 footerMenuItem1Col3">Москва, Путевой проезд 3с1, к 902</div>
          <div className="footerMenuItem2">©WELBEX 2022. Все права защищены.</div>
          <div className="footerMenuItem2">Политика конфиденциальности</div>
        </div>
      </div>
      <div className="mobileFooterMenu">
        <div className='mobileColumn1'>
          <div className="mobileFooterTitle">О компании</div>
          <div className="mobileFooterMenuItem1">Партнёрская программа</div>
          <div className="mobileFooterMenuItem1">Вакансии</div>
        </div>
        <div className="mobileColumn2">
          <div className="mobileFooterTitle">Меню</div>
          <div className="mobileFooterWrapMenu">
            <div className="mobileFooterMenuItem1 subColumn2">Расчёт стоимости</div>
            <div className="mobileFooterMenuItem1 subColumn2" >Благодарность клиентов</div>
            <div className="mobileFooterMenuItem1 subColumn2">Услуги</div>
            <div className="mobileFooterMenuItem1 subColumn2">Кейсы</div>
            <div className="mobileFooterMenuItem1 subColumn2">Виджеты</div>
            <div className="mobileFooterMenuItem1 subColumn2">Сертификаты</div>
            <div className="mobileFooterMenuItem1 subColumn2">Интеграции</div>
            <div className="mobileFooterMenuItem1 subColumn2">Блог на Youtube</div>
            <div className="mobileFooterMenuItem1 subColumn2">Наши клиенты</div>
            <div className="mobileFooterMenuItem1 subColumn2">Вопрос / Ответ</div>
          </div>
        </div>
        <div className="mobileColumn3">
        <div className="mobileFooterTitle">Контакты</div>
          <div className="mobileFooterMenuItem1 footerPhone">+7 555 555-55-55</div>
          {/* ICONS */}
          <div className='mobileFooterIconPart'>
            <img className="mobileicon" src={icon1} alt="icon1" />
            <img className="mobileicon" src={icon2} alt="icon2" />
            <img className="mobileicon" src={icon3} alt="icon3" />
          </div>
          <div className="mobileFooterMenuItem1">Москва, Путевой проезд 3с1, к 902</div>
          <div className="footerMenuItem2">©WELBEX 2022. Все права защищены.</div>
          <div className="footerMenuItem2">Политика конфиденциальности</div>
        </div>

      </div>
    </>
  )
}

export default Footer