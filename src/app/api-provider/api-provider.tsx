import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {PropsWithChildren} from 'react'

const queryClient = new QueryClient()

export function ApiProvider({children}: PropsWithChildren) {
  return (
    <QueryClientProvider
      client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}