import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Link,
  Spacer,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import Header from "../../components/Header";
import { Post, Site } from "../../types";
import { getSite } from "../api/sites";

interface PostsProps {
  posts: Post[];
}

const Posts: FunctionComponent<PostsProps> = ({ posts }: PostsProps) => {
  return (
    <VStack
      spacing={4}
      w="full"
      divider={<StackDivider borderColor="gray.200" />}
    >
      {posts.map((post: any, i: number) => {
        return (
          <Flex w="full" key={`post_${i}`}>
            <HStack spacing={4} w="full" flex={7}>
              <Text fontWeight={600} color="gray.300">
                {i + 1}
              </Text>
              <Text fontWeight={600}>{post.title}</Text>
            </HStack>
            <Spacer />
            <Link href={post.link} color="gray.700" flex={1} textAlign="end">
              Read →
            </Link>
          </Flex>
        );
      })}
    </VStack>
  );
};

interface SiteIndexProps {
  site: Site;
}

const SiteIndex: FunctionComponent<SiteIndexProps> = ({
  site: { name, description, subdomain, posts },
}: SiteIndexProps) => {
  return (
    <Container maxW="container.md">
      <VStack spacing={10} w="full" align="center">
        <Header />
        <Center height="20vh">
          <Box>
            <Heading fontSize="xx-large">{name}</Heading>
            <Text align="center">{description}</Text>
          </Box>
        </Center>

        <VStack spacing={4} w="full" align="flex-start">
          <Box>
            <Text fontSize="xl" fontWeight={600}>
              All Posts
            </Text>
          </Box>

          <Divider />

          <Posts posts={posts} />
        </VStack>

        <Box> </Box>
      </VStack>
    </Container>
  );
};

export async function getServerSideProps({ params }: any) {
  const { siteId } = params;

  const site1: Site | null = await getSite(siteId);

  const props: any = { site: site1 };
  return {
    props,
  };
}

export default SiteIndex;
