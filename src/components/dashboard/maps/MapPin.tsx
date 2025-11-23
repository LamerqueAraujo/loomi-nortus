import { Props } from '@/types/dashboard/map'

export default function MapPin({ name, color, top, left }: Props) {
  return (
    <div
      className="absolute flex items-center justify-center w-6 h-6 rounded-full"
      style={{
        backgroundColor: color,
        top,
        left,
        transform: 'translate(-50%, -50%)',
      }}
      title={name}
    >
      <span className="text-white text-xs">📍</span>
    </div>
  )
}
