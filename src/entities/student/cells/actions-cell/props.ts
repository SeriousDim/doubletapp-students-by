import {IconedButtonProps} from '../../../../shared/ui/buttons/iconed-button'
import {CellPropsStyles} from '../../../../shared/ui/table'

export type ActionBarProps = {
  actions: IconedButtonProps[],
}

export type ActionCellProps = {
  cellStyles?: CellPropsStyles
}
& ActionBarProps
