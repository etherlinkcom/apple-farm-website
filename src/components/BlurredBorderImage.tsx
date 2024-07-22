'use client'

import { Box, Image, useColorModeValue, useTheme } from "@chakra-ui/react";

function BlurredBorderImage() {
  const theme = useTheme();
  const backgroundColor = useColorModeValue(theme.colors.lightBackground, theme.colors.darkBackground);

  const gradientTop = `linear-gradient(to bottom, ${backgroundColor}, #0d060300)`;
  const gradientRight = `linear-gradient(to left, ${backgroundColor}, #0d060300)`;
  const gradientBottom = `linear-gradient(to top, ${backgroundColor}, #0d060300)`;
  const gradientLeft = `linear-gradient(to right, ${backgroundColor}, #0d060300)`;

  return (
    <Box position="relative" display="inline-block">
      {/* Image layer */}
      <Image
        src="forest-4.jpg"
        alt="Forest"
        borderRadius="md"
        zIndex={1}
        position="relative"
        objectFit="cover"
      />
      {/* Top border */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        height="40px"
        bg={gradientTop}
        zIndex={2}
        borderTopLeftRadius="md"
        borderTopRightRadius="md"
      />
      {/* Right border */}
      <Box
        position="absolute"
        top="0"
        right="0"
        bottom="0"
        width="40px"
        bg={gradientRight}
        zIndex={2}
        borderTopRightRadius="md"
        borderBottomRightRadius="md"
      />
      {/* Bottom border */}
      <Box
        position="absolute"
        left="0"
        right="0"
        bottom="0"
        height="40px"
        bg={gradientBottom}
        zIndex={2}
        borderBottomLeftRadius="md"
        borderBottomRightRadius="md"
      />
      {/* Left border */}
      <Box
        position="absolute"
        top="0"
        left="0"
        bottom="0"
        width="40px"
        bg={gradientLeft}
        zIndex={2}
        borderTopLeftRadius="md"
        borderBottomLeftRadius="md"
      />
    </Box>
  );
}

export default BlurredBorderImage;