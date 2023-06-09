import { DropdownMenu } from "@/components"
import { SPEED_DIAL_GROUPS } from "@/data/speed-dial"

import { Children, Parent } from "."

export const GroupsWrapper = () => {
  return (
    <>
      {SPEED_DIAL_GROUPS.map((group) => (
        <div key={group.label}>
          <DropdownMenu>
            <Parent group={group} />
            <Children group={group} />
          </DropdownMenu>
        </div>
      ))}
    </>
  )
}
