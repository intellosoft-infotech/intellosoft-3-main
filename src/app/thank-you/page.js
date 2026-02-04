'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Home, Briefcase, Sparkles } from 'lucide-react'

export default function ThankYou() {
  return (
    <main className="min-h-screen py-44 flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-300 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl mx-auto"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full blur-2xl"
              />
              <div className="relative bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full p-6">
                <CheckCircle size={80} className="text-white" strokeWidth={2} />
              </div>
            </div>
          </motion.div>

          {/* Main Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl p-10 md:p-14 text-center relative overflow-hidden"
          >
            {/* Decorative Elements */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full blur-2xl opacity-50"
            />
            <motion.div
              animate={{
                rotate: [360, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-secondary-100 to-primary-100 rounded-full blur-2xl opacity-50"
            />

            {/* Content */}
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              >
                <Sparkles size={16} />
                Application Submitted Successfully
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                <span className="gradient-text">Thank You</span> for Applying!
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-lg md:text-xl text-dark-600 mb-4 leading-relaxed"
              >
                We've received your application and our team is excited to review your profile.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-base text-dark-500 mb-10"
              >
                If your skills and experience match what we're looking for, we'll reach out to you within the next few days.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link href="/careers" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
                  >
                    <Briefcase size={20} />
                    View More Positions
                  </motion.button>
                </Link>

                <Link href="/" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-white border-2 border-gray-300 text-dark-700 px-8 py-4 rounded-full font-semibold hover:border-primary-500 hover:text-primary-600 transition-all inline-flex items-center justify-center gap-2"
                  >
                    <Home size={20} />
                    Back to Home
                  </motion.button>
                </Link>
              </motion.div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="mt-10 pt-8 border-t border-gray-200"
              >
                <p className="text-sm text-dark-500">
                  Have questions? Contact us at{' '}
                  <a href="mailto:careers@intellosoft.io" className="text-primary-600 hover:text-primary-700 font-semibold">
                    hello@intellosoft.io
                  </a>
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="grid grid-cols-3 gap-4 mt-8"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg p-4 text-center"
            >
              <p className="text-3xl font-bold gradient-text mb-1">200+</p>
              <p className="text-xs text-dark-600">Projects Done</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg p-4 text-center"
            >
              <p className="text-3xl font-bold gradient-text mb-1">98%</p>
              <p className="text-xs text-dark-600">Satisfaction</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg p-4 text-center"
            >
              <p className="text-3xl font-bold gradient-text mb-1">20+</p>
              <p className="text-xs text-dark-600">Team Members</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}