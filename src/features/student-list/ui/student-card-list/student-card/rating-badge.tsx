import {StudentCardProps} from './props.ts'
import RatingIcon from '../../../../../shared/assets/icons/rating.svg?react'
import {Typography} from '../../../../../shared/ui/typography/typography.tsx'

export function RatingBadge(props: {
  rating: StudentCardProps['rating']
}) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }}>
      <RatingIcon/>
      <Typography
        name={'12'}
      >
        {props.rating}
      </Typography>
    </div>
  )
}
