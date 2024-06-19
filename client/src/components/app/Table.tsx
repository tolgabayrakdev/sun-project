import React, { useState } from 'react';
import { Table, TextInput, ScrollArea, Modal, Button, Group, Select, Pagination } from '@mantine/core';

const initialData = [
  { id: 1, name: 'John Doe', age: 28, email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', age: 34, email: 'jane@example.com' },
  { id: 3, name: 'Alice Johnson', age: 25, email: 'alice@example.com' },
  // Daha fazla veri ekleyin
  { id: 4, name: 'Bob Brown', age: 40, email: 'bob@example.com' },
  { id: 5, name: 'Carol White', age: 23, email: 'carol@example.com' },
  { id: 6, name: 'Daniel Black', age: 29, email: 'daniel@example.com' },
  { id: 7, name: 'Eva Green', age: 32, email: 'eva@example.com' },
  { id: 8, name: 'Frank Blue', age: 45, email: 'frank@example.com' },
  { id: 9, name: 'Grace Red', age: 27, email: 'grace@example.com' },
  { id: 10, name: 'Henry Orange', age: 31, email: 'henry@example.com' },
  { id: 11, name: 'Ivy Yellow', age: 22, email: 'ivy@example.com' },
  { id: 12, name: 'Jack Purple', age: 36, email: 'jack@example.com' },
  { id: 13, name: 'Kelly Pink', age: 28, email: 'kelly@example.com' },
  { id: 14, name: 'Leo Gray', age: 34, email: 'leo@example.com' },
  { id: 15, name: 'Mia Silver', age: 25, email: 'mia@example.com' },
  { id: 16, name: 'Grace Red', age: 27, email: 'grace@example.com' },
  { id: 17, name: 'Tolga Orange', age: 31, email: 'tolgahenry@example.com' },
  { id: 18, name: 'Ivy Yellow', age: 22, email: 'ivy@example.com' },
  { id: 19, name: 'Jack Purple', age: 36, email: 'jack@example.com' },
  { id: 20, name: 'Kelly Pink', age: 28, email: 'kelly@example.com' },
  { id: 21, name: 'Leo Gray', age: 34, email: 'leo@example.com' },
  { id: 22, name: 'Mia Silver', age: 25, email: 'mia@example.com' },
  { id: 23, name: 'Grace Red', age: 27, email: 'grace@example.com' },
  { id: 24, name: 'Henry Orange', age: 31, email: 'henry@example.com' },
  { id: 25, name: 'Ivy Yellow', age: 22, email: 'ivy@example.com' },
  { id: 26, name: 'Jack Purple', age: 36, email: 'jack@example.com' },
  { id: 27, name: 'Kelly Pink', age: 28, email: 'kelly@example.com' },
  { id: 28, name: 'Leo Gray', age: 34, email: 'leo@example.com' },
  { id: 29, name: 'Mia Silver', age: 25, email: 'mia@example.com' },
  { id: 30, name: 'Jack Purple', age: 36, email: 'jack@example.com' },
  { id: 31, name: 'Kelly Pink', age: 28, email: 'kelly@example.com' },
  { id: 32, name: 'Leo Gray', age: 34, email: 'leo@example.com' },
];

function DataTable() {
  const [data, setData] = useState(initialData);
  const [search, setSearch] = useState('');
  const [selectedData, setSelectedData] = useState<any>(null);
  const [modalOpened, setModalOpened] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState(5);

  const filteredData = data.filter((item) => {
    const searchTerm = search.toLowerCase();
    return (
      item.name.toLowerCase().includes(searchTerm) ||
      item.email.toLowerCase().includes(searchTerm) ||
      item.age.toString().includes(searchTerm)
    );
  });

  const handleEdit = (item: any) => {
    setSelectedData(item);
    setModalOpened(true);
  };

  const handleDelete = (id: any) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleUpdate = () => {
    setData(data.map((item) => (item.id === selectedData.id ? selectedData : item)));
    setModalOpened(false);
  };

  const handleChange = (field: any, value: any) => {
    setSelectedData({ ...selectedData, [field]: value });
  };

  const handlePageChange = (newPage: any) => {
    setPage(newPage);
  };

  const handlePageSizeChange = (newPageSize: any) => {
    setPageSize(newPageSize);
    setPage(1); // Sayfa boyutu değiştiğinde sayfayı 1'e sıfırla
  };

  const paginatedData = filteredData.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div>
      <TextInput
        w="230"
        placeholder="Ara..."
        value={search}
        onChange={(event) => setSearch(event.currentTarget.value)}
        mb="md"
      />

      <ScrollArea style={{ height: pageSize > 20 ? '600px' : 'auto' }}>
        <Table striped highlightOnHover verticalSpacing="md">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>İsim</Table.Th>
              <Table.Th>Yaş</Table.Th>
              <Table.Th>Email</Table.Th>
              <Table.Th>İşlemler</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>

            {
              paginatedData.length > 0 ? (
                paginatedData.map((item) => (
                  <Table.Tr key={item.id}>
                    <Table.Td>{item.name}</Table.Td>
                    <Table.Td>{item.age}</Table.Td>
                    <Table.Td>{item.email}</Table.Td>
                    <Table.Td>
                      <Group>
                        <Button onClick={() => handleEdit(item)} size="xs">Güncelle</Button>
                        <Button onClick={() => handleDelete(item.id)} size="xs" color="red">Sil</Button>
                      </Group>
                    </Table.Td>
                  </Table.Tr>
                ))
              ) : (
                <Table.Tr>
                  <Table.Td style={{ textAlign: 'center'}}>
                    Sonuç Yok
                  </Table.Td>
                </Table.Tr>
              )
            }
          </Table.Tbody>
        </Table>
      </ScrollArea>

      <Group position="apart" mt="md">
        <Select
          value={pageSize.toString()}
          onChange={(value: any) => handlePageSizeChange(parseInt(value))}
          data={[
            { value: '5', label: '5' },
            { value: '25', label: '25' },
            { value: '50', label: '50' },
          ]}
        />
        <Pagination
          value={page}
          onChange={handlePageChange}
          total={Math.ceil(filteredData.length / pageSize)}
        />
      </Group>

      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        title="Veriyi Güncelle"
      >
        {selectedData && (
          <div>
            <TextInput
              label="İsim"
              value={selectedData.name}
              onChange={(event) => handleChange('name', event.currentTarget.value)}
              mb="sm"
            />
            <TextInput
              label="Yaş"
              value={selectedData.age}
              onChange={(event) => handleChange('age', event.currentTarget.value)}
              mb="sm"
            />
            <TextInput
              label="Email"
              value={selectedData.email}
              onChange={(event) => handleChange('email', event.currentTarget.value)}
              mb="sm"
            />
            <Button onClick={handleUpdate}>Güncelle</Button>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default DataTable;
