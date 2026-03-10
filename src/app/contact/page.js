'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, MapPin, Phone, Send, Clock, MessageSquare, CheckCircle2, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        throw new Error('Failed to send')
      }

      setSubmitMessage('Thank you for your message! We will get back to you within 24 hours.')
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' })
    } catch (error) {
      console.error(error)
      setSubmitMessage('Something went wrong. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: 'Visit Us',
      content: ['Block - 1, Mahendra Business Square', 'Bawadiya Kalan, Bhopal', 'Madhya Pradesh 462039, India'],
      gradient: 'from-blue-500 to-cyan-500',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-500'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email Us',
      content: ['hello@intellosoft.io'],
      gradient: 'from-purple-500 to-pink-500',
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-500'
    },
    {
      icon: <Phone size={24} />,
      title: 'Call Us',
      content: ['Available during business hours', 'Mon - Fri: 9:00 AM - 6:00 PM IST'],
      gradient: 'from-green-500 to-emerald-500',
      iconBg: 'bg-green-50',
      iconColor: 'text-green-500'
    },
    {
      icon: <Clock size={24} />,
      title: 'Business Hours',
      content: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 2:00 PM', 'Sunday: Closed'],
      gradient: 'from-orange-500 to-amber-500',
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-500'
    },
  ]

  const services = [
    'Custom Software Development',
    'Cloud Solutions',
    'Mobile App Development',
    'Data Analytics',
    'Cybersecurity',
    'IT Consulting',
    'Web Development',
    'DevOps',
    'Other'
  ]

  const benefits = [
    { icon: '🎯', text: 'Free consultation & project scoping' },
    { icon: '💰', text: 'No obligation, transparent quote' },
    { icon: '👨‍💻', text: 'Expert technical advice' },
    { icon: '🤝', text: 'Flexible engagement models' },
  ]

  return (
    <main className="pt-20">
      {/* Hero Section with Background Image */}
      <section className="relative section-padding overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-secondary-900/95 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&auto=format&fit=crop"
            alt="Contact background"
            className="w-full h-full object-cover"
          />
        </div>

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
                  <MessageSquare className="text-primary-600" size={40} />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Conversation</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                Have a project in mind? We'd love to hear from you. Get in touch and let's bring your vision to life.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl translate-x-8"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-x-8"></div>
      </section>

      {/* Contact Info Cards - Floating over hero */}
      <section className="relative -mt-16 z-30">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white rounded-2xl shadow-xl p-6 border border-gray-100 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-14 h-14 ${info.iconBg} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={info.iconColor}>
                      {info.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h4>
                  {info.content.map((line, idx) => (
                    <p key={idx} className="text-gray-600 text-sm leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100">
                <div className="mb-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    Send us a Message
                  </h3>
                  <p className="text-gray-600">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none transition-all"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none transition-all"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none transition-all resize-none"
                      placeholder="Tell us about your project and how we can help..."
                    ></textarea>
                  </div>

                  {submitMessage && (
                    <p className="text-sm text-center text-gray-700">{submitMessage}</p>
                  )}

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className="group relative w-full overflow-hidden bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    </span>

                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Right Column - Image & Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Hero Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-secondary-600/20 z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8 z-20">
                  <h4 className="text-white text-2xl font-bold mb-2">Let's Build Something Great</h4>
                  <p className="text-white/90">Together we can turn your vision into reality</p>
                </div>
              </div>

              {/* Quick Response Card */}
              <div className="relative bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl shadow-2xl p-8 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full translate-x-12 -translate-y-12"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -translate-x-12 translate-y-12"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles size={24} />
                    <h4 className="text-2xl font-bold">Quick Response Guarantee</h4>
                  </div>
                  <p className="mb-6 text-white/90">
                    We value your time and ensure rapid response to all inquiries.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        <Mail size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-white/80">Email Response</p>
                        <p className="font-semibold text-lg">Within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        <Phone size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-white/80">Phone Support</p>
                        <p className="font-semibold text-lg">Mon-Fri, 9AM-6PM IST</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits Card */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Why Reach Out?</h4>
                <div className="space-y-4">
                  {benefits.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <span className="text-gray-700 font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Find Us on the <span className="gradient-text">Map</span>
            </h2>
            <p className="text-xl text-gray-600">
              Located in the heart of Bhopal, Madhya Pradesh
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200"
          >
            {/* Google Maps Embed */}
            <div className="w-full h-[500px] relative">
              <iframe
                src="https://www.google.com/maps?q=Intellosoft%20Infotech%20Pvt.%20Ltd.,%20Block%20-%201,%20Mahendra%20Business%20Square,%20Bawadiya%20Kalan,%20Salaiya,%20Bhopal,%20Madhya%20Pradesh%20462039&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Intellosoft Office Location"
              ></iframe>
            </div>

            {/* Overlay Info Card */}
            <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-96 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center">
                  <MapPin className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Intellosoft</h4>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    Intellosoft Infotech Pvt. Ltd.<br />
                    Block - 1, Mahendra Business Square, Bawadiya Kalan, Salaiya<br />
                    Bhopal, Madhya Pradesh 462039
                  </p>
                  <a
                    href="https://maps.google.com/?q=Intellosoft+Infotech+Pvt.+Ltd.,+Block+-+1,+Mahendra+Business+Square,+Bawadiya+Kalan,+Salaiya,+Bhopal,+Madhya+Pradesh+462039"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm group"
                  >
                    Get Directions
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Location Details Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="text-white" size={24} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Easy to Locate</h4>
              <p className="text-gray-600 text-sm">
                Situated in a prime business district with excellent connectivity and ample parking space.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100"
            >
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                <Clock className="text-white" size={24} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Visit By Appointment</h4>
              <p className="text-gray-600 text-sm">
                Schedule a meeting to discuss your project and tour our modern office facilities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100"
            >
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Call Before Visit</h4>
              <p className="text-gray-600 text-sm">
                Contact us in advance to ensure our team is available to give you the best experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: 'What is your typical project timeline?',
                a: 'Project timelines vary based on complexity. A typical web application takes 2-4 months, while mobile apps take 4-6 months. We provide detailed timelines during consultation.'
              },
              {
                q: 'Do you work with startups?',
                a: 'Absolutely! We love working with startups and offer flexible engagement models and competitive pricing to help bring your vision to life.'
              },
              {
                q: 'What is your development process?',
                a: 'We follow agile methodology with regular sprints, daily standups, and continuous client involvement. This ensures transparency and timely delivery.'
              },
              {
                q: 'Do you provide ongoing support?',
                a: 'Yes, we offer comprehensive maintenance and support packages to ensure your software runs smoothly after launch.'
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl p-6 border border-gray-100 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                    <CheckCircle2 size={18} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">{faq.q}</h4>
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}