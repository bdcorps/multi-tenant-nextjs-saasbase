import {
  Box,
  Button,
  Center,
  Container,
  Input,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import React from "react";

const App: NextPage = () => {
  return (
    <Box>
      <Center height="100vh">
        <Container maxW={400} centerContent align="center">
          <VStack spacing={6}>
            <Text fontSize="xl" fontWeight={600}>
              Log in
            </Text>
            <Text>
              This is a live demo on building a multi-tenant app using Next.js
              and Vercel
            </Text>

            <Input placeholder="demo@saasbase.dev" />
            <Button colorScheme="brand">Sign in</Button>

            <Link href="https://saasbase.dev">Built by SaaSBase</Link>
          </VStack>
        </Container>
      </Center>
    </Box>
  );
};

export default App;
