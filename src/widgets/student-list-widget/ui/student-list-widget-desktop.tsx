import {DefaultInputs} from '../../../features/student-list'
import {StudentTableList} from '../../../features/student-list'
import {SubWidgetProps} from '../model/props.ts'
import {FilterOptions} from '../model/filter-options.ts'
import {Typography} from '../../../shared/ui/typography/typography.tsx'

export function StudentListWidgetDesktop(props: SubWidgetProps) {
  return (
    <div style={{
      padding: '0 calc(100%/12)',
      boxSizing: 'border-box'
    }}>
      <div style={{
        marginBottom: '47px',
        marginTop: '74px'
      }}>
        <Typography
          name={'40 / B'}
          as={'h1'}
        >
          Студенты
        </Typography>
      </div>
      <div style={{
        marginBottom: '20px'
      }}>
        <DefaultInputs
          filterOptions={FilterOptions}
          onNameChange={props.onNameChange}
          onFilterChange={props.onFilterChange}
        />
      </div>
      <div style={{
        paddingBottom: '60px',
        overflow: 'auto'
      }}>
        <StudentTableList
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
    </div>
  )
}
