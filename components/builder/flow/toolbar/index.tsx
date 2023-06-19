import { Icons } from "@/components/icons"
import { Button, Separator } from "@/components/ui"

export const BuilderToolbar = () => {
  return (
    <div className="fixed inset-x-0 bottom-6 z-20 mx-auto w-[300px] rounded-lg border border-slate-100 bg-white px-4 py-2 shadow-sm duration-100 hover:-translate-y-2 hover:shadow-xl">
      <div className="flex items-center gap-2">
        <div className="flex items-center">
          <Button variant="ghost" className="px-2">
            <Icons.undo size={20} className="text-slate-700" />
          </Button>

          <Button variant="ghost" className="px-2">
            <Icons.redo size={20} className="text-slate-700" />
          </Button>
        </div>

        <Separator orientation="vertical" className="h-[20px] w-[2px]" />
      </div>
    </div>
  )
}
