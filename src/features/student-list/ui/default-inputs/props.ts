import {IStudentListInputs} from '../../model/student-list-inputs.ts'

export type DefaultInputsProps = {
  filterOptions: string[],
  showDropdownIconOnly?: boolean
}
& IStudentListInputs
