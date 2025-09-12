import { InformationVariant } from '@models/information'

export function findVariantByValue(value: number, variants: InformationVariant[]) {
  const variant = variants.find((variant) => variant.value === value)

  return variant ?? variants[0]
}
