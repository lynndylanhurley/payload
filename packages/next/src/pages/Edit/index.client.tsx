'use client'
import type { EditViewProps } from 'payload/config'

import { LoadingOverlay, useComponentMap, useDocumentInfo } from '@payloadcms/ui'
import React, { Fragment } from 'react'
import { useCallback } from 'react'

export const EditViewClient: React.FC<EditViewProps> = () => {
  const { id, collectionSlug, getDocPermissions, getVersions, globalSlug } = useDocumentInfo()

  const { componentMap } = useComponentMap()

  const { Edit } =
    componentMap[`${collectionSlug ? 'collections' : 'globals'}`][collectionSlug || globalSlug] ||
    {}

  const isEditing = Boolean(id && collectionSlug)

  const onSave = useCallback(
    async (json: { doc }) => {
      getVersions()
      getDocPermissions()

      if (!isEditing) {
        // setRedirect(`${admin}/collections/${collection.slug}/${json?.doc?.id}`)
      } else {
        // buildState(json.doc, {
        //   fieldSchema: collection.fields,
        // })
        // setFormQueryParams((params) => ({
        //   ...params,
        //   uploadEdits: undefined,
        // }))
      }
    },
    [getVersions, isEditing, getDocPermissions, collectionSlug],
  )

  // Allow the `DocumentInfoProvider` to hydrate
  if (!Edit || (!collectionSlug && !globalSlug)) {
    return <LoadingOverlay />
  }

  return <Fragment>{Edit}</Fragment>
}