'use client'

import { useEffect, useState } from 'react'
import axios from '@/services/api'

type Message = {
  id: string
  author: string
  content: string
  timestamp: string
  type: 'user_message' | 'assistant_message'
}

type ChatApiResponse = {
  messages: Message[]
}

export default function ChatView() {
  const [data, setData] = useState<ChatApiResponse | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchChat = async () => {
      try {
        const response = await axios.get('/chat.json')
        setData(response.data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchChat()
  }, [])

  if (loading) {
    return <p className="text-sm text-white/60">Carregando conversa...</p>
  }

  if (!data) {
    return <p className="text-sm text-red-400">Falha ao carregar chat.</p>
  }

  return (
    <div className="space-y-4 h-[calc(100vh-120px)]">
      <header>
        <h1 className="text-2xl font-semibold">Chat com o cliente</h1>
        <p className="text-sm text-white/60">
          Histórico de interação para apoiar recomendações da IA.
        </p>
      </header>

      <div className="rounded-2xl border border-white/10 bg-[#020617] p-4 flex flex-col h-full">
        <div className="flex-1 overflow-y-auto space-y-3 pr-2">
          {data.messages.map((m) => (
            <Bubble key={m.id} message={m} />
          ))}
        </div>

        <div className="mt-4">
          <input
            type="text"
            placeholder="Digite uma resposta (mock)…"
            className="w-full rounded-xl bg-[#020617] border border-white/10 px-3 py-2 text-sm"
            disabled
          />
          <p className="text-[10px] text-white/40 mt-1">
            Envio desabilitado neste desafio · apenas visualização de histórico.
          </p>
        </div>
      </div>
    </div>
  )
}

function Bubble({ message }: { message: Message }) {
  const isUser = message.type === 'user_message'

  return (
    <div
      className={`
        flex w-full
        ${isUser ? 'justify-end' : 'justify-start'}
      `}
    >
      <div
        className={`
          max-w-[70%] rounded-2xl px-3 py-2 text-sm
          ${isUser ? 'bg-[#2563eb] text-white' : 'bg-white/5 text-white/90'}
        `}
      >
        <p className="text-[10px] text-white/60 mb-1">{message.author}</p>
        <p>{message.content}</p>
        <p className="mt-1 text-[10px] text-white/40 text-right">
          {message.timestamp}
        </p>
      </div>
    </div>
  )
}
