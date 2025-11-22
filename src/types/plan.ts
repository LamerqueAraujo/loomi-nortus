export type PlanIndicator = {
  name: string
  conversion: number
  roi: number
  value: number
}

export type PlanApiResponse = {
  includedBenefits: string[]
  plansIndicators: PlanIndicator[]
}

export type ExtraCoverage = {
  id: string
  label: string
  price: number
}

export type SliderFieldProps = {
  label: string
  min: number
  max: number
  step: number
  value: number
  onChange: (v: number) => void
  format: (v: number) => string
}
