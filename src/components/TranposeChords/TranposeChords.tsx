import { useState } from 'react';
import {
  Select,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Center,
  Text,
} from '@chakra-ui/react';
import { keyToChords, KeyToChordsT } from '../../data';

export const TranposeChords = () => {
  const [baseKey, setBaseKey] = useState<KeyToChordsT | ''>('');
  const [newKey, setNewKey] = useState<KeyToChordsT | ''>('');

  return (
    <Flex w='100%' flexDirection='column' alignItems='center'>
      <Text fontWeight='bold' fontSize='lg' align='center' marginBottom='20px'>
        Tranpose Chords
      </Text>
      <Flex justifyContent='center' gap='10px' marginBottom='20px'>
        <FormControl variant='floating'>
          <Select
            onChange={(e: any) => setBaseKey(e.target.value)}
            placeholder='Choose a key'
            value={baseKey}
          >
            <option value='C'>C</option>
            <option value='D'>D</option>
            <option value='E'>E</option>
            <option value='F'>F</option>
            <option value='G'>G</option>
            <option value='A'>A</option>
            <option value='B'>B</option>
          </Select>
          <FormLabel>Base Key</FormLabel>
        </FormControl>

        <FormControl variant='floating'>
          <Select
            onChange={(e: any) => setNewKey(e.target.value)}
            placeholder='Choose a key'
            value={newKey}
          >
            <option value='C'>C</option>
            <option value='D'>D</option>
            <option value='E'>E</option>
            <option value='F'>F</option>
            <option value='G'>G</option>
            <option value='A'>A</option>
            <option value='B'>B</option>
          </Select>
          <FormLabel>New Key</FormLabel>
        </FormControl>
      </Flex>

      <Flex justifyContent='center' gap='5px'>
        {(baseKey || newKey) && (
          <Grid templateColumns='50px' gap={1}>
            {[1, 2, 3, 4, 5, 6, 7].map((note) => (
              <GridItem bg='gray.100'>
                <Text fontWeight='bold' fontSize='xl'>
                  <Center w='50px' h='50px'>
                    {note}
                  </Center>
                </Text>
              </GridItem>
            ))}
          </Grid>
        )}

        {baseKey && (
          <Grid templateColumns='50px' gap={1}>
            {keyToChords[baseKey].map((note, i) => (
              <GridItem bg={i === 0 ? 'pink.100' : 'blue.100'}>
                <Center w='50px' h='50px'>
                  <Text fontWeight={i === 0 ? 'bold' : 'regular'} fontSize='xl'>
                    {note}
                  </Text>
                </Center>
              </GridItem>
            ))}
          </Grid>
        )}
        {newKey && (
          <Grid templateColumns='50px' gap={1}>
            {keyToChords[newKey].map((note, i) => (
              <GridItem bg={i === 0 ? 'pink.100' : 'blue.100'}>
                <Center w='50px' h='50px'>
                  <Text fontWeight={i === 0 ? 'bold' : 'regular'} fontSize='xl'>
                    {note}
                  </Text>
                </Center>
              </GridItem>
            ))}
          </Grid>
        )}
      </Flex>
    </Flex>
  );
};
