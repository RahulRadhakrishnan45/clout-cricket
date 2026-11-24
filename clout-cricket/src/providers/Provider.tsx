import type { ReactNode } from "react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";


interface ProviderProps {
  children: ReactNode;
}

const provider = ({ children }: ProviderProps) => {
  return (
    <ChakraProvider value={defaultSystem}>
        <ThemeProvider attribute= "class" defaultTheme="dark" enableSystem= {false}>
            {children}
        </ThemeProvider>
    </ChakraProvider>
  );
}

export default provider;