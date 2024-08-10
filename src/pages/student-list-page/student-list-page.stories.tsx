import {Meta, StoryObj} from '@storybook/react'
import {StudentListPage} from './student-list-page.tsx'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const meta = {
  title: 'Pages/Student List Page',
  component: StudentListPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story =>
      <QueryClientProvider client={new QueryClient()}>
        <Story/>
      </QueryClientProvider>
  ],
  tags: ['autodocs'],
  argTypes: {

  },
  args: {

  }
} satisfies Meta<typeof StudentListPage>

export default meta

type Story = StoryObj

export const DesktopWide: Story = {

}

export const MobilePortrait: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}
