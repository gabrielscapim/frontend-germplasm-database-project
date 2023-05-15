import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import AddGermplasmPage from './pages/AddGermplasmPage/AddGemplasmPage';
import ConsultGermplasmsPage from './pages/ConsultGermplasmsPage/ConsultGermplasmsPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const root = createRoot(document.getElementById('root'));

function App() {
  root.render(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/add-germplasm" Component={ AddGermplasmPage } />
        <Route path="/consult-germplasms" Component={ ConsultGermplasmsPage } />
      </Routes>
      <Footer />
    </BrowserRouter>,
  );
}

export default App;
