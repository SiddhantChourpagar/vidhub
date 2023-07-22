import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import { Box, Container, Heading, Image, Stack, Text} from '@chakra-ui/react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1girl.jpg';
import img2 from '../assets/3cons.jpg';
import img3 from '../assets/2nremote.avif';
import img4 from '../assets/4sunneon.jpg';
import img5 from '../assets/fun-3d-cartoon-casual-character.jpg';

const headingOptions = {

    position :'absolute',
    left:"24%",
    top: "50%",
    // mx:'auto',
    // my:'auto',
    tranform:'ranslate(-50%,-50%)',
    textTransform:"uppercase",
    p:"4",
    size:"4xl",

}


const Home = () => {
  return (
    <Box >
        <MyCarousel />
        <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
            <Heading 
            textTransform={'uppercases'} 
            py={'2'} 
            w={'fit-content'} 
            borderBottom={'2px solid'} 
            m={'auto'}
            >
            Services</Heading>

            <Stack
            h={'full'}
            p={'4'}
            alignItems={'center'}
            direction={['column', 'row']}
            >

            <Image src={img5} h={['40','400']} ></Image>

            <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>

            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
             with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

            </Text>

            </Stack>
        </Container>
    </Box>
  )
}

const MyCarousel = () => (
    <Carousel 
        autoPlay 
        infiniteLoop 
        interval={2000} 
        showStatus={false} 
        showThumbs={false} 
        showArrows={false}
    >
    <Box w='full' h={"100vh"} >
        <Image src={img1}></Image>
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                Watch the future
        </Heading>
    </Box>

    <Box w="full" h="100vh" >
        <Image src={img2}></Image>
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                gaming is future
        </Heading>
    </Box>

    <Box w="full" h="100vh" >
        <Image src={img3}></Image>
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                gaming on console
        </Heading>
    </Box>

    <Box w="full" h="100vh" >
        <Image src={img4}></Image>
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
              Nightlife is cool
        </Heading>
    </Box>

        
    </Carousel>
)


export default Home;


