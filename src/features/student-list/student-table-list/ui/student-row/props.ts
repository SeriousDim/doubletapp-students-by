import {Student} from '../../../../../shared/model/student.ts'

export type StudentRowProps = {
  student: Student,
  onDelete?: () => void
}

