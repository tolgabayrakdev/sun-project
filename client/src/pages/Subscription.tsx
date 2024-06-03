import { Badge, Button, Card, Container, Divider, Group, Image, Modal, SimpleGrid, Text, TextInput, Title } from "@mantine/core"
import { useDisclosure } from '@mantine/hooks';
import { useState } from "react";

export default function Subscription() {
    const [opened, { open, close }] = useDisclosure(false);
    const [selectedPlan, setSelectedPlan] = useState({ name: '', price: '' });
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    const plans = [
        {
            name: 'Basic Plan',
            price: '$9.99 / Month',
            details: '- Temel Plan\n- 10GB Alan\n- 100 Kişiye kadar üyelik',
            gradient: { from: 'blue', to: 'cyan', deg: 90 },
            image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png'
        },
        {
            name: 'Pro Plan',
            price: '$15.99 / Month',
            details: '- Pro Plan\n- 30GB Alan\n- 500 Kişiye kadar üyelik',
            gradient: { from: 'red', to: 'crimson', deg: 90 },
            image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png'
        }
    ];

    const handleOpenModal = (plan: any) => {
        setSelectedPlan(plan);
        open();
    };
    const handlePayment = () => {
        // Ödeme işleme mantığını burada ekleyin
        console.log('Card Number:', cardNumber);
        console.log('Expiry Date:', expiryDate);
        console.log('CVV:', cvv);
        close();
    };

    return (
        <Container size="lg" py="xl">
            <Modal opened={opened} onClose={close} overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3,
            }}
                title="Payment">
                <Text>{`Selected Plan: ${selectedPlan.name}`}</Text>
                <Text>{`Price: ${selectedPlan.price}`}</Text>

                <Divider my="md" />

                <form>
                <TextInput
                    label="Card Number"
                    placeholder="1234 5678 9123 4567"
                    value={cardNumber}
                    onChange={(event) => setCardNumber(event.currentTarget.value)}
                    required
                />
                <TextInput
                    label="Expiry Date"
                    placeholder="MM/YY"
                    value={expiryDate}
                    onChange={(event) => setExpiryDate(event.currentTarget.value)}
                    required
                />
                <TextInput
                    label="CVV"
                    placeholder="123"
                    value={cvv}
                    onChange={(event) => setCvv(event.currentTarget.value)}
                    required
                />
                <Button onClick={handlePayment} fullWidth mt="md" radius="md">
                    Pay
                </Button>
                </form>
            </Modal>


            <Group justify="center">
                <Badge variant="filled" size="lg">
                    Subscription plans
                </Badge>
            </Group>

            <Title order={2} ta="center" mt="sm">
                Choose your plan
            </Title>

            <SimpleGrid cols={2}>
                {plans.map((plan) => (
                    <Card key={plan.name} mt="xl" shadow="sm" padding="lg" radius="md" withBorder>
                        <Card.Section>
                            <Image src={plan.image} height={160} alt={plan.name} />
                        </Card.Section>

                        <Group justify="space-between" mt="md" mb="xs">
                            <Text
                                variant="gradient"
                                gradient={plan.gradient}
                                fw={600}
                            >
                                {plan.name}
                            </Text>
                            <Badge color="pink">{plan.price}</Badge>
                        </Group>

                        <Text size="sm" c="dimmed" style={{ whiteSpace: 'pre-line' }}>
                            {plan.details}
                        </Text>

                        <Button
                            onClick={() => handleOpenModal(plan)}
                            variant="gradient"
                            gradient={plan.gradient}
                            fullWidth
                            mt="md"
                            radius="md"
                        >
                            Choose
                        </Button>
                    </Card>
                ))}
            </SimpleGrid>
        </Container>
    )
}