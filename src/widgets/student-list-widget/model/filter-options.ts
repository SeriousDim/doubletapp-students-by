import {Student} from '../../../shared/model/student.ts'
import {getAge} from '../../../entities/student/lib/get-age.ts'

export const FilterOptions  = [
  'Имя А-Я',
  'Имя Я-А',
  'Сначала моложе',
  'Сначала старше',
  'Низкий рейтинг',
  'Высокий рейтинг'
]

export type FilterFunc = (arr: Student[]) => Student[]

export const FilterRules: FilterFunc[] = [
  (arr) => arr.sort((s1, s2) => s1.name.localeCompare(s2.name)),
  (arr) => arr.sort((s1, s2) => - s1.name.localeCompare(s2.name)),
  (arr) => arr.sort((s1, s2) => getAge(s1.birthday) - getAge(s2.birthday)),
  (arr) => arr.sort((s1, s2) => getAge(s2.birthday) - getAge(s1.birthday)),
  (arr) => arr.sort((s1, s2) => s1.rating - s2.rating),
  (arr) => arr.sort((s1, s2) => s2.rating - s1.rating),
]
