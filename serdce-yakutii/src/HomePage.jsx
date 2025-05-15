import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const HomePage = () => {
  const navigate = useNavigate();
  // Данные для объявлений
  const announcements = [
    {
      image: "animal1.png",
      description: "Ищем хозяина для нашей кошечки. Ласковая, мурлыкающая. К лотку приучена.",
    },
    {
      image: "animal2.png",
      description: "Отдам в добрые руки щенка, в связи с аллергией. Щенок кастрированный, характер спокойный, не агрессивный. ",
    },
    {
      image: "animal3.png",
      description: "Отдаем двух кошечек девочек! Можем привезти котенка по Вашему адресу. Серенькая и рыжая.",
    }
  ];

  // Данные для экстренных случаев
  const emergencyCases = [
    {
      image: "emergency1.png",
      name: "Лютик",
      progress: 65,
      description: "Мальчика забрали из Мирного. Давайте поможем ему обрести любящую семью!"
    },
    {
      image: "emergency2.png",
      name: "Мира",
      progress: 30,
      description: "После операции с замерзанием кончиков ушей, ей необходима ваша поддержка для восстановления!"
    },
    {
      image: "emergency3.png",
      name: "Нефера",
      progress: 45,
      description: "Глубоко беременная. Нужна помощь на обследовании и родах. Спасибо всем, кто поддерживает!"
    }
  ];

  // Данные партнеров
  const partners = [
    { image: "partner1.png" },
    { image: "partner2.png" },
    { image: "partner3.png" }
  ];
  const handleNavigateToAnnouncements = () => {
    navigate('/announcements');
  };
  return (
    <div className="app">
      {/* Header */}
      <header className="header" style={{backgroundColor: '#ECFFDA'}}>
        <div className="header-container">
          <div className="logo-place">
            <img src="logo.png" alt="Сердце Якутии" className="logo" />
          </div>
          <nav className="nav-menu">
            <a href="#about">О проекте</a>
            <a href="#announcements">Объявления</a> 
            <a href="#funds">Фонды</a>
            <a href="#contacts">Контакты</a>
          </nav>
          <div className="phone-contact">
            <img src="phone-icon.png" alt="Телефон" className="phone-icon" />
            <span>+7 (914) 300-00-00</span>
          </div>
        </div>
      </header>

      {/* Блок 1 */}
      <section className="hero-block full-width-section" style={{backgroundColor: '#FFE8B9'}}>
        <div className="hero-container">
          <div className="hero-text">
            <h2>Мы помогаем бездомным животным найти дом и заботу</h2>
            <h1>Сердце Якутии</h1>
            <button 
              className="rounded-btn" 
              style={{backgroundColor: '#ECFFDA', textDecoration: 'none', color: '#000'}}
              onClick={handleNavigateToAnnouncements}>
              Хочу помочь🧡
            </button>
          </div>
          <div className="main-image">
            <img src="ma.png" alt="Главное изображение" />
          </div>
        </div>
      </section>

      {/* Блок 2 - О проекте */}
      <section id="about" className="about-block full-width-section" style={{backgroundColor: '#ffffff'}}>
        <div className="about-container">
          <div className="about-image">
            <img src="about-image.png" alt="О проекте" />
          </div>
          <div className="about-text">
            <span>То, с чего начиналось</span>
            <h2>О проекте</h2>
            <p>
              В Якутии, как и во многих других регионах России, остро стоит проблема бездомных животных. Ежегодно сотни собак и кошек оказываются на улице из-за безответственного отношения людей, отсутствия системы контроля за размножением животных и недостаточной информированности населения о важности стерилизации и вакцинации. Мы стремимся объединить усилия жителей региона, благотворительных организаций и волонтеров для спасения бездомных животных. Наш сайт предоставляет платформу, где каждый может внести свой вклад: помочь найти дом для животного, оказать финансовую поддержку, стать волонтером или просто распространить информацию о проблеме.
            </p>
          </div>
        </div>
      </section>

      {/* Блок 3 - Иконки с целями */}
      <section className="goals-block full-width-section" style={{backgroundColor: '#ECFFDA'}}>
        <div className="goals-container">
          <div className="goal-item">
            <img src="home-icon.png" alt="Поиск хозяев" />
            <h3>Поиск новых хозяев</h3>
            <p>Мы помогаем бездомным животным найти любящие семьи через каталог на нашем сайте.</p>
          </div>
          <div className="goal-item">
            <img src="shelter-icon.png" alt="Поддержка приютов" />
            <h3>Поддержка приютов и волонтеров</h3>
            <p>Мы собираем средства для приютов и помогаем волонтерам в их благородной миссии.</p>
          </div>
          <div className="goal-item">
            <img src="info-icon.png" alt="Информирование" />
            <h3>Информирование населения</h3>
            <p>Мы рассказываем о важности ответственного отношения к животным и необходимости стерилизации.</p>
          </div>
          <div className="goal-item">
            <img src="search-icon.png" alt="Поиск пропавших" />
            <h3>Поиск пропавших животных</h3>
            <p>Мы предоставляем возможность быстро размещать и находить информацию о пропавших питомцах.</p>
          </div>
        </div>
      </section>

    {/* Блок 4 - Объявления */}
    <section id="announcements" className="announcements-block full-width-section" style={{backgroundColor: '#ffffff'}}>
        <div className="announcements-container">
          <h2>Вместе мы поможем найти дом 5000 животным в Якутии</h2>
          <div className="announcements-grid">
            {announcements.map((item, index) => (
              <div key={index} className="announcement-card" style={{backgroundColor: '#FFC248'}}>
                <div className="image-container">
                  <img src={item.image} alt={`Объявление ${index + 1}`} />
                </div>
                <p>{item.description}</p>
                <div className="button-container">
                  <button className="rounded-btn" style={{backgroundColor: '#ECFFDA'}}>Узнать больше</button>
                </div>
              </div>
            ))}
          </div>
          <button 
            className="rounded-btn view-all-btn" 
            style={{backgroundColor: '#ECFFDA'}}
            onClick={handleNavigateToAnnouncements}>
            Посмотреть все
          </button>
        </div>
      </section>

      {/* Блок 5 - Экстренные случаи */}
      <section className="emergency-block full-width-section" style={{backgroundColor: '#E1F8FF'}}>
        <div className="emergency-container">
          <h2>Бывают экстренные случаи: нам очень важна поддержка</h2>
          <div className="emergency-cards">
            {emergencyCases.map((item, index) => (
              <div key={index} className="emergency-card" style={{backgroundColor: '#ECFFDA'}}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <div className="progress-container">
                  <div className="progress-bar">
                    <div className="progress" style={{width: `${item.progress}%`}}></div>
                  </div>
                  <span>{item.progress}% собрано</span>
                </div>
                <p>{item.description}</p>
                <div className="emergency-button-container">
                  <button className="rounded-btn white-btn">Хочу помочь🧡</button>
                </div>
              </div>
            ))}
          </div>
          <div className="slider-arrows">
            <button className="arrow-left">←</button>
            <button className="arrow-right">→</button>
          </div>
        </div>
      </section>

      {/* Блок 6 - Партнеры */}
      <section id="funds" className="partners-block full-width-section" style={{backgroundColor: '#ffffff'}}>
        <div className="partners-container">
          <span>Вы можете стать нашим партнером</span>
          <h2>Благотворительные организации и партнеры</h2>
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div key={index} className="partner-logo">
                <img src={partner.image} alt={`Партнер ${index + 1}`} />
              </div>
            ))}
          </div>
            {/*<button className="rounded-btn partner-btn" style={{backgroundColor: '#ECFFDA'}}>Стать партнером🧡</button>*/}
        </div>
      </section>

      {/* Блок 7 - Волонтерам */}
      <section className="volunteers-block full-width-section" style={{backgroundColor: '#FFC248'}}>
        <div className="volunteers-container">
          <div className="volunteers-text">
            <h2>Волонтерам</h2>
            <p>
            Нам важна любая ваша поддержка. Вы сами выбираете форму оказания помощи. Кто-то регулярно осуществляет пожертвования, а кто-то помогает распространить о нас информацию! Давайте вместе поможем нашим братьям меньшим!
            </p>
            {/*<button className="rounded-btn white-btn">Хочу помочь🧡</button>*/}
          </div>
          <div className="volunteers-image">
            <img src="volunteers-image.png" alt="Волонтеры" />
          </div>
        </div>
      </section>

      {/* Блок 8 - Контакты */}
      <section id="contacts" className="contacts-block full-width-section" style={{backgroundColor: '#FFE8B9'}}>
        <div className="contacts-container">
          <div className="contacts-image">
            <img src="contacts-image.png" alt="Контакты" />
          </div>
          <div className="contacts-info">
            <h2>Наши контакты</h2>
            <div className="contact-item">
              <img src="telegram-icon.png" alt="Telegram" />
              <span>@heartOfYKT</span>
            </div>
            <div className="contact-item">
              <img src="whatsapp-icon.png" alt="WhatsApp" />
              <span>+793000000</span>
            </div>
            <div className="contact-item">
              <img src="email-icon.png" alt="Email" />
              <span>heart_ykt@gmail.com</span>
            </div>
            <div className="contact-item">
              <img src="vk-icon.png" alt="VK" />
              <span>vk.com/heart_of_YKT</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer full-width-section" style={{backgroundColor: '#FFE8B9'}}>
        <div className="footer-container">
          <img src="logo.png" alt="Сердце Якутии" className="footer-logo" />
          <p>© Сердце Якутии, 2025 | Политика обработки персональных данных</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;