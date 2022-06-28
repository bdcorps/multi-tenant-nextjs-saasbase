import React, { FunctionComponent } from "react";
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

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <HStack py={2} spacing={6} align="center" w="full">
      <HStack spacing={2} w="full">
        <Image src="./headphones.svg" w={4}></Image>
        <Text fontWeight={600} fontSize="md" color="brand.500">
          Sukh blog
        </Text>
      </HStack>
      <LinkBox>
        <LinkOverlay href={`https://twitter.com/sukh`} isExternal>
          <Image src="./twitter.svg" w={6}></Image>
        </LinkOverlay>
      </LinkBox>
    </HStack>
  );
};

export default Header;
