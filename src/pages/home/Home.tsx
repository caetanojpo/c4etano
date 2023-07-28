import { Flex } from "@chakra-ui/react";
import Banner from "../../components/navigation/homeComponents/banner/Banner";

export default function Home() {
  return (
    <>
      <Flex
        as="main"
        bg="black"
        w="100vw"
        h="90vh"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          width="100%"
          height="100%"
          position="relative"
          alignItems={{ md: "end" }}
        >
          <Flex
            display="flex"
            height={{ base: "30%", md: "100%" }}
            width="10%"
            alignItems={{ xs: "center" }}
            border="1px solid white"
          ></Flex>
          <Flex
            display="flex"
            width={{ md: "100%" }}
            alignItems="end"
            justifyContent="center"
            height="100%"
          >
            <Banner />
          </Flex>
          <Flex
            display={{ base: "none", md: "flex" }}
            height={{ md: "100%" }}
            width={{ md: "10%" }}
            alignItems="center"
            border="1px solid red"
          ></Flex>
        </Flex>
      </Flex>
    </>
  );
}
