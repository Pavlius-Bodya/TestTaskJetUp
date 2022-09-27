import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

import {Main} from './Page/Main'
import { InputForm } from './Page/InputForm';
import { NotFoundLink } from './Page/NotFoundLink';
import { TestForm } from './Page/TestForm';


function App() { 
  
  return (
    <>
      <nav>
        <div className="nav-wrapper orange accent-4 px1">
          <Link to="/" className="brand-logo">Вивчення слів</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">Головна</Link></li>
            <li><Link to="/input">Добавити слово</Link></li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Main/> } />
        <Route path='/input' element={<InputForm/> } />
        <Route path='/test' element={<TestForm/> } />
        <Route path='*' element={<NotFoundLink/> } />
      </Routes>
      
    </>
  );
}

export default App;
