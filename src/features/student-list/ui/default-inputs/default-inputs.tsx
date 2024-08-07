import {DefaultInputsProps} from './props.ts'
import {IconedInputField} from '../../../../shared/ui/input-field/iconed-input-field.tsx'
import {Dropdown} from '../../../../shared/ui/buttons/dropdown'
import {useState} from 'react'
import SearchIcon from '../../../../shared/assets/icons/search.svg?react'

export function DefaultInputs({
  showDropdownIconOnly = false,
  ...props
}: DefaultInputsProps) {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
  const [showModal, setShowModal] = useState(false)

  return (
    <div style={{
      width: '100%',
      display: 'flex',
      gap: '20px'
    }}>
      <IconedInputField
        Icon={SearchIcon}
        inputFieldProps={{
          onChange: (e) => props?.onNameChange?.(e.target.value),
          hint: 'Поиск по имени'
        }}
      />
      <Dropdown
        modalAlignment={'right'}
        width={'180px'}
        showIconOnly={showDropdownIconOnly}
        selectedItemIndex={selectedOptionIndex}
        items={props.filterOptions}
        showModal={showModal}
        onDropdownClick={() => setShowModal(prev => !prev)}
        onSelectItemIndex={(index: number) => {
          props?.onFilterChange?.(index)
          setSelectedOptionIndex(index)
          setShowModal(prev => !prev)
        }}
      />
    </div>
  )
}
