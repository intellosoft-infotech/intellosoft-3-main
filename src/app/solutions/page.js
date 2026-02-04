'use client'

import { motion } from 'framer-motion'
import { Building2, Rocket, ShoppingCart, Heart, GraduationCap, Landmark, ArrowRight, CheckCircle, Zap, Target, Shield, TrendingUp, Users, Award, Clock } from 'lucide-react'
import Link from 'next/link'

export default function Solutions() {
  const solutions = [
    {
      icon: <Building2 size={40} />,
      title: 'Enterprise Solutions',
      description: 'Scalable enterprise software for large organizations',
      features: [
        'ERP system implementation',
        'CRM solutions',
        'Supply chain management',
        'Business process automation',
      ],
      gradient: 'from-blue-500 via-blue-600 to-indigo-600',
      bgPattern: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      industries: ['Manufacturing', 'Retail', 'Logistics'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop'
    },
    {
      icon: <Rocket size={40} />,
      title: 'Startup Solutions',
      description: 'Agile MVP development to launch your startup fast',
      features: [
        'Rapid MVP development',
        'Product strategy consulting',
        'Scalable architecture',
        'Cost-effective solutions',
      ],
      gradient: 'from-purple-500 via-purple-600 to-pink-600',
      bgPattern: 'bg-purple-50',
      iconBg: 'bg-purple-100',
      industries: ['SaaS', 'E-commerce', 'FinTech'],
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&auto=format&fit=crop'
    },
    {
      icon: <ShoppingCart size={40} />,
      title: 'E-Commerce Solutions',
      description: 'Complete e-commerce platforms to grow your online business',
      features: [
        'Multi-vendor marketplaces',
        'Payment gateway integration',
        'Inventory management',
        'Mobile commerce apps',
      ],
      gradient: 'from-green-500 via-emerald-600 to-teal-600',
      bgPattern: 'bg-green-50',
      iconBg: 'bg-green-100',
      industries: ['Retail', 'Fashion', 'Food & Beverage'],
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop'
    },
    {
      icon: <Heart size={40} />,
      title: 'Healthcare Solutions',
      description: 'HIPAA-compliant healthcare technology solutions',
      features: [
        'Electronic health records (EHR)',
        'Telemedicine platforms',
        'Patient management systems',
        'Healthcare analytics',
      ],
      gradient: 'from-red-500 via-rose-600 to-pink-600',
      bgPattern: 'bg-red-50',
      iconBg: 'bg-red-100',
      industries: ['Hospitals', 'Clinics', 'Health Tech'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop'
    },
    {   
      icon: <GraduationCap size={40} />,
      title: 'Education Solutions',
      description: 'Modern learning management and education platforms',
      features: [
        'Learning management systems (LMS)',
        'Virtual classroom solutions',
        'Student information systems',
        'Educational content delivery',
      ],
      gradient: 'from-yellow-500 via-amber-600 to-orange-600',
      bgPattern: 'bg-yellow-50',
      iconBg: 'bg-yellow-100',
      industries: ['Schools', 'Universities', 'EdTech'],
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop'
    },
    {
      icon: <Landmark size={40} />,
      title: 'Financial Solutions',
      description: 'Secure fintech and banking software solutions',
      features: [
        'Digital banking platforms',
        'Payment processing systems',
        'Trading platforms',
        'Blockchain solutions',
      ],
      gradient: 'from-indigo-500 via-purple-600 to-pink-600',
      bgPattern: 'bg-indigo-50',
      iconBg: 'bg-indigo-100',
      industries: ['Banking', 'Insurance', 'FinTech'],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop'
    },
  ]

  const caseStudies = [
    {
      title: 'E-Commerce Platform Transformation',
      client: 'Leading Retail Chain',
      challenge: 'Outdated legacy system limiting online growth',
      solution: 'Modern cloud-based e-commerce platform with mobile apps',
      results: ['300% increase in online sales', '50% reduction in cart abandonment', '99.9% uptime achieved'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop',
      industry: 'Retail',
      duration: '6 months'
    },
    {
      title: 'Healthcare Management System',
      client: 'Multi-Specialty Hospital',
      challenge: 'Manual processes causing delays and errors',
      solution: 'Integrated EHR system with patient portal',
      results: ['40% faster patient processing', '80% reduction in paperwork', 'Improved patient satisfaction'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop',
      industry: 'Healthcare',
      duration: '8 months'
    },
    {
      title: 'FinTech Mobile App',
      client: 'Digital Payment Startup',
      challenge: 'Need for secure, user-friendly payment solution',
      solution: 'Cross-platform mobile app with advanced security',
      results: ['1M+ downloads in 6 months', '4.8 star rating', 'Zero security breaches'],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop',
      industry: 'FinTech',
      duration: '4 months'
    },
  ]

  const stats = [
    { number: '20+', label: 'Industries Served', icon: '🏢' },
    { number: '200+', label: 'Solutions Delivered', icon: '✅' },
    { number: '98%', label: 'Client Satisfaction', icon: '⭐' },
    { number: '24/7', label: 'Support Available', icon: '🛟' },
  ]

  const benefits = [
    {
      icon: <Target size={32} />,
      title: 'Tailored Approach',
      description: 'Solutions designed specifically for your industry and business needs',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Zap size={32} />,
      title: 'Rapid Deployment',
      description: 'Fast implementation with minimal disruption to operations',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Shield size={32} />,
      title: 'Secure & Compliant',
      description: 'Industry-standard security and regulatory compliance',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Scalable Growth',
      description: 'Solutions that grow with your business requirements',
      gradient: 'from-green-500 to-emerald-500'
    },
  ]

  const industries = [
    { name: 'Healthcare', icon: '🏥', projects: '80+' },
    { name: 'Finance', icon: '💰', projects: '120+' },
    { name: 'E-commerce', icon: '🛒', projects: '150+' },
    { name: 'Education', icon: '🎓', projects: '60+' },
    { name: 'Manufacturing', icon: '🏭', projects: '70+' },
    { name: 'Logistics', icon: '🚚', projects: '50+' },
    { name: 'Real Estate', icon: '🏠', projects: '40+' },
    { name: 'Entertainment', icon: '🎬', projects: '30+' },
  ]

  const testimonials = [
    {
      quote: "The enterprise solution transformed our operations completely. We've seen a 300% ROI within the first year.",
      author: "James Wilson",
      role: "COO, Global Manufacturing Corp",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop"
    },
    {
      quote: "Their healthcare platform is intuitive and HIPAA compliant. Our staff adopted it within days.",
      author: "Dr. Sarah Martinez",
      role: "Chief Medical Officer, City Hospital",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop"
    },
    {
      quote: "The fintech solution they built helped us scale from 0 to 1M users in just 6 months.",
      author: "Michael Chen",
      role: "CEO, PayFlow",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop"
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
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&auto=format&fit=crop"
            alt="Solutions background"
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
                  <Rocket className="text-primary-600" size={40} />
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Industry-Specific <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
                Tailored software solutions designed for your industry's unique challenges and opportunities
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all inline-flex items-center gap-2"
                >
                  Discuss Your Project
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

      {/* Solutions Grid with Images */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your industry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
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
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>
                    
                    {/* Icon on Image */}
                    <div className="absolute bottom-4 left-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg"
                      >
                        <div className={solutions.iconBg}>
                          {solution.icon}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Content Container */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-secondary-600 transition-all duration-300">
                      {solution.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {solution.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2.5 mb-6">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm">
                          <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 text-transparent bg-clip-text bg-gradient-to-r ${solution.gradient}`} />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Industries */}
                    <div className="pt-4 border-t border-gray-200 mb-6">
                      <p className="text-sm text-gray-500 mb-2 font-medium">Ideal for:</p>
                      <div className="flex flex-wrap gap-2">
                        {solution.industries.map((industry, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1.5 text-xs font-medium rounded-lg ${solution.bgPattern} text-gray-700 border border-gray-200`}
                          >
                            {industry}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link href="/contact">
                      <motion.button
                        whileHover={{ scale: 1.02, x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full group/btn relative overflow-hidden px-6 py-3.5 rounded-xl bg-gradient-to-r ${solution.gradient} text-white font-semibold shadow-md hover:shadow-xl transition-all duration-300`}
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
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${solution.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-focused expertise meets cutting-edge technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 border border-gray-100 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Industries We <span className="gradient-text">Serve</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep expertise across multiple sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 text-center border border-gray-100 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{industry.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{industry.name}</h4>
                <p className="text-primary-600 font-semibold text-sm">{industry.projects} Projects</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Success <span className="gradient-text">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real clients across industries
            </p>
          </motion.div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Stats Overlay */}
                    <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Industry</div>
                          <div className="font-bold text-gray-900">{study.industry}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Duration</div>
                          <div className="font-bold text-gray-900">{study.duration}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl blur-2xl opacity-20 -z-10 transform scale-105"></div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                    {study.client}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{study.title}</h3>
                  
                  <div className="space-y-6 mb-8">
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                          <span className="text-red-600">❗</span>
                        </div>
                        Challenge
                      </h4>
                      <p className="text-gray-700">{study.challenge}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-blue-600">💡</span>
                        </div>
                        Solution
                      </h4>
                      <p className="text-gray-700">{study.solution}</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          <span className="text-green-600">✅</span>
                        </div>
                        Results
                      </h4>
                      <ul className="space-y-3">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="text-green-600 mt-0.5 flex-shrink-0" size={20} />
                            <span className="text-gray-700 font-medium">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link href="/contact">
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="text-primary-600 font-semibold flex items-center gap-2 text-lg"
                    >
                      Start Your Success Story
                      <ArrowRight size={24} />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Client <span className="gradient-text">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 border border-gray-100 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="text-5xl text-primary-600 mb-4">"</div>
                  <p className="text-gray-700 leading-relaxed text-lg">{testimonial.quote}</p>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover ring-2 ring-primary-100"
                  />
                  <div>
                    <div className="font-bold text-gray-900 text-lg">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Width CTA Image */}
      <section className="relative h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&auto=format&fit=crop"
          alt="Get Started"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-secondary-900/90 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-4">Let's Build Your Solution</h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Every business is unique. Let's create a custom solution that fits your specific needs.
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all inline-flex items-center gap-2"
                >
                  Get Started Today
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}