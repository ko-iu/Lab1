import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const AnnouncementsPage = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newAnnouncement, setNewAnnouncement] = useState({
        image: null,
        name: '',
        age: '',
        breed: '',
        gender: 'unknown',
        description: '',
        contacts: ''
    });
    const [announcements, setAnnouncements] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const cardColors = ['#FFC248', '#E1F8FF', '#FFE8B9'];

    // Загрузка объявлений
    useEffect(() => {
        const fetchAnnouncements = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/announcements');
                const data = await response.json();
                setAnnouncements(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Ошибка при загрузке объявлений:', error);
                setIsLoading(false);
            }
        };
        
        fetchAnnouncements();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewAnnouncement({
            ...newAnnouncement,
            [name]: value
        });
    };

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setNewAnnouncement({
                ...newAnnouncement,
                image: e.target.files[0],
                imagePreview: URL.createObjectURL(e.target.files[0])
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        if (newAnnouncement.image) {
            formData.append('image', newAnnouncement.image);
        }
        
        // Добавляем остальные поля
        formData.append('name', newAnnouncement.name);
        formData.append('age', newAnnouncement.age);
        formData.append('breed', newAnnouncement.breed);
        formData.append('gender', newAnnouncement.gender);
        formData.append('description', newAnnouncement.description);
        formData.append('contacts', newAnnouncement.contacts);
        formData.append('color', cardColors[Math.floor(Math.random() * cardColors.length)]);
        
        try {
            const response = await fetch('http://localhost:5000/api/announcements', {
                method: 'POST',
                body: formData
            });
            
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Ошибка при создании объявления');
            }
            
            const data = await response.json();
            setAnnouncements([data, ...announcements]);
            setIsModalOpen(false);
            setNewAnnouncement({
                image: null,
                name: '',
                age: '',
                breed: '',
                gender: 'unknown',
                description: '',
                contacts: ''
            });
        } catch (error) {
            console.error('Ошибка:', error);
            alert(error.message);
        }
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
            <a onClick={() => navigate('/#about')}>О проекте</a>
            <a onClick={() => navigate('/#announcements')}>Объявления</a>
            <a onClick={() => navigate('/#funds')}>Фонды</a>
            <a onClick={() => navigate('/#contacts')}>Контакты</a>
          </nav>
          <div className="phone-contact">
            <img src="phone-icon.png" alt="Телефон" className="phone-icon" />
            <span>+7 (914) 300-00-00</span>
          </div>
        </div>
      </header>

      {/* Блок 1 */}
      <section className="announcements-hero full-width-section" style={{backgroundColor: '#FFE8B9'}}>
        <div className="announcements-hero-container">
          <h1>Ищут дом</h1>
          <img src="contacts-image.png" alt="Животные ищут дом" className="announcements-hero-image" />
        </div>
      </section>

      {/* Блок 2 */}
      <section className="announcements-list full-width-section">
        <div className="announcements-list-container">
          <h2>Есть приюты, где животным оказывают помощь. Но приют не заменит дом. Всегда лучше дома в любви, уюте и заботе!</h2>
            <div className="announcements-grid">
            {announcements.map((item) => (
                <div key={item.id} className="announcement-card" style={{backgroundColor: item.color}}>
                <div className="announcement-image-container">
                    {item.image ? (
                    <img 
                        src={item.image.startsWith('http') ? item.image : `http://localhost:5000${item.image}`} 
                        alt={item.name}
                        onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'placeholder-image.png';
                        }}
                    />
                    ) : (
                    <div className="image-placeholder">Нет изображения</div>
                    )}
                    <div className={`gender-icon ${item.gender}`}>
                    {item.gender === 'male' ? '♂' : item.gender === 'female' ? '♀' : '?'}
                    </div>
                </div>
                <h3>{item.name}, {item.age}</h3>
                <p>{item.description}</p>
                <button className="rounded-btn white-btn">Узнать больше</button>
                <div className="announcement-buttons">
                    <button className="rounded-btn" style={{backgroundColor: '#ECFFDA'}}>Помочь</button>
                    <button className="rounded-btn" style={{backgroundColor: '#FFE8B9'}}>Связаться🧡</button>
                </div>
                </div>
            ))}
            </div>
        </div>
      </section>

      {/* Блок 3 */}
      <section className="add-announcement full-width-section" style={{backgroundColor: '#FFC248'}}>
        <div className="add-announcement-container">
          <div className="add-announcement-text">
            <h2>Добавить объявление</h2>
            <p>Жми на кнопочку, чтобы добавить объявление. Ежедневно обновляем доску объявлений. Пусть как можно больше хвостатых скорее найдут свой дом!</p>
            <button className="rounded-btn" style={{backgroundColor: '#ECFFDA'}} onClick={() => setIsModalOpen(true)}>
              Добавить🧡
            </button>
          </div>
          <div className="add-announcement-image">
            <img src="animal2.png" alt="Добавить объявление" />
          </div>
        </div>
      </section>

      {/* Модальное окно */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Заполни анкету</h2>
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>×</button>
            <form onSubmit={handleSubmit}>
              <div className="modal-content">
                <div className="modal-image-upload">
                  <div className="image-placeholder">
                  {newAnnouncement.image ? (
                        <img src={newAnnouncement.imagePreview || newAnnouncement.image} alt="Предпросмотр" />
                    ) : (
                        <span>Добавьте фото</span>
                    )}
                  </div>
                  <input 
                        type="file" 
                        onChange={handleImageChange}
                        accept="image/*"
                    />
                </div>
                <div className="modal-form">
                  <div className="form-group">
                    <label>Имя:</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={newAnnouncement.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Пол:</label>
                    <div className="gender-options">
                      <label>
                        <input 
                          type="radio" 
                          name="gender" 
                          value="male"
                          checked={newAnnouncement.gender === 'male'}
                          onChange={handleInputChange}
                        /> Мальчик
                      </label>
                      <label>
                        <input 
                          type="radio" 
                          name="gender" 
                          value="female"
                          checked={newAnnouncement.gender === 'female'}
                          onChange={handleInputChange}
                        /> Девочка
                      </label>
                      <label>
                        <input 
                          type="radio" 
                          name="gender" 
                          value="unknown"
                          checked={newAnnouncement.gender === 'unknown'}
                          onChange={handleInputChange}
                        /> Неизвестно
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Возраст:</label>
                    <input 
                      type="text" 
                      name="age" 
                      value={newAnnouncement.age}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Порода:</label>
                    <input 
                      type="text" 
                      name="breed" 
                      value={newAnnouncement.breed}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Описание:</label>
                    <textarea 
                      name="description" 
                      value={newAnnouncement.description}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Контакты:</label>
                    <input 
                      type="text" 
                      name="contacts" 
                      value={newAnnouncement.contacts}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="rounded-btn submit-btn" style={{backgroundColor: '#ECFFDA'}}>
                Отправить
              </button>
            </form>
          </div>
        </div>
      )}

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

export default AnnouncementsPage;