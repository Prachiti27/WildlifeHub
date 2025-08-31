import React from "react"
import { motion } from "framer-motion"
import ContactForm from "../components/ContactForm"
import contact_banner from "../assets/project_images/contact_pg_banner.jpg"

const ContactUs = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-[#074240] to-[#12A8A3] p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-6xl"
      >
        <img
          src={contact_banner}
          alt="Contact Banner"
          className="w-full h-64 md:h-96 object-cover rounded-t-lg"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-6xl bg-white rounded-b-lg shadow-lg flex flex-col md:flex-row overflow-hidden"
      >
        <div className="md:w-1/2 p-8 flex flex-col justify-center space-y-6">
          <h2 className="text-3xl font-bold text-[#074240]">Contact Us</h2>

          <div className="flex items-center">
            <span className="mr-3 text-2xl">✉️</span>
            <div>
              <h3 className="font-semibold text-[#074240]">Email</h3>
              <p>wildlifehub@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center">
            <span className="mr-3 text-2xl">📞</span>
            <div>
              <h3 className="font-semibold text-[#074240]">Phone</h3>
              <p>+91 9080706050</p>
            </div>
          </div>

          <div className="flex items-center">
            <span className="mr-3 text-2xl">📍</span>
            <div>
              <h3 className="font-semibold text-[#074240]">Address</h3>
              <p>Pune, Maharashtra</p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 p-8">
          <ContactForm />
        </div>
      </motion.div>
    </div>
  )
};

export default ContactUs
