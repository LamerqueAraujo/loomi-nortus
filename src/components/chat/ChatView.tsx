'use client'

import { useEffect, useRef, useState } from 'react'
import api from '@/services/api'
import type { Message, ChatApiResponse } from '@/types/dashboard/chat'

export default function ChatView() {
  const [data, setData] = useState<ChatApiResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const bottomRef = useRef<HTMLDivElement>(null)

  // scrolla só quando o número de mensagens muda
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [data?.messages.length])

  useEffect(() => {
    const fetchChat = async () => {
      try {
        const response = await api.get('/chat.json')
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
    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#0b1120] p-4">
      {/* ÁREA DE MENSAGENS */}
      <div className="flex-1 overflow-y-auto space-y-3 pr-2">
        {data.messages.map((m) => (
          <Bubble key={m.id} message={m} />
        ))}
        <div ref={bottomRef} />
      </div>

      {/* INPUT */}
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
  )
}

function Bubble({ message }: { message: Message }) {
  const isUser = message.type === 'user_message'

  return (
    <div className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'}`}>
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
