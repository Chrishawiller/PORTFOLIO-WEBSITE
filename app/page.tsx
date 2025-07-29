"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu, X, Download, ExternalLink, Github, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [currentCertIndex, setCurrentCertIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scroll = totalScroll / windowHeight
      setScrollProgress(scroll)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Certifications", id: "certifications" },
    { name: "Contact", id: "contact" },
  ]

  const skills = {
    Languages: [
      { name: "Java", logo: "/placeholder.svg?height=40&width=40" },
      { name: "Python", logo: "/placeholder.svg?height=40&width=40" },
      { name: "JavaScript", logo: "/placeholder.svg?height=40&width=40" },
    ],
    Frontend: [
      { name: "HTML5", logo: "/placeholder.svg?height=40&width=40" },
      { name: "CSS3", logo: "/placeholder.svg?height=40&width=40" },
      { name: "ReactJS", logo: "/placeholder.svg?height=40&width=40" },
      { name: "Bootstrap", logo: "/placeholder.svg?height=40&width=40" },
    ],
    Backend: [
      { name: "Spring Boot", logo: "/placeholder.svg?height=40&width=40" },
      { name: "JSP", logo: "/placeholder.svg?height=40&width=40" },
      { name: "PHP", logo: "/placeholder.svg?height=40&width=40" },
    ],
    Databases: [
      { name: "MySQL", logo: "/placeholder.svg?height=40&width=40" },
      { name: "MongoDB", logo: "/placeholder.svg?height=40&width=40" },
    ],
    Tools: [
      { name: "Git", logo: "/placeholder.svg?height=40&width=40" },
      { name: "Figma", logo: "/placeholder.svg?height=40&width=40" },
      { name: "VS Code", logo: "/placeholder.svg?height=40&width=40" },
      { name: "IntelliJ", logo: "/placeholder.svg?height=40&width=40" },
      { name: "XAMPP", logo: "/placeholder.svg?height=40&width=40" },
      { name: "NetBeans", logo: "/placeholder.svg?height=40&width=40" },
    ],
  }

  const projects = [
    {
      title: "Travel Booking Platform",
      tech: "Java, JSP, ReactJS, XML",
      description:
        "Built a responsive platform for booking tours with payment integration and user session management.",
      github: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "AI Proctoring System",
      tech: "Django, OpenCV, CNN",
      description:
        "Developed a system for real-time face recognition and anomaly detection to automate online assessments.",
      github: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Video Streaming UI",
      tech: "ReactJS, JavaScript, CSS",
      description:
        "Created a responsive YouTube-like UI with dynamic routing, reusable components, and smooth navigation.",
      github: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const certifications = [
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "AWS SkillBuilder",
      date: "2024",
      link: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Java Full Stack",
      issuer: "Network Systems",
      date: "2024",
      link: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Python 100 Days of Code",
      issuer: "Udemy",
      date: "2023",
      link: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  // Auto-rotate certifications
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCertIndex((prev) => (prev + 1) % certifications.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [certifications.length])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    // EmailJS integration would go here
    // For now, just show an alert
    alert("Message sent! (This would integrate with EmailJS in production)")
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-blue-500 z-50 transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-blue-600 animate-fade-in">Chrisha Willer M</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium hover-lift"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 animate-slide-down">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-slide-in-left">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">Chrisha Willer M</h1>
              <h2 className="text-2xl lg:text-3xl text-blue-600 mb-6">Full Stack Developer</h2>
              <p className="text-lg text-gray-600 mb-8 italic">
                "I build modern web applications that solve real-world problems."
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 hover-lift"
                >
                  Let's Work Together
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 bg-transparent hover-lift"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center animate-slide-in-right">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1 animate-float">
                  <img
                    src="/placeholder.svg?height=320&width=320"
                    alt="Chrisha Willer M"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center animate-bounce-slow">
                  <span className="text-white font-bold text-lg">👋</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">About Me</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                I'm a passionate full-stack developer (fresher) with internship experience in React.js, UI/UX, and IT
                support. I love building responsive, user-friendly apps using Java, Spring Boot, and React.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {["Full Stack", "Java", "Spring Boot", "MongoDB", "React", "AI"].map((keyword, index) => (
                  <div
                    key={keyword}
                    className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 animate-scale-in hover-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="font-medium text-gray-800">{keyword}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My technical toolkit for building modern web applications
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <div
                key={category}
                className="animate-slide-in-up hover-lift"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90 group">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                        <span className="text-white text-sm font-bold">{category.charAt(0)}</span>
                      </div>
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {skillList.map((skill, skillIndex) => (
                        <div
                          key={skill.name}
                          className="flex flex-col items-center p-3 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group/skill animate-scale-in hover-lift"
                          style={{ animationDelay: `${skillIndex * 0.05}s` }}
                        >
                          <div className="w-10 h-10 mb-2 rounded-lg bg-white shadow-sm flex items-center justify-center group-hover/skill:shadow-md transition-shadow duration-300">
                            <img
                              src={skill.logo || "/placeholder.svg"}
                              alt={`${skill.name} logo`}
                              className="w-8 h-8 object-contain"
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-700 text-center group-hover/skill:text-blue-600 transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Here are some of the projects I've worked on</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="animate-slide-in-up hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl mb-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                      {project.title}
                    </CardTitle>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.split(", ").map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-0"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                    <Button
                      variant="outline"
                      className="w-full border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white bg-transparent transition-all duration-300 font-medium hover-lift"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Certifications & Achievements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional certifications that validate my expertise
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* CSS Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentCertIndex * 100}%)` }}
              >
                {certifications.map((cert, index) => (
                  <div key={cert.title} className="w-full flex-shrink-0 px-4">
                    <Card className="hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm overflow-hidden group mx-auto max-w-md">
                      <div className="relative overflow-hidden">
                        <img
                          src={cert.image || "/placeholder.svg"}
                          alt={cert.title}
                          className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 right-4">
                          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-white text-sm">🏆</span>
                          </div>
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg leading-tight bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                          {cert.title}
                        </CardTitle>
                        <CardDescription className="text-blue-600 font-medium">
                          {cert.issuer} • {cert.date}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <Button
                          variant="outline"
                          className="w-full border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white bg-transparent transition-all duration-300 font-medium hover-lift"
                          onClick={() => window.open(cert.link, "_blank")}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Certificate
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {certifications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCertIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentCertIndex ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Get In Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Let's discuss your next project or opportunity</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <Card>
                <CardHeader>
                  <CardTitle>Send me a message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input name="name" placeholder="Your Name" required />
                    </div>
                    <div>
                      <Input name="email" type="email" placeholder="Your Email" required />
                    </div>
                    <div>
                      <Textarea name="message" placeholder="Your Message" rows={5} required />
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 hover-lift">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8 animate-slide-in-right">
              <div>
                <h3 className="text-xl font-semibold mb-6">Connect with me</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 hover-lift"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 hover-lift"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 hover-lift"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-blue-600" size={20} />
                  <span>chrisha.willer@email.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-blue-600" size={20} />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-blue-600" size={20} />
                  <span>Your Location</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Chrisha Willer M. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
