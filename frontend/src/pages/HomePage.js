import React from 'react'
import { Container,Box,Text,Tab,Tabs,TabList,TabPanel,TabPanels } from '@chakra-ui/react'
import Login from '../components/authentication/Login'
import Signup from '../components/authentication/Signup'

function HomePage() {
  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="0px"
        bg="white"
      >
        <Text fontSize="4xl" fontFamily="Work sans" >
          User Authentication
        </Text>
      </Box>
      <Box w="100%" p={4} borderRadius="lg" borderWidth="0px" textAlign="center" bg="white">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}

export default HomePage
