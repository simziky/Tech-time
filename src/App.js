
import './App.scss';
import Router from './Routes/route';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <ChakraProvider>
      <Router/>
      </ChakraProvider>
    </div>
  );
}

export default App;
