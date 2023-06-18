import { Flex, Text, Icon } from '@chakra-ui/react';
import { TbBuildingChurch } from 'react-icons/tb';
import { HiMenu } from 'react-icons/hi';

export const NavBar = () => {
  return (
    <Flex
      alignItems='center'
      justifyContent='space-between'
      bg='blue.100'
      padding='10px 20px'
    >
      <Icon as={TbBuildingChurch} w={7} h={7} />
      <Text fontSize='lg'>Transpose Chords Tool</Text>
      <Icon as={HiMenu} w={7} h={7} />
    </Flex>
  );
};
