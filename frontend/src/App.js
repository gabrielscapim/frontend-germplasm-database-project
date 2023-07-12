import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AddGermplasmPage from './pages/AddGermplasmPage/AddGemplasmPage';
import ConsultGermplasmsPage from './pages/ConsultGermplasmsPage/ConsultGermplasmsPage';
import './App.css';
import { GlobalStorage } from './context/GlobalContext';
import EditGermplasmPage from './pages/EditGermplasmPage/EditGermplasmPage';
import LoginPage from './pages/LoginPage/LoginPage';
import PrivateRoutes from './pages/RedirectRoutes/PrivateRoutes';
import LoginRedirect from './pages/RedirectRoutes/LoginRedirect';

function App() {
  const dateNow = Date.now();
  const tokenGenerationTime = localStorage.getItem('tokenGenerationTime');
  const TOKEN_EXPIRATION_TIME = 7200000;

  if (tokenGenerationTime && (dateNow - tokenGenerationTime > TOKEN_EXPIRATION_TIME)) {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenGenerationTime');
  }

  return (
    <BrowserRouter>
      <GlobalStorage>
        <Routes>
          <Route element={ <LoginRedirect /> }>
            <Route path="*" element={ <Navigate to="login" replace /> } />
            <Route exact path="/login" Component={ LoginPage } />
          </Route>

          <Route element={ <PrivateRoutes /> }>
            <Route exact path="/add-germplasm" Component={ AddGermplasmPage } />
            <Route exact path="/consult-germplasms" Component={ ConsultGermplasmsPage } />
            <Route exact path="/edit-germplasm/id/:id" Component={ EditGermplasmPage } />
          </Route>
        </Routes>
      </GlobalStorage>
    </BrowserRouter>
  );
}

export default App;
