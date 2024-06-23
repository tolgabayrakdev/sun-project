import { Accordion, Button, Drawer, Flex, Loader, ScrollArea, TextInput } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks";
import { IconPlus } from "@tabler/icons-react";
import { useState } from "react";

type Props = {}
type Report = {
  name: string;
  description: string;
};

const reportsList: Report[] = [
  {
    name: 'Rapor 1',
    description:
      'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
  },
  {
    name: 'Rapor 2',
    description:
      'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
  },
  {
    name: 'Rapor 3',
    description:
      'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
  },
  {
    name: 'Rapor 4',
    description:
      'Another description here for report 4.',
  },
  {
    name: 'Rapor 5',
    description:
      'Yet another description for report 5.',
  },
  {
    name: 'Rapor 6',
    description:
      'And description for report 6.',
  },
  {
    name: 'Rapor 7',
    description:
      'This is description for report 7.',
  },
  {
    name: 'Rapor 8',
    description:
      'A sample description for report 8.',
  },
  {
    name: 'Rapor 9',
    description:
      'Sample description for report 9.',
  },
  {
    name: 'Rapor 10',
    description:
      'Description for report 10.',
  },
  {
    name: 'Rapor 11',
    description:
      'Another description for report 11.',
  },
  {
    name: 'Rapor 12',
    description:
      'Yet another description for report 12.',
  },
  {
    name: 'Rapor 13',
    description:
      'And description for report 13.',
  },
  {
    name: 'Rapor 14',
    description:
      'This is description for report 14.',
  },
  {
    name: 'Rapor 15',
    description:
      'A sample description for report 15.',
  },
  {
    name: 'Rapor 16',
    description:
      'Sample description for report 16.',
  },
  {
    name: 'Rapor 17',
    description:
      'Description for report 17.',
  },
  {
    name: 'Rapor 18',
    description:
      'Another description for report 18.',
  },
  {
    name: 'Rapor 19',
    description:
      'Yet another description for report 19.',
  },
  {
    name: 'Rapor 20',
    description:
      'And description for report 20.',
  },
];

const itemsPerPage = 5; // Raporlar sayfa başına gösterilen öğe sayısı


export default function Raports({ }: Props) {
  const [opened, { open, close }] = useDisclosure(false);
  const [search, setSearch] = useState('');

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const filteredReportsList = reportsList.filter((report: { name: string, description: string }) =>
    report.name.toLowerCase().includes(search.toLowerCase()) ||
    report.description.toLowerCase().includes(search.toLowerCase())
  );

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setPage(page + 1);
      setLoading(false);
    }, 1000); // Örnek için 1 saniye bekleyelim, gerçek uygulamada bu asenkron veri yükleme işlemine uygun şekilde güncellenmeli
  };

  const visibleReports = filteredReportsList.slice(0, page * itemsPerPage);



  const items = visibleReports.map((item) => (
    <Accordion.Item key={item.name} value={item.name}>
      <Accordion.Control>{item.name}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));


  const downloadPdf = () => {
    // Create a new window and write the filtered reports list into it
    const win: any = window.open('', '', 'height=700,width=700');
    win.document.write('<html><head><title>Rapors</title>');
    win.document.write('</head><body>');
    win.document.write('<h1>Rapors List</h1>');
    filteredReportsList.forEach((report) => {
      win.document.write('<h2>' + report.name + '</h2>');
      win.document.write('<p>' + report.description + '</p>');
    });
    win.document.write('</body></html>');
    win.document.close();
    win.print();
  };

  return (
    <div>
      <Flex justify="space-between">
        <TextInput
          w="230"
          placeholder="Ara..."
          onChange={(event) => setSearch(event.currentTarget.value)}
          mb="md"
        />
        <Button color="green.6" leftSection={<IconPlus />} onClick={open}>Yeni Rapor</Button>
      </Flex>

      <ScrollArea h={650}>
        <Accordion variant="separated">
          {items}
        </Accordion>
        {filteredReportsList.length > visibleReports.length && (
          <Flex justify="center" mt="md">
            <Button variant="light" color="rgba(79, 153, 255, 1)" onClick={loadMore}>
              {loading ? <Loader size="xs" /> : "Daha fazla göster"}
            </Button>
          </Flex>
        )}
      </ScrollArea>
      <Button onClick={downloadPdf} mt="md">PDF Olarak İndir</Button>


      <Drawer position="right" opened={opened} onClose={close} title="Yeni rapor ekle">
        <p>sdfsdfs</p>
      </Drawer>
    </div>
  )
}