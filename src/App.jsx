import { Outlet } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default App
