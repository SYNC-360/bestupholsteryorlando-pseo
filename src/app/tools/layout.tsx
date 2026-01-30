import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Best Upholstery Orlando Tools',
    default: 'Professional Upholstery Tools | Best Upholstery Orlando'
  },
  description: 'Professional upholstery tools and calculators for fabric selection, yardage estimation, and project planning.',
}

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}