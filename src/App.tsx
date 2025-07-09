import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './routes/HomePage/HomePage';
import PracticePage from './routes/PracticePage/PracticePage';

import './index.css';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="practice/:categoryId?" element={<PracticePage />} />
      <Route path="*" element={<Navigate to="/practice" />} />
    </Route>
  </Routes>
);

export default App;
