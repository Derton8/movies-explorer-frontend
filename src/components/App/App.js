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
import SavedMovies from '../SavedMovies/SavedMovies';
import './App.scss';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className='App'>
      <Routes>
        <Route path='/signup' element={<Register></Register>} />
        <Route path='/signin' element={<Login></Login>} />
        <Route
          path='/'
          element={
            <>
              <Header loggedIn={loggedIn} />
              <Main></Main>
              <Footer></Footer>
            </>
          }
        />
        <Route
          path='/movies'
          element={
            <>
              <Header loggedIn={true} />
              <Movies></Movies>
              <Footer></Footer>
            </>
          }
        />
        <Route
          path='/saved-movies'
          element={
            <>
              <Header loggedIn={true} />
              <SavedMovies></SavedMovies>
              <Footer></Footer>
            </>
          }
        />
        <Route
          path='/profile'
          element={
            <>
              <Header loggedIn={true} />
              <Profile></Profile>
            </>
          }
        />
        <Route path='/404' element={<NotFound></NotFound>} />
      </Routes>
    </div>
  );
}

export default App;
