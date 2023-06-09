import { MoveUserToChannelNodeForm, NodeSheetProvider } from "@/components"

export const MoverUserToChannelNodeSheet = () => {
  return (
    <NodeSheetProvider handleSave={() => {}}>
      <MoveUserToChannelNodeForm />
    </NodeSheetProvider>
  )
}
