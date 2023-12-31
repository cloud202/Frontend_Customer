import React, { useEffect } from 'react'
import {Navbar} from '../components/Navbar'
import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import '../css/user/customerDashboard.css'
import customerDesign from '../img/customerDesign.png'
import { useDispatch } from 'react-redux'
import { resetFormData } from '../features/formData/dueDiligenceForm'


const CustomerDashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetFormData());
  }, [])
  
  return (
    <>
    <Navbar/>
    <Grid templateColumns="repeat(6,1fr)">
        <GridItem colSpan={{lg: '1' }}>
          <Box w={{ base: 'none',sm: 'none', md: 'none', lg: '230px' }}>
            <Sidebar/>
          </Box>
        </GridItem>

        <GridItem colSpan={{base: '6', sm: '6', md: '6',lg: '5' }} className= "project-background" >
          <Box className='dashboard-shadow' display='flex' flexDirection='column' alignItems='center' justifyContent='center' textAlign='center' mt={{base: '14px',lg: '6px'}} mb={{base: '22px'}} mr={{base: '5px',sm: '8px',lg: '12px'}} ml={{base: '5px',sm: '8px',lg: '40px'}}>
          <Text className='sub-title' fontSize={{ base: '14px',sm: '20px', md: '24px', lg: '28px' }} fontWeight={400} >Welcome to modX, Define Modernization Journey For Your Customer</Text>
          <Image src={customerDesign} w={{ base: '100%', lg: '80%' }}/>
          {/* <Flex flexDirection='row'>
            <Image src={step2}/>
            <Image src={step3}/>
          </Flex> */}
          </Box>

          <Box className='dashboard-shadow' p={{ base: '6px',sm: '6px', md: '6px', lg: '2px' }}  mr={{base: '5px',sm: '8px',lg: '12px'}} ml={{base: '5px',sm: '8px',lg: '40px'}} mb='16px'>
            <Text className='sub-title' fontSize={{ base: '16px', md: '20px', lg: '22px' }}  mt={{ base: '6px',sm: '6px', md: '6px', lg: '12px' }} >Project Templates</Text>
          </Box>
            <Footer/>    
        </GridItem>
      </Grid>

    </>
  )
}

export default CustomerDashboard