export function getAgeEndingWord(age: number) {
  let mod = age % 100
  if (mod >= 5 && mod <= 20) {
    return 'лет'
  } else {
    mod = mod % 10
    if (mod == 1) {
      return 'год'
    } else if (mod >= 2 && mod <= 4) {
      return 'года'
    }
    return 'лет'
  }
}
