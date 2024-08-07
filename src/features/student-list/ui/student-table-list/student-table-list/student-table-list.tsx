import {StudentTableListProps} from './props.ts'
import {TableWrapper} from './table-wrapper.tsx'
import {getCoreRowModel, useReactTable} from '@tanstack/react-table'
import {createColumns} from './columns.tsx'

export function StudentTableList(props: StudentTableListProps) {
  const table = useReactTable({
    data: props.students,
    getCoreRowModel: getCoreRowModel(),
    columns: createColumns()
  })

  return (
    <TableWrapper
      table={table}
      styles={{
        width: '100%'
      }}
    />
  )
}
