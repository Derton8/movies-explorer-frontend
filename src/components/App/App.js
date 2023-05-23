import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as auth from '../../utils/Auth';
import { mainApi } from '../../utils/MainApi';
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
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    auth
      .checkAuth()
      .then((res) => {
        if (res.authorized) {
          setLoggedIn(true);
          navigate('/movies', { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getMe()
        .then((user) => {
          setCurrentUser(user.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  function handleUpdateUser({ name, email }) {
    mainApi
      .updateUser({ name, email })
      .then((user) => {
        setCurrentUser(user.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleRegister(data) {
    auth
      .signup(data)
      .then(() => {
        auth
          .signin(data)
          .then((res) => {
            setLoggedIn(true);
            navigate('/movies', { replace: true });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogin(data) {
    auth
      .signin(data)
      .then((res) => {
        setLoggedIn(true);
        navigate('/movies', { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSignout() {
    auth
      .signout()
      .then(() => {
        setLoggedIn(false);
        navigate('/', { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='App'>
        <Header loggedIn={loggedIn} />
        <Routes>
          <Route
            path='/signup'
            element={<Register onSubmit={handleRegister} />}
          />
          <Route path='/signin' element={<Login onSubmit={handleLogin} />} />
          <Route path='/' element={<Main />} />
          <Route
            path='/movies'
            element={<ProtectedRoute element={Movies} loggedIn={loggedIn} />}
          />
          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute element={SavedMovies} loggedIn={loggedIn} />
            }
          />
          <Route
            path='/profile'
            element={
              <ProtectedRoute
                element={Profile}
                loggedIn={loggedIn}
                onClick={handleSignout}
                onUpdateUser={handleUpdateUser}
              />
            }
          />
          <Route path='/404' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
