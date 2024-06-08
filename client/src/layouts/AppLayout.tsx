import { Link, Outlet } from 'react-router-dom';
import { AppShell, Burger, Button, Group, Menu, NavLink, Skeleton, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
    IconSettings,
    IconMessageCircle,
    IconTrash,
} from '@tabler/icons-react';
type Props = {};

export default function AppLayout({ }: Props) {
    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
    return (
        <div>
            <AppShell
                header={{ height: 60 }}
                navbar={{
                    width: 260,
                    breakpoint: 'sm',
                    collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
                }}
                padding="md"
            >
                <AppShell.Header>
                    <Group justify="space-between" h="100%" px="md">
                        <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
                        <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
                        <h3>Logo</h3>
                        <Menu shadow="md" width={200}>
                            <Menu.Target>
                                <Button variant="gradient" gradient={{ from: 'blue', to: 'gray', deg: 90 }}                                >tolgabayrak</Button>
                            </Menu.Target>
                            <Menu.Dropdown>
                                <Menu.Label>Uygulama</Menu.Label>
                                <Menu.Item to="settings" component={Link} leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
                                  Ayarlar
                                </Menu.Item>
                                <Menu.Item leftSection={<IconMessageCircle style={{ width: rem(14), height: rem(14) }} />}>
                                    Mesajlar
                                </Menu.Item>
                                <Menu.Divider />
                                <Menu.Item
                                    color="red"
                                    leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />}
                                >
                                    Çıkış Yap
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>

                    </Group>
                </AppShell.Header>
                <AppShell.Navbar p="md">
                    {Array(3)
                        .fill(0)
                        .map((_, index) => (
                            <Skeleton key={index} h={28} mt="sm" animate={false} />
                        ))}
                </AppShell.Navbar>
                <AppShell.Main>
                    <Outlet />
                </AppShell.Main>
            </AppShell>
        </div>
    );
}
