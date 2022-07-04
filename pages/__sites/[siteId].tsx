import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Heading,
  HStack,
  Spacer,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import Header from "../../components/Header";

const posts = [
  { title: "Introduction to React 2025" },
  { title: "Introduction to React 2026" },
];

interface PostsProps {}

const Posts: FunctionComponent<PostsProps> = () => {
  return (
    <VStack
      spacing={4}
      w="full"
      divider={<StackDivider borderColor="gray.200" />}
    >
      {posts.map((post: any, i: number) => {
        return (
          <HStack w="full" key={`post_${i}`}>
            <HStack spacing={4} w="full">
              <Text fontWeight={600} color="gray.300">
                {i + 1}
              </Text>
              <Text fontWeight={600}>{post.title}</Text>
            </HStack>
            <Spacer />
            <Button variant="link" color="gray.500">
              Read →
            </Button>
          </HStack>
        );
      })}
    </VStack>
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
