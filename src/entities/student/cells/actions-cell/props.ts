import {IconedButtonProps} from '../../../../shared/ui/buttons/iconed-button'
import {CellPropsStyles} from '../../../../shared/ui/table'

export type ActionCellProps = {
  actions: IconedButtonProps[],
  cellStyles?: CellPropsStyles
}
