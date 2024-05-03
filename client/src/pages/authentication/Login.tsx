import { Button, Container, Divider, FormControl, FormHelperText, FormLabel, HStack, Heading, Input, InputGroup, InputRightElement, Link, Stack, Text, useToast } from '@chakra-ui/react'
import { FormEvent, useState } from 'react'
import { z } from 'zod';

type Props = {}

const schema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Your password must be at least 8 characters" })
});

export default function Login({ }: Props) {
    const toast = useToast();
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleClick = () => setShow(!show);

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const formData = {
            email: email.trim(),
            password: password.trim()
        };
        const validationResult = schema.safeParse(formData);

        if (!validationResult.success) {
            const errors: any = validationResult.error.flatten();

            setEmailError(errors.fieldErrors.email);
            setPasswordError(errors.fieldErrors.password);
        } else {
            setEmailError("");
            setPasswordError("");
            handleLoginSubmit(formData);
            setLoading(true);
        }
    }

    const handleLoginSubmit = async (formData: { email: string, password: string }) => {
        try {
            const res = await fetch("127.0.0.1:5000/api/v1/auth/login", {
                method: "POST",
                credentials: "include",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ email: formData.email, password: formData.password })
            });
            if (res.status === 200) {

            } else {
                toast({
                    title: 'Login failed!',
                    description: "Check your credentails",
                    status: 'warning',
                    duration: 3000,
                    isClosable: true,
                })
                setTimeout(() => {
                    setLoading(false);
                }, 500)
            }
        } catch (e) {

        }

    }
    return (
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
                <form onSubmit={handleFormSubmit}>
                    <Stack spacing="5">
                        <FormControl>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <Input onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' id="email" type="email" />
                            <FormHelperText color="red">{emailError}</FormHelperText>
                        </FormControl>
                        <FormControl mb="3">
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <InputGroup size='md'>
                                <Input
                                    onChange={(e) => setPassword(e.target.value)}
                                    id='password'
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder='Enter password'
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                                        {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <FormHelperText color="red">{passwordError}</FormHelperText>
                        </FormControl>
                    </Stack>
                    <HStack justify="end">
                        <Button variant="text" size="sm">
                            Forgot password?
                        </Button>
                    </HStack>
                    <Stack spacing="6">
                        <Button isLoading={loading} colorScheme="green" type="submit">Sign in</Button>
                        <HStack>
                            <Divider />
                            <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                                or continue with
                            </Text>
                            <Divider />
                        </HStack>
                    </Stack>
                </form>

            </Stack>
        </Container>
    )
}