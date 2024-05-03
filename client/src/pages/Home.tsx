

// <Flex minH={'100vh'}  Page height!

import { Container, Heading, Link, Stack, Text } from "@chakra-ui/react";

export default function Home() {

    return (
        <div>
            <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
                <Stack spacing="8">
                    <Stack spacing="6">
                        <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                            <Heading size={{ base: 'xs', md: 'lg' }}>Welcome the home page</Heading>
                            <Text color="fg.muted">
                                <Link href="/login">Sign in here</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>

        </div>
    )
}