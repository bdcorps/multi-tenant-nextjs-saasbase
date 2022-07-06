import {
  Box,
  Divider,
  Flex,
  HStack,
  Link,
  Spacer,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/layout";
import React, { FunctionComponent } from "react";
import { Post } from "../../types";

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
            <HStack spacing={4} w="full" flex={7} align="flex-start">
              <Text fontWeight={500} color="gray.300">
                {i + 1}
              </Text>
              <Text fontWeight={500}>{post.title}</Text>
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

interface AllPostsProps {
  posts: Post[];
}

const AllPosts: FunctionComponent<AllPostsProps> = ({
  posts,
}: AllPostsProps) => {
  return (
    <VStack spacing={4} w="full" align="flex-start">
      <Box>
        <Text fontSize="xl" fontWeight={600}>
          All Posts
        </Text>
      </Box>

      <Divider />

      <Posts posts={posts} />
    </VStack>
  );
};

export default AllPosts;
