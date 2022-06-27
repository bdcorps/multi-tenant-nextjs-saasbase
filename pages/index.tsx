import type { NextPage } from "next";
import {
  Box,
  Center,
  Text,
  Input,
  Button,
  Heading,
  Link,
} from "@chakra-ui/react";
import React from "react";

const Home: NextPage = () => {
  return (
    <Box>
      <Center height="100vh">
        <Heading>Welcome to the greatest blogging app in the world</Heading>

        <Box>
          <Text>Showcasing brilliant blogs written by our users</Text>

          <Box backgroundColor="gray.100">
            <Text>Sukh Blog</Text>
            <Link href="https://sukh.blogly.com">View more</Link>
          </Box>

          <Box backgroundColor="gray.100">
            <Text>Ashi Blog</Text>
            <Link href="https://ashi.blogly.com">View more</Link>
          </Box>
        </Box>
        <Button colorScheme="brand">Open app</Button>
      </Center>
    </Box>
  );
};

export default Home;
