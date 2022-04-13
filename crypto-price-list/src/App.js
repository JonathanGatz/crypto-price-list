import logo from './logo.svg';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import coinDetailPage from './pages/coinSummaryPage'
import coinSummaryPage from './pages/coinDetailPage'
import Header from './components/Header';

function App() {
  return (
    <div>
      <BrowserRouter>

      <Header />
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;



//       <Route exact path= '/' component={coinSummaryPage} />
