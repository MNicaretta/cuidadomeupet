export interface User {
  id?: number,
  name: string,
  email: string,
  password: string,
  identity?: string,
  phone?: string,
  description?: string,
  createdDate: Date
}
