import type { NextPage } from "next";
import { Box, Center, Text, Input, Button, VStack } from "@chakra-ui/react";
import React from "react";

const App: NextPage = () => {
  return (
    <Box>
      <Center height="100vh">
        <VStack>
          <Text fontSize="xl">Log in</Text>
          <Text>
            This is a live demo on building a multi-tenant app using Next.js and
            Vercel
          </Text>

          <Input placeholder="demo@saasbase.dev" />
          <Button colorScheme="brand">Sign in</Button>

          <Text>C SaaSBase Inc. 2022</Text>
        </VStack>
      </Center>
    </Box>
  );
};

export default App;
