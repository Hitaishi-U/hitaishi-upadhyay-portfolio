"use client"

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="py-16 px-4">
          <About />
        </section>
        
        <section id="skills" className="py-16 px-4 bg-gradient-to-br from-background to-secondary/20">
          <div className="max-w-6xl mx-auto">
            <Skills />
          </div>
        </section>
        
        <section id="projects" className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <Projects />
          </div>
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  )
}