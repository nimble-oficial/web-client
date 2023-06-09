import { NodeType } from "@/data/speed-dial"

const styles = {
  events: {
    border: "1px solid #5a8eff",
  },
  messages: {
    border: "1px solid #00aca2",
  },
  channels: {
    border: "1px solid #ff6b6b",
  },
}

export const getNodeVariantsStyles = (variant: NodeType) => {
  return styles[variant] || styles.messages
}
