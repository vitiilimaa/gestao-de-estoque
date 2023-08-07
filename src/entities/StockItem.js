import { format } from "date-fns"

class StockItem {
  constructor({ name, quantity, price, category, description }) {
    this.id = parseInt(Math.random() * 100)
    this.name = name
    this.description = description,
    this.quantity = +quantity,
    this.price = +price,
    this.category = category
    this.createdAt = format(new Date(), "dd/MM/yyyy")
    this.updatedAt = format(new Date(), "dd/MM/yyyy")
  }
}

export default StockItem