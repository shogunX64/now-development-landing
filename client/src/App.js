import './App.css';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import Footer from './components/Footer';
import  Form  from './components/Form';
import  { GlobalProvider }  from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <div>
        <Navbar />
        <MainPage />
        <Form />
        <Footer />
      </div>
    </GlobalProvider>
  );
}

export default App;
