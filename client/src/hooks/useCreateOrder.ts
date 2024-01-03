export default async function useCreateOrder(body: object) {
    await fetch(`http://localhost:5000/pedidos`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
