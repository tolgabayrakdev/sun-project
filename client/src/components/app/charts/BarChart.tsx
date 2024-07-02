import { BarChart } from '@mantine/charts'

const data = [
    { month: 'Ocak', Smartphones: 1200, Laptops: 900, Tablets: 200 },
    { month: 'Şubat', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
    { month: 'Mart', Smartphones: 400, Laptops: 1000, Tablets: 200 },
    { month: 'Nisan', Smartphones: 1000, Laptops: 200, Tablets: 800 },
    { month: 'Mayıs', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
    { month: 'Haziran', Smartphones: 750, Laptops: 600, Tablets: 1000 },
    { month: 'Temmuz', Smartphones: 1000, Laptops: 200, Tablets: 800 },
    { month: 'Ağustos', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
    { month: 'Eylül', Smartphones: 850, Laptops: 600, Tablets: 1000 },
    { month: 'Ekim', Smartphones: 750, Laptops: 600, Tablets: 1000 },
    { month: 'Kasım', Smartphones: 1750, Laptops: 600, Tablets: 800 },
    { month: 'Aralık', Smartphones: 750, Laptops: 600, Tablets: 700 },


];
export default function BarsChart() {
    return (
        <BarChart
            h={300}
            data={data}
            dataKey="month"
            series={[{ name: 'Smartphones', color: 'blue' },{ name: "Laptops", color: 'teal.6'}]}
        />
    )
}