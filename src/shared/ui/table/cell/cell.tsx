import {CellProps} from './props.ts'

export function Cell(props: CellProps) {
  return (
    <td style={{
      width: props?.styles?.width,
      minWidth: props?.styles?.minWidth,
      height: '40px',
      flex: props?.styles?.flex,
      display: 'flex',
      alignItems: 'center',
      padding: props?.styles?.padding || 0,
      margin: props?.styles?.margin || 0,
    }}>
      {props.children}
    </td>
  )
}
