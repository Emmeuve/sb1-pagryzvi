import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Code2, 
  Palette, 
  Smartphone, 
  Globe,
  Download,
  ExternalLink,
  Coffee,
  Calendar,
  Star,
  ArrowRight
} from 'lucide-react';
import Aurora from './Aurora';

function App() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack React app with payment integration",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "Real-time collaborative workspace",
      tech: ["TypeScript", "Firebase", "Tailwind"],
      link: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather app with forecasts",
      tech: ["React", "API Integration", "Charts"],
      link: "#"
    }
  ];

  const skills = [
    { name: "Frontend", icon: Code2, items: ["React", "TypeScript", "Tailwind"] },
    { name: "Backend", icon: Globe, items: ["Node.js", "Python", "PostgreSQL"] },
    { name: "Design", icon: Palette, items: ["Figma", "UI/UX", "Prototyping"] },
    { name: "Mobile", icon: Smartphone, items: ["React Native", "Flutter"] }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Aurora Background */}
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
      
      {/* Content */}
      <div className="relative z-10 bg-gradient-to-br from-slate-50/80 to-slate-100/80 backdrop-blur-sm min-h-screen p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <header className="mb-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600/90 to-purple-600/90 backdrop-blur-sm rounded-2xl mb-6 shadow-lg">
              <span className="text-white font-bold text-xl">AX</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">
              Alex Johnson
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Full-Stack Developer crafting beautiful digital experiences with modern technologies
            </p>
          </header>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 mb-12">
            
            {/* Hero Card - Large */}
            <div 
              className="md:col-span-2 lg:col-span-3 bg-gradient-to-br from-blue-600/90 to-purple-600/90 backdrop-blur-sm rounded-3xl p-8 text-white relative overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
              onMouseEnter={() => setHoveredCard('hero')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">Available for Work</h2>
                <p className="text-blue-100 mb-6 text-lg">
                  Currently open to new opportunities and exciting projects
                </p>
                <button className="bg-white/90 backdrop-blur-sm text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-white transition-colors duration-200 flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Resume
                </button>
              </div>
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500"></div>
            </div>

            {/* About Me */}
            <div 
              className="md:col-span-2 lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-slate-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              onMouseEnter={() => setHoveredCard('about')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h3 className="text-xl font-bold text-slate-800 mb-4">About Me</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                5+ years of experience building scalable web applications. Passionate about clean code and user experience.
              </p>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  San Francisco, CA
                </div>
                <div className="flex items-center gap-1">
                  <Coffee className="w-4 h-4" />
                  Available
                </div>
              </div>
            </div>

            {/* Status Card */}
            <div 
              className="bg-emerald-50/80 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-emerald-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              onMouseEnter={() => setHoveredCard('status')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-emerald-700 font-semibold">Currently</span>
              </div>
              <p className="text-slate-700 text-sm">
                Building a SaaS platform for small businesses
              </p>
            </div>

            {/* Skills Grid */}
            <div className="md:col-span-4 lg:col-span-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-slate-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                  onMouseEnter={() => setHoveredCard(`skill-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-slate-100/80 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-blue-100/80 transition-colors duration-200">
                      <skill.icon className="w-5 h-5 text-slate-600 group-hover:text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-slate-800">{skill.name}</h3>
                  </div>
                  <div className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-2">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-sm text-slate-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Projects Section */}
            <div className="md:col-span-4 lg:col-span-4 bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-slate-200/50 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-800">Featured Projects</h3>
                <button className="text-blue-600 hover:text-blue-700 flex items-center gap-2 text-sm font-medium">
                  View All <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                  <div 
                    key={index}
                    className="border border-slate-200/50 backdrop-blur-sm rounded-2xl p-4 hover:border-blue-300 transition-all duration-200 hover:shadow-md group bg-white/60"
                  >
                    <h4 className="font-semibold text-slate-800 mb-2">{project.title}</h4>
                    <p className="text-sm text-slate-600 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-slate-100/80 backdrop-blur-sm text-slate-600 rounded-lg text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 flex items-center gap-1 text-sm font-medium">
                      <ExternalLink className="w-3 h-3" />
                      View Project
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Card */}
            <div 
              className="md:col-span-2 bg-slate-900/90 backdrop-blur-sm rounded-3xl p-6 text-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              onMouseEnter={() => setHoveredCard('contact')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
              <p className="text-slate-300 mb-6">
                Always interested in discussing new opportunities and projects.
              </p>
              <div className="space-y-3">
                <a 
                  href="mailto:alex@example.com" 
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                  alex@example.com
                </a>
                <a 
                  href="#" 
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-200"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a 
                  href="#" 
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-gradient-to-br from-orange-50/80 to-red-50/80 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-orange-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                <div className="text-sm text-slate-600">Projects Completed</div>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-gradient-to-br from-purple-50/80 to-pink-50/80 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-purple-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="text-center py-8 border-t border-slate-200/50">
            <p className="text-slate-500 text-sm">
              © 2024 Alex Johnson. Crafted with passion and React.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;