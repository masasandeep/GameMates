import { Provider } from 'react-redux';
import Header from './components/Header'
import Hero from './components/Hero';
import Navbar from './components/NavBar';
import Register from './components/Register';
import Login from './components/Login'
import store from './components/store/LoginContext';
function App() {
  return (
    <div>
      <Provider store={store}>

      <Header />
      <Hero/>
      <Login />
      </Provider>
    </div>
  );
}

export default App;
