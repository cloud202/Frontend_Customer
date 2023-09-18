import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import '../css/user/table.css'
import '../css/user/boxShadow.css'

const SelectTemplate = () => {
  return (
    <>
       <Text mb='15px' textAlign='center' p='5px' bg='#389785' color='white' borderRadius='5px' fontSize={{ base: '16px', sm: '18px',md: '25px', lg: '25px' }}>
       Thanks! for completing Due Diligence
      </Text>

      <Flex direction="column" p='10px' className='box-shadow'>
      <Text mb='15px' p='5px' borderRadius='5px' fontSize={{ base: '16px', sm: '18px',md: '25px', lg: '25px' }}>
      Recommended Cloud Adoption Template
      </Text>
      
      <table>
    <tr>
      <th>Project Template</th>
      <th>AS IS -{`>`} TO BE</th>
      <th>Operation</th>
    </tr>

    <tr>
      <td>Modernize workload on AWS container</td>
      <td>.NET MSSQL to AWS EC2 with app runner</td>
      <td>Select</td>
    </tr>

    <tr>
      <td>Modernize workload on AWS container</td>
      <td>.NET MSSQL to AWS EC2 with app runner</td>
      <td>Select</td>
    </tr>

    <tr>
      <td>Modernize workload on AWS container</td>
      <td>.NET MSSQL to AWS EC2 with app runner</td>
      <td>Select</td>
    </tr>
    
  </table>
      </Flex>
    </>
  )
}

export default SelectTemplate