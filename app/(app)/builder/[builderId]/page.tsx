"use client"

import { BuilderFlow } from "@/components"

interface BuilderPageProps {
  params: {
    builderId: string
  }
}

export default function BuilderPage({ params, ...props }: BuilderPageProps) {
  return <BuilderFlow builderId={params.builderId} />
}
