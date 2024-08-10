import {Student} from '../../../shared/model/student.ts'
import {FilterRules} from './filter-options.ts'

export function searchByName(arr: Student[], name: string) {
  if (name.length > 0) {
    return arr.filter(item => item.name.toLowerCase().includes(name))
  }
  return arr
}

export function sortByFilterOption(arr: Student[], filterOptionIndex: number): Student[] {
  return FilterRules[filterOptionIndex](arr)
}

export function applyAllFilters(arr: Student[], name: string, filterOptionIndex: number): Student[] {
  const filtered = searchByName(arr, name)
  return  sortByFilterOption(filtered, filterOptionIndex)
}
