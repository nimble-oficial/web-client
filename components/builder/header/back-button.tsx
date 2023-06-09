import { useRouter } from "next/router"
import { Button } from "@/components"
import { ArrowLeft } from "lucide-react"

export const BuilderBackButton = () => {
  const { push } = useRouter()

  return (
    <Button variant="ghost" onClick={() => push("/dashboard")} size="sm">
      <ArrowLeft size={16} />
    </Button>
  )
}
