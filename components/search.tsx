import { Input } from "@/components"

interface SearchProps {
  placeholder: string
}

export function Search({ placeholder = "Search..." }: SearchProps) {
  return (
    <div>
      <Input
        type="search"
        placeholder={placeholder}
        className="h-9 md:w-[100px] lg:w-[300px]"
      />
    </div>
  )
}
