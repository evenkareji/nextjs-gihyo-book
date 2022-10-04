import { ComponentMeta, ComponentStory } from '@storybook/react'
import TextArea from './index'

export default {
  title: 'Atoms/TextArea',
  argTypes: {
    placeholder: {
      control: {
        type: 'text',
      },
      description: 'プレースホルダー',
      table: { type: { summary: 'number' } },
    },
    rows: {
      control: {
        type: 'number',
        defaultValue: 5,
        description: '行数',
        table: { type: { summary: 'number' } },
      },
      minRows: {
        control: { type: 'number' },
        defaultValue: 5,
        description: '最小限',
        table: {
          type: { summary: 'number' },
        },
      },

      maxRows: {
        control: { type: 'boolean' },
        defaultValue: false,
        description: 'バリデーションフラグ',
        table: {
          type: { summary: 'boolean' },
        },
      },
      hasError: {
        control: { type: 'boolean' },
        defaultValue: false,
        description: 'バリデーションフラグ',
        table: {
          type: { summary: 'boolean' },
        },
      },
      onChange: {
        description: 'onChangeイベントハンドラ',
        table: {
          type: { summary: 'function' },
        },
      },
    },
  },
} as ComponentMeta<typeof TextArea>

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
)

export const Normal = Template.bind({})

export const Error = Template.bind({})
Error.args = { hasError: true }
