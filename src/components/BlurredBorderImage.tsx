import { Box, Image } from "@chakra-ui/react";

function BlurredBorderImage() {
  return (
    <Box position="relative" display="inline-block">
      {/* Blurred border layer */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        borderRadius="md"
        backdropFilter="blur(10px)"
        bg="rgba(255, 255, 255, 0.2)" // semi-transparent background
        zIndex={0}
        filter="blur(10px)"
        boxSize="full"
      />
      {/* Image layer */}
      <Box position="relative" zIndex={1} boxSize="full">
        <Image
          src="forest-4.jpg"
          alt="Forest"
          borderRadius="md"
          boxSize="full"
        />
      </Box>
    </Box>
  );
}

export default BlurredBorderImage;