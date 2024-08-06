import {StudentHeaderRowContainer} from './styles.ts'
import {TextCell, TextCellProps} from '../../../../../entities/student'

export const HeaderTextCell = (props: TextCellProps) => (
  <TextCell textName={'16 / R'} {...props}/>
)

export function StudentTableHeader() {
  return (
    <StudentHeaderRowContainer>
      <td style={{
        width: '61px'
      }}/>
      <HeaderTextCell
        text={'ФИО'}
        cellStyles={{
          padding: '0 20px 0 0',
          minWidth: '200px',
          flex: 1
        }}
      />
      <HeaderTextCell
        text={'Специальность'}
        cellStyles={{
          padding: '0 20px 0 0',
          minWidth: '100px',
          flex: 1
        }}
      />
      <HeaderTextCell
        text={'Группа'}
        cellStyles={{
          width: '80px',
          padding: '0 60px 0 0px',
        }}
      />
      <HeaderTextCell
        text={'Возраст'}
        cellStyles={{
          width: '80px',
          padding: '0 60px 0 0',
        }}
      />
      <HeaderTextCell
        text={'Рейтинг'}
        cellStyles={{
          width: '80px',
          padding: '0 22px',
        }}
      />
      <td style={{
        padding: '0 21px',
      }}/>
      <td/>
    </StudentHeaderRowContainer>
  )
}
