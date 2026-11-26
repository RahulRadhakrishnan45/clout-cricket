import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import "./FindUs.css"
import { useColorMode } from "../../UI/color-mode";

const FindUs = () => {
    const { colorMode } = useColorMode()

    const isDark = colorMode === 'dark'

    const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=10.52497,76.2008576";

    return (
        <Box py={{ base:12, md:20 }} id="find-us">
            <Container maxW="1200px">
                <Flex direction="column" align="center" textAlign="center" mb={10}>
                    <Heading size={{ base:"xl", md:"2xl" }}>
                        Let's Meet at Clout
                    </Heading>

                    <Text mt={4} maxW="600px" color="gray.500">
                        Every cricket journey has a starting point.
                        Come visit us, explore our collection, and let's
                        talk cricket!
                    </Text>
                </Flex>

                <Box overflow="hidden" borderRadius="xl" border="1px solid" borderColor={isDark ? "gray.700" : "gray.200"} className="map-container">
                    <iframe
                        title="Clout Cricket Location"
                        src="https://www.google.com/maps?q=10.52497,76.2008576&z=16&output=embed"
                        width="100%"
                        height="450"
                        style={{ border:0, display:"block", filter: isDark ? "grayscale(1) invert(0.9) contrast(0.85)" : "none" }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </Box>

                <Flex justify="space-between" align={{ base:"stretch", md:"center" }} direction={{ base:"column", md:"row" }} gap={5} mt={6}>
                    <Box>
                        <Heading size="md">Clout Cricket</Heading>
                        <Text color="gray.500" mt={1}>
                            Thrissur, Kerala, India
                        </Text>
                    </Box>

                    <Button as="a" href={directionsUrl} target="blank" rel="noopener noreferrer" colorPalette={isDark ? "gray" : "orange"} bg={isDark ? "whiteAlpha.100" : undefined} color={isDark ?"white" : undefined} border={isDark ? "1px solid" : undefined} borderColor={isDark ? "whiteAlpha.300" : undefined} _hover={{ bg:isDark ? "whiteAlpha.200" : undefined}} size="lg">
                        Get Directions →
                    </Button>
                </Flex>
            </Container>
        </Box>
    )
}

export default FindUs