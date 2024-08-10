import {SubWidgetProps} from '../model/props.ts'
import {DefaultInputs} from '../../../features/student-list'
import {FilterOptions} from '../model/filter-options.ts'
import {
  StudentCardList
} from '../../../features/student-list'
import {Typography} from '../../../shared/ui/typography/typography.tsx'

export function StudentListWidgetMobile(props: SubWidgetProps) {
  return (
    <div style={{
      width: '100vw',
      boxSizing: 'border-box',
      padding: '0 20px 22px 20px'
    }}>
      <div style={{
        marginBottom: '22px',
        marginTop: '39px'
      }}>
        <Typography
          name={'30 / B'}
          as={'h1'}
        >
          Студенты
        </Typography>
      </div>
      <div style={{
        marginBottom: '10px'
      }}>
        <DefaultInputs
          filterOptions={FilterOptions}
          onNameChange={props.onNameChange}
          onFilterChange={props.onFilterChange}
          mobile
        />
      </div>
      <StudentCardList
        students={props.students.map((student, index) => ({
          avatar: student.avatar,
          name: student.name,
          birthday: student.birthday,
          color: student.color,
          group: student.group,
          rating: student.rating,
          speciality: student.specialty,
          onDelete: () => props?.onDeleteStudent?.(index)
        }))}
      />
    </div>
  )
}
