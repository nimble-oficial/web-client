import { describe, expect, it } from "vitest"

import { updateNodeData } from "."
import { nodesMock, selectedNodeMock } from "../../mocks"

describe("updateNodeData()", () => {
  it("return an empty array if selected node parameter is invalid", () => {
    expect(updateNodeData({ nodes: [], selectedNode: null })).toStrictEqual([])

    expect(
      updateNodeData({ nodes: [], selectedNode: undefined! })
    ).toStrictEqual([])
  })

  it("update node data correctly", () => {
    const nodes = nodesMock
    const selectedNode = selectedNodeMock

    let updatedNodes = updateNodeData({
      nodes,
      selectedNode,
      overrides: {
        label: "updated-label",
      },
    })

    expect(updatedNodes).toStrictEqual([
      {
        id: "1",
        data: {
          label: "updated-label",
        },
        position: {
          x: 250,
          y: 0,
        },
        style: {},
      },
      {
        id: "2",
        data: {
          label: "send-message",
        },
        position: {
          x: 0,
          y: 0,
        },
      },
    ])

    selectedNodeMock.index = 1

    updatedNodes = updateNodeData({
      nodes,
      selectedNode,
      overrides: {
        label: "foobar-baz",
      },
      style: {
        opacity: 0.5,
      },
    })

    expect(updatedNodes).toStrictEqual([
      {
        id: "1",
        data: {
          label: "command-triggered",
        },
        position: { x: 250, y: 0 },
      },
      {
        id: "2",
        data: {
          label: "foobar-baz",
        },
        style: {
          opacity: 0.5,
        },
        position: {
          x: 0,
          y: 0,
        },
      },
    ])
  })
})
