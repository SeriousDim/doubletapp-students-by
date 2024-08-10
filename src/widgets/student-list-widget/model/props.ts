import {Student} from '../../../shared/model/student.ts'
import {IStudentListInputs} from '../../../features/student-list'

export type StudentListWidgetProps = {
  students: Student[]
}

export type SubWidgetProps = {
  onDeleteStudent?: (index: number) => void
}
& StudentListWidgetProps
& IStudentListInputs
