import {Toolbar} from '../../../shared/ui/toolbar'
import Logo from '../../../shared/assets/icons/logo.svg?react'
import {Typography} from '../../../shared/ui/typography/typography.tsx'

export function AppHeaderWidgetDesktop() {
  return (
    <Toolbar
      horizontalPadding={'calc(100%/12)'}
    >
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '45px'
      }}>
        <Logo/>
        <Typography
          name={'20 / M'}
        >
          STUDENTS by <span style={{color: '#49C2E8'}}>SeriousDim</span>
        </Typography>
      </div>
    </Toolbar>
  )
}
