"use client";

import { motion } from "framer-motion";
import {
  Target,
  Users,
  Award,
  TrendingUp,
  Heart,
  Lightbulb,
  Shield,
  Zap,
  CheckCircle,
  Globe,
  Rocket,
  Star,
  Trophy,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

export default function About() {
  const values = [
    {
      icon: <Lightbulb size={40} />,
      title: "Innovation",
      description:
        "We constantly push boundaries to deliver cutting-edge solutions",
      gradient: "from-yellow-500 to-orange-500",
      iconBg: "bg-yellow-50",
    },
    {
      icon: <Heart size={40} />,
      title: "Integrity",
      description: "Transparency and honesty in every client interaction",
      gradient: "from-red-500 to-pink-500",
      iconBg: "bg-red-50",
    },
    {
      icon: <Users size={40} />,
      title: "Collaboration",
      description: "Working together to achieve extraordinary results",
      gradient: "from-blue-500 to-cyan-500",
      iconBg: "bg-blue-50",
    },
    {
      icon: <Award size={40} />,
      title: "Excellence",
      description: "Commitment to delivering the highest quality work",
      gradient: "from-purple-500 to-pink-500",
      iconBg: "bg-purple-50",
    },
  ];

  const team = [
    {
      name: "Gourav Patidar",
      role: "Founder & CEO",
      image:
        "/gourav.jpeg",
      description: "Visionary leader with 10+ years in software development",
      gradient: "from-blue-600 to-cyan-600",
      linkedin: "https://www.linkedin.com/in/gourav-patidar-15a19449/",
    },
    {
      name: "Priya Patel",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop",
      description: "Tech innovator specializing in cloud architecture",
      gradient: "from-purple-600 to-pink-600",
      linkedin: "#",
    },
    {
      name: "Deependra Patel",
      role: "Senior Software Engineer",
      image:
        "/deependra.jpeg",
      description: "Full-stack MERN developer specializing in scalable web applications, modern JavaScript frameworks, and building robust RESTful APIs",
      gradient: "from-green-600 to-emerald-600",
      linkedin: "https://www.linkedin.com/in/deependra-patel-57b0ba266/",
    },
   
  ];

  const milestones = [
    {
      year: "2015",
      title: "Company Founded",
      description:
        "Started with a vision to transform businesses through technology",
      icon: <Rocket size={24} />,
    },
    {
      year: "2018",
      title: "First Major Client",
      description: "Secured partnership with leading enterprise organization",
      icon: <Star size={24} />,
    },
    {
      year: "2020",
      title: "Team Expansion",
      description: "Grew to 20+ talented professionals",
      icon: <Users size={24} />,
    },
    {
      year: "2022",
      title: "International Presence",
      description: "Expanded services to global markets",
      icon: <Globe size={24} />,
    },
    
    {
      year: "2024",
      title: "200+ Projects",
      description: "Delivered successful solutions across industries",
      icon: <Award size={24} />,
    },

  {
  year: "2026",
  title: "Scaling New Heights",
  description:
    "Onwards towards the path to be recognized globally as the leading software consulting firm, we are now growing rapidly in India and overseas.",
  icon: <Rocket size={24} />,
}


  ];

  const stats = [
    { number: "10+", label: "Years of Excellence", icon: "⏱️" },
    { number: "200+", label: "Projects Delivered", icon: "🚀" },
    { number: "100+", label: "Happy Clients", icon: "😊" },
    { number: "20+", label: "Team Members", icon: "👥" },
  ];

  const achievements = [
    {
      icon: "🏆",
      title: "Innovation Leader",
      description: "Recognized as top innovator in software development",
    },
    {
      icon: "⭐",
      title: "98% Client Satisfaction",
      description: "Consistently exceeding client expectations",
    },
    {
      icon: "🌍",
      title: "Global Reach",
      description: "Serving clients across 20+ countries",
    },
    {
      icon: "💼",
      title: "Industry Expertise",
      description: "Deep knowledge across multiple sectors",
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section with Background Image */}
      <section className="relative section-padding overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-secondary-900/95 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&auto=format&fit=crop"
            alt="About background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl z-10"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl z-10"></div>

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
                  <Users className="text-primary-600" size={40} />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Intellosoft
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                We are a modern, innovation-driven software consulting firm
                dedicated to helping businesses leverage technology to
                accelerate growth and maintain a competitive edge.
              </p>
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

      {/* Our Story Section with Image */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg leading-relaxed">
                  Intellosoft Infotech, founded by Gourav Patidar, is driven by
                  a deep passion for digital transformation through building
                  scalable, high-impact technology solutions that achieve real
                  business outcomes.
                </p>

                <p className="text-lg leading-relaxed">
                  As a Software Engineer, Gourav gained invaluable exposure to
                  enterprise-grade systems, cloud platforms, product
                  engineering, and mission-critical software development during
                  his tenure at{" "}
                  <a
                    href="https://www.salesforce.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Salesforce, Inc.
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.synopsys.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Synopsys Inc.
                  </a>{" "}
                  over the last decade. He holds a Master's degree in Computer
                  Information Science from{" "}
                  <a
                    href="https://www.fit.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Florida Institute of Technology, USA
                  </a>
                  .
                </p>

                <p className="text-lg leading-relaxed">
                  Over the years, we've successfully delivered 200+ projects,
                  helping businesses of all sizes achieve their digital
                  transformation goals. Our commitment to excellence,
                  innovation, and client success has made us a trusted
                  technology partner.
                </p>

                <p className="text-lg leading-relaxed">
                  Today, we continue to push boundaries, embrace new
                  technologies, and deliver solutions that make a real
                  difference in our clients' businesses.
                </p>
              </div>

              {/* Achievements Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-4 border border-primary-100"
                  >
                    <div className="text-3xl mb-2">{achievement.icon}</div>
                    <h4 className="font-bold text-gray-900 mb-1 text-sm">
                      {achievement.title}
                    </h4>
                    <p className="text-xs text-gray-600">
                      {achievement.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
                {/* Overlay Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Trophy className="text-white" size={32} />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900 mb-1">
                        10+ Years
                      </div>
                      <div className="text-gray-600 font-medium">
                        Of Excellence
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl blur-2xl opacity-20 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision with Images */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl shadow-2xl"
            >
              {/* Background Image */}
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop"
                alt="Mission"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/95 to-secondary-600/95"></div>

              {/* Content */}
              <div className="relative p-12 text-white min-h-[400px] flex flex-col justify-end">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                  <Target size={32} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Our Mission
                </h3>
                <p className="text-lg text-white/95 leading-relaxed">
                  To empower businesses with innovative technology solutions
                  that drive growth, enhance efficiency, and create lasting
                  value. We strive to be more than just a service provider—we
                  aim to be a trusted partner in our clients' success journey.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative overflow-hidden rounded-3xl shadow-2xl"
            >
              {/* Background Image */}
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop"
                alt="Vision"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 to-gray-800/95"></div>

              {/* Content */}
              <div className="relative p-12 text-white min-h-[400px] flex flex-col justify-end">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                  <Globe size={32} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Our Vision
                </h3>
                <p className="text-lg text-white/95 leading-relaxed">
                  To be recognized globally as the leading software consulting
                  firm that consistently delivers exceptional value through
                  innovation, expertise, and unwavering commitment to client
                  success. We envision a future where technology seamlessly
                  transforms businesses.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 text-center transition-all duration-300 border border-gray-100 h-full">
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
                  ></div>

                  <div className="relative">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="inline-block mb-6"
                    >
                      <div
                        className={`w-20 h-20 ${value.iconBg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <div className={`value.iconBg`}>{value.icon}</div>
                      </div>
                    </motion.div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>

                {/* Floating Glow Effect */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${value.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
                ></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with Enhanced Cards */}
      <section id="team" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The talented people behind our success
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 border border-gray-100">
                  <div className="relative overflow-hidden h-80">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transform-gpu scale-105 transition-transform duration-700 ease-out"
                      style={{ objectPosition: member.name === 'Gourav Patidar' ? 'center 10%' : 'center 30%' }}
                    />
                    {/* Gradient Overlay on Hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${member.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-6`}
                    >
                      <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {member.description}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h4>
                    <p
                      className={`font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${member.gradient}`}
                    >
                      {member.role}
                    </p>
                    
                    {/* LinkedIn Button */}
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r ${member.gradient} text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300`}
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin size={20} />
                    </motion.a>
                  </div>
                </div>

                {/* Floating Glow Effect */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${member.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
                ></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative section-padding overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50/95 to-white/95 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&auto=format&fit=crop"
            alt="Timeline background"
            className="w-full h-full object-cover opacity-20"
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
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that shaped our story
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                {index !== milestones.length - 1 && (
                  <div className="absolute left-[23px] top-16 w-0.5 h-full bg-gradient-to-b from-primary-600 to-secondary-600"></div>
                )}

                {/* Timeline dot with icon */}
                <div className="absolute left-0 top-2 w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <div className="text-white">{milestone.icon}</div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 ml-8 border border-gray-100 transition-all duration-300 group">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                    <span className="inline-block px-6 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full text-sm font-bold shadow-md">
                      {milestone.year}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {milestone.title}
                  </h4>
                  <p className="text-gray-600 text-lg">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Width Image CTA */}
      <section className="relative h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&auto=format&fit=crop"
          alt="Join our team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-secondary-900/90 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-4">
                Join Our Success Story
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Whether you're looking for a technology partner or want to join
                our team, we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all inline-flex items-center gap-2"
                  >
                    Start a Project
                    <Rocket size={20} />
                  </motion.button>
                </Link>
                <Link href="/careers">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all"
                  >
                    View Careers
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}