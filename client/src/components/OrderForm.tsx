import { useEffect, useState } from "react"

type TOrder = {
  quantity: number;
  customerId: number;
  _id: string;
}

export const OrderForm = () => {
  const [orders, setOrders] = useState<TOrder[]>([])
  const [quantity, setQuantity] = useState('')
  const [customerId, setCustomerId] = useState('')

  async function handleCreateOrder(e: React.FormEvent) {
    e.preventDefault()
    await fetch(`http://localhost:5000/pedidos`, {
      method: 'POST',
      body: JSON.stringify({
        quantity,
        customerId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    setQuantity('')
    setCustomerId('')
  }
  
  async function handleDeleteOrder(orderId: string) {
    fetch(`http://localhost:5000/pedidos/${orderId}`, {
      method: 'DELETE'
    })
  }

  useEffect(() => {
    async function fetchOrders() {
      const response = await fetch(`http://localhost:5000/pedidos`)
      const newOrders = await response.json()
      setOrders(newOrders)
    }
    fetchOrders()
  }, []);
  
  //TODO: Implement optimistic updates to the UI
  //TODO: Refactor the form to have the correct inputs to process the information
  //TODO: Route the app to show the list of orders in another view, leaving the form as a standalone view

  return (
    <div>
      <h1>Orders:</h1>
      <ul>
        {
          orders.map((order) => (
            <li key={order._id}>
              <span>{order.quantity} Rosas</span>
              <span>CUIT/CUIL: {order.customerId}</span>
              <button onClick={() => handleDeleteOrder(order._id)}>X</button>
            </li>
          ))
        }
      </ul>
        <form onSubmit={handleCreateOrder}>
            <label htmlFor="quantity">Cantidad</label>
            <input 
              type="number" 
              id="quatity" 
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required 
            />

            <label htmlFor="customer-id">CUIT / CUIL</label>
            <input 
              type="number" 
              id="customer-id" 
              name="customer-id"
              value={customerId}
              onChange={(e) => setCustomerId(e.target.value)}
              required 
            />

            <button type="submit">Continuar</button>
        </form>
    </div>
  )
}
