import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateListNumber(index: number) {
  const order = index + 1
  if (order < 10) {
    return `0${order}`
  }

  return `${order}`
}

export function generateProductDescription(description: string) {
  return `${description.split('.')[0]}.`
}

export function generateInitials(name: string) {
  const splitName = name.split(' ')
  return splitName.map((name) => name.charAt(0)).join('')
}
