"use client"

import { GraduationCap, School, BookOpen, Brain, Database, Code } from 'lucide-react'

interface EducationItem {
  institution: string
  degree: string
  duration: string
  score: string
  icon: React.ComponentType<any>
}

const educationData: EducationItem[] = [
  {
    institution: "Acropolis Institute of Technology and Research",
    degree: "B.Tech Computer Science Engineering",
    duration: "2023 - 2027",
    score: "7.2 CGPA",
    icon: GraduationCap
  },
  {
    institution: "Choithram School",
    degree: "Class 12th",
    duration: "2022",
    score: "84%",
    icon: School
  },
  {
    institution: "Choithram School",
    degree: "Class 10th",
    duration: "2020",
    score: "95%",
    icon: BookOpen
  }
]

const interests = [
  { name: "Machine Learning", icon: Brain },
  { name: "Artificial Intelligence", icon: Code },
  { name: "Natural Language Processing", icon: Database },
  { name: "Data-Driven Solutions", icon: Database }
]

export default function About() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Who I Am
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a passionate Computer Science Engineering student with a deep fascination for technology and its transformative potential. My journey in tech is driven by curiosity and a commitment to creating meaningful solutions that make a difference.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With a strong foundation in programming and problem-solving, I'm constantly exploring new technologies and methodologies. I believe in the power of continuous learning and staying at the forefront of technological advancement.
              </p>
              
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Areas of Interest
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {interests.map((interest, index) => {
                    const IconComponent = interest.icon
                    return (
                      <div 
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-secondary rounded-lg border border-border hover:shadow-sm transition-shadow"
                      >
                        <div className="p-2 bg-primary/10 rounded-full">
                          <IconComponent className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-foreground">
                          {interest.name}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-6">
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Education
              </h3>
              <div className="space-y-6">
                {educationData.map((edu, index) => {
                  const IconComponent = edu.icon
                  return (
                    <div 
                      key={index}
                      className="relative bg-background rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-shadow group"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-foreground text-lg mb-1">
                            {edu.institution}
                          </h4>
                          <p className="text-muted-foreground font-medium mb-2">
                            {edu.degree}
                          </p>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <span className="text-sm text-muted-foreground">
                              {edu.duration}
                            </span>
                            <div className="mt-2 sm:mt-0">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                                {edu.score}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}