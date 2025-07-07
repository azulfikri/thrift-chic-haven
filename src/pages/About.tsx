
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, X, Heart, Users, Leaf, Award } from "lucide-react";
import { useState } from "react";

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop",
      description: "Fashion enthusiast dengan 10+ tahun pengalaman di industri fashion sustainable."
    },
    {
      name: "Mike Chen",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
      description: "Expert dalam supply chain management dan quality control untuk produk thrift."
    },
    {
      name: "Lisa Wong",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      description: "Designer berpengalaman yang passionate tentang upcycling dan sustainable fashion."
    }
  ];

  const values = [
    {
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      title: "Sustainable Fashion",
      description: "Kami berkomitmen untuk mengurangi waste fashion dengan memberikan kehidupan kedua pada pakaian preloved berkualitas."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Quality First",
      description: "Setiap produk melalui quality control ketat untuk memastikan kualitas terbaik untuk pelanggan kami."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Community Driven",
      description: "Membangun komunitas fashion lovers yang peduli dengan lingkungan dan gaya hidup berkelanjutan."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-purple-600">
              Thrift<span className="text-orange-500">Shop</span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">Categories</Link>
              <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">Shop</Link>
              <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">Sale</Link>
              <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">Features</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-purple-600 transition-colors" />
              <User className="w-5 h-5 text-gray-600 cursor-pointer hover:text-purple-600 transition-colors" />
              <Link to="/cart">
                <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer hover:text-purple-600 transition-colors" />
              </Link>
              <button 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-purple-600">ThriftShop</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kami adalah platform e-commerce yang mengkhususkan diri dalam fashion thrift berkualitas tinggi. 
            Misi kami adalah membuat fashion sustainable lebih accessible dan stylish untuk semua orang.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  ThriftShop dimulai dari keprihatinan kami terhadap dampak negatif fast fashion pada lingkungan. 
                  Dengan melihat banyaknya pakaian berkualitas yang terbuang sia-sia, kami memutuskan untuk 
                  menciptakan platform yang menghubungkan fashion lovers dengan preloved items berkualitas.
                </p>
                <p>
                  Sejak diluncurkan, kami telah membantu ribuan pelanggan menemukan pakaian unik dengan harga 
                  terjangkau, sambil berkontribusi pada gerakan fashion yang lebih berkelanjutan. Setiap pembelian 
                  di ThriftShop adalah langkah kecil menuju masa depan fashion yang lebih ramah lingkungan.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=500&fit=crop" 
                alt="Thrift Store" 
                className="rounded-2xl shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=500&fit=crop" 
                alt="Sustainable Fashion" 
                className="rounded-2xl shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nilai-nilai yang memandu setiap keputusan dan tindakan kami dalam membangun platform ini.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tim passionate yang bekerja keras untuk memberikan pengalaman terbaik bagi Anda.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-48 h-48 object-cover rounded-2xl mx-auto shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-purple-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-purple-200">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25K+</div>
              <div className="text-purple-200">Products Sold</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-purple-200">Brands Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-purple-200">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="text-2xl font-bold text-purple-400 mb-4 block">
                Thrift<span className="text-orange-500">Shop</span>
              </Link>
              <p className="text-gray-400 mb-4">
                Platform terpercaya untuk fashion thrift berkualitas dengan harga terjangkau.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-700 transition-colors">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-700 transition-colors">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-700 transition-colors">
                  <span className="text-sm font-bold">i</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Categories</Link></li>
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Sale</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Shipping Info</Link></li>
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Returns</Link></li>
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Size Guide</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>📧 info@thriftshop.com</p>
                <p>📞 +62 812-3456-7890</p>
                <p>📍 Jakarta, Indonesia</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ThriftShop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
