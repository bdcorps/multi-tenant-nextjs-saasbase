import {
  Box,
  Center,
  Container,
  Heading,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import React from "react";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <Container maxW="container.md">
      <Header />
      <Center height="100vh" textAlign="center">
        <VStack spacing={4}>
          <VStack spacing={10}>
            <Heading>Welcome to the greatest blogging app in the world</Heading>
            <Box>
              <Text fontSize="xl">
                Showcasing brilliant blogs written by our users
              </Text>
            </Box>
          </VStack>
          <Link colorScheme="brand" href="https://app.blawg.cc">
            Open app →
          </Link>
        </VStack>
      </Center>
    </Container>
  );
};

export default Home;
