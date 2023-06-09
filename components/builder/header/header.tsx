import Head from "next/head"
import {
  BuilderBackButton,
  BuilderFlowHeaderActions,
  BuilderFlowHeaderProvider,
} from "@/components"

interface BuilderHeaderProps {
  builderId: string
}

export const BuilderHeader = ({ builderId }: BuilderHeaderProps) => {
  return (
    <>
      <Head>
        <title>Builder</title>
      </Head>

      <BuilderFlowHeaderProvider>
        <BuilderBackButton />
        <BuilderFlowHeaderActions builderId={builderId} />
      </BuilderFlowHeaderProvider>
    </>
  )
}
