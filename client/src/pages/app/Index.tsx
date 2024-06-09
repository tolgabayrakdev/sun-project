import { Badge, Card, Group, Text } from "@mantine/core";

export default function Index() {
    return (
        <>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                </Card.Section>
                <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>Hoşgeldin, Tolga</Text>
                    <Badge color="pink">On Sale</Badge>
                </Group>
                <Text size="sm" c="dimmed">
                    With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                    activities on and around the fjords of Norway
                </Text>


            </Card>
        </>
    )
}
