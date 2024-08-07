'use client'

import { Box, Heading, VStack } from "@chakra-ui/react";
import TopUsers from "@/components/TopUsers";
import BlurredBorderImage from "@/components/BlurredBorderImage";

export default function LeaderboardPage() {
  return (
    <main className="p-4 pb-10 min-h-[100vh] container max-w-screen-lg mx-auto">
      <VStack spacing={8} align="stretch">
        <Box position="relative">
          <BlurredBorderImage />
          <Heading
            position="absolute"
            bottom={4}
            left="50%"
            transform="translateX(-50%)"
            color="white"
            fontSize="4xl"
          >
            Leaderboard
          </Heading>
        </Box>
        <TopUsers numberOfPlayer={20} /> {/* Increased number of players for full leaderboard */}
      </VStack>
    </main>
  );
}
