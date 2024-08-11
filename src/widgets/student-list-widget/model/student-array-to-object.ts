import {Student} from '../../../shared/model/student.ts'

export function studentArrayToObject(arr: Student[]): {[index: number]: Student} {
  const result = {}

  arr.map(item => result[item.id] = item)

  return result
}
