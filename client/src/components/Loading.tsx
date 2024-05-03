import { Spinner, Stack } from '@chakra-ui/react'

type Props = {}

export default function Loading({ }: Props) {
    return (
        <Stack h={'100vh'} alignItems="center" justifyContent="center">
            <Spinner />
        </Stack>
    )
}