//node/Clients/index.ts
import { IOClients } from '@vtex/api'
import { Checkout } from '@vtex/clients'
// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get checkout() {
    return this.getOrSet('checkout', Checkout)
  }
}