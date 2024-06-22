import { Badge, Card, Grid, Group, Text, rem } from "@mantine/core";
import AreasChart from "../../components/app/AreaChart";
import BarChartComponent from "../../components/app/BarChart";
import { useEffect, useState } from "react";

export default function Index() {
    const [companyStatics, setCompanyStatic] = useState<any>({});
    const [personStatics, setPersonsStatic] = useState<any>({});

    const getStatics = async () => {
        try {
            const res = await fetch("http://localhost:1234/api/v1/statics", {
                method: "GET",
                credentials: "include"
            });
            const data = await res.json();
            setCompanyStatic(data.companyResult);
            setPersonsStatic(data.personResult);
        } catch (error) {
            throw error;
        }
    }

    useEffect(() => {
        getStatics();
    }, [])

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
                            Kişiler: {personStatics.count}
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
                            Şirketler: {companyStatics.count}
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
                            <Text fw={500}>Hoşgeldin, Tolga</Text>
                        </Group>
                        <BarChartComponent />
                    </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 5 }}>
                    <Card m="xs" style={{ minHeight: rem(180) }} shadow="sm" padding="lg" radius="md" withBorder>
                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw={500}>Hoşgeldin, Tolga</Text>
                        </Group>
                        <AreasChart />
                    </Card>
                </Grid.Col>
            </Grid>

        </>
    )
}
