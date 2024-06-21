import { Grid } from "@mantine/core"
import Table from "../../components/app/Table"

type Props = {}

export default function Persons({ }: Props) {
    return (
        <Grid p="lg">
            <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
                <Table />
            </Grid.Col>
        </Grid>
    )
}