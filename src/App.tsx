import { Flex } from '@chakra-ui/react';
import { TranposeChords } from './components/TranposeChords';
import { NavBar } from './layouts/NavBar';
import { Footer } from './layouts/Footer';

function App() {
  return (
    <Flex flexDirection='column' minHeight='100%'>
      <NavBar />
      <Flex flexDirection='column' padding='10px 20px' marginTop='20px'>
        <TranposeChords />
      </Flex>
      <Footer />
    </Flex>
  );
}

export default App;
