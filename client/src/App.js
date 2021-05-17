import './App.css';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import Footer from './components/Footer';
import  Form  from './components/Form';
import Alert from './components/Alert'
import AlertState from './context/alert/AlertState'
import  { GlobalProvider }  from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <AlertState>
      <div>
        <Navbar />
        <MainPage />
        <Alert />
        <Form />
        <Footer />
      </div>
      </AlertState>
    </GlobalProvider>
  );
}

export default App;
