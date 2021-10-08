import Main from '.'
import { Story, Meta } from '@storybook/react/types-6-0'

const props = {
  title: 'Main',
  component: Main
} as Meta

export const Default: Story = (args) => <Main {...args} />

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'Basic Title',
  description: 'Basic description'
}

export default props
