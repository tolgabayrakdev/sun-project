import { Button, Container, Paper, PasswordInput, Text, TextInput, Title } from "@mantine/core"
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Register() {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const form = useForm({
        initialValues: {
            email: "",
            password: ""
        },
        validate: {
            email: (value) =>
                /^\S+@\S+$/.test(value) ? null : 'Geçersiz email!',
            password: (value) =>
                value.length < 8 ? 'Parolanız en az 6 karakter olmalıdır!' : null,
        }
    })



    const submitLoginForm = async (values: { email: string, password: string }) => {
        try {
            setLoading(true);
            const result = await fetch("http://127.0.0.1:5000/api/v1/auth/register", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: "include",
                body: JSON.stringify({
                    email: values.email,
                    password: values.password
                })
            });
            if (result.status === 201) {
                setTimeout(() => {
                    setLoading(false);
                    navigate("/login");
                }, 1000)

            } else {
                notifications.show({
                    title: 'Hata!',
                    message: 'Bilgilerinizi kontrol ediniz.',
                });
            }
        } catch (error) {
            setLoading(false);
            notifications.show({
                title: 'Sunucu Hatası!',
                message: 'Şuan hesap oluşturamıyorsunuz!',
                color: "yellow"
            });
            console.log(error);
        }
    }

    return (
        <Container size={420} my={50}>
            <Title ta="center">
                Tekrardan hoşgeldin!
            </Title>
            <Text c="dimmed" size="sm" ta="center" mt={5}>
                Zaten hesabınız var mı?{' '}
                <Link to="/login" style={{ textDecoration: "none" }}>
                    Giriş yap
                </Link>
            </Text>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <form onSubmit={form.onSubmit((values) => submitLoginForm(values))}>
                    <TextInput label="Email" placeholder="you@mantine.dev" {...form.getInputProps("email")} />
                    <PasswordInput label="Parola" placeholder="*******" mt="md" {...form.getInputProps("password")} />
                 
                    <Button color="" loading={loading} type="submit" fullWidth mt="lg">
                        Kayıt Ol
                    </Button>
                </form>
            </Paper>
        </Container>
    )
}