import { Flex, Loader } from '@mantine/core';

export default function Loading() {
    return (
        <Flex h="100vh" justify="center" align="center" direction="column">
            <Loader color="blue" />
        </Flex>
    );
}
