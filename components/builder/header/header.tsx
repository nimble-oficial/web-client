import Head from "next/head"
import {
  BuilderBackButton,
  BuilderFlowHeaderActions,
  BuilderFlowHeaderProvider,
} from "@/components"

export const BuilderHeader = () => {
  return (
    <>
      <Head>
        <title>Builder</title>
      </Head>

      <BuilderFlowHeaderProvider>
        <BuilderBackButton />
        <BuilderFlowHeaderActions />
      </BuilderFlowHeaderProvider>
    </>
  )
}
