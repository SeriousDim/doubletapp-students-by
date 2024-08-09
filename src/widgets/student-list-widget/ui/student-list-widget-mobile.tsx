import {StudentListWidgetProps} from '../model/props.ts'
import {DefaultInputs} from '../../../features/student-list'
import {FilterOptions} from '../model/filter-options.ts'
import {
  StudentCardList
} from '../../../features/student-list'

export function StudentListWidgetMobile(props: StudentListWidgetProps) {
  return (
    <div style={{
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <div style={{
        marginBottom: '10px'
      }}>
        <DefaultInputs
          filterOptions={Object.values(FilterOptions)}
          onNameChange={props.onNameChange}
          onFilterChange={props.onFilterChange}
          showDropdownIconOnly
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
          speciality: student.speciality,
          onDelete: () => props?.onDeleteStudent?.(index)
        }))}
      />
    </div>
  )
}
