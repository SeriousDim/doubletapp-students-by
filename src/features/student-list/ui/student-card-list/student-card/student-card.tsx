import {StudentCardProps} from './props.ts'
import {CardContainer, CardHeader} from './styles.ts'
import {Avatar} from '../../../../../shared/ui/avatar'
import {ActionBar} from '../../../../../entities/student'
import {MiddleHeader} from './middle-header.tsx'
import DeleteIcon from '../../../../../shared/assets/icons/delete.svg?react'
import {PropertyList} from './property-list.tsx'

export function StudentCard(props: StudentCardProps) {
  return (
    <CardContainer>
      <CardHeader>
        <div style={{
          marginRight: '21px'
        }}>
          <Avatar
            src={props.avatar}
          />
        </div>
        <MiddleHeader
          name={props.name}
          color={props.color}
          rating={props.rating}
        />
        <ActionBar actions={[{
          onClick: props.onDelete,
          children: <DeleteIcon/>
        }]}/>
      </CardHeader>
      <div style={{
        position: 'relative',
        zIndex: 0
      }}>
        <PropertyList
          birthday={props.birthday}
          group={props.group}
          speciality={props.speciality}
        />
      </div>
    </CardContainer>
  )
}
