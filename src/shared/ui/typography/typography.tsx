import {findFontSetting} from './find-font-setting.ts'
import {TypographyContainer} from './styles.ts'
import {TypographyProps} from './props.ts'

export function Typography(props: TypographyProps) {
  const setting = findFontSetting(props)

  return (
    <TypographyContainer
      fontSize={setting.fontSize}
      weight={setting.weight}
      lineHeight={setting.lineHeight}
      color={props.color}
    >
      {props.children}
    </TypographyContainer>
  )
}
