import { Flex, Text } from "@mantine/core"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <Flex
      h="100vh"
      justify="center"
      align="center"
      direction="column"

    >
      <Text
        size="xl"
        fw={900}
        variant="gradient"
        gradient={{ from: 'blue', to: 'gray', deg: 90 }}
      >
        Hoşgeldin
      </Text>
      <Link style={{ textDecoration: "none" }} to="/login">
        <Text
          size="sm"
          fw={600}
          variant="gradient"
          gradient={{ from: 'blue', to: 'gray', deg: 90 }}
        >
          Buradan giriş yapabilirsin.
        </Text>
      </Link>
    </Flex>
  )
}