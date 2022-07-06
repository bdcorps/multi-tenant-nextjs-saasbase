import {
  Box,
  Center,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import AllPosts from "../../components/AllPosts";
import Header from "../../components/Header";
import { Site } from "../../types";
import { getSite } from "../api/sites";

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

        <AllPosts posts={posts} />
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
