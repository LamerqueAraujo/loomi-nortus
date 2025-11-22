'use client'

export function Th({ children }: { children: React.ReactNode }) {
  return <th className="px-4 py-3 text-xs font-medium uppercase">{children}</th>
}

export function Td({
  children,
  colSpan,
}: {
  children: React.ReactNode
  colSpan?: number
}) {
  return (
    <td className="px-4 py-3 align-top text-sm" colSpan={colSpan}>
      {children}
    </td>
  )
}
