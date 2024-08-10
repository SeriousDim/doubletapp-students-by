import {AppHeaderWidget} from '../../widgets/app-header-widget'
import {StudentListWidget} from '../../widgets/student-list-widget'
import {useStudentsQuery} from '../../app/api-provider/use-students-query.ts'
import {LoadingBadge} from '../../shared/ui/loading-badge'

export function StudentListPage() {
  const {isPending, data} = useStudentsQuery()

  return (
    <>
      {
        isPending && <LoadingBadge/>
      }
      {
        data && <>
          <AppHeaderWidget/>
          <StudentListWidget
            students={data || []}
          />
        </>
      }
    </>
  )
}
