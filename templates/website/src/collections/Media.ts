import type { CollectionConfig } from 'payload/types'

import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { LinkFeature } from '@payloadcms/richtext-lexical'
import path from 'path'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'caption',
      type: 'richText',
      editor: lexicalEditor({
        features({ defaultFeatures }) {
          return [LinkFeature({ enabledCollections: ['pages'] })]
        },
      }),
    },
  ],
  upload: {
    staticDir: path.resolve(__dirname, '../../../media'),
  },
}