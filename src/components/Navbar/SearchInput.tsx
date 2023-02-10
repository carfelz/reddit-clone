import React from 'react';
import { Flex, InputLeftElement, Input, InputGroup } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

type SearchInputProps = {
    // user: ''
};

const SearchInput:React.FC<SearchInputProps> = () => {
    
    return (
        <>
            <Flex flexGrow={1} ml={2} mr={2} align='center'>
                <InputGroup>
                    <InputLeftElement
                    pointerEvents='none'
                    children={<SearchIcon mb={1} color="gray.300" />}
                    />
                    <Input
                        placeholder='Search Reddit'
                        fontSize='10pt'
                        _placeholder={{color: "gray.500"}}
                        _hover={{
                            bg: "white",
                            border: "1px solid",
                            borderColor: 'blue.500'
                        }}
                        _focus={{
                            outline: 'none',
                            border: '1px solid',
                            borderColor: 'blue.500'
                        }}
                        height='34px'
                        bg='gray.50'
                    />
                </InputGroup>
            </Flex>
        </>
    )
}
export default SearchInput;