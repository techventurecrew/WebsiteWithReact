import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services does Crew Techventure offer?",
      answer: "We're a full-service IT solutions provider offering web development, app development, digital marketing, and graphics design services. Whether you need a stunning website, a powerful mobile app, or a marketing campaign that converts, we've got you covered."
    },
    {
      question: "How long does it take to complete a project?",
      answer: "Timeline depends on complexity. Basic websites can take 2-4 weeks, while complex mobile apps with advanced features can range from 3-6 months. We provide detailed project roadmaps after understanding your specific requirements."
    },
    {
      question: "Do you work with small businesses or only enterprises?",
      answer: "Both! We proudly serve small businesses, startups, and enterprises across India and beyond. Our solutions are scalable and customized to fit your business size, industry, and budget."
    },
    {
      question: "How much do your services cost?",
      answer: "Our pricing is competitive and transparent. Costs depend on your project requirements, but we're committed to being cost-effective. Contact us for a free quote tailored to your specific needs—no hidden fees, no surprises."
    },
    {
      question: "Can you help with ongoing support and maintenance?",
      answer: "Absolutely! We offer ongoing support, maintenance, and updates for all our services. Your success is our success, and we're here to support you long after your project launches."
    },
    {
      question: "Where is Crew Techventure located?",
      answer: "We're a digital-first company operating entirely online, which allows us to serve clients across India and globally. This also helps us keep costs low and deliver faster results."
    },
    {
      question: "How do I get started?",
      answer: "Easy! Just click any of our Get Started buttons, fill out our contact form, or reach out directly via email or phone. We'll schedule a free consultation to discuss your goals."
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* FAQ Items */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="space-y-6"
        >
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 }
                }}
                className="group rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-gray-100"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full px-8 py-7 flex items-center justify-between transition-all duration-500 ${
                    isOpen ? 'bg-orange-500 text-white' : 'bg-white text-gray-900'
                  }`}
                >
                  <span className="text-left text-lg md:text-xl font-bold pr-6">
                    {faq.question}
                  </span>
                  
                  {/* Animated Icon Circle */}
                  <motion.div 
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center shadow-inner ${
                      isOpen ? 'bg-white/20' : 'bg-orange-500'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-6 h-6 text-white" />
                    ) : (
                      <Plus className="w-6 h-6 text-white" />
                    )}
                  </motion.div>
                </button>

                {/* Animated Answer Box */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-8 pb-8 pt-2 bg-white">
                        <div className="h-px w-full bg-gray-100 mb-6" />
                        <p className="text-gray-600 text-lg leading-relaxed font-medium italic">
                          <span className="text-orange-500 font-bold not-italic mr-2">A:</span>
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;