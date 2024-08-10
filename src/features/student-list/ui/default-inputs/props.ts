import {IStudentListInputs} from '../../model/student-list-inputs.ts'

export type DefaultInputsProps = {
  filterOptions: string[],
  mobile?: boolean
}
& IStudentListInputs
