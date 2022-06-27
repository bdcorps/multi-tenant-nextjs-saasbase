import { useRouter } from "next/router";
import React, { FunctionComponent } from "react";
import { Post, Site } from "../../types";
import { getSite } from "../api/hello";
import {
  Text,
  HStack,
  Box,
  Button,
  Center,
  Container,
  SimpleGrid,
  Spacer,
  VStack,
  Image,
} from "@chakra-ui/react";

interface SiteProps {
  site: Site; //TODO: add type
}

const Site: FunctionComponent<SiteProps> = ({
  site: { name, description, posts },
}: SiteProps) => {
  return (
    <Container maxW="container.md" p={4}>
      <HStack py={2} spacing={6} align="center">
        <HStack spacing={2}>
          <Text fontWeight={600} fontSize="md" color="brand.500">
            {name}
          </Text>
        </HStack>
        <Spacer />
      </HStack>

      <VStack spacing={10}>
        <Center>
          <Box textAlign="center">
            <Text fontSize="xl" fontWeight={600}>
              {description}
            </Text>
          </Box>
          {/* <Box textAlign="center">
            <Text>{description}</Text>
          </Box> */}
        </Center>

        <VStack spacing={10} align="flex-start" w="full">
          {posts.map((post: Post, i: number) => {
            return (
              <VStack
                w="full"
                spacing={2}
                align="flex-start"
                key={`product_${i}`}
              >
                <Box
                  p={4}
                  _hover={{ backgroundColor: "gray.50" }}
                  w="full"
                  rounded="md"
                >
                  <Text fontWeight={600}>{post.name}</Text>
                  <Text>{post.description}</Text>

                  <Button
                    onClick={() => {}}
                    variant="link"
                    size="sm"
                    color="brand.500"
                  >
                    + Read more
                  </Button>
                </Box>
              </VStack>
            );
          })}
        </VStack>
      </VStack>
    </Container>
  );
};

export async function getServerSideProps(context: any) {
  const { siteId } = context.query;
  const site = await getSite(siteId);

  return {
    props: { site },
  };
}

export default Site;
