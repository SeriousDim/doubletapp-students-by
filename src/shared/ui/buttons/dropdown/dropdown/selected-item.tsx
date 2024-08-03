import {Typography} from '../../../typography/typography.tsx'
import {SelectedItemProps} from './props.ts'

export function SelectedItem(props: SelectedItemProps) {
  return (
    <div style={{
      paddingLeft: '20px',
      overflow: 'hidden',
      flex: 1
    }}>
      <Typography
        name={'12'}
        styles={{
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        {
          props.item
        }
      </Typography>
    </div>
  )
}
