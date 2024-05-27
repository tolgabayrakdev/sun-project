import { Anchor, Button, Container, Group, Paper, PasswordInput, Text, TextInput, Title } from "@mantine/core"
import { useForm } from "@mantine/form"
import { notifications } from "@mantine/notifications"
import { useState } from "react"

type Props = {}

export default function Login({ }: Props) {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      email: "",
      password: ""
    },
    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : 'Invalid email',
      password: (value) =>
        value.length < 8 ? 'You must be at least 8 to password' : null,
    }
  })



  const submitLoginForm = async (values: { email: string, password: string }) => {
    try {
      setLoading(true);
      const result = await fetch("http://127.0.0.1:5000/api/v1/auth/login", {
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
      if (result.status === 200) {

      } else {
        notifications.show({
          title: 'Default notification',
          message: 'Hey there, your code is awesome! 🤥',
        })
      }
    } catch (error) {
      setLoading(false);
      notifications.show({
        title: 'Default notification',
        message: 'Hey there, your code is awesome! 🤥',
      })
      console.log(error);
    }
  }

  return (
    <Container size={420} my={40}>
      <Title ta="center">
        Welcome back!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Do not have an account yet?{' '}
        <Anchor size="sm" component="button">
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit((values) => submitLoginForm(values))}>
          <TextInput label="Email" placeholder="you@mantine.dev" {...form.getInputProps("email")} />
          <PasswordInput label="Password" placeholder="Your password" mt="md" {...form.getInputProps("password")} />
          <Group justify="space-between" mt="lg">
            <Anchor component="button" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button loading={loading} type="submit" fullWidth mt="xl">
            Sign in
          </Button>
        </form>
      </Paper>
    </Container>
  )
}