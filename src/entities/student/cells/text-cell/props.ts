import {CellPropsStyles} from '../../../../shared/ui/table'
import {TypographyName} from '../../../../shared/ui/typography/types.ts'

export type TextCellProps = {
  text: string | number,
  textName?: TypographyName,
  cellStyles?: CellPropsStyles,
}
