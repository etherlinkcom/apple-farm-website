import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import StatsCard from "@/components/StatsCard";
import { BsPerson } from 'react-icons/bs'
import { RiBankLine } from "react-icons/ri";
import { BiCoin } from "react-icons/bi";
import BlurredBorderImage from "@/components/BlurredBorderImage";
import ProtocolsPresentation from "@/components/ProtocolsPresentation";

export default function Home() {
  const presentation = () => {
    return (
      <Box textAlign={"center"}>
        <Heading>Apple Farm</Heading>
        <Box
          mt={4}
          p={6}
          borderRadius="md"
          boxShadow="lg"
          backdropFilter="blur(12px)"
          textAlign="center">
          <Text>
            Apple Farm is the official liquidity protocol of Etherlink. It allows you to gain apples by interacting with all the cool DeFi protocols on Etherlink.
            Sign up and see the apples rain!
          </Text>
        </Box>
      </Box>
    );
  };

  const dataNumber = () => {
    return (
      <SimpleGrid mt="10px" mb="20px" columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={'Boosted TVL'} stat={'7,000,000'} icon={<BiCoin size={'3em'} />} />
        <StatsCard title={'Users'} stat={'5,000'} icon={<BsPerson size={'3em'} />} />
        <StatsCard title={'Protocols'} stat={'10'} icon={<RiBankLine size={'3em'} />} />
      </SimpleGrid>
    );
  };

  return (
    <main className="p-4 pb-10 flex justify-center container max-w-screen-lg mx-auto">
      <div className="py-10">
        <BlurredBorderImage />
        {presentation()}
        {dataNumber()}
        <ProtocolsPresentation />
      </div>
    </main>
  );
}
