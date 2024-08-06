import {Student} from '../../../../shared/model/student.ts'

export function getAge(student: Student) {
  const now = new Date()
  const birthday = new Date(student.birthday)
  birthday.setHours(0, 0, 0, 0)

  let age = now.getFullYear() - birthday.getFullYear()

  const birthdayInThisYear = new Date(now.getFullYear(), birthday.getMonth(), birthday.getDate())
  birthdayInThisYear.setHours(0, 0, 0, 0)
  if (now < birthdayInThisYear) {
    age -= 1
  }

  return age
}
