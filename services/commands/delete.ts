import { api } from "../api"

export interface DeleteCommandData {
  commandId: string
  builderId: string
}

export const deleteCommand = <T>(data: DeleteCommandData) =>
  api.delete(`commands/by-builder/${data.builderId}/${data.commandId}`)
