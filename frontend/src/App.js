import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddGermplasmPage from './pages/AddGermplasmPage/AddGemplasmPage';
import ConsultGermplasmsPage from './pages/ConsultGermplasmsPage/ConsultGermplasmsPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import { GlobalStorage } from './context/GlobalContext';
import EditGermplasmPage from './pages/EditGermplasmPage/EditGermplasmPage';

function App() {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <Header />
        <Routes>
          <Route path="/add-germplasm" Component={ AddGermplasmPage } />
          <Route path="/consult-germplasms" Component={ ConsultGermplasmsPage } />
          <Route path="/edit-germplasm/:id" Component={ EditGermplasmPage } />
        </Routes>
        <Footer />
      </GlobalStorage>
    </BrowserRouter>
  );
}

export default App;
