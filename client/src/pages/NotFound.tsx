import { Container, Divider, Heading, Link, Stack, Text } from '@chakra-ui/react'

type Props = {}

export default function NotFound({ }: Props) {
    return (
        <Container maxW="lg" py={{ base: '12', md: '28' }} px={{ base: '0', sm: '8' }}>
            <Stack spacing="8">
                <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                    <Heading color="red" size={{ base: 'md', md: 'xl' }}>404 - Page not found!</Heading>
                    <Divider mb="1" />
                    <Text color="fg.muted">
                        <Link href="">Turn back</Link>
                    </Text>
                </Stack>
            </Stack>
        </ Container>
    )
}