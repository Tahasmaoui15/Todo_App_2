import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";

const App = () => {
  return (
    <div>
      <Flex w="100%" h="100vh">
        <Flex w="100%" flexDir="column" ml="20%" mt="5%" mr="20%" color="white">
          <Text fontWeight="700" fontSize={30}>
            Tasks
          </Text>
          <Flex mt="2%">
            <Input variant="flushed" placeholder="Add Task" w="30%" />
            <Button ml={5} bg="blue.400">
              {" "}
              Add Task
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default App;
