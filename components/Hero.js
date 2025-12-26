import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="hero">
      <div className="container hero-inner">
        <motion.div className="hero-text" initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.6}}>
          <h1>Chathumina Bandara</h1>
          <p className="lead">Undergraduate — Biomedical Technology / Health Sciences</p>
          <p className="muted">Location: Sri Lanka • Email: <a href="mailto:chathuminauni2003@gmail.com">chathuminauni2003@gmail.com</a> • Phone: 0701688606</p>
          <a href="#contact" className="btn-primary">Get in touch</a>
        </motion.div>

        <motion.aside className="hero-card" initial={{scale:0.98,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:0.6}}>
          <div className="photo-placeholder">
            <img src="/profile-placeholder.svg" alt="Profile placeholder" />
          </div>
          <div className="contact-quick">
            <p><strong>Field:</strong> Biomedical Technology</p>
            <p><strong>University:</strong> Gampaha Wickramarachchi University</p>
          </div>
        </motion.aside>
      </div>
    </section>
  )
}
