export function getAge(birthday: Date) {
  const now = new Date()
  birthday.setHours(0, 0, 0, 0)

  let age = now.getFullYear() - birthday.getFullYear()

  const birthdayInThisYear = new Date(now.getFullYear(), birthday.getMonth(), birthday.getDate())
  birthdayInThisYear.setHours(0, 0, 0, 0)
  if (now < birthdayInThisYear) {
    age -= 1
  }

  return age
}
