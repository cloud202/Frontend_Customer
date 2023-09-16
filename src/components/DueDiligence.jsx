import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Flex, FormControl, FormLabel, HStack, Input, Menu, MenuButton, MenuItem, MenuList, Textarea } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import '../css/user/boxShadow.css'
import axios from 'axios'

const DueDiligence = () => {
    const [inScope,setInScope] = useState('Select an option');
    const [adoption,setAdoption] = useState([]);
    const [workloadType,setWorkloadType] = useState([]);
    const [techStack,setTechStack] = useState([]);

    useEffect(()=>{
        async function fetchData(){
        try{
           const adoptionApproach = await axios.get('http://ec2-34-247-84-33.eu-west-1.compute.amazonaws.com:8080/api/admin/master/project_type');
            setAdoption(adoptionApproach.data);

            const workloadType = await axios.get('http://ec2-34-247-84-33.eu-west-1.compute.amazonaws.com:8080/api/admin/master/workload_type');
            setWorkloadType(workloadType.data);

            const techStack = await axios.get('http://ec2-34-247-84-33.eu-west-1.compute.amazonaws.com:8080/api/admin/master/teck_stack');
            setTechStack(techStack.data);

        }catch(e){
            console.log('Error fetching data',e);
        }
    }
        fetchData();
    },[]);
    

  return (
    // <Flex direction="column" p='20px' className='box-shadow'>
    //     <FormControl mb={{base: '8px',sm: '8px', lg: '20px'}} isRequired>
    //         <HStack>
    //       <FormLabel w='25%' fontSize={{base: '14px',sm: '14px',md: '16px', lg: '17px'}} color='gray.600'>Template Name</FormLabel>
    //       <Input w='70%' type="text" placeholder="Enter template name"/>
    //         </HStack>
    //     </FormControl>

    //     <FormControl mb={{base: '8px',sm: '8px', lg: '20px'}} isRequired>
    //         <HStack>
    //       <FormLabel w='25%' fontSize={{base: '14px',sm: '14px',md: '16px', lg: '17px'}} color='gray.600'>Applications/Workloads in scope</FormLabel>
    //       <Menu>
    //         <MenuButton w='70%' as={Button} variant="outline" colorScheme="gray" rightIcon={<ChevronDownIcon />}>
    //           Select an option
    //         </MenuButton>
    //         <MenuList>
    //             <MenuItem>Huehuee</MenuItem>
    //             <MenuItem>Haha</MenuItem>
    //             <MenuItem>Ha</MenuItem>
    //         </MenuList>
    //       </Menu>
    //         </HStack>
    //     </FormControl>

    //     <FormControl mb={{base: '8px',sm: '8px', lg: '20px'}} isRequired>
    //         <HStack>
    //       <FormLabel w='25%' fontSize={{base: '14px',sm: '14px',md: '16px', lg: '17px'}} color='gray.600'>Cloud Adoption Approach</FormLabel>
    //       <Menu>
    //         <MenuButton w='70%' as={Button} variant="outline" colorScheme="gray" rightIcon={<ChevronDownIcon />}>
    //         Select an option
    //         </MenuButton>
    //         <MenuList>
    //             <MenuItem>Huehuee</MenuItem>
    //             <MenuItem>Haha</MenuItem>
    //             <MenuItem>Ha</MenuItem>
    //         </MenuList>
    //       </Menu>
    //         </HStack>
    //     </FormControl>

    //     <FormControl mb={{base: '8px',sm: '8px', lg: '20px'}} isRequired>
    //         <HStack>
    //       <FormLabel w='25%' fontSize={{base: '14px',sm: '14px',md: '16px', lg: '17px'}} color='gray.600'>Application/Workload Type</FormLabel>
    //       <Menu>
    //         <MenuButton w='70%' as={Button} variant="outline" colorScheme="gray" rightIcon={<ChevronDownIcon />}>
    //         Select an option
    //         </MenuButton>
    //         <MenuList>
    //             <MenuItem>Huehuee</MenuItem>
    //             <MenuItem>Haha</MenuItem>
    //             <MenuItem>Ha</MenuItem>
    //         </MenuList>
    //       </Menu>
    //         </HStack>
    //     </FormControl>

    //     <FormControl mb={{base: '8px',sm: '8px', lg: '20px'}} isRequired>
    //         <HStack>
    //       <FormLabel w='25%' fontSize={{base: '14px',sm: '14px',md: '16px', lg: '17px'}} color='gray.600'>Current Tech Stacks</FormLabel>
    //       <Menu>
    //         <MenuButton w='70%' as={Button} variant="outline" colorScheme="gray" rightIcon={<ChevronDownIcon />}>
    //         Select an option
    //         </MenuButton>
    //         <MenuList>
    //             <MenuItem>Huehuee</MenuItem>
    //             <MenuItem>Haha</MenuItem>
    //             <MenuItem>Ha</MenuItem>
    //         </MenuList>
    //       </Menu>
    //         </HStack>
    //     </FormControl>

    //   </Flex>

    <Flex direction="column" p='10px' className='box-shadow'>
    <FormControl mb={{base: '8px',sm: '8px', lg: '10px'}} isRequired>
    <FormLabel fontSize={{base: '14px',sm: '14px',md: '16px', lg: '17px'}} color='gray.700'>Template Name</FormLabel>
    <Input w='100%' type="text" placeholder="Enter template name"/>
    </FormControl>

    <FormControl mb={{base: '8px',sm: '8px', lg: '10px'}} isRequired>
    <FormLabel fontSize={{base: '14px',sm: '14px',md: '16px', lg: '17px'}} color='gray.700'>Applications/Workloads in scope</FormLabel>
    <Menu>
        <MenuButton w='100%' as={Button} variant="outline" colorScheme="gray" color='gray.700' rightIcon={<ChevronDownIcon />}>
        {inScope}
        </MenuButton>
        <MenuList >
            <MenuItem onClick={()=> setInScope('1')}>1</MenuItem>
            <MenuItem onClick={()=> setInScope('2-20')}>2-20</MenuItem>
            <MenuItem onClick={()=> setInScope('21-100')}>21-100</MenuItem>
            <MenuItem onClick={()=> setInScope('100+')}>100+</MenuItem>
        </MenuList>
    </Menu>
    </FormControl>

    <FormControl mb={{base: '8px',sm: '8px', lg: '10px'}} isRequired>
    <FormLabel fontSize={{base: '14px',sm: '14px',md: '16px', lg: '17px'}} color='gray.700'>Cloud Adoption Approach</FormLabel>
    <Menu>
        <MenuButton w='100%' as={Button} variant="outline" colorScheme="gray" color='gray.700' rightIcon={<ChevronDownIcon />}>
        Select an option
        </MenuButton>
        <MenuList>
            {adoption && adoption.map((item,ind)=> <MenuItem key={ind}>{item.name}</MenuItem>)}
        </MenuList>
    </Menu>
    </FormControl>

    <FormControl mb={{base: '8px',sm: '8px', lg: '10px'}} isRequired>
    <FormLabel fontSize={{base: '14px',sm: '14px',md: '16px', lg: '17px'}} color='gray.700'>Application/Workload Type</FormLabel>
    <Menu>
        <MenuButton w='100%' as={Button} variant="outline" colorScheme="gray" color='gray.700' rightIcon={<ChevronDownIcon />}>
        Select an option
        </MenuButton>
        <MenuList>
            {workloadType && workloadType.map((item,ind)=> <MenuItem key={ind}>{item.type_name}</MenuItem>)}
        </MenuList>
    </Menu>
    </FormControl>

    <FormControl isRequired>
    <FormLabel fontSize={{base: '14px',sm: '14px',md: '16px', lg: '17px'}} color='gray.700'>Current Tech Stacks</FormLabel>
    <Menu>
        <MenuButton w='100%' as={Button} variant="outline" colorScheme="gray" color='gray.700' rightIcon={<ChevronDownIcon />}>
        Select an option
        </MenuButton>
        <MenuList>
           {techStack && techStack.map((item,ind)=> <MenuItem key={ind}>{item.teckstack_name}</MenuItem>)}
        </MenuList>
    </Menu>
    </FormControl>

    </Flex>
  )
}

export default DueDiligence