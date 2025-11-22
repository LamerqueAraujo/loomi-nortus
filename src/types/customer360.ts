export type Product = {
  name: string
  value: number
  status: string
}

export type Metric = {
  label: string
  value: string | number
}

export type Client360Response = {
  client: {
    name: string
    clientType: string
  }
  produtos: Product[]
  metrics?: Metric[]
  insights?: string[]
}
