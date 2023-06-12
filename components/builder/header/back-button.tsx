import { useRouter } from "next/navigation"
import { Button, Icons } from "@/components"

export const BuilderBackButton = () => {
  const { push } = useRouter()

  return (
    <Button variant="ghost" onClick={() => push("/dashboard")} size="sm">
      <Icons.arrowLeft size={16} />
    </Button>
  )
}
