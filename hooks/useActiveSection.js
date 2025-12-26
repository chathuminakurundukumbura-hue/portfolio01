import { useEffect, useState } from 'react'

export function useActiveSection(sections = ['about', 'education', 'skills', 'leadership', 'contact']){
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      for(let section of sections){
        const el = document.getElementById(section)
        if(el){
          const rect = el.getBoundingClientRect()
          if(rect.top <= 100 && rect.bottom >= 100){
            setActive(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  return active
}
