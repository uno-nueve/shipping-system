

export const OrderForm = () => {
  return (
    <div>
        <form action="">
            <label htmlFor="quantity">Cantidad</label>
            <input type="number" id="quatity" name="quantity" required />

            <label htmlFor="CUIL_CUIT">CUIT / CUIL</label>
            <input type="number" id="CUIL-CUIT" name="CUIL_CUIT" required />

            <button type="submit">Continuar</button>
        </form>
    </div>
  )
}
