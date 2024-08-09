import {DefaultInputs} from '../../../features/student-list'
import {StudentTableList} from '../../../features/student-list'
import {StudentListWidgetProps} from '../model/props.ts'
import {FilterOptions} from '../model/filter-options.ts'

export function StudentListWidgetDesktop(props: StudentListWidgetProps) {
  return (
    <div>
      <div style={{
        marginBottom: '20px'
      }}>
        <DefaultInputs
          filterOptions={Object.values(FilterOptions)}
          onNameChange={props.onNameChange}
          onFilterChange={props.onFilterChange}
        />
      </div>
      <div style={{
        overflow: 'auto',
        paddingBottom: '20px'
      }}>
        <StudentTableList
          students={props.students.map((student, index) => ({
            avatar: student.avatar,
            name: student.name,
            birthday: student.birthday,
            color: student.color,
            group: student.group,
            rating: student.rating,
            speciality: student.speciality,
            onDelete: () => props?.onDeleteStudent?.(index)
          }))}
        />
      </div>
    </div>
  )
}
