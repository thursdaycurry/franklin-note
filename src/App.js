import { Route, Routes } from 'react-router-dom';
import NotePage from './pages/NotePage';
import HomePage from './pages/HomePage';
import Layout from './pages/Layout';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/note" element={<NotePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
};

export default App;
