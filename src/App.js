import { BrowserRouter as Router } from 'react-router-dom';

import MainContent from './Layout/MainContent/MainContent';
import Header from './Layout/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <MainContent />
      </Router>
    </div>
  );
}

export default App;
