'use client'

import { motion } from 'framer-motion'
import { Code, CloudCog , Cloud, Smartphone, Database, Shield, Cog, Globe, Zap, Users, ArrowRight, CheckCircle2, Sparkles, Target, Trophy, Clock, HeartHandshake } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      icon: <Code size={40} />,
      title: 'Custom Software Development',
      description: 'End-to-end custom software solutions tailored to your unique business requirements',
      features: [
        'Full-stack web development',
        'Enterprise application development',
        'Legacy system modernization',
        'API development & integration',
      ],
      gradient: 'from-blue-500 via-blue-600 to-indigo-600',
      bgPattern: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      technologies: ['React', 'Node.js', 'Python', '.NET', 'Java'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop'
    },
    {
      icon: <Cloud size={40} />,
      title: 'Cloud Solutions & Migration',
      description: 'Scalable cloud infrastructure and seamless migration services',
      features: [
        'Cloud strategy & consulting',
        'Cloud-native application development',
        'Infrastructure as Code (IaC)',
        'Multi-cloud & hybrid solutions',
      ],
      gradient: 'from-purple-500 via-purple-600 to-pink-600',
      bgPattern: 'bg-purple-50',
      iconBg: 'bg-purple-100',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop'
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that delight users',
      features: [
        'iOS app development',
        'Android app development',
        'Cross-platform solutions',
        'Progressive Web Apps (PWA)',
      ],
      gradient: 'from-pink-500 via-rose-600 to-red-600',
      bgPattern: 'bg-pink-50',
      iconBg: 'bg-pink-100',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'iOS/Android'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop'
    },
   
    {
      icon: <Shield size={40} />,
      title: 'Cybersecurity Services',
      description: 'Comprehensive security solutions to protect your digital assets',
      features: [
        'Security audits & assessments',
        'Penetration testing',
        'Security architecture design',
        'Compliance management',
      ],
      gradient: 'from-red-500 via-orange-600 to-amber-600',
      bgPattern: 'bg-red-50',
      iconBg: 'bg-red-100',
      technologies: ['OWASP', 'SIEM', 'IAM', 'Zero Trust', 'SOC'],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop'
    },
    {
      icon: <Cog size={40} />,
      title: 'IT Consulting & Strategy',
      description: 'Strategic technology consulting to align IT with business objectives',
      features: [
        'Digital transformation',
        'Technology roadmap planning',
        'IT infrastructure optimization',
        'Vendor selection & management',
      ],
      gradient: 'from-orange-500 via-amber-600 to-yellow-600',
      bgPattern: 'bg-orange-50',
      iconBg: 'bg-orange-100',
      technologies: ['TOGAF', 'ITIL', 'Agile', 'DevOps', 'Lean'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop'
    },
    {
  icon: <CloudCog size={40} />,
  title: 'Salesforce Development & Implementation',
  description: 'End-to-end Salesforce solutions to streamline CRM, sales, and business operations',
  features: [
    'Salesforce CRM implementation',
    'Custom Salesforce development',
    'Sales & Service Cloud setup',
    'Salesforce integration & automation',
  ],
  gradient: 'from-sky-500 via-blue-600 to-indigo-600',
  bgPattern: 'bg-sky-50',
  iconBg: 'bg-sky-100',
  technologies: [
    'Salesforce',
    'Apex',
    'Lightning Web Components',
    'Sales Cloud',
    'Service Cloud',
  ],
  image: 'https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=800&auto=format&fit=crop'
},

    {
      icon: <Globe size={40} />,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications',
      features: [
        'Responsive web design',
        'E-commerce solutions',
        'Content management systems',
        'Web portal development',
      ],
      gradient: 'from-cyan-500 via-sky-600 to-blue-600',
      bgPattern: 'bg-cyan-50',
      iconBg: 'bg-cyan-100',
      technologies: ['Next.js', 'React', 'Vue.js', 'WordPress', 'Shopify'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop'
    },
    {
      icon: <Zap size={40} />,
      title: 'DevOps & Automation',
      description: 'Streamline your development and deployment processes',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure automation',
        'Monitoring & logging',
        'Performance optimization',
      ],
      gradient: 'from-yellow-500 via-orange-600 to-red-600',
      bgPattern: 'bg-yellow-50',
      iconBg: 'bg-yellow-100',
      technologies: ['Jenkins', 'GitLab CI', 'Terraform', 'Ansible', 'Prometheus'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop'
    },
    {
      icon: <Users size={40} />,
      title: 'Staff Augmentation',
      description: 'Scale your team with our experienced professionals',
      features: [
        'Dedicated development teams',
        'Project-based resources',
        'Skill-specific hiring',
        'Flexible engagement models',
      ],
      gradient: 'from-indigo-500 via-purple-600 to-pink-600',
      bgPattern: 'bg-indigo-50',
      iconBg: 'bg-indigo-100',
      technologies: ['Full-stack', 'Frontend', 'Backend', 'QA', 'DevOps'],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop'
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We understand your business goals, challenges, and requirements',
      icon: <Target size={32} />,
    },
    {
      step: '02',
      title: 'Strategy & Design',
      description: 'Create a comprehensive plan and design that aligns with your vision',
      icon: <Sparkles size={32} />,
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Build and rigorously test the solution using agile methodologies',
      icon: <Code size={32} />,
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'Launch your solution and provide ongoing maintenance and support',
      icon: <Trophy size={32} />,
    },
  ]

  const stats = [
    { number: '200+', label: 'Projects Completed', icon: '🚀' },
    { number: '100+', label: 'Happy Clients', icon: '😊' },
    { number: '20+', label: 'Expert Team Members', icon: '👥' },
    { number: '10+', label: 'Years Experience', icon: '⭐' },
  ]

  const whyChooseUs = [
    {
      icon: <Trophy size={28} />,
      title: 'Proven Excellence',
      description: 'Track record of 200+ successful projects across diverse industries',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Clock size={28} />,
      title: 'Agile Delivery',
      description: 'Fast, iterative development with transparent communication',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Shield size={28} />,
      title: 'Security First',
      description: 'Enterprise-grade security and compliance in every solution',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: <HeartHandshake size={28} />,
      title: '24/7 Support',
      description: 'Dedicated support team available round the clock',
      gradient: 'from-purple-500 to-indigo-500'
    },
  ]

  return (
    <main className="pt-20">
      {/* Hero Section with Background Image */}
      <section className="relative section-padding overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-secondary-900/95 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&auto=format&fit=crop"
            alt="Services background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl z-10 translate-x-8"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl z-10 -translate-x-8"></div>

        <div className="container-custom relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl"></div>
                <div className="relative w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                  <Cog className="text-primary-600" size={40} />
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
                Comprehensive IT services and software solutions designed to accelerate your 
                digital transformation journey and drive business growth.
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all inline-flex items-center gap-2"
                >
                  Get Started
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Floating over hero */}
      <section className="relative -mt-20 z-30">
        <div className="container-custom">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - ENHANCED WITH IMAGES */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What We <span className="gradient-text">Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative"
              >
                {/* Card Container */}
                <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>
                    
                    {/* Icon on Image */}
                    <div className="absolute bottom-4 left-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg"
                      >
                        <div className={""}>
                          {service.icon}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Content Container */}
                  <div className="p-8">
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-secondary-600 transition-all duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2.5 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm">
                          <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`} />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1.5 text-xs font-medium rounded-lg ${service.bgPattern} text-gray-700 border border-gray-200`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Link href="/contact">
                      <motion.button
                        whileHover={{ scale: 1.02, x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full group/btn relative overflow-hidden px-6 py-3.5 rounded-xl bg-gradient-to-r ${service.gradient} text-white font-semibold shadow-md hover:shadow-xl transition-all duration-300`}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Learn More
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </span>
                        
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                      </motion.button>
                    </Link>
                  </div>
                </div>

                {/* Floating Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with Image */}
      <section className="relative section-padding overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-white/95 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&auto=format&fit=crop"
            alt="Process background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="container-custom relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that delivers results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Connection Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-16 right-0 w-24 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 z-0"></div>
                )}

                <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl p-8 relative z-10 transition-all duration-300 border border-gray-100 group-hover:border-primary-200">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  
                  {/* Step Number */}
                  <div className="text-5xl font-bold text-gray-200 mb-4 group-hover:text-primary-100 transition-colors">
                    {item.step}
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us with Image */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop"
                  alt="Team working"
                  className="w-full h-full object-cover"
                />
                {/* Overlay Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Trophy className="text-white" size={32} />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900 mb-1">200+</div>
                      <div className="text-gray-600 font-medium">Successful Projects</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl blur-2xl opacity-20 -z-10 transform scale-105"></div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose <span className="gradient-text">Intellosoft?</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We combine technical expertise with a customer-first approach to deliver exceptional results.
              </p>
              
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full Width Image Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&auto=format&fit=crop"
          alt="Team collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-secondary-900/90 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help you achieve your goals
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all inline-flex items-center gap-2"
                  >
                    Schedule Consultation
                    <ArrowRight size={20} />
                  </motion.button>
                </Link>
           
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {/* <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Intellosoft transformed our legacy systems into a modern, scalable platform. Their expertise and dedication are unmatched.",
                author: "Sarah Johnson",
                role: "CTO, TechCorp",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop"
              },
              {
                quote: "The team delivered our mobile app ahead of schedule with exceptional quality. Highly recommend their services!",
                author: "Michael Chen",
                role: "CEO, StartupX",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop"
              },
              {
                quote: "Professional, responsive, and results-driven. Intellosoft exceeded our expectations in every way.",
                author: "Emily Rodriguez",
                role: "Product Manager, InnovateCo",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop"
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl p-8 border border-gray-100 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="text-4xl text-primary-600 mb-4">"</div>
                  <p className="text-gray-700 leading-relaxed">{testimonial.quote}</p>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-primary-100"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </main>
  )
}