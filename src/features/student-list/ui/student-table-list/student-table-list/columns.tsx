import {ColumnDef, createColumnHelper} from '@tanstack/react-table'
import {StudentTableRowData} from './student-table-row-data.ts'
import {ActionsCell, AvatarCell, ColorBadgeCell, TextCell, TextCellProps} from '../../../../../entities/student'
import {getAge} from '../../../../../entities/student/lib/get-age.ts'
import DeleteIcon from '../../../../../shared/assets/icons/delete.svg?react'

export const HeaderTextCell = (props: TextCellProps) => (
  <TextCell textName={'16 / R'} {...props}/>
)

const columnHelper = createColumnHelper<StudentTableRowData>()

export const createColumns = (): ColumnDef<StudentTableRowData, any>[] => [
  columnHelper.accessor(row => row.avatar, {
    id: 'avatar',
    header: props => (
      <td
        key={props.header.id}
        style={{
          width: '61px',
          boxSizing: 'border-box',
          height: '36px'
        }}
      />
    ),
    cell: props => (
      <AvatarCell
        avatarProps={{
          src: props.getValue()
        }}
        cellStyles={{
          padding: '0 21px 0 20px'
        }}
      />
    )
  }),
  columnHelper.accessor(row => row.name, {
    id: 'name',
    header: () => (
      <HeaderTextCell
        text={'ФИО'}
        cellStyles={{
          padding: '0 20px 0 0',
          minWidth: '200px',
          flex: 1,
          height: '36px'
        }}
      />
    ),
    cell: props => (
      <TextCell
        text={props.getValue()}
        cellStyles={{
          padding: '0 20px 0 0',
          minWidth: '200px',
          flex: 1
        }}
      />
    )
  }),
  columnHelper.accessor(row => row.speciality, {
    id: 'speciality',
    header: () => <HeaderTextCell
      text={'Специальность'}
      cellStyles={{
        padding: '0 20px 0 0',
        minWidth: '100px',
        flex: 1,
        height: '36px'
      }}
    />,
    cell: props => <TextCell
      text={props.getValue()}
      cellStyles={{
        padding: '0 20px 0 0',
        minWidth: '100px',
        flex: 1
      }}
    />
  }),
  columnHelper.accessor(row => row.group, {
    id: 'group',
    header: () => <HeaderTextCell
      text={'Группа'}
      cellStyles={{
        width: '80px',
        padding: '0 60px 0 0px',
        height: '36px'
      }}
    />,
    cell: props => <TextCell
      text={props.getValue()}
      cellStyles={{
        width: '80px',
        padding: '0 60px 0 0px',
      }}
    />
  }),
  columnHelper.accessor(row => row.birthday, {
    id: 'age',
    header: () => <HeaderTextCell
      text={'Возраст'}
      cellStyles={{
        width: '80px',
        padding: '0 60px 0 0',
        height: '36px'
      }}
    />,
    cell: props => <TextCell
      text={getAge(props.getValue())}
      cellStyles={{
        width: '80px',
        padding: '0 60px 0 0',
      }}
    />
  }),
  columnHelper.accessor(row => row.rating, {
    id: 'rating',
    header: () => <HeaderTextCell
      text={'Рейтинг'}
      cellStyles={{
        width: '80px',
        padding: '0 22px 0 0',
        height: '36px'
      }}
    />,
    cell: props => <TextCell
      text={props.getValue()}
      cellStyles={{
        width: '80px',
        padding: '0 22px 0 0',
      }}
    />
  }),
  columnHelper.accessor(row => row.color, {
    id: 'color',
    header: () => <td style={{
      padding: '0 21px 0 0',
      height: '36px'
    }}/>,
    cell: props => <ColorBadgeCell
      colorBadgeProps={{
        color: props.getValue()
      }}
      cellStyles={{
        padding: '0 21px 0 0',
      }}
    />
  }),
  columnHelper.accessor(row => row.onDelete, {
    id: 'actions',
    header: () => <td style={{
      boxSizing: 'border-box',
      minWidth: '47px',
      height: '36px'
    }}/>,
    cell: props => <ActionsCell
      actions={[
        { onClick: props.getValue(), children: <DeleteIcon/> }
      ]}
    />,
  })
]
