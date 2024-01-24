import {
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/react';

type OrderWidgetProps = {
    quantity: number;
    date: string;
    packaging: string;
    price: number;
    issuer: string;
};

export const OrderWidget = (props: OrderWidgetProps) => {
    return (
        <TableContainer>
            <Table variant='striped' colorScheme='blue'>
                <Thead>
                    <Tr>
                        <Th>Rosas</Th>
                        <Th>Fecha</Th>
                        <Th>Emisor</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>{props.quantity}</Td>
                        <Td>{props.date}</Td>
                        <Td>{props.issuer}</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    );
};
