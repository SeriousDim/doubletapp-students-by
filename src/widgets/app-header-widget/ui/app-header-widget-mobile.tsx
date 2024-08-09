import {Toolbar} from '../../../shared/ui/toolbar'
import Logo from '../../../shared/assets/icons/logo.svg?react'
import {Typography} from '../../../shared/ui/typography/typography.tsx'

export function AppHeaderWidgetMobile() {
  return (
    <Toolbar
      horizontalPadding={'30px'}
    >
      <div style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: '26px'
      }}>
        <Logo/>
        <Typography
          name={'20 / M'}
        >
          STUDENTS
        </Typography>
      </div>
    </Toolbar>
  )
}
