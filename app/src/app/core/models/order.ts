export interface Order {
  id?: number,
  createdDate?: Date,
  eventDate: Date,
  serviceId: number,
  serviceUser?: string,
  state?: string,
  stateLabel?: string,
  totalValue?: number,
  userId?: number,
  userName?: string
}
