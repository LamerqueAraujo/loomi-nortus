'use client'

import ChatView from '@/components/chat/ChatView'
import ClientPanel from '@/components/chat/ClientPanel'

export default function ChatPage() {
  return (
    <div
      className="
        grid 
        grid-cols-[2fr_420px] 
        h-[calc(100vh-150px)] 
        w-full 
        overflow-hidden 
        gap-6
      "
    >
      {/* COLUNA ESQUERDA – CHAT */}
      <section className="w-full h-full overflow-hidden">
        <ChatView />
      </section>

      {/* COLUNA DIREITA – PAINEL DO CLIENTE (única com scroll) */}
      <aside className="h-full overflow-y-auto pr-1 scrollbar-hide">
        <ClientPanel />
      </aside>
    </div>
  )
}
