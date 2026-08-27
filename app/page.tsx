'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, Github, Linkedin, Mail, Menu, MoveRight, Play, Sparkles, X } from 'lucide-react'
import styles from './page.module.css'

const projects = [
  { index: '01', name: 'SCHOOL OS', type: 'TypeScript / MySQL', color: 'coral' },
  { index: '02', name: 'USEDCARPARTS', type: 'Kotlin / Firebase', color: 'lime' },
  { index: '03', name: 'FAST TRIM', type: 'React / Next.js', color: 'yellow' },
]

const navItems = ['Home', 'Work', 'About', 'Contact']

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState(0)

  return (
    <main className={styles.siteShell}>
      <div className={styles.grain} aria-hidden="true" />
      <header className={styles.header}>
        <a className={styles.logo} href="#home" aria-label="Muntafid Islam Nafsi home"><span>NAFSI</span><b>_</b></a>
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {navItems.map((item, index) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              <span>0{index + 1}</span>{item}
            </a>
          ))}
        </nav>
        <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section id="home" className={styles.hero}>
        <div className={styles.heroMeta}><span>COMPUTER SCIENCE / 2026</span><span>DHAKA, BANGLADESH</span></div>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}><Sparkles size={14} /> Full-stack developer in progress <i /></p>
          <h1>BUILD<br /><em>WITH</em><br />PURPOSE<span>.</span></h1>
          <p className={styles.intro}>I&apos;m Muntafid Islam Nafsi, a Computer Science student at BRAC University building reliable, scalable applications from interface to database.</p>
          <a className={styles.cta} href="#work">View selected work <MoveRight size={19} /></a>
        </div>
        <div className={styles.heroMark} aria-hidden="true"><Image className={styles.profileImage} src="/profile.png" alt="Muntafid Islam Nafsi" width={500} height={500} priority /><span>03</span><div className={styles.orbit} /></div>
        <div className={styles.scrollHint}><span>SCROLL TO EXPLORE</span><div /></div>
      </section>

      <section id="work" className={styles.workSection}>
        <div className={styles.sectionTop}><p className={styles.sectionLabel}>01 / SELECTED WORK</p><p className={styles.sectionNote}>Systems, interfaces, and<br />ideas made functional.</p></div>
        <div className={styles.workGrid}>
          <div className={`${styles.projectFeature} ${styles[projects[activeProject].color]}`}>
            <div className={styles.projectNumber}>{projects[activeProject].index} <span>/ 03</span></div>
            <div className={styles.projectGraphic}><div className={styles.graphicRing} /><div className={styles.graphicWord}>{projects[activeProject].name}</div><span className={styles.graphicTag}>CASE STUDY</span></div>
            <div className={styles.projectFooter}><div><h2>{projects[activeProject].name}</h2><p>{projects[activeProject].type}</p></div><button aria-label={`Open ${projects[activeProject].name} project`}><ArrowUpRight size={25} /></button></div>
          </div>
          <div className={styles.projectList}>
            <p className={styles.listIntro}>PROJECT INDEX <span>↘</span></p>
            {projects.map((project, index) => <button className={`${styles.projectRow} ${activeProject === index ? styles.projectActive : ''}`} onClick={() => setActiveProject(index)} key={project.name}><span>{project.index}</span><strong>{project.name}</strong><small>{project.type}</small><ArrowUpRight size={17} /></button>)}
            <div className={styles.playReel}><div className={styles.playIcon}><Play size={17} fill="currentColor" /></div><div><strong>CAREER LOG</strong><span>02 EXPERIENCES / 2026</span></div></div>
          </div>
        </div>
      </section>

      <section id="about" className={styles.aboutSection}>
        <p className={styles.sectionLabel}>02 / THE SHORT VERSION</p>
        <div className={styles.aboutLayout}><h2>Curious<br /><span>by default.</span></h2><div><p className={styles.aboutText}>I work across <b>front-end, back-end, and database design</b> to turn complex requirements into useful products. Right now, I&apos;m growing through coursework, team projects, and real-world delivery.</p><div className={styles.stats}><div><strong>2024</strong><span>BRAC UNIVERSITY</span></div><div><strong>02</strong><span>FEATURED PROJECTS</span></div><div><strong>∞</strong><span>QUESTIONS ASKED</span></div></div></div></div>
      </section>

      <footer id="contact" className={styles.footer}><div><p className={styles.sectionLabel}>03 / YOUR MOVE</p><h2>Let&apos;s build<br /><em>something</em><br />useful<span>.</span></h2></div><a className={styles.emailLink} href="mailto:muntafid.islam@gmail.com">muntafid.islam@gmail.com <ArrowUpRight size={22} /></a><div className={styles.footerBottom}><span>© 2026 MUNTAFID ISLAM NAFSI</span><div className={styles.socials}><a href="https://github.com/nafus08" aria-label="Github"><Github size={18} /></a><a href="https://linkedin.com/in/muntafid-islam-nafsi" aria-label="LinkedIn"><Linkedin size={18} /></a><a href="mailto:muntafid.islam@gmail.com" aria-label="Email"><Mail size={18} /></a></div><span>BRAC UNIVERSITY / 03</span></div></footer>
    </main>
  )
}
