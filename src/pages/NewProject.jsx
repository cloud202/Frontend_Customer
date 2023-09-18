import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Box, Button, Flex, Grid, GridItem, Progress, Text } from '@chakra-ui/react'
import Sidebar from '../components/Sidebar'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import DueDiligence from '../components/DueDiligence'
import SelectTemplate from '../components/SelectTemplate'

const NewProject = () => {
  const [currPage,setCurrPage] = useState(1);

  const handleNext = ()=>{
    setCurrPage(currPage+1);
  }

  const handlePrevious = ()=>{
    setCurrPage(currPage-1);
  }
  return (
    <>
    <Navbar/>
    <Grid templateColumns="repeat(6,1fr)">
      <GridItem colSpan="1">
      <Box w={{ base: 'none',sm: 'none', md: 'none', lg: '255px' }}>
          <Sidebar/>
        </Box>
      </GridItem>

      <GridItem colSpan={{base: '6', sm: '6', md: '6',lg: '5' }} m="25px" mt='15px'>
        {/* <Progress value={100/5 * currPage} size='md' colorScheme='green' mb='10px'/> */}

        {currPage===1 && <DueDiligence/>}
        {currPage===2 && <SelectTemplate/>}

        <Flex justifyContent="space-between" alignItems="center" mt='15px'>
          <Button isDisabled={currPage===1} leftIcon={<ArrowBackIcon />} onClick={handlePrevious} colorScheme='teal' variant='outline' >Previous</Button>
          <Button isDisabled={currPage===2} rightIcon={<ArrowForwardIcon/>} onClick={handleNext} colorScheme='teal' variant='outline' >
            Get Template
          </Button>
        </Flex>

    </GridItem>
    </Grid>
    </>
  )
}

export default NewProject