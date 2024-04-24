import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
    <ToastContainer />
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to ProShop</h1>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
