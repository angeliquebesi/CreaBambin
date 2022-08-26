import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar/NavBar';
import NavBarMobile from './components/NavBar/NavBarMobile';
import {
  Home,
  Category,
  Contact,
  Login,
  Admin,
  PageNotFound
} from './container';
import UntouchableView from './DeviceDetect/UntouchableView';
import TouchableView from './DeviceDetect/TouchableView';


function App() {
  return (
    <div>
      <UntouchableView>
        <NavBar />
      </UntouchableView>
      <TouchableView>
        <NavBarMobile />
      </TouchableView>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Categories/:Name' element={<Category />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Login' element={<Login />}>
          <Route path=':admin' element={<Admin />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
