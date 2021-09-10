import { SimulationPayload } from "@vtex/clients";

export async function orderForm(ctx: Context, next: () => Promise<any>) {
  const {
    state: { orderFormId },
    clients: { checkout },
  } = ctx
  console.log('orderFormId: ',orderFormId);

  try {
    const orderForm = await checkout.orderForm(orderFormId)
    console.log('orderForm', orderForm?.shippingData)


    const simulation: SimulationPayload = {
      country: 'GBR',
      items: [
        {
            "id": "1015",
            "quantity": 1,
            "seller": "1"
        },
        {
            "id": "1082",
            "quantity": 1,
            "seller": "1"
        }
      ],
      postalCode: 'E16AN'
    }
    const data = await checkout.simulation(simulation)
    // console.log('data2', data)
    ctx.body = data
  } catch (error) {
    console.log('orderForm error: ', error)
    ctx.body = `error - orderFormId: ${orderFormId}`
  }

  await next()
}