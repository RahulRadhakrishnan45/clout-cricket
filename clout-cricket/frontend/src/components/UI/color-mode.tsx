import { ThemeProvider, useTheme } from "next-themes";

interface ColorModeProviderProps {
  children: React.ReactNode;
}

export function ColorModeProvider({
  children,
}: ColorModeProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
    >
      {children}
    </ThemeProvider>
  );
}

export function useColorMode() {
  const { theme, setTheme } = useTheme();

  return {
    colorMode: theme,
    toggleColorMode: () =>
      setTheme(theme === "dark" ? "light" : "dark"),
  };
}