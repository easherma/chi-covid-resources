export const getVersionForLanguage = ({ versions, lang }) =>
  versions.find(v => v.lang === lang)

export const getResolvedVersionForLanguage = ({
  versions,
  lang,
  fallbackLang,
}) => {
  const current = getVersionForLanguage({ versions, lang })
  const fallback = getVersionForLanguage({ versions, lang: fallbackLang })
  return { ...fallback, ...current }
}

/* eslint-disable */
// Debounce function from underscore
export const debounce = (func, wait, immediate) => {
  let timeout
  return function() {
    const context = this
    const args = arguments
    const later = () => {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}
/* eslint-enable */
