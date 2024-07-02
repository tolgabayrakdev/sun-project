import { Badge, Card, Grid, Group, Text, rem } from "@mantine/core";
import { useEffect, useState } from "react";
import DonutsChart from "../../components/app/charts/DonutChart";
import BarsChart from "../../components/app/charts/BarChart";
import { Icon24Hours, IconReportAnalytics, IconUsers, IconUsersGroup } from "@tabler/icons-react";

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
                <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                    <Card m="md" style={{ minHeight: rem(180) }} shadow="sm" padding="lg" radius="md" withBorder>
                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw={500}>Toplam Kişiler</Text>
                            <IconUsers color="green" size={46} />

                        </Group>
                        <Text size="sm" c="dimmed">
                            Kişiler: {personStatics.count}
                        </Text>
                    </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                    <Card m="md" style={{ minHeight: rem(180) }} shadow="sm" padding="lg" radius="md" withBorder>
                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw={500}>Toplam Şirketler</Text>
                            
                            <Icon24Hours color="orange" size={46} />

                        </Group>
                        <Text size="sm" c="dimmed">
                            Şirketler: {companyStatics.count}
                        </Text>
                    </Card>
                </Grid.Col>
           
                <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                    <Card m="md" style={{ minHeight: rem(180) }} shadow="sm" padding="lg" radius="md" withBorder>
                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw={500}>Toplam Raporlar</Text>
                            <IconReportAnalytics color="red" size={46} />

                        </Group>
                        <Text size="sm" c="dimmed">
                            With Fjord Tours you can explore more of 
                        </Text>
                    </Card>
                </Grid.Col>
            </Grid>

            <Grid p="md">
                <Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
                    <Card m="xs" style={{ minHeight: rem(180) }} shadow="sm" padding="lg" radius="md" withBorder>
                        <Group justify="space-between" mt="md" mb="xs">
                            <Text mb="xl" fw={500}>Yıllık Plan</Text>
                        </Group>
                        <BarsChart />
                    </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                    <Card m="xs" style={{ minHeight: rem(180) }} shadow="sm" padding="lg" radius="md" withBorder>
                        <Group justify="space-between" mt="md" mb="xs">
                            <Text mb="xl" fw={500}>Toplam Dağılım</Text>
                        </Group>
                        <DonutsChart />
                    </Card>
                </Grid.Col>
            </Grid>

        </>
    )
}
