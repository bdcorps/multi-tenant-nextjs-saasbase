import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
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

  console.log("is site");

  return (
    <>
      <Container maxW="container.md">
        <VStack spacing={10} w="full" align="flex-start">
          <Header />
          <Box>
            <Heading>Viewing Sukhs Blawg</Heading>
            <Text fontSize="large">
              Your users will update their website and add posts here
            </Text>
          </Box>
          <Box p={4} backgroundColor="gray.100" rounded="md" w="full">
            <Text>Edit site data in data/index.ts</Text>
          </Box>
        </VStack>
      </Container>
    </>
  );
  return <>{!site ? <Login onLoggedIn={onLoggedIn} /> : <></>}</>;
};

export default App;
