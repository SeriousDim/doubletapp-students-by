import {SvgProps} from './props.ts'
import {useSvgImport} from './use-svg-import.ts'

/**
 * Вставляет SVG в DOM
 */
export function Svg(props: SvgProps) {
  const {loading, ImportedIcon} = useSvgImport(props.src)

  return (
    <>
      {loading && null}
      {ImportedIcon && (
        <ImportedIcon width={14} height={14} fill={'#000000'}/>
      )}
    </>
  )
}
