import { Flex, Text } from "@mantine/core";

export default function NotFound() {
    return (
        <Flex h="100vh" justify="center" align="center" direction="column">
            <Text
                size="xl"
                fw={900}
                variant="gradient"
                gradient={{ from: 'blue', to: 'gray', deg: 90 }}
            >
                404 - Page not found !
            </Text>
        </Flex>
    )
}
