import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider } from "../components/UI/color-mode";

interface ProviderProps {
  children: React.ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  return (
    <ColorModeProvider>
      <ChakraProvider value={defaultSystem}>
        {children}
      </ChakraProvider>
    </ColorModeProvider>
  );
};

export default Provider;