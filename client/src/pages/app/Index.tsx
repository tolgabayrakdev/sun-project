import { Badge, Card, Grid, Group, Text, rem } from "@mantine/core";
import AreaChart from "../../components/app/AreaChart";
import PieChart from "../../components/app/PieChart";


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
                <Grid.Col span={{ base: 12, md: 6, lg: 7 }}>
                    <Card m="xs" style={{ minHeight: rem(180) }} shadow="sm" padding="lg" radius="md" withBorder>
                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw={500}>Yıllık plan</Text>
                        </Group>
                        <AreaChart />
                    </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 5 }}>
                <Card m="xs" style={{ minHeight: rem(180) }} shadow="sm" padding="lg" radius="md" withBorder>
                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw={500}>Toplam dağılım</Text>
                        </Group>
                        <PieChart />
                    </Card>
                </Grid.Col>
            </Grid>

        </>
    )
}
