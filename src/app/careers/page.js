'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, Heart, TrendingUp, Coffee, Users, Award, MapPin, Clock, DollarSign, ArrowRight, X, Upload, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function Careers() {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPosition, setSelectedPosition] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState(null)
  const [fileName, setFileName] = useState('')

  const benefits = [
    {
      icon: <Heart size={40} />,
      title: 'Work-Life Balance',
      description: 'Flexible schedules and remote work options',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <TrendingUp size={40} />,
      title: 'Career Growth',
      description: 'Continuous learning and development programs',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <DollarSign size={40} />,
      title: 'Competitive Pay',
      description: 'Market-leading salaries and performance bonuses',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Coffee size={40} />,
      title: 'Great Culture',
      description: 'Collaborative environment with talented professionals',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      icon: <Award size={40} />,
      title: 'Recognition',
      description: 'Regular rewards and recognition programs',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Users size={40} />,
      title: 'Team Events',
      description: 'Regular team building and social activities',
      color: 'from-indigo-500 to-blue-500'
    },
  ]

  const openPositions = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Bhopal / Remote',
      type: 'Full-time',
      experience: '5-7 years',
      skills: ['React', 'Node.js', 'AWS', 'MongoDB'],
      description: 'Looking for an experienced full-stack developer to lead complex projects'
    },
  ]

  const perks = [
    'Health Insurance',
    'Paid Time Off',
    'Learning Budget',
    'Gym Membership',
    'Free Snacks',
    'Latest Equipment',
    'Team Outings',
    'Parental Leave',
  ]

  const handleApplyClick = (title) => {
    setSelectedPosition(title)
    setSubmitMessage(null)
    setFileName('')
    setIsModalOpen(true)
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage(null)

    const formData = new FormData(event.target)

    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        body: formData,
      })

      if (!res.ok) {
        throw new Error('Failed to submit')
      }

      event.target.reset()
      setIsModalOpen(false)
      router.push('/thank-you')
    } catch (error) {
      console.error(error)
      setSubmitMessage('Something went wrong. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-dark-900 mb-6">
                Join Our <span className="gradient-text">Amazing Team</span>
              </h1>
              <p className="text-xl text-dark-600 mb-8">
                Be part of a dynamic team that is shaping the future of technology.
                We're always looking for talented individuals who are passionate about innovation.
              </p>
              <motion.a
                href="#openings"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                View Open Positions
                <ArrowRight size={20} />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl blur-2xl opacity-20 transform scale-105"></div>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop"
                  alt="Team collaboration"
                  className="relative rounded-3xl shadow-2xl w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Why Work <span className="gradient-text">With Us?</span>
            </h2>
            <p className="section-subtitle">
              We offer more than just a job - it's a career with purpose
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center card-hover"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-block p-4 rounded-xl bg-gradient-to-br ${benefit.color} text-white mb-6`}
                >
                  {benefit.icon}
                </motion.div>
                <h4 className="text-xl font-bold text-dark-900 mb-3">{benefit.title}</h4>
                <p className="text-dark-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-6">
              Perks & <span className="gradient-text">Benefits</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                <p className="font-semibold text-dark-900">{perk}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Open <span className="gradient-text">Positions</span>
            </h2>
            <p className="section-subtitle">
              Find your next opportunity with us
            </p>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {openPositions.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:border-primary-200 card-hover"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-dark-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 text-dark-600">
                      <span className="flex items-center gap-1">
                        <Briefcase size={16} />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={16} />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-3 rounded-full font-semibold whitespace-nowrap"
                    onClick={() => handleApplyClick(job.title)}
                  >
                    Apply Now
                  </motion.button>
                </div>

                <p className="text-dark-600 mb-4">{job.description}</p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {job.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-dark-500">
                  <strong>Experience:</strong> {job.experience}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Don't See the Right Position?
            </h2>
            <p className="text-xl mb-8">
              We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all inline-flex items-center gap-2"
              onClick={() => handleApplyClick('General Application')}
            >
              Get in Touch
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Modern Application Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white rounded-3xl  shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-x-hidden overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r w-full from-primary-600 to-secondary-600 text-white p-8 rounded-l-3xl ">
                <button
                  type="button"
                  className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsModalOpen(false)}
                >
                  <X size={28} />
                </button>
                <h3 className="text-3xl font-bold mb-2">Apply for Position</h3>
                <p className="text-white/90 text-lg">{selectedPosition}</p>
              </div>

              {/* Form */}
              <form className="p-8 space-y-6" onSubmit={handleSubmit}>
                <input type="hidden" name="position" value={selectedPosition} />
                
                {/* Personal Info */}
                <div>
                  <h4 className="text-lg font-semibold text-dark-900 mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white flex items-center justify-center text-sm font-bold">1</div>
                    Personal Information
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-dark-700 mb-2">Full Name *</label>
                      <input
                        name="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark-700 mb-2">Email Address *</label>
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div>
                  <h4 className="text-lg font-semibold text-dark-900 mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white flex items-center justify-center text-sm font-bold">2</div>
                    Contact Details
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-dark-700 mb-2">Phone Number *</label>
                      <input
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark-700 mb-2">LinkedIn Profile</label>
                      <input
                        name="linkedin"
                        type="url"
                        placeholder="linkedin.com/in/username"
                        className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Professional */}
                <div>
                  <h4 className="text-lg font-semibold text-dark-900 mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white flex items-center justify-center text-sm font-bold">3</div>
                    Professional Links
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-dark-700 mb-2">GitHub Profile</label>
                      <input
                        name="github"
                        type="url"
                        placeholder="github.com/username"
                        className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark-700 mb-2">Portfolio Website</label>
                      <input
                        name="portfolio"
                        type="url"
                        placeholder="www.yourportfolio.com"
                        className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Resume Upload */}
                <div>
                  <h4 className="text-lg font-semibold text-dark-900 mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white flex items-center justify-center text-sm font-bold">4</div>
                    Upload Resume
                  </h4>
                  <div className="relative">
                    <input
                      name="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      required
                      onChange={handleFileChange}
                      className="hidden"
                      id="resume-upload"
                    />
                    <label
                      htmlFor="resume-upload"
                      className="flex items-center justify-center gap-3 w-full rounded-xl border-2 border-dashed border-gray-300 px-6 py-8 cursor-pointer hover:border-primary-500 hover:bg-primary-50 transition-all"
                    >
                      <Upload size={32} className="text-primary-600" />
                      <div className="text-center">
                        <p className="text-dark-700 font-semibold">
                          {fileName || 'Click to upload your resume'}
                        </p>
                        <p className="text-sm text-dark-500 mt-1">PDF, DOC, or DOCX (Max 5MB)</p>
                      </div>
                    </label>
                  </div>
                </div>

                {submitMessage && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-sm text-red-700 text-center">{submitMessage}</p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-300 text-dark-700 font-semibold hover:bg-gray-50 transition-colors"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-6 py-4 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold hover:shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Submitting...
                      </span>
                    ) : (
                      'Submit Application'
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}