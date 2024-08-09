import {StudentListWidgetProps} from '../model/props.ts'
import {StudentListWidgetDesktop} from './student-list-widget-desktop.tsx'
import {StudentListWidgetMobile} from './student-list-widget-mobile.tsx'
import {ClassNames} from '../model/class-names.ts'
import {StudentListWidgetContainer} from './styles.ts'

export function StudentListWidget(props: StudentListWidgetProps) {
  return (
    <StudentListWidgetContainer>
      <div className={ClassNames.desktop}>
        <StudentListWidgetDesktop {...props}/>
      </div>
      <div className={ClassNames.smartphonePortrait}>
        <StudentListWidgetMobile {...props}/>
      </div>
    </StudentListWidgetContainer>
  )
}
