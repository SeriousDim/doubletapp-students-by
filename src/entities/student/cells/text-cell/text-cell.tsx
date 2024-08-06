import {TextCellProps} from './props.ts'
import {Typography} from '../../../../shared/ui/typography/typography.tsx'
import {Cell} from '../../../../shared/ui/table'

export function TextCell(props: TextCellProps) {
  return (
    <Cell
      styles={props.cellStyles}
    >
      <Typography
        name={props.textName || '16 / M'}
        styles={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        }}
      >
        {props.text}
      </Typography>
    </Cell>
  )
}
