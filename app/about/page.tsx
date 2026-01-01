'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  MapPin, 
  Mail, 
  Phone, 
  Download, 
  Calendar,
  Briefcase,
  GraduationCap,
  Award,
  ChevronRight,
  Code,
  Loader2,
  Eye
} from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { experiences, personalInfo, projects, skills, socialLinks } from "@/data/about"
import { Experience } from "@/types/experience"

// Reusable component for scroll-triggered animations
const AnimatedSection = ({ children, className = "" }: { 
  children: React.ReactNode
  className?: string 
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.2,
    margin: "0px 0px -100px 0px"
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function AboutPage() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownloadResume = async () => {
    try {
      setIsDownloading(true)
      
      // Create download link
      const link = document.createElement('a')
      link.href = personalInfo.resumeUrl
      link.download = personalInfo.resumeFileName || 'RasidinBinHatta_Resume.pdf'
      
      // Append to DOM, click, and cleanup
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      // Reset loading state after delay
      setTimeout(() => setIsDownloading(false), 2000)
      
    } catch (error) {
      console.error('Download failed:', error)
      setIsDownloading(false)
      
      // Fallback: open in new tab if download fails
      window.open(personalInfo.resumeUrl, '_blank')
    }
  }

  const handleContact = () => {
    window.location.href = `mailto:${personalInfo.email}`
  }

  const timelineItems: Experience[] = [...experiences, ...projects]

  return (
    <div className="min-h-screen bg-transparent">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-background shadow-lg">
                    <AvatarImage src={personalInfo.avatar} alt={personalInfo.name} />
                    <AvatarFallback className="text-2xl font-bold bg-primary text-primary-foreground">
                      RBH
                    </AvatarFallback>
                  </Avatar>
                </motion.div>
                
                <div className="flex-1 text-center md:text-left">
                  <motion.h1 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl md:text-5xl font-bold text-foreground mb-2"
                  >
                    {personalInfo.name}
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl md:text-2xl text-primary mb-3"
                  >
                    {personalInfo.title}
                  </motion.p>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-muted-foreground mb-6 max-w-2xl"
                  >
                    {personalInfo.subtitle}
                  </motion.p>
                  
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap gap-4 justify-center md:justify-start mb-6"
                  >
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{personalInfo.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="w-4 h-4" />
                      <span>{personalInfo.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      <span>{personalInfo.phone}</span>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="flex w-full flex-col justify-center gap-4 sm:flex-row lg:justify-start"
                  >
                    <Button
                      onClick={handleContact}
                      className="w-full sm:w-auto text-background rounded-full px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      Get In Touch
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                    
                    {/* Download Button with Loading State */}
                    <Button
                      onClick={handleDownloadResume}
                      disabled={isDownloading}
                      variant="outline"
                      size="lg"
                      className="rounded-full px-8 transition-all duration-300 hover:scale-105 hover:bg-foreground hover:text-primary bg-accent text-foreground w-full sm:w-auto"
                    >
                      {isDownloading ? (
                        <>
                          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                          Preparing...
                        </>
                      ) : (
                        <>
                          <Download className="mr-2 w-4 h-4" />
                          Download Resume
                        </>
                      )}
                    </Button>
                    
                    {/* Optional: View Resume Button */}
                    <Button
                      asChild
                      variant="ghost"
                      size="lg"
                      className="rounded-full px-8 w-full sm:w-auto"
                    >
                      <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                        <Eye className="mr-2 w-4 h-4" />
                        View Resume
                      </a>
                    </Button>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex gap-4 mt-6 justify-center md:justify-start"
                  >
                    {socialLinks.map((social, index: number) => (
                      <Link
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                      >
                        <social.icon className="w-5 h-5 text-muted-foreground" />
                      </Link>
                    ))}
                  </motion.div>
                </div>
              </div>
              
              <Separator className="my-8" />
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-foreground leading-relaxed max-w-4xl mx-auto text-center"
              >
                {personalInfo.bio}
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Skills Section */}
        <AnimatedSection className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4 text-foreground flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <skillGroup.icon className="w-4 h-4 text-primary" />
                      </div>
                      {skillGroup.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex: number) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Experience & Projects Timeline */}
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Experience & Projects Journey
          </h2>
          
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>
            
            {timelineItems.map((exp, index: number) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-background border-4 rounded-full z-10 ${
                  exp.type === 'work' ? 'border-blue-500' : 
                  exp.type === 'education' ? 'border-green-500' : 'border-purple-500'
                }`}></div>
                
                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
                    <CardContent className="p-6">
                      <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {exp.type === 'work' ? (
                          <Briefcase className="w-5 h-5 text-blue-500" />
                        ) : exp.type === 'education' ? (
                          <GraduationCap className="w-5 h-5 text-green-500" />
                        ) : (
                          <Code className="w-5 h-5 text-purple-500" />
                        )}
                        <span className="text-sm font-medium text-muted-foreground">
                          {exp.type === 'work' ? 'Work Experience' : 
                           exp.type === 'education' ? 'Education' : 'Project'}
                        </span>
                      </div>
                      
                      <h3 className={`text-xl font-bold mb-1 text-foreground ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {exp.title}
                      </h3>
                      
                      <p className={`text-primary font-medium mb-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {exp.company}
                      </p>
                      
                      <div className={`flex items-center gap-4 text-sm text-muted-foreground mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                      </div>
                      
                      <p className="text-foreground mb-3">
                        {exp.description}
                      </p>
                      
                      {exp.tech && (
                        <div className={`flex flex-wrap gap-2 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          {exp.tech.map((tech: string, techIndex: number) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      {exp.achievements && (
                        <ul className={`space-y-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                          {exp.achievements.map((achievement: string, achIndex: number) => (
                            <li key={achIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                              {index % 2 === 0 ? (
                                <>
                                  <span>{achievement}</span>
                                  <Award className="w-3 h-3 mt-0.5 shrink-0 ml-auto" />
                                </>
                              ) : (
                                <>
                                  <Award className="w-3 h-3 mt-0.5 shrink-0" />
                                  <span>{achievement}</span>
                                </>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* References Section */}
        <AnimatedSection className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            Professional References
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Dr. Nurfazrina Binti Mohd Zamry", role: "FYP Supervisor", email: "nurfazrina.mz@utm.my" },
              { name: "Prof. Madya. Dr. Mohd. Murtadha bin Mohamad", role: "Academic Advisor", email: "murtadha@utm.my" },
              { name: "Sheik Hazrin Bin Sheik Othman", role: "Senior IT Executive | Industrial Supervisor", email: "sheikhazrin@kiswiresea.com" }
            ].map((ref, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-foreground">{ref.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{ref.role}</p>
                    <p className="text-sm text-primary">{ref.email}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}