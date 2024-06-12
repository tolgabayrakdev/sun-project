import { Button, Card, Checkbox, Divider, Grid, Group, PasswordInput, Text, rem } from "@mantine/core"
import { notifications } from "@mantine/notifications";
import React, { useEffect, useState } from "react"


export default function Settings() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isMatch, setIsMatch] = useState(true);

  // HandleUpdatePassword
  const [currentPassword, setCurrentPassword] = useState("");

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:1234/api/v1/auth/update-password", {
        method: "POST",
        credentials: "include",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currentPassword: currentPassword,
          newPassword: password
        })
      });
      if (res.status === 200) {
        notifications.show({
          title: 'Başarılı',
          message: 'Şifreniz başarıyla değişmiştir.',
          color: 'green',
          autoClose: 1500
        });
        setTimeout(() => {
          window.location.reload();
        }, 1500)
      }
    } catch (error) {
      throw error;
    }
  }


  useEffect(() => {
    if (password && confirmPassword) {
      setIsMatch(password === confirmPassword);
    } else {
      setIsMatch(true);
    }
  }, [password, confirmPassword]);


  return (
    <>
      <Grid p="md">
        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
          <Card m="xs" style={{ minHeight: rem(180) }} shadow="sm" padding="lg" radius="md" withBorder>
            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>Şifre Güncelleme</Text>
            </Group>
            <Divider />
            <form onSubmit={handleUpdatePassword}>
              <PasswordInput
                label="Şuan ki şifreniz"
                placeholder="*******"
                mt="md"
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <PasswordInput
                label="Yeni Şifre"
                placeholder="*******"
                mt="xs"
                onChange={(e) => setPassword(e.target.value)}
              />
              <PasswordInput
                label="Yeni Şifre Tekrar"
                placeholder="*******"
                mt="xs"
                onChange={(e) => setConfirmPassword(e.target.value)}

              />
              {!isMatch && (
                <Text c="red" size="sm">Şifreler eşleşmiyor!</Text>
              )}
              <Button mt="lg" type="submit" w="160">
                Onayla
              </Button>
            </form>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
          <Card m="xs" style={{ minHeight: rem(180) }} shadow="sm" padding="lg" radius="md" withBorder>
            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>Bildirimler</Text>
            </Group>
            <Divider />

            <Checkbox
              mt="md"
              defaultChecked
              label="Mail bildirimleri"
            />
            <Checkbox
              mt="md"
              defaultChecked
              label="Güvenlik bildirimleri"
            />
            <Checkbox
              mt="md"
              defaultChecked
              label="Kullanıcı bildirimleri"
            />
            <Button mt="lg" type="submit" w="160">
              Kaydet
            </Button>
          </Card>
        </Grid.Col>
      </Grid>

    </>
  )
}