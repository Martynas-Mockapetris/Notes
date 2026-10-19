import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import Create from './pages/Create';
import NoteDetail from './pages/NoteDetail';

const App = () => {
  return (
    <div data-theme="forest">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<Create />} />
        <Route path="/note/:id" element={<NoteDetail />} />
      </Routes>
    </div>
  );
};

export default App;
