import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext';
import Container from './components/container/Container';
import "./App.css"

function App() {

  return (
   <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Container />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App
