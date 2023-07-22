import React from 'react';
import { Box, Button, HStack, Heading,Input,Stack, VStack,Text,} from '@chakra-ui/react';
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return (

    <Box 
        bgColor={'blackAlpha.900'} 
        minH={'40'} 
        p='16' 
        color={'white'} 
        >

    <Stack direction={['column', 'row']}>

    <VStack 
        alignItems={'stretch'} 
        w={'full'} 
        px={'4'}
        >
        <Heading 
            size={'md'} 
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
            >
            Subscribes to get updates
        </Heading>
        <HStack 
            borderBottom={'2px solid white'} 
            py={'2'}
            >

            <Input 
                placeholder='Enter your email...' 
                border={'none'} 
                borderRadius="none" 
                outline={'none'}
                focusBorderColor={'none'}
                >
            </Input> 
            <Button 
                p={'0'}
                colorScheme={'purple'}
                variant={'ghost'}
                borderRadius={'0 20px 20px 0'}
            >
                <AiOutlineSend 
                size={20}
                >
                </AiOutlineSend>

            </Button>

        </HStack>

    </VStack>

    <VStack 
        w={'full'} 
        borderLeft={['none','1px solid white']}
        borderRight={['none','1px solid white']}
        >
        <Heading 
            textTransform={'uppercase'}
            textAlign={'center'}
        >
        Video hub  
        </Heading>
        <Text>All rights reserved</Text>

    </VStack>

    <VStack w={'full'}>

    <Heading 
        size={'md'} 
        textTransform={'uppercase'}
        >
        Social media
    </Heading>
    <Button 
        variant={'link'}
        colorScheme='whitealpha'
        >
        <a target='blank' href='https://youtube.com/6packprogrammer'>Youtube</a>
        </Button>

        <Button 
        variant={'link'}
        colorScheme='whitealpha'
        >
        <a target='blank' href='https://instagram.com/6packprogrammer'>Instagram</a>
        </Button>

        <Button 
        variant={'link'}
        colorScheme='whitealpha'
        >
        <a target='blank' href='https://github.com/meabhisingh'>Github</a>
        </Button>

    </VStack>

    </Stack>

    </Box>

    )
}

export default Footer