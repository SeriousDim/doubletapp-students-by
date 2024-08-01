import {FontSetting} from './types.ts'
import {TypographyProps} from './props.ts'
import {FontSettings, HeadingFontSettings} from './font-settings.ts'

export function findFontSetting(props: TypographyProps): FontSetting {
  let setting: FontSetting = HeadingFontSettings[props.headingLevel]

  if (!setting) {
    setting = FontSettings[props.name]
  }

  if (!setting) {
    setting = FontSettings['16 / R']
  }

  setting = {
    ...setting,
    ...(props as FontSetting)
  }

  return setting
}
