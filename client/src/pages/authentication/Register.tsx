import { Button, Checkbox, Container, Divider, FormControl, FormLabel, HStack, Heading, Input, InputGroup, InputRightElement, Link, Stack, Text } from '@chakra-ui/react';
import { useState } from 'react'

type Props = {}

export default function Register({ }: Props) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <Stack spacing="8">
        <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
          <Heading size={{ base: 'xs', md: 'sm' }}>Sign up to your account</Heading>
          <Text color="fg.muted">
            Do you already have an account? <Link href="#">Sign in</Link>
          </Text>
        </Stack>
      </Stack>
      <Stack spacing="6">
        <Stack spacing="5">
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input placeholder='Enter email' id="email" type="email" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputGroup size='md'>
              <Input
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
          </FormControl>

        </Stack>
        <HStack justify="space-between">
          <Checkbox defaultChecked>Remember me</Checkbox>
          <Button variant="text" size="sm">
            Forgot password?
          </Button>
        </HStack>
        <Stack spacing="6">
          <Button>Sign up</Button>
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
  )
}