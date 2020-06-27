export interface Order {
  id?: number,
  createdDate?: Date,
  eventDate: Date,
  userId?: number,
  serviceId: number,
  totalValue?: number,
  state?: string
}
