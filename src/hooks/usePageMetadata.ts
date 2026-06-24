import { useEffect } from 'react'

export function usePageMetadata(title: string, description: string) {
  useEffect(() => {
    document.title = title

    let metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      document.head.appendChild(metaDescription)
    }
    metaDescription.content = description
  }, [title, description])
}
