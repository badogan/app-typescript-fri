import * as React from "react";

import { Avatar, Heading, Text, Box, Flex, Badge } from "@chakra-ui/core";

type Props = {
  name: string;
  website: string;
};

const ChUserCard: React.FC<Props> = props => {
  const { name, website } = props;

  return (
    <Flex alignItems="center">
      <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
        <Flex align="center">
          <Avatar
            name={name}
            src="https://bit.ly/
      dan-abramov"
          />
          <Badge variantColor="green">Success</Badge>
          <Badge variantColor="red">Removed</Badge>
          <Badge variantColor="purple">New</Badge>
        </Flex>
        <Heading as="h4" size="md">
          {name}
        </Heading>
        <Text>{website}</Text>
      </Box>
      </Flex>
  );
};

export default ChUserCard;
