import {
  Container,
  HStack,
  LinkBox,
  LinkOverlay,
  Spacer,
  VStack,
  Image,
  Text,
  Box,
  Button,
  Heading,
  Center,
  Divider,
} from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import Header from "../../components/Header";

interface PostsProps {}

const Posts: FunctionComponent<PostsProps> = () => {
  return (
    <HStack w="full">
      <HStack spacing={4} w="full">
        <Text fontWeight={600} color="gray.300">
          1
        </Text>
        <Text fontWeight={600}>Introduction to React 2025</Text>
      </HStack>

      <Spacer />
      <Button variant="link" color="Background.500">
        Read →
      </Button>
    </HStack>
  );
};

interface SiteIndexProps {}

const SiteIndex: FunctionComponent<SiteIndexProps> = () => {
  return (
    <Container maxW="container.md">
      <VStack spacing={10} w="full" align="flex-start">
        <Header />
        <Center height="35vh">
          <Box>
            <Heading>Sukhpal Saini</Heading>
            <Text>Full Stack Dev at Apple</Text>
          </Box>
        </Center>

        <VStack spacing={4} w="full" align="flex-start">
          <Box>
            <Text fontSize="xl" fontWeight={600}>
              Featured Posts
            </Text>
            <Text color="gray.600">Summary top posts in one place</Text>
          </Box>

          <Divider />

          <Posts />
        </VStack>

        <Box> </Box>
      </VStack>
    </Container>
  );
};

export default SiteIndex;
