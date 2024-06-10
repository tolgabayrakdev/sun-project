import { Badge, Card, Grid, Group, Text, rem } from "@mantine/core";
import AreasChart from "../../components/app/AreaChart";

export default function Index() {
    return (
        <>
            <Grid p="md">
                <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                    <Card m="xs" style={{ minHeight: rem(180) }} shadow="sm" padding="lg" radius="md" withBorder>
                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw={500}>Hoşgeldin, Tolga</Text>
                            <Badge color="pink">On Sale</Badge>
                        </Group>
                        <Text size="sm" c="dimmed">
                            With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                            activities on and around the fjords of Norway
                        </Text>
                    </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                    <Card m="xs" style={{ minHeight: rem(180) }} shadow="sm" padding="lg" radius="md" withBorder>
                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw={500}>Hoşgeldin, Tolga</Text>
                            <Badge color="pink">On Sale</Badge>
                        </Group>
                        <Text size="sm" c="dimmed">
                            With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                            activities on and around the fjords of Norway
                        </Text>
                    </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                    <Card m="xs" style={{ minHeight: rem(180) }} shadow="sm" padding="lg" radius="md" withBorder>
                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw={500}>Hoşgeldin, Tolga</Text>
                            <Badge color="pink">On Sale</Badge>
                        </Group>
                        <Text size="sm" c="dimmed">
                            With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                            activities on and around the fjords of Norway
                        </Text>
                    </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                    <Card m="xs" style={{ minHeight: rem(180) }} shadow="sm" padding="lg" radius="md" withBorder>
                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw={500}>Hoşgeldin, Tolga</Text>
                            <Badge color="pink">On Sale</Badge>
                        </Group>
                        <Text size="sm" c="dimmed">
                            With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                            activities on and around the fjords of Norway
                        </Text>
                    </Card>
                </Grid.Col>
            </Grid>

            <Grid p="md">
                <Grid.Col span={7}>
                <Card m="xs" style={{ minHeight: rem(180) }} shadow="sm" padding="lg" radius="md" withBorder>
                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw={500}>Hoşgeldin, Tolga</Text>
                        </Group>
                       <AreasChart />
                    </Card>
                </Grid.Col>
                <Grid.Col span="auto">3</Grid.Col>
            </Grid>

        </>
    )
}
