import { Button, Card, Checkbox, Divider, Grid, Group, PasswordInput, Text, rem } from "@mantine/core"
import { useEffect, useState } from "react"


export default function Settings() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isMatch, setIsMatch] = useState(true);


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
            <PasswordInput
              label="Parola"
              placeholder="*******"
              mt="md"
              onChange={(e) => setPassword(e.target.value)}
            />
            <PasswordInput
              label="Parola Tekrarı"
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