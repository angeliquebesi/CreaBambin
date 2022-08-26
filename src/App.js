import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import {
  Home,
  Category,
  Contact,
  Login,
  Admin,
  PageNotFound
} from './container';
import UntouchableView from './DeviceDetect/UntouchableView';


function App() {
  return (
    <div>
        <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Categories' element={<Category />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Login' element={<Login />}>
          <Route path=':admin' element={<Admin />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>

      <UntouchableView>
        <Footer />
      </UntouchableView>

    </div>
  );
}

export default App;
