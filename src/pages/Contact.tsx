
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, X, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-purple-600" />,
      title: "Email",
      details: "info@thriftshop.com",
      description: "Send us an email anytime!"
    },
    {
      icon: <Phone className="w-6 h-6 text-purple-600" />,
      title: "Phone",
      details: "+62 812-3456-7890",
      description: "Mon-Fri from 8am to 5pm"
    },
    {
      icon: <MapPin className="w-6 h-6 text-purple-600" />,
      title: "Office",
      details: "Jakarta, Indonesia",
      description: "Come say hello at our office"
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-600" />,
      title: "Working Hours",
      details: "Mon - Fri: 8am - 5pm",
      description: "Weekend: 9am - 3pm"
    }
  ];

  const faqs = [
    {
      question: "Bagaimana cara mengetahui kondisi produk?",
      answer: "Setiap produk memiliki deskripsi detail tentang kondisi, termasuk persentase kondisi dan foto detail. Kami menggunakan skala 70%-95% untuk menunjukkan kondisi produk."
    },
    {
      question: "Apakah ada garansi untuk produk thrift?",
      answer: "Kami memberikan garansi 7 hari untuk pengembalian jika produk tidak sesuai dengan deskripsi. Produk harus dalam kondisi yang sama saat diterima."
    },
    {
      question: "Berapa lama waktu pengiriman?",
      answer: "Pengiriman dalam kota Jakarta 1-2 hari kerja, luar Jakarta 3-5 hari kerja. Kami menggunakan jasa ekspedisi terpercaya untuk memastikan produk sampai dengan aman."
    },
    {
      question: "Apakah bisa request produk tertentu?",
      answer: "Ya! Anda bisa mengirimkan request produk melalui form contact atau email. Kami akan mencari produk sesuai request Anda jika tersedia."
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
            Get in <span className="text-purple-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Punya pertanyaan atau butuh bantuan? Kami siap membantu Anda kapan saja!
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-lg font-semibold text-purple-600 mb-1">{info.details}</p>
                <p className="text-gray-600">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" required className="mt-1" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    required 
                    className="mt-1 min-h-[120px]" 
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg font-semibold rounded-xl"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Find Us</h2>
              <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center mb-6">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-sm text-gray-500">Jakarta, Indonesia</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Visit Our Store</h3>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-center">
                    <MapPin className="w-5 h-5 text-purple-600 mr-3" />
                    Jl. Fashion Street No. 123, Jakarta
                  </p>
                  <p className="flex items-center">
                    <Clock className="w-5 h-5 text-purple-600 mr-3" />
                    Mon - Fri: 8am - 5pm
                  </p>
                  <p className="flex items-center">
                    <Phone className="w-5 h-5 text-purple-600 mr-3" />
                    +62 812-3456-7890
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Temukan jawaban untuk pertanyaan yang sering ditanyakan
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
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

export default Contact;
