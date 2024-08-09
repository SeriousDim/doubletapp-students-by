import {Student} from '../../../shared/model/student.ts'
import {IStudentListInputs} from '../../../features/student-list'

export type StudentListWidgetProps = {
  students: Student[],
  onDeleteStudent?: (index: number) => void
}
& IStudentListInputs
