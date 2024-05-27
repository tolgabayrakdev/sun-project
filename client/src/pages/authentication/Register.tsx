import { Anchor, Button, Container, Group, Paper, PasswordInput, Text, TextInput, Title } from "@mantine/core"


type Props = {}

export default function Register({ }: Props) {
    return (
        <Container size={420} my={40}>
            <Title ta="center">
                Welcome back!
            </Title>
            <Text c="dimmed" size="sm" ta="center" mt={5}>
                Do you have already account?{' '}
                <Anchor size="sm" component="button">
                    Sign In
                </Anchor>
            </Text>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput label="Email" placeholder="you@mantine.dev" required />
                <PasswordInput label="Password" placeholder="Your password" required mt="md" />
                <Group justify="space-between" mt="lg">
                    
                </Group>
                <Button fullWidth mt="xl">
                    Sign up
                </Button>
            </Paper>
        </Container>
    )
}