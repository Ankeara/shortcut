import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext';
import Container from './components/container/Container';
import "./App.css"
import { ChakraProvider } from '@chakra-ui/react'
function App() {

  return (
    <ChakraProvider>
    <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Container />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App
