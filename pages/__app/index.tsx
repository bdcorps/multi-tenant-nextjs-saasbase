import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import React, { useState } from "react";
import Header from "../../components/Header";
import Login from "../../components/Login";
import { Site } from "../../types";

const App: NextPage = () => {
  const [site, setSite] = useState<Site | null>(null);

  const onLoggedIn = (site: Site) => {
    setSite(site);
  };

  return (
    <>
      {!site ? (
        <Login onLoggedIn={onLoggedIn} />
      ) : (
        <Container maxW="container.md">
          <VStack spacing={10} w="full" align="flex-start">
            <Header />
            <HStack w="full">
              <Box>
                <Heading>Viewing Sukh&apos;s Blawg</Heading>
                <Text fontSize="large" color="gray.500">
                  Update your website and create new posts here
                </Text>
              </Box>
              <Spacer />
              <Button>Log out</Button>
            </HStack>
            <Box p={4} backgroundColor="gray.100" rounded="md" w="full">
              <Text>Edit site data in data/index.ts</Text>
            </Box>
          </VStack>
        </Container>
      )}
    </>
  );
};

export default App;
