import {
  Box,
  Container,
  Heading,
  HStack,
  Link,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import React, { useState } from "react";
import AllPosts from "../../components/AllPosts";
import Header from "../../components/Header";
import Login from "../../components/Login";
import { Site } from "../../types";

const App: NextPage = () => {
  const [site, setSite] = useState<Site | null>(null);

  const onLoggedIn = (site: Site) => {
    setSite(site);
  };

  if (!site) {
    return <Login onLoggedIn={onLoggedIn} />;
  }
  const { name, subdomain, posts } = site;

  return (
    <>
      <Container maxW="container.md">
        <VStack spacing={10} w="full" align="flex-start">
          <Header />
          <HStack w="full">
            <Box>
              <Heading>Viewing {name}&apos;s Blawg</Heading>
              <Text fontSize="large" color="gray.500">
                Update your website and create new posts here
              </Text>
            </Box>
            <Spacer />
            <Link colorScheme="brand" href={`${subdomain}.blawg.cc`}>
              Visit Blog
            </Link>
          </HStack>

          <AllPosts posts={posts} />
          <Box p={4} backgroundColor="gray.100" rounded="md" w="full">
            <Text>
              This site data is hard-coded. Update post contents by modifying
              data/index.ts.
            </Text>
          </Box>
        </VStack>
      </Container>
    </>
  );
};

export default App;
