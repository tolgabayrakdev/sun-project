import { Button, Container, Group, Paper, Text, TextInput, Title } from '@mantine/core';
import { Link } from 'react-router-dom';

type Props = {};

export default function ResetPassword({}: Props) {
    return (
        <Container size={420} my={50}>
            <Title ta="center">Parolamı unuttum</Title>
            <Text c="dimmed" size="sm" ta="center" mt={5}>
                Buradan parolanızı sıfırlayabilirsiniz.
            </Text>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <form>
                    <TextInput label="Email" placeholder="you@mantine.dev" />
                    <Group justify="space-between" mt="lg">
                        <Link
                            to="/login"
                            style={{ textDecoration: 'none', fontSize: '14px' }}
                        >
                            Giriş ekranı
                        </Link>
                    </Group>
                    <Button color="" type="submit" fullWidth mt="md">
                        Bağlantı Gönder
                    </Button>
                </form>
            </Paper>
        </Container>
    );
}
