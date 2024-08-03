import {Typography} from '../../../typography/typography.tsx'

export function EmptyLabel() {
  return (
    <div style={{
      paddingLeft: '19.79px',
      height: '35px',
      display: 'flex',
      alignItems: 'center',
      flex: 1
    }}>
      <Typography
        name={'12'}
        styles={{
          color: '#989898',
          flex: 1
        }}
      >
        Пусто
      </Typography>
    </div>
  )
}
