import { Flex, Text, Icon } from '@chakra-ui/react';
import { BiCopyright } from 'react-icons/bi';

export const Footer = () => {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      position='fixed'
      bottom='0'
      w='100%'
      bg='gray.100'
      padding='10px 20px'
    >
      <Icon as={BiCopyright} h={4} marginRight='5px' />
      <Text>Made by Bay Grove</Text>
    </Flex>
  );
};
