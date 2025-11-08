import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How Long Does It Take To Build A Website?",
      answer: "The timeline for building a website typically ranges from 2-8 weeks, depending on the complexity and features required. A simple website can be completed in 2-3 weeks, while more complex projects with custom features may take 6-8 weeks or more."
    },
    {
      question: "What Is The Cost Of Developing A Mobile App?",
      answer: "Mobile app development costs vary based on features, platforms (iOS, Android, or both), and complexity. Basic apps start from $10,000, while complex apps with advanced features can range from $50,000 to $150,000+. We provide detailed quotes after understanding your specific requirements."
    },
    {
      question: "Do You Provide Ongoing Support And Maintenance?",
      answer: "Yes, we offer comprehensive support and maintenance packages. This includes regular updates, security patches, bug fixes, performance optimization, and technical support. We provide different support tiers to match your needs and budget."
    },
    {
      question: "Can You Help With Digital Marketing And SEO?",
      answer: "Absolutely! We provide digital marketing services including SEO optimization, content strategy, social media marketing, and performance analytics. Our team ensures your website ranks well and reaches your target audience effectively."
    },
    {
      question: "What Technologies Do You Use?",
      answer: "We use modern, industry-standard technologies including React, Node.js, Python, React Native, Flutter for mobile apps, and cloud platforms like AWS and Google Cloud. We choose the best technology stack based on your project requirements."
    }
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