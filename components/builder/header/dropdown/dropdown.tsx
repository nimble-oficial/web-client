import { CommandIdentifier, Content, Provider, Trigger } from "@/components"

export const BuilderHeaderCommandDropdown = () => {
  return (
    <Provider>
      {({ selectedCommand, selectedGuild }) => (
        <Trigger>
          <div>
            <CommandIdentifier
              commandName={selectedCommand}
              guildName={selectedGuild}
            />
            <Content />
          </div>
        </Trigger>
      )}
    </Provider>
  )
}
