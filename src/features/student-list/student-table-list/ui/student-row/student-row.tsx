import {StudentRowContainer} from './styles.ts'
import {StudentRowProps} from './props.ts'
import {ActionsCell, AvatarCell, ColorBadgeCell} from '../../../../../entities/student'
import {TextCell} from '../../../../../entities/student'
import DeleteIcon from '../../../../../shared/assets/icons/delete.svg?react'
import {getAge} from '../../lib/get-age.ts'

export function StudentRow(props: StudentRowProps) {
  return (
    <StudentRowContainer>
      <AvatarCell
        avatarProps={{
          src: props.student.avatar
        }}
        cellStyles={{
          padding: '0 21px 0 0'
        }}
      />
      <TextCell
        text={props.student.name}
        cellStyles={{
          padding: '0 20px 0 0',
          minWidth: '200px',
          flex: 1
        }}
      />
      <TextCell
        text={props.student.speciality}
        cellStyles={{
          padding: '0 20px 0 0',
          minWidth: '100px',
          flex: 1
        }}
      />
      <TextCell
        text={props.student.group}
        cellStyles={{
          width: '80px',
          padding: '0 60px 0 0px',
        }}
      />
      <TextCell
        text={getAge(props.student)}
        cellStyles={{
          width: '80px',
          padding: '0 60px 0 0',
        }}
      />
      <TextCell
        text={props.student.rating}
        cellStyles={{
          width: '80px',
          padding: '0 22px',
        }}
      />
      <ColorBadgeCell
        colorBadgeProps={{
          color: props.student.color
        }}
        cellStyles={{
          padding: '0 21px',
        }}
      />
      <ActionsCell
        actions={[
          {children: <DeleteIcon/>, onClick: props.onDelete}
        ]}
      />
    </StudentRowContainer>
  )
}
