import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './sections/header/Header';
import Footer from './sections/footer/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;