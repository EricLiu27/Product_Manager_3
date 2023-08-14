import './App.css';
import { Routes, Route } from 'react-router-dom';
// import CreatePage from './views/CreatePage';
import Main from './views/Main';
import DetailsPage from './views/DetailsPage';
import EditPage from './views/EditPage';

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Routes>
        <Route path="/products" element={<Main />} />
        <Route path="/products/:id" element={<DetailsPage />} />
        <Route path="/products/:id/edit" element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
