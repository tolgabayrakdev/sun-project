import { Accordion, Button, Drawer, Flex, Loader, Modal, ScrollArea, TextInput, Textarea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPlus } from "@tabler/icons-react";
import { useState } from "react";

type Props = {};

type Report = {
  id: number;
  name: string;
  description: string;
};

const initialFormData: Report = {
  id: 0,
  name: "",
  description: "",
};

const reportsList: Report[] = [
  {
    id: 1,
    name: "Rapor 1",
    description:
      "Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.",
  },
  {
    id: 2,
    name: "Rapor 2",
    description:
      "Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.",
  },
  {
    id: 3,
    name: "Rapor 3",
    description:
      "Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.",
  },
  {
    id: 4,
    name: "Rapor 4",
    description: "Another description here for report 4.",
  },
  {
    id: 5,
    name: "Rapor 5",
    description: "Yet another description for report 5.",
  },
  {
    id: 6,
    name: "Rapor 6",
    description: "And description for report 6.",
  },
  {
    id: 7,
    name: "Rapor 7",
    description: "This is description for report 7.",
  },
  {
    id: 8,
    name: "Rapor 8",
    description: "A sample description for report 8.",
  },
  {
    id: 9,
    name: "Rapor 9",
    description: "Sample description for report 9.",
  },
  {
    id: 10,
    name: "Rapor 10",
    description: "Description for report 10.",
  },
  {
    id: 11,
    name: "Rapor 11",
    description: "Another description for report 11.",
  },
  {
    id: 12,
    name: "Rapor 12",
    description: "Yet another description for report 12.",
  },
  {
    id: 13,
    name: "Rapor 13",
    description: "And description for report 13.",
  },
  {
    id: 14,
    name: "Rapor 14",
    description: "This is description for report 14.",
  },
  {
    id: 15,
    name: "Rapor 15",
    description: "A sample description for report 15.",
  },
  {
    id: 16,
    name: "Rapor 16",
    description: "Sample description for report 16.",
  },
  {
    id: 17,
    name: "Rapor 17",
    description: "Description for report 17.",
  },
  {
    id: 18,
    name: "Rapor 18",
    description: "Another description for report 18.",
  },
  {
    id: 19,
    name: "Rapor 19",
    description: "Yet another description for report 19.",
  },
  {
    id: 20,
    name: "Rapor 20",
    description: "And description for report 20.",
  },
];

const itemsPerPage = 5; // Raporlar sayfa başına gösterilen öğe sayısı

export default function Reports({ }: Props) {
  const [opened, { open, close }] = useDisclosure(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<Report>(initialFormData);
  const [selectedReportIndex, setSelectedReportIndex] = useState<number | null>(null);
  const [modalOpened, setModalOpened] = useState(false);
  const [reports, setReports] = useState(reportsList); // Raporları state olarak tutmak

  const filteredReportsList = reportsList.filter(
    (report: { name: string; description: string }) =>
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

  const handleUpdate = (index: number) => {
    setSelectedReportIndex(index);
    setFormData(filteredReportsList[index]);
    setModalOpened(true);
  };

  const handleSave = async () => {
    console.log(selectedReportIndex);

    if (selectedReportIndex !== null) {
      try {
        const response = await fetch(`http://localhost:1234/reports/${formData.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          const updatedReports = [...reports];
          updatedReports[selectedReportIndex] = formData;
          setReports(updatedReports);
          console.log("Güncellenen Veri:", formData);
        } else {
          console.error("Güncelleme işlemi başarısız.");
        }
      } catch (error) {
        console.error("Güncelleme hatası:", error);
      }
      setModalOpened(false);
      setSelectedReportIndex(null);
      setFormData(initialFormData);
    }
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDelete = (index: number) => {
    // Silme işlemi için gerekli kodlar buraya gelecek
    console.log(`Silme: ${filteredReportsList[index].name}`);
    // Silme işlemleri burada gerçekleştirilebilir
    const updatedReportsList = reportsList.filter((_, idx) => idx !== index);
    console.log("Güncellenmiş Rapor Listesi:", updatedReportsList);
  };

  const downloadPdf = () => {
    // PDF indirme işlemi
    const win: any = window.open("", "", "height=700,width=700");
    win.document.write("<html><head><title>Rapors</title>");
    win.document.write("</head><body>");
    win.document.write("<h1>Rapors List</h1>");
    filteredReportsList.forEach((report) => {
      win.document.write("<h2>" + report.name + "</h2>");
      win.document.write("<p>" + report.description + "</p>");
    });
    win.document.write("</body></html>");
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
        <Button color="green.6" leftSection={<IconPlus />} onClick={open}>
          Yeni Rapor
        </Button>
      </Flex>

      <ScrollArea h={650}>
        <Accordion variant="separated">
          {visibleReports.map((item, index) => (
            <Accordion.Item key={item.name} value={item.name}>
              <Accordion.Control>{item.name}</Accordion.Control>
              <Accordion.Panel>
                {item.description}{" "}
                <Flex justify="flex-end" mt="sm">
                  <Button variant="light" onClick={() => handleUpdate(index)}>
                    Güncelle
                  </Button>
                  <Button
                    variant="light"
                    color="red"
                    ml="xs"
                    onClick={() => handleDelete(index)}
                  >
                    Sil
                  </Button>
                </Flex>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
        {filteredReportsList.length > visibleReports.length && (
          <Flex justify="center" mt="md">
            <Button
              variant="light"
              color="rgba(79, 153, 255, 1)"
              onClick={loadMore}
            >
              {loading ? <Loader size="xs" /> : "Daha fazla göster"}
            </Button>
          </Flex>
        )}
      </ScrollArea>
      <Button onClick={downloadPdf} mt="md">
        PDF Olarak İndir
      </Button>

      <Modal
        opened={modalOpened}
        onClose={() => {
          setModalOpened(false);
          setSelectedReportIndex(null);
          setFormData(initialFormData);
        }}
        title="Rapor Güncelle"
      >
        <TextInput
          label="Rapor Adı"
          placeholder="Rapor adını girin"
          value={formData.name}
          onChange={handleInputChange}
          name="name"
          mb="md"
        />
        <Textarea
          label="Rapor Açıklaması"
          placeholder="Rapor açıklamasını girin"
          value={formData.description}
          onChange={handleInputChange}
          name="description"
          resize="vertical"
          mb="md"
        />
        <Button onClick={handleSave}>Kaydet</Button>
      </Modal>

      <Drawer
        position="right"
        opened={opened}
        onClose={close}
        title="Yeni rapor ekle"
      >
        <p>sdfsdfs</p>
      </Drawer>
    </div>
  );
}
