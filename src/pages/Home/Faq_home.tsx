import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services does Crew Techventure offer?",
      answer: "A: We're a full-service IT solutions provider offering web development, app development, digital marketing, and graphics design services. Whether you need a stunning website, a powerful mobile app, or a marketing campaign that converts, we've got you covered."
    },
    {
      question: "How long does it take to complete a project?",
      answer: "A: Mobile app development costs vary based on features, platforms (iOS, Android, or both), and complexity. Basic apps start from $10,000, while complex apps with advanced features can range from $50,000 to $150,000+. We provide detailed quotes after understanding your specific requirements."
    },
    {
      question: "Do you work with small businesses or only enterprises?",
      answer: "A: Both! We proudly serve small businesses, startups, and enterprises across India and beyond. Our solutions are scalable and customized to fit your business size, industry, and budget"
    },
    {
      question: "How much do your services cost?",
      answer: "A: Our pricing is competitive and transparent. Costs depend on your project requirements, but we're committed to being cost-effective. Contact us for a free quote tailored to your specific needs—no hidden fees, no surprises."
    },
    {
      question: "Can you help with ongoing support and maintenance?",
      answer: "A: Absolutely! We offer ongoing support, maintenance, and updates for all our services. Your success is our success, and we're here to support you long after your project launches."
    },
    {
      question: "Where is Crew Techventure located?",
      answer: "A: We're a digital-first company operating entirely online, which allows us to serve clients across India and globally. This also helps us keep costs low and deliver faster results"},
    {
      question: "How do I get started?",
      answer: "A: Easy! Just click any of our  Get Started buttons, fill out our contact form, or reach out directly via email or phone. We'll schedule a free consultation to discuss your goals and create a customized plan for your business." },
   
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full px-8 py-6 flex items-center justify-between transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white'
                    : 'bg-white text-gray-900 hover:bg-orange-50'
                }`}
              >
                <span className="text-left text-lg sm:text-xl font-semibold pr-4">
                  Q. {faq.question}
                </span>
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-white'
                    : 'bg-orange-500'
                }`}>
                  {activeIndex === index ? (
                    <Minus className="w-6 h-6 text-orange-500" />
                  ) : (
                    <Plus className="w-6 h-6 text-white" />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  activeIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 py-6 bg-white border-t border-gray-100">
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        {/* <div className="flex justify-center gap-3 mt-12">
          {faqs.map((_, index) => (
            <button
              key={index}
              onClick={() => toggleFAQ(index)}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === index
                  ? 'w-3 h-3 bg-orange-500'
                  : 'w-3 h-3 bg-gray-300 hover:bg-orange-300'
              }`}
              aria-label={`Go to question ${index + 1}`}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default FAQSection;