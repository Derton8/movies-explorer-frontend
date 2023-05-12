import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';

import './App.scss';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className='App'>
      <Routes>
        <Route path='/signup' element={<Header loggedIn={loggedIn} />} />
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
              <Footer></Footer>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
