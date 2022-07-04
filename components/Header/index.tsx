import { HStack, Image, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <HStack py={2} spacing={6} align="center" w="full">
      <HStack spacing={2} w="full">
        <Text fontWeight={600} fontSize="md" color="brand.500">
          Blawg
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
