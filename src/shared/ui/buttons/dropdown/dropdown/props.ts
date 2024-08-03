import {CSSProperties} from 'react'

export type SelectedItemProps = {
  item: string
}

export type DropdownProps = {
  Icon?: Element,
  showIconOnly?: boolean,
  onDropdownClick?: () => void,
  selectedItemIndex: number,
  onSelectItemIndex?: (index: number) => void,
  items: string[],
  width?: CSSProperties['width'],
  showModal: boolean,
  modalAlignment?: 'left' | 'right'
}
