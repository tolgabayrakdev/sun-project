import { Button, Checkbox, Container, Divider, FormControl, FormLabel, Grid, GridItem, HStack, Heading, Input, Link, Stack, Text } from "@chakra-ui/react"

type Props = {}

// <Flex minH={'100vh'}  Page height!

export default function Home({ }: Props) {

    return (
        <div>
            <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
                <Stack spacing="8">
                    <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                        <Heading size={{ base: 'xs', md: 'sm' }}>Log in to your account</Heading>
                        <Text color="fg.muted">
                            Don't have an account? <Link href="#">Sign up</Link>
                        </Text>
                    </Stack>
                </Stack>
                <Stack spacing="6">
                    <Stack spacing="5">
                        <FormControl>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <Input id="email" type="email" />
                        </FormControl>
                    </Stack>
                    <HStack justify="space-between">
                        <Checkbox defaultChecked>Remember me</Checkbox>
                        <Button variant="text" size="sm">
                            Forgot password?
                        </Button>
                    </HStack>
                    <Stack spacing="6">
                        <Button>Sign in</Button>
                        <HStack>
                            <Divider />
                            <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                                or continue with
                            </Text>
                            <Divider />
                        </HStack>
                    </Stack>
                </Stack>

            </Container>

        </div>
    )
}