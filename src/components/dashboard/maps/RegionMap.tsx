'use client'

import dynamic from 'next/dynamic'

const RegionMapInner = dynamic(() => import('./RegionMapInner'), {
  ssr: false,
})

export default function RegionMap() {
  return <RegionMapInner />
}
