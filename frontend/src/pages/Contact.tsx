import React, { useState } from "react";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiClock,
  HiChevronDown,
  HiChat,
  HiQuestionMarkCircle,
  HiPaperAirplane,
  HiCheckCircle,
} from "react-icons/hi";
import {
  FaLeaf,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaYoutube,
  FaHeadset,
} from "react-icons/fa";

// A reusable component for the FAQ accordion
const FaqAccordion = ({
  title,
  children,
  icon,
}: {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`bg-white rounded-xl border-2 transition-all duration-300 ${isOpen ? 'border-green-300 shadow-lg' : 'border-gray-100 hover:border-gray-200'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left p-5 focus:outline-none group"
      >
        <div className="flex items-center space-x-3">
          {icon && <span className="text-green-500">{icon}</span>}
          <span className={`font-semibold transition-colors ${isOpen ? 'text-green-600' : 'text-gray-900 group-hover:text-green-600'}`}>
            {title}
          </span>
        </div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-green-100 rotate-180' : 'bg-gray-100'}`}>
          <HiChevronDown className={`w-5 h-5 ${isOpen ? 'text-green-600' : 'text-gray-500'}`} />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5 px-5' : 'max-h-0'}`}>
        <div className="text-gray-600 leading-relaxed pl-11">
          {children}
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "customer-question",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        reason: "customer-question",
        message: "",
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: <HiMail className="w-7 h-7" />,
      title: "Email Us",
      description: "We'll respond within 24 hours",
      value: "support@agriconnect.com",
      link: "mailto:support@agriconnect.com",
      gradient: "from-green-500 to-emerald-500",
      bg: "from-green-50 to-emerald-50",
      border: "border-green-100 hover:border-green-300",
    },
    {
      icon: <HiPhone className="w-7 h-7" />,
      title: "Call Us",
      description: "Mon-Sat, 9AM-6PM IST",
      value: "+91 80783-90442",
      link: "tel:+918078390442",
      gradient: "from-blue-500 to-cyan-500",
      bg: "from-blue-50 to-cyan-50",
      border: "border-blue-100 hover:border-blue-300",
    },
    {
      icon: <FaWhatsapp className="w-7 h-7" />,
      title: "WhatsApp",
      description: "Quick responses guaranteed",
      value: "Chat with us",
      link: "https://wa.me/918078390442",
      gradient: "from-green-500 to-green-600",
      bg: "from-green-50 to-lime-50",
      border: "border-green-100 hover:border-green-300",
    },
    {
      icon: <HiLocationMarker className="w-7 h-7" />,
      title: "Visit Us",
      description: "Come say hello!",
      value: "Pala, Kottayam, Kerala",
      link: "#map",
      gradient: "from-purple-500 to-pink-500",
      bg: "from-purple-50 to-pink-50",
      border: "border-purple-100 hover:border-purple-300",
    },
  ];

  const socialLinks = [
    { icon: <FaFacebook className="w-6 h-6" />, href: "https://facebook.com", color: "hover:bg-blue-500", label: "Facebook" },
    { icon: <FaTwitter className="w-6 h-6" />, href: "https://twitter.com", color: "hover:bg-sky-500", label: "Twitter" },
    { icon: <FaInstagram className="w-6 h-6" />, href: "https://instagram.com", color: "hover:bg-pink-500", label: "Instagram" },
    { icon: <FaLinkedin className="w-6 h-6" />, href: "https://linkedin.com", color: "hover:bg-blue-600", label: "LinkedIn" },
    { icon: <FaYoutube className="w-6 h-6" />, href: "https://youtube.com", color: "hover:bg-red-500", label: "YouTube" },
    { icon: <FaWhatsapp className="w-6 h-6" />, href: "https://wa.me/918078390442", color: "hover:bg-green-500", label: "WhatsApp" },
  ];

  const faqs = [
    {
      question: "How is the produce delivered?",
      answer: "We partner with local delivery services to bring your order straight from the farm to your doorstep, typically within 24-48 hours of harvest to ensure maximum freshness.",
      icon: <HiQuestionMarkCircle className="w-5 h-5" />,
    },
    {
      question: "How can I become a partner farmer?",
      answer: "We're always looking for passionate local farmers to join our platform! Please select \"I'm a Farmer\" in the contact form and tell us about your farm. Our partnership team will get in touch within 48 hours.",
      icon: <HiQuestionMarkCircle className="w-5 h-5" />,
    },
    {
      question: "What makes your products different?",
      answer: "Our products come directly from local farmers, eliminating long supply chains. This means you get fresher, healthier food while supporting your local economy and sustainable farming practices.",
      icon: <HiQuestionMarkCircle className="w-5 h-5" />,
    },
    {
      question: "Can I visit the farms?",
      answer: "Yes! Many of our partner farmers welcome visitors. Contact us to arrange a farm visit and see firsthand where your food comes from. It's a great experience for families!",
      icon: <HiQuestionMarkCircle className="w-5 h-5" />,
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, UPI (GPay, PhonePe, Paytm), net banking, and cash on pickup for your convenience.",
      icon: <HiQuestionMarkCircle className="w-5 h-5" />,
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header Section */}
      <div className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-10"
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920"
            alt="Farm background"
          />
        </div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-yellow-300/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto text-center py-28 px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/30">
            <FaHeadset className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-semibold text-white">24/7 Support Available</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Get in <span className="text-yellow-300">Touch</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-green-50 max-w-3xl mx-auto leading-relaxed">
            Have questions? We'd love to hear from you. Whether you're a farmer, customer, or partner, we're here to help.
          </p>

          {/* Quick Action Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/918078390442"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href="tel:+918078390442"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105"
            >
              <HiPhone className="w-5 h-5" />
              <span>Call Us Now</span>
            </a>
          </div>
        </div>
      </div>

      {/* Contact Cards - Overlapping Hero */}
      <div className="relative -mt-16 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.link.startsWith("http") ? "_blank" : undefined}
                rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`bg-gradient-to-br ${method.bg} p-6 rounded-2xl border-2 ${method.border} transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-xl group`}
              >
                <div className={`bg-gradient-to-br ${method.gradient} w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>
                  {method.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{method.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{method.description}</p>
                <p className="text-sm font-semibold text-gray-700">{method.value}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form Section - Takes 3 columns */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden">
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>

              <div className="relative">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-10 h-10 rounded-xl flex items-center justify-center">
                    <HiChat className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Send Us a Message</h2>
                </div>
                <p className="text-gray-600 mb-8 ml-13">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-16">
                    <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                      <HiCheckCircle className="w-12 h-12 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">Thank you for reaching out. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="block w-full px-5 py-4 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 hover:border-gray-300"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="block w-full px-5 py-4 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 hover:border-gray-300"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full px-5 py-4 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 hover:border-gray-300"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="reason" className="block text-sm font-semibold text-gray-700 mb-2">
                        How can we help? *
                      </label>
                      <select
                        name="reason"
                        id="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        className="block w-full px-5 py-4 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 hover:border-gray-300 bg-white cursor-pointer"
                      >
                        <option value="customer-question">Customer Question</option>
                        <option value="farmer-inquiry">I'm a Farmer and want to join</option>
                        <option value="partnership">Partnership Inquiry</option>
                        <option value="feedback">Website Feedback</option>
                        <option value="support">Technical Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="block w-full px-5 py-4 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 hover:border-gray-300 resize-none"
                        placeholder="Tell us how we can help you..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center space-x-3 py-4 px-6 rounded-xl shadow-lg text-lg font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <HiPaperAirplane className="w-6 h-6 transform rotate-90" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            {/* Business Hours */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl border border-gray-200">
              <div className="flex items-center space-x-3 mb-5">
                <div className="bg-gradient-to-br from-orange-500 to-amber-500 w-10 h-10 rounded-xl flex items-center justify-center">
                  <HiClock className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Business Hours</h2>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-3 px-4 bg-white rounded-lg">
                  <span className="font-medium text-gray-700">Monday - Friday</span>
                  <span className="text-green-600 font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-white rounded-lg">
                  <span className="font-medium text-gray-700">Saturday</span>
                  <span className="text-green-600 font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-white rounded-lg">
                  <span className="font-medium text-gray-700">Sunday</span>
                  <span className="text-red-500 font-semibold">Closed</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-green-100">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Connect With Us</h2>
              <p className="text-gray-600 mb-5 text-sm">
                Follow us for updates, tips, and community stories!
              </p>
              <div className="grid grid-cols-6 gap-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center text-gray-600 ${social.color} hover:text-white`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-6 rounded-2xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
              <div className="relative">
                <FaHeadset className="w-10 h-10 mb-4 text-blue-200" />
                <h3 className="text-xl font-bold mb-2">Quick Response Promise</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  We aim to respond to all inquiries within 24 hours. For urgent matters, call us directly or use WhatsApp for instant support.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 mb-4">
              <HiQuestionMarkCircle className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-green-700">FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Questions
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Can't find what you're looking for? Feel free to contact us!
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FaqAccordion key={index} title={faq.question} icon={faq.icon}>
                <p>{faq.answer}</p>
              </FaqAccordion>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20" id="map">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Us on the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Map
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Visit our office in Pala, Kottayam, Kerala
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-green-100">
            {/* Map overlay card */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-xl z-10 max-w-xs">
              <div className="flex items-start space-x-3">
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <HiLocationMarker className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">AgriConnect HQ</h3>
                  <p className="text-sm text-gray-600 mt-1">Pala, Kottayam, Kerala 686575</p>
                  <a
                    href="https://www.google.com/maps/place/Pala,+Kerala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-green-600 font-semibold mt-2 hover:text-green-700"
                  >
                    Get Directions
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125565.04716796827!2d76.60688!3d9.7121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0878e7ec59bee3%3A0xb5c2e940f6cf46c5!2sPala%2C%20Kerala!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AgriConnect Office Location"
            ></iframe>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience Fresh?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of happy customers enjoying farm-fresh products delivered to their doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-green-600 font-bold rounded-xl hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <FaLeaf className="w-5 h-5" />
              <span>Browse Products</span>
            </a>
            <a
              href="https://wa.me/918078390442"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>Chat with Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
