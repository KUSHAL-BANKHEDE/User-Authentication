import React, { useState ,useEffect } from 'react'
import axios from 'axios'
import { Container,Box,Text,UnorderedList, ListItem} from '@chakra-ui/react'


const ListPage = () => {

  const [userList, setUserList] = useState([]);


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user'); 
        setUserList(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };

    fetchUserData();
  }, []);

  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        w="100%"
        m="40px 0 10px 0"
        borderRadius="lg"
        borderWidth="0px"
        bg="white"
      >
        <Text fontSize="4xl" fontFamily="Work sans" >
          User List
        </Text>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        w="100%"
        borderRadius="lg"
        borderWidth="1px"
        bg="white"
      >
        <UnorderedList>
          {userList.map((user) => (
            <ListItem fontSize="2xl" key={user._id}>{user.name}</ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Container>
  )
}

export default ListPage