import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { motion, AnimatePresence } from 'motion/react'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const Navigation = () => {
    const navItems = [
      { name: 'Home', href: '#home' },
      { name: 'Skills', href: '#skills' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' }
    ]

    const handleNavClick = (href) => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      setIsMobileMenuOpen(false)
    }

    return (
      <motion.ol
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="lg:flex lg:flex-row lg:justify-center lg:gap-5 lg:align-middle lg:ml-20 hidden sm:flex bg-transparent backdrop-blur-2xl px-2 py-1 rounded-[4px]"
      >
        {navItems.map((item, index) => (
          <li key={item.name}>
            <motion.a
              href={item.href}
              className="px-3 py-1 cursor-pointer rounded-[5px] text-[15px] font-semibold hover:bg-white/40 block transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(item.href)
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          </li>
        ))}
      </motion.ol>
    )
  }

  const SocialIcons = () => {
    const socialLinks = [
      { icon: faLinkedin, href: 'https://www.linkedin.com/in/bhavyajain05/', color: 'hover:text-blue-600' },
      { icon: faInstagram, href: 'https://www.instagram.com/bhavyajain_1708/', color: 'hover:text-pink-500' },
      { icon: faGithub, href: 'https://github.com/bhavyagithub05', color: 'hover:text-gray-700' },
    ]

    return (
      <div className="grid grid-cols-4 items-center gap-3 lg:gap-4">
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xl lg:text-2xl cursor-pointer transition-colors duration-200 ${social.color}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon icon={social.icon} />
          </motion.a>
        ))}
      </div>
    )
  }

  const MobileMenu = () => {
    const navItems = [
      { name: 'Home', href: '#home' },
      { name: 'Skills', href: '#skills' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' }
    ]

    const handleNavClick = (href) => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      setIsMobileMenuOpen(false)
    }

    return (
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-64 bg-white/95 backdrop-blur-xl z-50 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col h-full p-6">
              {/* Close button */}
              <div className="flex justify-end mb-8">
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FontAwesomeIcon icon={faTimes} className="text-2xl text-gray-700" />
                </motion.button>
              </div>

              {/* Navigation items */}
              <nav className="flex-1">
                <ul className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <a
                        href={item.href}
                        className="block px-4 py-3 text-lg font-semibold text-gray-800 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                        onClick={(e) => {
                          e.preventDefault()
                          handleNavClick(item.href)
                        }}
                      >
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Social icons in mobile menu */}
              <div className="pt-8 border-t border-gray-200">
                <div className="flex justify-center space-x-6">
                  <SocialIcons />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    )
  }

  const MobileMenuButton = () => (
    <motion.button
      className="lg:hidden p-2 rounded-lg hover:bg-white/40 transition-colors duration-200"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className="text-xl text-gray-700" />
    </motion.button>
  )

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="fixed left-0 right-0 top-0 z-50 backdrop-blur-xl bg-white/20 border-b  border-white/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-13">
            {/* Logo */}
            <motion.a
              href="#home"
              className="text-3xl font-semibold flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span className="text-[#947272]">B</span>
              <span className="text-[#102A43]">j</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-1 justify-center">
              <Navigation />
            </div>

            {/* Desktop Social Icons */}
            <div className="hidden lg:block">
              <SocialIcons />
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <MobileMenuButton />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <MobileMenu />

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}

export default Navbar