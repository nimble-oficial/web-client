"use client"

import { BuilderFlow } from "@/components"

interface BuilderPageProps {
  params: {
    builderId: string
  }
}

export default function BuilderPage({ params }: BuilderPageProps) {
  return <BuilderFlow builderId={params.builderId} />
}
