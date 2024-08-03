export type DropdownModalWindowProps = {
  items: string[],
  selectedItemIndex: number,
  onSelect?: (index: number) => void,
  hidden: boolean
}
