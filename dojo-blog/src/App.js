import { BrowserRouter as Router } from 'react-router-dom';
import NavbarMenu from './components/navbar/NavbarMenu';
import ScrollToTop from './components/helpers/ScrollToTop';
import SnackBar from './components/helpers/SnackBar';
import Store from './context/store';
import RouterSwitch from './components/helpers/RouterSwitch';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Store>
        <div className="App">
          <NavbarMenu />
          <div id="main">
            <RouterSwitch />
          </div>
          <SnackBar />
        </div>
      </Store>
    </Router>
  );
}

export default App;
