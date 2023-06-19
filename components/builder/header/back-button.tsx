import { useRouter } from "next/navigation"
import { Button, Icons } from "@/components"

export const BuilderBackButton = () => {
  const { back } = useRouter()

  return (
    <Button variant="ghost" onClick={back} size="sm">
      <Icons.arrowLeft size={16} />
    </Button>
  )
}
