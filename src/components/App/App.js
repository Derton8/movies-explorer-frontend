import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from '../Auth/Login/Login';
import Register from '../Auth/Register/Register';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import SavedMovies from '../SavedMovies/SavedMovies';
import './App.scss';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className='App'>
      <Header loggedIn={false} />
      <Routes>
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/' element={<Main />} />
        <Route
          path='/movies'
          element={<ProtectedRoute element={Movies} loggedIn={loggedIn} />}
        />
        <Route
          path='/saved-movies'
          element={<ProtectedRoute element={SavedMovies} loggedIn={loggedIn} />}
        />
        <Route
          path='/profile'
          element={<ProtectedRoute element={Profile} loggedIn={loggedIn} />}
        />
        <Route path='/404' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
