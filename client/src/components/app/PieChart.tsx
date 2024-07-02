import { AgCharts } from 'ag-charts-react';
import { useState } from 'react'

type Props = {}

export default function PieChart({ }: Props) {
    const [options, setOptions] = useState<any>({
        data: [
            { asset: "Stocks", amount: 60000 },
            { asset: "Bonds", amount: 40000 },
            { asset: "Cash", amount: 7000 },
            { asset: "Real Estate", amount: 5000 },
            { asset: "Commodities", amount: 3000 },
        ],
        title: {
            text: "Portfolio Composition",
        },
        series: [
            {
                type: "pie",
                angleKey: "amount",
                legendItemKey: "asset",
            },
        ],
    });

    return <AgCharts options={options} />
}