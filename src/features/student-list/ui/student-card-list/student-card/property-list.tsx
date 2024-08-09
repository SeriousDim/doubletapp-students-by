import {StudentCardProps} from './props.ts'
import {getAge} from '../../../../../entities/student/lib/get-age.ts'
import {getAgeEndingWord} from '../../../../../entities/student/lib/get-age-ending-word.ts'
import {Typography} from '../../../../../shared/ui/typography/typography.tsx'
import {PropsWithChildren} from 'react'
import {PropertyListItemContainer} from './styles.ts'

function PropertyListItem(props: PropsWithChildren) {
  return (
    <PropertyListItemContainer>
      <Typography
        weight={'400'}
        fontSize={'12px'}
        lineHeight={'15.1px'}
        styles={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          minWidth: 0
        }}
      >
        {props.children}
      </Typography>
    </PropertyListItemContainer>
  )
}

export function PropertyList(props: {
  birthday: StudentCardProps['birthday'],
  speciality: StudentCardProps['speciality'],
  group: StudentCardProps['group']
}) {
  const age = getAge(props.birthday)

  return (
    <ul style={{
      position: 'relative',
      left: '54px',
    }}>
      <PropertyListItem>{`${age} ${getAgeEndingWord(age)}`}</PropertyListItem>
      <PropertyListItem>{props.speciality}</PropertyListItem>
      <PropertyListItem>{props.group}</PropertyListItem>
    </ul>
  )
}
