'use client'

import { useColorModeValue } from "@chakra-ui/react";
import { Box, Heading, SimpleGrid, Text, VStack, Icon, HStack, GridItem, Grid } from "@chakra-ui/react";
import BlurredBorderImage from "@/components/BlurredBorderImage";
import StatsCard from "@/components/StatsCard";
import { BiCoin } from "react-icons/bi";
import { BsPerson } from 'react-icons/bs';
import { FaEthereum } from "react-icons/fa";
import { SiTether } from "react-icons/si";

export default function Dashboard() {
  const boxShadow = useColorModeValue(
    '0 4px 6px rgba(0, 0, 0, 0.1)', // Light mode shadow
    '0 4px 6px rgba(255, 255, 255, 0.1)' // Dark mode shadow
  );

  const hoverBg = useColorModeValue("gray.100", "whiteAlpha.100");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  const presentation = () => {
    return (
      <Box textAlign={"center"} position="relative">
        <BlurredBorderImage />
        <Heading
          position="absolute"
          bottom={4}
          left="50%"
          transform="translateX(-50%)"
          color="white"
          fontSize="4xl"
        >
          Dashboard
        </Heading>
      </Box>
    );
  };

  const dataNumbers = () => {
    return (
      <SimpleGrid mt="10px" columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={'Boosted Apple TVL'} stat={'$58,868,829,414'} icon={<BiCoin size={'3em'} />} />
        <StatsCard title={'Referral TVL'} stat={'-'} icon={<BsPerson size={'3em'} />} />
      </SimpleGrid>
    );
  };

  const partnerInfo = () => {
    const partners = [
      { name: "Ether", icon: FaEthereum, value: "$56,332,228,500", boostedTvl: "$56,332,439,873", contribution: "-", rewardType: "Turtle Loyalty Points" },
      { name: "Retzo", icon: SiTether, value: "$106,121,089", boostedTvl: "$90,968,078", contribution: "25%", rewardType: "Turtle xPoints" },
      { name: "Sweti", icon: SiTether, value: "$1,173,664", boostedTvl: "-", contribution: "10%", rewardType: "-" },
    ];

    return (
      <Box
        mt={8}
        borderRadius="xl"
        overflow="hidden"
        boxShadow={boxShadow}
        borderWidth="1px"
        borderColor={borderColor}
      >
        <Text fontSize="xl" fontWeight="bold" p={4}>
          Apple Partner
        </Text>
        <Grid
          templateColumns="1fr 1fr 1fr 1fr"
          gap={4}
          p={4}
          borderBottom="1px solid"
          borderColor="inherit"
        >
          <GridItem><Text opacity={0.6}>Name</Text></GridItem>
          <GridItem><Text opacity={0.6}>Boosted Apple TVL</Text></GridItem>
          <GridItem><Text opacity={0.6}>Your Contribution</Text></GridItem>
          <GridItem><Text opacity={0.6}>Reward Type</Text></GridItem>
        </Grid>
        <VStack spacing={0} align="stretch">
          {partners.map((partner, index) => (
            <Grid
              key={index}
              templateColumns="1fr 1fr 1fr 1fr"
              gap={4}
              p={4}
              _hover={{ bg: hoverBg }}
              transition="background 0.2s"
              borderTop="1px solid"
              borderColor="inherit"
            >
              <GridItem>
                <HStack spacing={4}>
                  <Icon as={partner.icon} boxSize={6} color="blue.500" />
                  <VStack align="start" spacing={0}>
                    <Text fontWeight="bold">{partner.name}</Text>
                    <Text fontSize="sm" opacity={0.6}>{partner.value}</Text>
                  </VStack>
                </HStack>
              </GridItem>
              <GridItem>
                <Text>{partner.boostedTvl}</Text>
              </GridItem>
              <GridItem>
                <Text>{partner.contribution}</Text>
              </GridItem>
              <GridItem>
                <Text>{partner.rewardType}</Text>
              </GridItem>
            </Grid>
          ))}
        </VStack>
      </Box>
    );
  };

  return (
    <main className="p-4 pb-10 flex justify-center container max-w-screen-lg mx-auto">
      <VStack spacing={8} align="stretch" w="full">
        {presentation()}
        {dataNumbers()}
        {partnerInfo()}
      </VStack>
    </main>
  );
}
