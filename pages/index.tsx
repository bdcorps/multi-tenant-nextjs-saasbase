import type { NextPage } from "next";
import {
  Box,
  Center,
  Text,
  Input,
  Button,
  Heading,
  Link,
  Container,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <Container maxW="container.md">
      <Header />
      <Center height="100vh" textAlign="center">
        <VStack spacing={10}>
          <Heading>Welcome to the greatest blogging app in the world</Heading>

          <Box>
            <Text fontSize="xl">
              Showcasing brilliant blogs written by our users
            </Text>
          </Box>
          <Button colorScheme="brand">Open app →</Button>
        </VStack>
      </Center>
    </Container>
  );
};

export default Home;
