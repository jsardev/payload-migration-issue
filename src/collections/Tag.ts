import type { CollectionConfig } from 'payload'

export const Tag: CollectionConfig = {
  slug: 'tag',

  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      options: ['one', 'two'],
      required: false,
    },
  ],
}
