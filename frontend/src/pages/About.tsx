import { Link } from "react-router-dom";
import {
  HiCheckCircle,
  HiUsers,
  HiHeart,
  HiLightningBolt,
  HiShieldCheck,
  HiCurrencyRupee,
  HiTruck,
  HiStar,
} from "react-icons/hi";
import { FaLeaf, FaTractor, FaHandshake, FaSeedling, FaQuoteLeft } from "react-icons/fa";
import { GiFarmer, GiWheat, GiFruitBowl } from "react-icons/gi";

const About = () => {
  const values = [
    {
      icon: <HiCheckCircle className="w-8 h-8" />,
      title: "Premium Quality",
      description:
        "We partner with farmers who share our passion for quality. Every product is grown and harvested with exceptional care.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <HiUsers className="w-8 h-8" />,
      title: "Strong Community",
      description:
        "Building stronger, healthier communities by connecting you directly with local farmers.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaLeaf className="w-8 h-8" />,
      title: "Sustainability First",
      description:
        "Supporting local agriculture reduces carbon footprint and promotes sustainable farming practices.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <HiShieldCheck className="w-8 h-8" />,
      title: "Trust & Transparency",
      description:
        "Know exactly where your food comes from. Full traceability from farm to your table.",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const stats = [
    { icon: <FaTractor className="w-6 h-6" />, count: "500+", label: "Active Farmers" },
    { icon: <GiFarmer className="w-6 h-6" />, count: "10K+", label: "Happy Customers" },
    { icon: <FaSeedling className="w-6 h-6" />, count: "80%", label: "Organic Products" },
    { icon: <HiHeart className="w-6 h-6" />, count: "95%", label: "Satisfaction Rate" },
  ];

  const howItWorks = [
    {
      step: "01",
      icon: <GiFarmer className="w-10 h-10" />,
      title: "Farmers List Products",
      description: "Local farmers upload their fresh produce with prices and availability",
      color: "bg-green-500",
    },
    {
      step: "02",
      icon: <GiFruitBowl className="w-10 h-10" />,
      title: "You Browse & Order",
      description: "Explore fresh products from nearby farms and add to your cart",
      color: "bg-blue-500",
    },
    {
      step: "03",
      icon: <HiCurrencyRupee className="w-10 h-10" />,
      title: "Secure Payment",
      description: "Pay securely online or choose cash on pickup",
      color: "bg-purple-500",
    },
    {
      step: "04",
      icon: <HiTruck className="w-10 h-10" />,
      title: "Fresh Pickup",
      description: "Collect your farm-fresh products directly from the farmer",
      color: "bg-orange-500",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Regular Customer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      quote: "The freshness of vegetables from AgriConnect is unmatched! I love knowing exactly which farm my food comes from.",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      role: "Partner Farmer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      quote: "AgriConnect helped me reach customers directly. My income has increased by 40% since joining the platform.",
      rating: 5,
    },
    {
      name: "Anita Menon",
      role: "Health Enthusiast",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      quote: "Finally, a platform that cares about both farmers and consumers. The organic produce is exceptional!",
      rating: 5,
    },
  ];

  const commitments = [
    {
      name: "Sustainable Farming",
      role: "Our Commitment",
      description: "Promoting eco-friendly practices that protect our environment",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400",
    },
    {
      name: "Fair Trade",
      role: "Farmer First",
      description: "Ensuring farmers receive fair compensation for their hard work",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400",
    },
    {
      name: "Fresh Delivery",
      role: "Quality Assured",
      description: "From farm to your table within 24 hours of harvest",
      image: "https://images.unsplash.com/photo-1595855759920-86582396756a?w=400",
    },
  ];

  const whyChooseUs = [
    {
      icon: <HiLightningBolt className="w-6 h-6" />,
      title: "Fast & Fresh",
      description: "Products reach you within 24 hours of harvest",
    },
    {
      icon: <HiCurrencyRupee className="w-6 h-6" />,
      title: "Fair Prices",
      description: "No middlemen means better prices for everyone",
    },
    {
      icon: <HiShieldCheck className="w-6 h-6" />,
      title: "Quality Guaranteed",
      description: "100% satisfaction or your money back",
    },
    {
      icon: <GiWheat className="w-6 h-6" />,
      title: "Verified Farms",
      description: "All partner farms are personally verified",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
            alt="Fresh vegetables on a farm"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/90 to-emerald-600/90"></div>
        </div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-yellow-300/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto py-28 px-4 sm:py-36 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/30">
            <FaLeaf className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-semibold text-white">Connecting Farms to Families Since 2024</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            About <span className="text-yellow-300">AgriConnect</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-green-50 max-w-4xl mx-auto leading-relaxed">
            Bridging the gap between farmers and consumers with technology, transparency, and trust.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative -mt-16 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-green-100 to-emerald-100 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 text-green-600 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{stat.count}</p>
                  <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 mb-6">
                <FaHandshake className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-green-700">Our Mission</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Freshness Meets{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                  Fairness
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                AgriConnect was born from a simple yet powerful idea: the food you eat should be fresh, healthy, and sourced from farmers who are treated fairly.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our platform bridges that gap with technology and transparency. We empower local farmers with direct market access while providing you with farm-fresh products.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors">
                    <div className="text-green-600 mt-0.5">{item.icon}</div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                      <p className="text-xs text-gray-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-green-200 to-emerald-200 rounded-3xl transform rotate-3"></div>
                <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-yellow-200 to-orange-200 rounded-3xl transform -rotate-3"></div>
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
                  alt="Farmer holding a crate of fresh apples"
                  className="relative rounded-3xl shadow-2xl w-full h-[450px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gradient-to-br from-gray-50 to-green-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 mb-6 shadow-md">
              <HiLightningBolt className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-gray-700">Simple Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Works
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From farm to your table in four simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="relative group">
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-green-300 to-transparent z-0"></div>
                )}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative z-10 group-hover:-translate-y-2">
                  <div className="absolute -top-4 -left-4 text-6xl font-bold text-green-100 group-hover:text-green-200 transition-colors">
                    {item.step}
                  </div>
                  <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform shadow-lg`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Values
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-green-200 transform hover:-translate-y-2"
              >
                <div
                  className={`bg-gradient-to-br ${value.gradient} w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <HiStar className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-semibold text-white">Customer Love</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What People <span className="text-yellow-300">Say</span>
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <FaQuoteLeft className="w-8 h-8 text-yellow-300/50 mb-4" />
                <p className="text-white text-lg mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white/30"
                  />
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-green-200 text-sm">{testimonial.role}</p>
                    <div className="flex space-x-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <HiStar key={i} className="w-4 h-4 text-yellow-300" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Commitments Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Commitments
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What we stand for and promise to deliver every single day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commitments.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="text-sm font-semibold text-green-400 mb-2 tracking-wide uppercase">
                    {item.role}
                  </p>
                  <h3 className="text-2xl font-bold mb-3">{item.name}</h3>
                  <p className="text-green-100 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="relative bg-gradient-to-r from-green-600 to-emerald-600 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join the Fresh Food{" "}
            <span className="text-yellow-300">Revolution</span>
          </h2>
          <p className="mt-4 text-xl text-green-50 max-w-3xl mx-auto leading-relaxed mb-10">
            Ready to taste the difference? Discover farm-fresh products, support local farmers, and become part of a sustainable food community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 border-2 border-white text-lg font-bold rounded-xl text-white bg-white/20 backdrop-blur-sm hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <FaLeaf className="w-5 h-5" />
              <span>Browse Products</span>
            </Link>
            <Link
              to="/farmers-area"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 text-lg font-bold rounded-xl bg-white text-green-600 hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <FaTractor className="w-5 h-5" />
              <span>For Farmers</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
