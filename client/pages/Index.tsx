import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Download,
  ExternalLink,
  Github,
  Award,
  Code2,
  Zap,
  BookOpen,
  Users,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Briefcase,
  Lightbulb,
  MountainIcon,
  BookOpenCheck,
  Gamepad2,
  Server,
  Brain,
  BrainCircuit,
  WorkflowIcon,  
  Cpu,
} from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [expandedActivity, setExpandedActivity] = useState<number | null>(null);
   

  const projects = [
    {
      title: "Lybrary Management System",
      description:
        "Full-stack desktop application with C#, WPF and PostgreSQL. Features include  inventory management , authentication for users,data storage on PostgreSQL",
      tags: ["C#", "WPF", "PostgreSQL"],
      image: "/images/portofolioImages/libraryManagementSystem.jpg",
      github: "https://github.com/Gabi919/LibraryManagementSystem",
      
    },
    {
      title: "Clearcity App",
      description:
        "Clearcity is an AI-powered platform that optimizes waste management by leveraging community-driven reporting, automated image validation via YOLOv8, and gamification to transform citizens into active environmental sensors.",
      tags: ["React", "Node.js", "PostgreSQL", "Express"],
      github: "https://github.com/Gabi919/clearCityApp",
      image: "/images/portofolioImages/clearcity.png",
      live: "https://clear-city-production.up.railway.app/",
    },
    {
      title: "ATM Simulator",
      description:
        "Java console application built with an N-Tier architecture and custom file-based persistence. Features include secure multi-user authentication, automated account provisioning, real-time transaction processing, and an audit log for administrators.",
      tags: ["Java", "OOP", "Maven"],
      github: "https://github.com/Gabi919/ATMSimulator",
      image: "/images/portofolioImages/ATMsimulator.jpg",
    },
  ];

  const skills = {
    known: [
      { category: "User Interface", items: ["React", "TypeScript", "TailwindCSS", "Figma"] },
      { category: "System Arhitecture", items: ["C++", "Java", "C#", "PostgreSQL"] },
      { category: "Tools", items: ["Git", "Postman", "CLI & Shell Scripting","AWS"] },
    ],
    future: [
      "Machine Learning",
      "Docker",
      "Kubernetes",
      "Game Development",
      "Networking",
      "Ethical hacking",
      "Data Science",
    ],
  };

  const workshops = [
    {
      id: 1,
      title: "ASTRA 2025 AI & BCI Summer School",
      organization: "CRAI",
      date: "July 2025",
      shortDescription: `An intensive program exploring the cutting-edge intersection of Neuroimaging,
      Brain-Computer Interfaces (BCIs), and Artificial Intelligence.`,
      detailedDescription: `I participated in this intensive summer school focused on the intersection of AI 
      and neural data. As part of a hands-on project, I used a BrainBit EEG headset to collect real-time neural 
      signals. I then trained a Convolutional Neural Network (CNN) specifically to classify two distinct mental states
      , achieving the precision needed for control. I successfully integrated the model with an Arduino controller to 
      operate a robotic arm, allowing it to move based on the wearer's brain electrical activity. This project allowed me 
      to learn about signal processing, deep learning architectures, and hardware-software synchronization.`,
      skills: ["BrainBit EEG Data Collection", "CNN", "Neural Signal Processing", "Real-time AI Control", "Brain-Computer Interfaces"],
      icon: BrainCircuit,
    },
    {
      id: 2,
      title: "Introduction to AI & Basic Algorithms",
      organization: "RAU",
      date: "Workshop",
      shortDescription: "Exploring the fundamentals of Artificial Intelligence and learning core algorithmic concepts.",
      detailedDescription:
        `In this introductory workshop, I learned the core principles of Artificial Intelligence 
        and explored the three primary learning paradigms: Supervised, Unsupervised, and Reinforcement Learning.
         I gained a foundational understanding of how these different approaches—ranging from labeled data classification 
         to agent-based reward systems—form the basis of modern AI-driven solutions.`,
      skills: ["Agent-Reward Systems", "Pattern Recognition", "Data Labeling & Classification", "Machine Learning Paradigms"],
      icon: Brain,
    },
    {
      id: 3,
      title: "AWS and Terraform hands-on Cloud Arhitecture",
      organization: "InthePocket",
      date: "March 2025",
      shortDescription: `Explored Infrastructure as Code by learning to deploy 
      applications on AWS using Terraform for both serverless and serverful environments.`,
      detailedDescription:
        `A hands-on workshop designed to explore the transition from manual cloud management to automation. I started by getting
         familiar with the AWS Management Console to understand how core services are structured. Subsequently, I experimented with
          Terraform to grasp the fundamental principles of Infrastructure as Code (IaC), comparing the deployment workflows of a
           serverless approach (Lambda) versus a traditional serverful setup (EC2). This experience provided a solid foundation
            in understanding how to move from manual clicks to basic cloud orchestration.`,
      skills: ["Terraform", "AWS", "Infrastructure", "Serverless", "EC2"],
      icon: Server,
    },
    {
      id: 4,
      title: "Object Oriented Development using UML",
      organization: "RAU - Guest lecturer: Yahya Tashtoush",
      date: "October 2025",
      shortDescription: `Exploring software architecture through Object-Oriented principles and UML modeling.`,
      detailedDescription:
        `In this workshop, I learned how to translate complex requirements into structured software designs. 
        I practiced using UML (Unified Modeling Language) to create essential diagrams such as Use Case, Class,
         and Sequence Diagrams. This experience allowed me to explore core Object-Oriented Programming (OOP) concepts—Encapsulation,
          Inheritance, and Polymorphism—ensuring a solid foundation for building scalable and maintainable applications.`,
      skills: ["Object-Oriented Design", "UML Modeling", "OOP Principles", "Software Architecture", "Use Case & Class Diagrams"],
      icon: WorkflowIcon,
    },
    {
      id: 5,
      title: "Digital Strategy and AI Integration in Modern Business",
      organization: "RAU ",
      date: "November - December 2025",
      shortDescription: `Mastering digital transformation strategies through AI integration, automation,
       and advanced data analytics to drive organizational growth.`,
      detailedDescription:
        `This course focused on leveraging cutting-edge technologies to modernize business operations. I explored the implementation
         of AI-driven tools for data analysis and digital marketing, alongside automation strategies for SMEs. The curriculum also
          covered advanced digital collaboration platforms, Business Intelligence frameworks, and essential cybersecurity protocols
           necessary for maintaining a secure and competitive digital presence.`,
      skills: ["Arificial Intelligence", "Cybersecurity Fundamentals", "Digital Marketing", "Data Analytics Tools","Automation"],
      icon: Cpu,
    },
    {
      id: 6,
      title: "Management Information Systems",
      organization: "RAU - Guest lecturer: Weiqi Li",
      date: "March 2026",
      shortDescription: `Learning how to leverage information technology to optimize business processes and data-driven decision-making.`,
      detailedDescription:
        `In this course, I explored the strategic role of information systems in modern organizations.
         I learned how to analyze business requirements and align them with IT solutions to improve operational efficiency.
          The curriculum covered key topics such as Enterprise Resource Planning (ERP), Database Management, and the integration
           of Decision Support Systems (DSS) to transform raw data into actionable business intelligence.`,
      skills: ["ERP Systems", "Data-Driven Decision Making", "Enterprise Architecture", "Software Architecture"],
      icon: Briefcase,
    },
    
  ];

  const volunteering = [
    {
      id: 7,
      title: "Job Fair Volunteer",
      organization: "RAU Job Fair ",
      date: "2025",
      shortDescription: `Helping organize the university’s career fair and assisting participating companies.`,
      detailedDescription:
        `I was part of the volunteer team that organized the university job fair.
         I helped with the event logistics, coordinated between companies and students,
          and made sure everything ran smoothly on the day of the event. It was a great opportunity 
          to improve my communication and teamwork skills in a professional setting.`,
      skills: ["Teamwork", "Communication", "Collaboration", "Event Planning"],
      icon: Users,
    },
    {
      id: 8,
      title: "Erasmus Office Volunteer",
      organization: "RAU Erasmus Office",
      date: "2024,2025,2026",
      shortDescription: `Assisting in the organization of "Erasmus Teaching Week" and supporting international guest lecturers.`,
      detailedDescription:
        `I volunteered at the university's Erasmus Office, where I helped organize international
         events for visiting faculty. My responsibilities included preparing official materials for 
         participants and managing administrative documentation. I also collaborated with other students 
         to organize and present a city tour for guest lecturers, helping them discover the local culture and 
         landmarks while ensuring a welcoming experience for our international guests.`,
      skills: ["Mentoring", "Leadership", "Technical Guidance"],
      icon: Award,
    },
  ];

  const activities = [
    {
    id: 9,
    title: "Hiking & Nature Exploration",
    organization: "Outdoor Enthusiast",
    date: "Weekends",
    shortDescription: "Exploring mountain trails and national parks to recharge and find inspiration in nature.",
    detailedDescription:
      "Active hiker focusing on short-distance trails. Nature exploration helps me maintain a healthy work-life balance, develops my physical endurance, and provides a fresh perspective on complex problem-solving.",
    skills: ["Endurance", "Navigation", "Mindfulness"],
    icon: MountainIcon,
  },
  {
    id: 10,
    title: "Learning French",
    organization: "Personal Development",
    date: "Weekly Practice",
    shortDescription: "Embarking on a journey to master the French language and explore Francophone culture.",
    detailedDescription:
      "Currently at an elementary level (A2), dedicated to multiple practice sessions weekly. Learning a new language sharpens my cognitive abilities, improves communication skills, and demonstrates my long-term commitment to learning new systems.",
    skills: ["Linguistic Curiosity", "Consistency", "Cultural Awareness"],
    icon: BookOpenCheck,
  },
  {
    id: 11,
    title: "Gaming",
    organization: "Entertainment",
    date: "Daily",
    shortDescription: "Immersing myself in rich stories and competitive matches to unwind after a day of coding.",
    detailedDescription:
      "Passionate about strategy, RPG games and open-world games that require complex resource management and quick decision-making. Gaming has helped me develop spatial awareness, patience, and a collaborative mindset in multiplayer environments.",
    skills: ["Strategic Thinking", "Team Collaboration", "Quick Reflexes"],
    icon: Gamepad2,
  },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Daniel-Gabriel Roșu
            </h1>
            <p className="text-xl sm:text-3xl text-muted-foreground mb-4 font-medium">
              Aspiring Software Engineer
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Driven developer dedicated to expanding my technical horizon and eager to master the art of writing clean, maintainable, and efficient code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
             <a 
                href="/RoșuDaniel-GabrielCV.pdf" 
                download="RoșuDaniel-GabrielCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="gap-2 bg-primary hover:bg-primary/90"
                  size="lg"
                >
                  <Download size={20} />
                  Download CV
                </Button>
              </a>
              <a
                href="https://github.com/Gabi919"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 w-full sm:w-auto"
                >
                  <Github size={20} />
                  View GitHub Profile
                </Button>
              </a>
            </div>
          </div>

          <div className="animate-slide-down hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-card to-secondary rounded-2xl p-8 border border-border">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary/10 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-primary">10+</div>
                    <div className="text-sm text-muted-foreground mt-2">
                      Personal Projects Completed
                    </div>
                  </div>
                  <div className="bg-accent/10 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-accent">500+</div>
                    <div className="text-sm text-muted-foreground mt-2">
                      Continuous Learning Hours
                    </div>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground mt-2">
                      Tech Stacks Explored
                    </div>
                  </div>
                  <div className="bg-accent/10 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-accent">C1</div>
                    <div className="text-sm text-muted-foreground mt-2">
                      English Proficiency
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block mb-4 px-3 py-1 bg-primary/10 rounded-full">
              <span className="text-sm font-semibold text-primary">
                ABOUT ME
              </span>
            </div>
            <h2 className="text-4xl font-bold mb-6 ">Who Am I?</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed text-white/70 transition-colors hover:text-white/100">
              I am an aspiring Software Developer focused on mastering the core principles of Object-Oriented Programming 
              and system-level efficiency. My background is built on a rigorous approach to logic and structured coding, 
              moving from academic theory to hands-on implementation in software design.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed text-white/70 transition-colors hover:text-white/100">
              I focus on building robust applications while continuously refining my understanding of Algorithms and Data Structures.
               My approach is centered on writing clean, modular code and I am eager to apply my theoretical knowledge to real-world 
               projects, constantly learning and adapting to industry best practices.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-white/70 transition-colors hover:text-white/100">
              Outside of my studies, I enjoy hiking and exploring the outdoors, which helps me recharge and stay focused.
              I am also a gaming enthusiast, a hobby that has fueled my interest in technology and complex problem-solving from an early age.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block mb-4 px-3 py-1 bg-primary/10 rounded-full">
            <span className="text-sm font-semibold text-primary">
              TECHNICAL SKILLS
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-16">Skills & Tech Stack</h2>

          {/* Core Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Code2 className="text-primary" size={28} />
              Core Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.known.map((skillGroup) => (
                <div
                  key={skillGroup.category}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
                >
                  <h4 className="font-bold text-lg mb-4 text-primary">
                    {skillGroup.category}
                  </h4>
                  <ul className="space-y-2">
                    {skillGroup.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Future Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Zap className="text-accent" size={28} />
              Learning & Exploring
            </h3>
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/30 rounded-xl p-8">
              <div className="flex flex-wrap gap-6  ">
                {skills.future.map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 bg-background rounded-lg border border-border text-sm font-medium text-foreground hover:border-accent/50 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-secondary/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block mb-4 px-3 py-1 bg-primary/10 rounded-full">
            <span className="text-sm font-semibold text-primary">
              PORTFOLIO
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-16">Featured Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1 group flex flex-col h-full"
              >
                {/* Header Image/Icon */}
                <div className="h-40 overflow-hidden shrink-0 border-b border-border">
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title} project`}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1">
                 
                  <div>
                    <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* BUTTONS - vor sta mereu sub tag-uri, aliniate la bază */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full gap-2"
                      >
                        <Github size={16} />
                        Code
                      </Button>
                    </a>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button size="sm" className="w-full gap-2">
                          <ExternalLink size={16} />
                          Live
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block mb-4 px-3 py-1 bg-primary/10 rounded-full">
            <span className="text-sm font-semibold text-primary">
              EXPERIENCE
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-16">
            Workshops, Volunteering & Activities
          </h2>

          {/* Workshops Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <BookOpen className="text-primary" size={28} />
              Workshops and Courses
            </h3>
            <div className="space-y-4">
              {workshops.map((item) => {
                const Icon = item.icon;
                const isExpanded = expandedActivity === item.id;
                return (
                  <div
                    key={item.id}
                    className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all cursor-pointer"
                    onClick={() =>
                      setExpandedActivity(isExpanded ? null : item.id)
                    }
                  >
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <Icon className="text-primary" size={24} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h4 className="text-xl font-bold mb-1">
                                {item.title}
                              </h4>
                              <p className="text-muted-foreground font-medium mb-2">
                                {item.organization}
                              </p>
                              <p className="text-sm text-muted-foreground mb-3">
                                {item.date}
                              </p>
                              <p className="text-muted-foreground leading-relaxed">
                                {item.shortDescription}
                              </p>
                            </div>
                            <ChevronDown
                              className={`flex-shrink-0 transition-transform ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                              size={20}
                            />
                          </div>
                        </div>
                      </div>

                      {isExpanded && (
                        <div className="mt-6 pt-6 border-t border-border animate-slide-down">
                          <h5 className="font-semibold mb-3 text-foreground">
                            More Details
                          </h5>
                          <p className="text-muted-foreground leading-relaxed mb-6">
                            {item.detailedDescription}
                          </p>
                          <div>
                            <h6 className="font-semibold mb-3 text-sm text-foreground">
                              Key Skills
                            </h6>
                            <div className="flex flex-wrap gap-2">
                              {item.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Volunteering Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Users className="text-accent" size={28} />
              Volunteering
            </h3>
            <div className="space-y-4">
              {volunteering.map((item) => {
                const Icon = item.icon;
                const isExpanded = expandedActivity === item.id;
                return (
                  <div
                    key={item.id}
                    className="bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all cursor-pointer"
                    onClick={() =>
                      setExpandedActivity(isExpanded ? null : item.id)
                    }
                  >
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <Icon className="text-accent" size={24} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h4 className="text-xl font-bold mb-1">
                                {item.title}
                              </h4>
                              <p className="text-muted-foreground font-medium mb-2">
                                {item.organization}
                              </p>
                              <p className="text-sm text-muted-foreground mb-3">
                                {item.date}
                              </p>
                              <p className="text-muted-foreground leading-relaxed">
                                {item.shortDescription}
                              </p>
                            </div>
                            <ChevronDown
                              className={`flex-shrink-0 transition-transform ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                              size={20}
                            />
                          </div>
                        </div>
                      </div>

                      {isExpanded && (
                        <div className="mt-6 pt-6 border-t border-border animate-slide-down">
                          <h5 className="font-semibold mb-3 text-foreground">
                            More Details
                          </h5>
                          <p className="text-muted-foreground leading-relaxed mb-6">
                            {item.detailedDescription}
                          </p>
                          <div>
                            <h6 className="font-semibold mb-3 text-sm text-foreground">
                              Key Skills
                            </h6>
                            <div className="flex flex-wrap gap-2">
                              {item.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Extracurricular Activities Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Lightbulb className="text-primary" size={28} />
              Other Activities
            </h3>
            <div className="space-y-4">
              {activities.map((item) => {
                const Icon = item.icon;
                const isExpanded = expandedActivity === item.id;
                return (
                  <div
                    key={item.id}
                    className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all cursor-pointer"
                    onClick={() =>
                      setExpandedActivity(isExpanded ? null : item.id)
                    }
                  >
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <Icon className="text-primary" size={24} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h4 className="text-xl font-bold mb-3">
                                {item.title}
                              </h4>
                              <p className="text-muted-foreground font-medium mb-2">
                                {item.organization}
                              </p>
                              <p className="text-sm text-muted-foreground mb-3">
                                {/* {item.date} */}
                              </p>
                              <p className="text-muted-foreground leading-relaxed">
                                {item.shortDescription}
                              </p>
                            </div>
                            <ChevronDown
                              className={`flex-shrink-0 transition-transform ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                              size={20}
                            />
                          </div>
                        </div>
                      </div>

                      {isExpanded && (
                        <div className="mt-6 pt-6 border-t border-border animate-slide-down">
                          <h5 className="font-semibold mb-3 text-foreground">
                            More Details
                          </h5>
                          <p className="text-muted-foreground leading-relaxed mb-6">
                            {item.detailedDescription}
                          </p>
                          <div>
                            <h6 className="font-semibold mb-3 text-sm text-foreground">
                              Key Skills
                            </h6>
                            <div className="flex flex-wrap gap-2">
                              {item.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-background to-accent/10 border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for New Challenges</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I’m always eager to step out of my comfort zone and take on new challenges. If you have an exciting 
            opportunity , let’s talk about how I can contribute and grow with your team.
          </p>
          <a href="mailto:gabi78953@gmail.com">
            <Button size="lg" className="gap-2">
              Get In Touch
              <ArrowRight size={20} />
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
}
