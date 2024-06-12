import { Badge, Button, Card, Checkbox, Divider, Grid, Group, PasswordInput, Text, rem } from "@mantine/core"

type Props = {}

export default function Settings({ }: Props) {
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
            />
            <PasswordInput
              label="Parola Tekrarı"
              placeholder="*******"
              mt="xs"
            />
            <Button mt="md" type="submit" w="160">
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
          </Card>
        </Grid.Col>
      </Grid>

    </>
  )
}