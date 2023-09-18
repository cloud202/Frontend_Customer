import { ChevronDownIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons';
import { Box, Button, Checkbox, Flex, FormControl, FormLabel, HStack, Input, InputGroup, InputRightElement, Menu, MenuButton, MenuItem, MenuList, Text, Textarea } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import '../css/user/boxShadow.css'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { setFormData } from '../features/formData/dueDiligenceForm';

const DueDiligence = () => {
    const [adoption,setAdoption] = useState([]);
    const [workloadType,setWorkloadType] = useState([]);
    const [techStack,setTechStack] = useState([]);

    const [searchInput, setSearchInput] = useState(''); 
    const [filteredWorkloadType, setFilteredWorkloadType] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const [searchInputTechStack, setSearchInputTechStack] = useState('');
    const [filteredTechStack, setFilteredTechStack] = useState([]);
    const [isDropdownOpenTechStack, setIsDropdownOpenTechStack] = useState(false);


    //redux-logic
    const formData = useSelector((state) => state.formData)
    const dispatch = useDispatch();

    const handleInputChange=(e)=>{
        const {name,value} = e.target;
        dispatch(setFormData({field: name,value}))
    }

    const handleSelect=(field,value)=>{
       setSearchInput('')
        dispatch(setFormData({field,value}))
    }

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleDropdownTechStack = ()=>{
        setIsDropdownOpenTechStack(!isDropdownOpenTechStack);
    }


    useEffect(()=>{
        async function fetchData(){
        try{
           const adoptionApproach = await axios.get('http://ec2-34-247-84-33.eu-west-1.compute.amazonaws.com:8080/api/admin/master/project_type');
            setAdoption(adoptionApproach.data);

            const workloadType = await axios.get('http://ec2-34-247-84-33.eu-west-1.compute.amazonaws.com:8080/api/admin/master/workload_type');
            setWorkloadType(workloadType.data);
            setFilteredWorkloadType(workloadType.data);

            const techStack = await axios.get('http://ec2-34-247-84-33.eu-west-1.compute.amazonaws.com:8080/api/admin/master/teck_stack');
            setTechStack(techStack.data);
            setFilteredTechStack(techStack.data);

        }catch(e){
            console.log('Error fetching data',e);
        }
    }
        fetchData();

    },[]);

    useEffect(() => {
        if (!searchInput) {
            if (workloadType) {
                setFilteredWorkloadType(workloadType);
            }
        } else {
            if (workloadType) {
                const filteredOptions = workloadType.filter(item =>
                    item.type_name.toLowerCase().includes(searchInput.toLowerCase())
                );
                setFilteredWorkloadType(filteredOptions);
            }
        }
    }, [searchInput, workloadType]);

    useEffect(() => {
        if (!searchInputTechStack) {
            if (techStack) {
                setFilteredTechStack(techStack);
            }
        } else {
            if (techStack) {
                const filteredOptions = techStack.filter((item) =>
                    item.teckstack_name.toLowerCase().includes(searchInputTechStack.toLowerCase())
                );
                setFilteredTechStack(filteredOptions);
            }
        }
    }, [searchInputTechStack, techStack]);
    
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
    <>
    <Text mb='15px' textAlign='center' p='5px' bg='#389785' color='white' borderRadius='5px' fontSize={{ base: '16px', sm: '18px',md: '25px', lg: '25px' }}>
        Begin Your Project Journey & Let's Start With Quick Due Diligence
      </Text>

    <Flex direction="column" p='10px' className='box-shadow'>
        
    <FormControl mb={{base: '8px',sm: '8px', lg: '10px'}} isRequired>
    <FormLabel fontSize={{base: '14px',sm: '14px',md: '16px', lg: '17px'}} color='gray.700'>Template Name</FormLabel>
    <Input w='100%' type="text" placeholder="Enter template name" name='name' value={formData.name} onChange={(e)=> handleInputChange(e)} />
    </FormControl>

    <FormControl mb={{base: '8px',sm: '8px', lg: '10px'}} isRequired>
    <FormLabel fontSize={{base: '14px',sm: '14px',md: '16px', lg: '17px'}} color='gray.700'>Applications/Workloads in scope</FormLabel>
    <Menu>
        <MenuButton w='100%' as={Button} variant="outline" colorScheme="gray" color='gray.700' rightIcon={<ChevronDownIcon />}>
        {formData.workloadInScope}
        </MenuButton>
        <MenuList >
            <MenuItem onClick={()=> handleSelect('workloadInScope',"1")}>1</MenuItem>
            <MenuItem onClick={()=> handleSelect('workloadInScope',"2-20")}>2-20</MenuItem>
            <MenuItem onClick={()=> handleSelect('workloadInScope',"21-100")}>21-100</MenuItem>
            <MenuItem onClick={()=> handleSelect('workloadInScope',"100+")}>100+</MenuItem>
        </MenuList>
    </Menu>
    </FormControl>

    <FormControl mb={{base: '8px',sm: '8px', lg: '10px'}} isRequired>
    <FormLabel fontSize={{base: '14px',sm: '14px',md: '16px', lg: '17px'}} color='gray.700'>Cloud Adoption Approach</FormLabel>
    <Menu>
        <MenuButton w='100%' as={Button} variant="outline" colorScheme="gray" color='gray.700' rightIcon={<ChevronDownIcon />}>
        {formData.cloudApproach}
        </MenuButton>
        <MenuList>
            {adoption && adoption.map((item,ind)=> <MenuItem key={ind} onClick={()=> handleSelect('cloudApproach',item.name)}>{item.name}</MenuItem>)}
        </MenuList>
    </Menu>
    </FormControl>

    <FormControl mb={{ base: '8px', sm: '8px', lg: '10px' }} isRequired>
    <FormLabel fontSize={{ base: '14px', sm: '14px', md: '16px', lg: '17px' }} color='gray.700'>
        Application/Workload Type
    </FormLabel>
    <Flex flexDir='column'  >
        <Flex flexDirection='row' mb='2' wrap='wrap'>
            {formData.workloadType.map((workloadType,ind)=> <>
                <Box key={ind} m='2px' mr='4px' bg='gray.200' p='1px' pl='10px' pr='10px' borderRadius='20px'>
                    {workloadType}
                    </Box>
                </>)}
        </Flex>
        <InputGroup>
                <Input
                    placeholder="Search..."
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onFocus={() => setIsDropdownOpen(true)}
                    onBlur={()=> setTimeout(() => {
                        setIsDropdownOpen(false);
                    }, 200)}
                    pr="4.5rem"
                />
                <InputRightElement width="4.5rem">
                <Button
                    size="sm"
                    rightIcon={<SearchIcon />}
                    onClick={() => {setSearchInput(''); toggleDropdown()}}
                    variant="ghost"
                    aria-label="Clear search"
            
                />
                </InputRightElement>
            </InputGroup>
                {
                isDropdownOpen && 
                <Flex flexDir='column' >
                            {
                            filteredWorkloadType.map((item, ind) => (
                                <Checkbox
                                key={ind}
                                isChecked={formData.workloadType.includes(item.type_name)}
                                onChange={(e) => {e.stopPropagation(); handleSelect('workloadType', item.type_name)}}
                                colorScheme="teal"
                            >
                                {item.type_name}
                            </Checkbox>
                            ))}
                </Flex>
                }
            </Flex>
</FormControl>

<FormControl mb={{ base: '8px', sm: '8px', lg: '10px' }} isRequired>
    <FormLabel fontSize={{ base: '14px', sm: '14px', md: '16px', lg: '17px' }} color='gray.700'>
        Tech Stacks
    </FormLabel>
    <Flex flexDirection='column'>
        <Flex flexDirection='row' mb='2' wrap='wrap'>
            {formData.techStack.map((techStack, ind) => (
                <Box
                    key={ind}
                    m='2px'
                    mr='4px'
                    bg='gray.200'
                    p='1px'
                    pl='10px'
                    pr='10px'
                    borderRadius='20px'
                >
                    {techStack}
                </Box>
            ))}
        </Flex>
        <InputGroup>
            <Input
                placeholder="Search..."
                value={searchInputTechStack}
                onChange={(e) => setSearchInputTechStack(e.target.value)}
                onFocus={() => setIsDropdownOpenTechStack(true)}
                onBlur={() =>
                    setTimeout(() => {
                        setIsDropdownOpenTechStack(false);
                    }, 200)
                }
                pr="4.5rem"
            />
            <InputRightElement width="4.5rem">
                <Button
                    size="sm"
                    rightIcon={<SearchIcon />}
                    onClick={() => {
                        setSearchInputTechStack('');
                        toggleDropdownTechStack();
                    }}
                    variant="ghost"
                    aria-label="Clear search"
                />
            </InputRightElement>
        </InputGroup>
        {isDropdownOpenTechStack && (
            <Flex flexDir='column'>
                {filteredTechStack.map((item, ind) => (
                    <Checkbox
                        m='1px'
                        _hover={{ bg: 'gray.200', cursor: 'pointer' }}
                        key={ind}
                        isChecked={formData.techStack.includes(item.techstack_name)}
                        onChange={() => {
                            handleSelect("techStack",item.teckstack_name);
                        }}
                    >
                        {item.teckstack_name}
                    </Checkbox>
                ))}
            </Flex>
        )}
    </Flex>
</FormControl>

    </Flex>
    </>
  )
}

export default DueDiligence