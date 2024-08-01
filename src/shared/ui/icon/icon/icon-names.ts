export type IconNames =
  'delete' |
  'rating' |
  'search' |
  'sort' |
  'spinner-check' |
  'logo'

export const getIcon = (iconName: IconNames) => `./icons/${iconName}.svg`
