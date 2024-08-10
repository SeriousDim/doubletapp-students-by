import {Typography} from '../typography/typography.tsx'

export function LoadingBadge() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Typography
        name={'40 / B'}
      >
        <span style={{color: '#49C2E8'}}>
          Загрузка...
        </span>
      </Typography>
    </div>
  )
}
