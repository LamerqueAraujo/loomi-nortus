export type Message = {
  id: string
  author: string
  content: string
  timestamp: string
  type: 'user_message' | 'assistant_message'
}

export type ChatApiResponse = {
  messages: Message[]
}
