import React from 'react'

const Contact = () => {
  return (
  <section  id="#contact" className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-32 py-20">
   <div className="container mx-auto flex flex-col items-center space-y-6 px-4">
        <h2 className="text-[40px] font-semibold text-transparent mb-5 bg-clip-text bg-gradient-to-r from-cyan-500 to-violet-500">Contact Information</h2>
        <p className="text-center max-w-2xl text-gray-300 text-lg leading-relaxed">
          I am open to new professional opportunities and collaborations.<br /> For any
          inquiries or additional information, please don't hesitate to reach out.
        </p>
        <div className="flex flex-col items-center space-y-1 text-xl font-medium">
          <p><span className="text-white">noskinaolga1@gmail.com</span></p>
          <p><span className="text-white">+38-066-830-88-25</span></p>
        </div>
      </div>
  </section>
  )
}

export default Contact
