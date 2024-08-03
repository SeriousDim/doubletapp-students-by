import {Meta, StoryObj} from '@storybook/react'
import {Dropdown} from './dropdown.tsx'
import {DropdownProps} from './props.ts'
import {useState} from 'react'
import {ContentPlaceholder} from '../../../storybook/content-placeholder'
import SortIcon from '../../../../assets/icons/sort.svg?react'

const meta = {
  title: 'UI/Dropdown/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'text' }
  },
  decorators: [
    (Story) => (
      <div style={{
        height: '250px',
        marginBottom: '40px'
      }}>
        <Story/>
      </div>),
    (Story) => {
      const [selectedItemIndex, setSelectedItemIndex] = useState(0)
      const [showModal, setShowModal] = useState(false)

      return <Story
        selectedItemIndex={selectedItemIndex}
        setSelectedItemIndex={setSelectedItemIndex}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    }
  ],
  args: {
    items:  [
      'Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5'
    ],
    width: '180px'
  },
  render: (args, context) => {
    const {selectedItemIndex, setSelectedItemIndex, showModal, setShowModal} = context

    return (
      <>
        <Dropdown
          {...args}
          selectedItemIndex={selectedItemIndex}
          onSelectItemIndex={(index: number) => {
            setSelectedItemIndex(index)
            setShowModal(false)
          }}
          showModal={showModal}
          onDropdownClick={() => setShowModal(prev => !prev)}
        />
        <ContentPlaceholder/>
      </>
    )
  }
} satisfies Meta<typeof Dropdown>

export default meta

type Story = StoryObj<DropdownProps>

export const StandartDropdown: Story = {

}

export const OneItem: Story = {
  args: {
    items: ['Пункт 1']
  }
}

export const CustomIcon: Story = {
  args: {
    Icon: SortIcon
  }
}

export const LongSelectedOptionText: Story = {
  args: {
    items:  [
      'Очень длинный пункт выпадающего меню', 'Пункт 2', 'Пункт 3'
    ]
  }
}

export const Empty: Story = {
  args: {
    items: []
  }
}

export const IconOnly: Story = {
  args: {
    width: undefined,
    showIconOnly: true
  }
}

export const WiderDropdown: Story = {
  args: {
    width: '250px'
  }
}

export const RightAlignment: Story = {
  args: {
    width: '130px',
    modalAlignment: 'right'
  }
}
