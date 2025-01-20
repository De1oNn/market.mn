import './App.css';


function App() {
  return (
    <div className="whole">
      <header>
        <div className='header-inside'>
          <img src='/picture/header-picture/logo-header.png' alt='logo' className='header-logo'/>
          <div className='header-input-and-button'>
            <input placeholder='Search' className='input-header'/>
            <button className='header-input-button'>
              <img src='/picture/header-picture/header-button.png' alt='search-button' className='search-button'/>
            </button>
          </div>
          <div className='header-account'>
            <img src='/picture/header-picture/header-account-icon.png' className='account-icon'/>
            <p className='header-account-para'>Миний бүртгэл</p>
          </div>
          <div className='shop-div'>
            <img src='/picture/header-picture/header-shop-icon.png' className='header-shop-icon'/>
            <div className='shop-count'>0</div>
          </div>
        </div>
      </header>
      <main>
        <div className='first-line'></div>
        <div className='navbar'>
          <div className='inside-navbar'>
            <div className='navbar-div'>
              <p className='navbar-titles'>Бүх ангилал</p>
            </div>
            <div className='navbar-div'>
              <p className='navbar-titles'>Шинэ</p>
            </div>
            <div className='navbar-div'> 
              <p className='navbar-titles'>Хямдрал</p>
            </div>
            <div className='navbar-div'>
              <p className='navbar-titles'>Коллекцууд</p>
            </div>
            <div className='navbar-div'>
              <p className='navbar-titles'>Мэдээлэл</p>
            </div>
            <div className='navbar-div'>
              <p className='navbar-titles'>Блог</p>
            </div>
            <div className='navbar-div'>
              <p className='navbar-titles'>Холбоо барих</p>
            </div>
          </div>
        </div>
        <div className='second-line'></div>
      </main>
    </div>
  );
}

export default App;
