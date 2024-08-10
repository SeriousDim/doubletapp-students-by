import {Student} from '../../../shared/model/student.ts'

export function searchByName(arr: Student[], name: string) {
  if (name.length > 0) {
    return arr.filter(item => item.name.toLowerCase().includes(name))
  }
  return arr
}
