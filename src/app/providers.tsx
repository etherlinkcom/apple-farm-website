'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { ThirdwebProvider } from "thirdweb/react";
import customTheme from './theme';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThirdwebProvider>
      <ChakraProvider resetCSS theme={customTheme}>
        {children}
      </ChakraProvider>
    </ThirdwebProvider>
  )
}