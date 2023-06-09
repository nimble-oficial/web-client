import {
  ActionsProvider,
  ActionsWrapper,
  BuilderSpeedDialWrapper,
  OpenButton,
} from "."

export const BuilderSpeedDial = () => {
  return (
    <BuilderSpeedDialWrapper>
      <OpenButton />
      <ActionsWrapper>
        <ActionsProvider />
      </ActionsWrapper>
    </BuilderSpeedDialWrapper>
  )
}
