import { Badge, Button, Card, Container, Group, Image, SimpleGrid, Text, Title } from "@mantine/core"

export default function Subscription() {
    return (
        <Container size="lg" py="xl">
            <Group justify="center">
                <Badge variant="filled" size="lg">
                    Subscription plans
                </Badge>
            </Group>

            <Title order={2} ta="center" mt="sm">
                Choose your plan
            </Title>

            <SimpleGrid cols={2}>
                <Card mt="xl" shadow="sm" padding="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image
                            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                            height={160}
                            alt="Norway"
                        />
                    </Card.Section>

                    <Group justify="space-between" mt="md" mb="xs">
                        <Text
                            variant="gradient"
                            gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
                            fw={600}>Basic Plan</Text>
                        <Badge color="pink">$9.99 / Month</Badge>
                    </Group>

                    <Text size="sm" c="dimmed">
                        -  Temel Plan
                        <br />
                        - 10GB Alan
                        <br />
                        - 100 Kişiye kadar üyelik
                    </Text>

                    <Button variant="gradient"
                        gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
                        fullWidth mt="md" radius="md">
                        Choose
                    </Button>
                </Card>
                <Card mt="xl" shadow="sm" padding="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image
                            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                            height={160}
                            alt="Norway"
                        />
                    </Card.Section>

                    <Group justify="space-between" mt="md" mb="xs">
                        <Text
                            variant="gradient"
                            gradient={{ from: 'red', to: 'crimson', deg: 90 }}
                            fw={600}>Pro Plan</Text>
                        <Badge color="pink">$15.99 / Month</Badge>
                    </Group>

                    <Text size="sm" c="dimmed">
                        -  Pro Plan
                        <br />
                        - 30GB Alan
                        <br />
                        - 500 Kişiye kadar üyelik
                    </Text>

                    <Button variant="gradient"
                        gradient={{ from: 'red', to: 'crimson', deg: 90 }}

                        fullWidth mt="md" radius="md">
                        Choose
                    </Button>
                </Card>

            </SimpleGrid>
        </Container>
    )
}