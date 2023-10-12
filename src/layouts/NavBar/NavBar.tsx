import { Flex, Text, Icon } from '@chakra-ui/react';
import { GiMusicalNotes } from 'react-icons/gi';

export const NavBar = () => {
  return (
    <Flex
      alignItems='center'
      justifyContent='center'
      bg='blue.100'
      padding='10px 20px'
    >
      <Icon as={GiMusicalNotes} w={7} h={7} marginRight={2} />
      <Text fontSize='lg'>Transpose Chords Tool</Text>
    </Flex>
  );
};
