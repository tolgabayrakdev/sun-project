import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Anchor, AppShell, Breadcrumbs, Burger, Button, Divider, Group, Menu, Title, rem, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
    IconSettings,
    IconMessageCircle,
    IconTrash,
    IconHome,
    IconUsers,
    IconMoon2,
    IconReport,
} from '@tabler/icons-react';
import AuthWrapper from '../wrappers/AuthWrapper';
import { notifications } from '@mantine/notifications';
import { useEffect, useState } from 'react';

function AppLayout() {
    const [user, setUser] = useState({
        id: 0,
        email: ""
    });

    const location = useLocation();
    const navigate = useNavigate();

    const isActive = (path: string) => location.pathname === path;
    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

    const breadcrumbMap: { [key: string]: string } = {
        '/app': 'Anasayfa',
        '/app/persons': 'Kişiler',
        '/app/settings': 'Ayarlar',
    };

    const pathnames = location.pathname.replace('/app', '').split('/').filter((x) => x);
    const breadcrumbItems = pathnames.map((value, index) => {
        const to = `/app/${pathnames.slice(0, index + 1).join('/')}`;
        return (
            <Anchor component={Link} to={to} key={to}>
                {breadcrumbMap[to] || value.charAt(0).toUpperCase() + value.slice(1)}
            </Anchor>
        );
    });

    const handleLogoutRequest = async () => {
        try {
            const res = await fetch("http://localhost:1234/api/v1/auth/logout", {
                method: "POST",
                credentials: 'include',
            });
            if (res.status === 200) {
                notifications.show({
                    title: 'Başarılı',
                    message: 'Çıkış yapılıyor...',
                    autoClose: 1500
                });
                setTimeout(() => {
                    navigate("/login")
                }, 1500)
            }
        } catch (error) {
            throw error;
        }
    }

    useEffect(() => {
        const getUserVerify = async () => {
            try {
                const res = await fetch("http://localhost:1234/api/v1/auth/verify", {
                    method: "POST",
                    credentials: "include"
                });
                const userInformation: any = await res.json();
                if (res.status === 200) {
                    setUser({ id: userInformation.user.id, email: userInformation.user.email });
                }
            } catch (error) {
                throw error;
            }
        }
        getUserVerify();
    }, [])

    return (
        <div>
            <AppShell
                layout="alt"
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
                        <Menu shadow="md" width={200}>
                            <Menu.Target>
                                <Button variant="default" c="blue"> {user.email} </Button>
                            </Menu.Target>
                            <Menu.Dropdown>
                                <Menu.Label>Uygulama</Menu.Label>
                                <Menu.Item to="settings" component={Link} leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
                                    Ayarlar
                                </Menu.Item>
                                <Menu.Item leftSection={<IconMessageCircle style={{ width: rem(14), height: rem(14) }} />}>
                                    Mesajlar
                                </Menu.Item>
                                <Menu.Item onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
                                    leftSection={<IconMoon2 style={{ width: rem(14), height: rem(14) }} />}>
                                    Mod Değiştir
                                </Menu.Item>
                                <Menu.Divider />
                                <Menu.Item
                                    onClick={handleLogoutRequest}
                                    color="red"
                                    leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />}
                                >
                                    Çıkış Yap
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                    </Group>
                </AppShell.Header>
                <AppShell.Navbar style={{ background: "black" }} p="md">
                    <Group justify="center">
                        <Title c="white" order={3}>SUNAPP</Title>
                    </Group>
                    <Divider my="md" />
                    <Button
                        to="/app"
                        component={Link}
                        leftSection={<IconHome size={14} />}
                        variant=""
                        style={{
                            backgroundColor: isActive('/app') ? '' : 'black',
                            color: isActive('/app') ? "white" : "",

                        }}
                    >
                        Anasayfa
                    </Button>
                   
                    <Button
                        mt="xs"
                        to="/app/reports"
                        component={Link}
                        leftSection={<IconReport size={14} />}
                        variant=""
                        style={{
                            backgroundColor: isActive('/app/reports') ? '' : 'black',
                            color: isActive('/app') ? "white" : "",

                        }}
                    >
                        Raporlar
                    </Button>
                    <Button
                        mt="xs"
                        to="/app/persons"
                        component={Link}
                        leftSection={<IconUsers size={14} />}
                        variant=""
                        style={{
                            backgroundColor: isActive('/app/persons') ? '' : 'black',
                            color: isActive('/app') ? "white" : "",

                        }}
                    >
                        Kişiler
                    </Button>
                    <Button
                        mt="xs"
                        to="settings"
                        component={Link}
                        leftSection={<IconSettings size={14} />}
                        variant=""
                        style={{
                            backgroundColor: isActive('/app/settings') ? '' : 'black',
                            color: isActive('/app/settings') ? "white" : "",

                        }}
                    >
                        Ayarlar
                    </Button>
                </AppShell.Navbar>
                <AppShell.Main>
                    <Breadcrumbs mb="lg" mt="xs">
                        <Anchor component={Link} to="/app">
                            Anasayfa
                        </Anchor>
                        {breadcrumbItems}
                    </Breadcrumbs>
                    <Outlet />
                </AppShell.Main>
            </AppShell>
        </div>
    );
}


export default AuthWrapper(AppLayout);