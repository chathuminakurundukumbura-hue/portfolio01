import { useState } from 'react'
import { motion } from 'framer-motion'
import { useActiveSection } from '../hooks/useActiveSection'

export default function Nav(){
  const [open,setOpen] = useState(false)
  const active = useActiveSection()

  const links = [
    {id: 'about', label: 'About'},
    {id: 'education', label: 'Education'},
    {id: 'skills', label: 'Skills'},
    {id: 'leadership', label: 'Leadership'},
    {id: 'contact', label: 'Contact'}
  ]

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="logo" href="#">Chathumina</a>
        <button aria-label="Toggle navigation" className="nav-toggle" onClick={()=>setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>

        <motion.nav className="site-nav" initial={{opacity:0}} animate={{opacity: open ? 1 : 0, display: open ? 'flex' : 'none'}} transition={{duration:0.25}}>
          {links.map(link => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              onClick={()=>setOpen(false)}
              className={active === link.id ? 'active' : ''}
            >
              {link.label}
            </a>
          ))}
        </motion.nav>
      </div>
    </header>
  )
}
