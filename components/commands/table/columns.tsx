import {
  Checkbox,
  DataTableColumnHeader,
  DataTableRowActions,
} from "@/components"
import { Command } from "@/stores"
import { ColumnDef } from "@tanstack/react-table"
import { formatDistanceStrict } from "date-fns"

export const columns: ColumnDef<Command>[] = [
  {
    id: "select",
    accessorFn: (row) => row._id,
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorFn: (row) => row.name,
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("name")}
          </span>
        </div>
      )
    },
  },
  {
    accessorFn: (row) => row.description,
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("description")}
          </span>
        </div>
      )
    },
  },
  {
    accessorFn: (row) => row.enabled,
    accessorKey: "enabled",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Enabled" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[100px] truncate font-medium">
            {row.original?.enabled ? "Yes" : "No"}
          </span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorFn: (row) => row.allowedChannel,
    accessorKey: "Allowed Channel",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Allowed Channel" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[100px] truncate font-medium">
            {row.original?.allowedChannel?.name ?? "All"}
          </span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorFn: (row) => row.allowedRole,
    accessorKey: "Allowed Role",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Allowed Role" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[100px] truncate font-medium">
            {row.original?.allowedRole?.name ?? "All"}
          </span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorFn: (row) => row.createdAt,
    accessorKey: "Created At",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created At" />
    ),
    cell: ({ row }) => {
      const parsedDate = formatDistanceStrict(
        new Date(row.original.createdAt),
        new Date(),
        {
          addSuffix: true,
        }
      )

      return (
        <div className="flex w-[100px] items-center">
          <span>{parsedDate}</span>
        </div>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
