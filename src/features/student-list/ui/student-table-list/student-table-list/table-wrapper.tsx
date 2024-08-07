import {ReactTableWrapperProps} from './props.ts'
import {TableContainer} from './styles.ts'
import {flexRender} from '@tanstack/react-table'

export function TableWrapper<T>({table, ...props}: ReactTableWrapperProps<T>) {
  return (
    <TableContainer
      $width={props.styles?.width || '100%'}
    >
      <thead>
        {
          table.getHeaderGroups().map(group => (
            <tr
              key={group.id}>
              {
                group.headers.map(header => flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                ))
              }
            </tr>
          ))
        }
      </thead>
      <tbody style={{
        backgroundColor: '#FFFFFF',
        boxSizing: 'border-box',
        boxShadow: '0px 7px 64px 0px #00000012',
      }}>
        {
          table.getRowModel().rows.map(row => (
            <tr
              key={row.id}
              style={{
                height: '65px',
                borderRadius: '26px'
              }}
            >
              {
                row.getVisibleCells().map(cell => flexRender(
                  cell.column.columnDef.cell,
                  cell.getContext()
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </TableContainer>
  )
}
