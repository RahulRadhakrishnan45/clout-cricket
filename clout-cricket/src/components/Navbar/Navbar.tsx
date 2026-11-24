import { useState } from 'react';
import { Box, Flex, HStack, VStack, IconButton, Button, Link, Text } from '@chakra-ui/react';
import { Menu, X, Sun, Moon, MessageSquare, MapPin } from 'lucide-react';
import { useTheme } from 'next-themes';
import Cloutlogo from '../../assets/images/logo.png';

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
    { label: "Shop / Categories", href: "#shop" },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const {theme, setTheme} = useTheme();

    const isDark = theme === "dark";

    const toggleMenu = () => {
        setIsOpen((prev) => !prev)
    }

    const toggleTheme = () => {
        setTheme(isDark ? "light" : "dark")
    } 

    const bgColor = isDark ? "#111111" : "#FFFFFF";
    const textColor = isDark ? "#FFFFFF" : "#171717";
    const borderColor = isDark ? "#333333" : "#E5E5E5";

    return (
        <Box as='header' width='100%' bg={bgColor} color={textColor} borderBottom="1px solid"
        position="sticky" top="0" zIndex="1000">
            <Flex maxWidth="1440px" mx="auto" px={{base: 4, md: 8 , lg: 12}} py={3} align="center" justify="space-between">
                <Link href="#home" _hover={{ textDecoration: "none"}}>
                    <img src={Cloutlogo} alt="Clout Cricket" style={{width:"145px", height:"auto", objectFit:"contain"}}/>
                </Link>
                <HStack gap={{md:4, lg:6}} display={{base:"none", md:"flex"}}>
                    {navLinks.map((link) => (
                        <Link key={link.label} href={link.href} fontSize="xs" fontWeight="medium" letterSpacing="2px" textTransform="uppercase" color={textColor} px={3} py={3} _hover={{bg:isDark ? "#252525" : "#F1F1F1", textDecoration:"none"}}>
                            {link.label}
                        </Link>
                    ))}

                    <Link href="find-us" display="flex" alignItems="center" gap={2} fontSize="xs" letterSpacing="1px" textTransform="uppercase" color={textColor} _hover={{textDecoration:"none", opacity:0.7}}>
                        <MapPin size={15} />
                        Find Your Way to Clout
                    </Link>
                </HStack>

                <HStack gap={2}>
                    <Button display={{ base:"none" , md:"flex" }} variant="outline" borderColor={borderColor} color={textColor} borderRadius="none" size="sm" fontSize="xs" letterSpacing="1px" textTransform="uppercase" _hover={{ bg:isDark ? "#252525" : "#F1F1F1"}}>
                        Talk to Us
                    </Button>

                    <IconButton aria-label="Toggle theme" variant="outline" borderColor={borderColor} borderRadius="none" size="sm" onClick={toggleTheme} _hover={{ bg:isDark ? "#252525" : "#F1F1F1"}}>
                        {isDark ? <Sun size={17} /> : <Moon size={17} />}
                    </IconButton>

                    <IconButton aria-label={isOpen ? "Close menu" : "Open menu"} display={{ base:"flex", md:"none"}} variant="outline" borderColor={borderColor} color={textColor} borderRadius="none" size="sm" onClick={toggleMenu}> 
                        {isOpen ? <X size={19} /> : <Menu size={19} />}
                    </IconButton>
                </HStack>
            </Flex>
                {isOpen && (
                    <VStack display={{base:"flex" , md:"none"}} align="stretch" gap={0} px={5} py={4} bg={bgColor} borderTop="1px solid" borderColor={borderColor}>
                        {navLinks.map((link) => (
                            <Link key={link.label} href={link.href} py={4} fontSize="sm" letterSpacing="1px" textTransform="uppercase" color={textColor} borderBottom="1px solid" borderColor={borderColor} onClick={() => setIsOpen(false)} _hover={{textDecoration:"none", opacity:0.7}}>
                                {link.label}
                            </Link>
                        ))}

                        <Link href="find-us" py={4} display="flex" alignItems="center" gap={2} fontSize="sm" letterSpacing="1px" color={textColor} onClick={() => setIsOpen(false)}>
                            <MapPin size={16} />
                            Find Your Way to Clout
                        </Link>

                        <Button mt={3} width="100%" borderRadius="none" bg={textColor} color={bgColor} onClick={() => setIsOpen(false)} _hover={{opacity:0.8}}>
                            <MessageSquare size={16} />
                            Talk to Us
                        </Button>
                    </VStack>
                )}
        </Box>
    )
}

export default Navbar