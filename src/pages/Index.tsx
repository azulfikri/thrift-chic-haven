
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, X, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const brands = [
    "Anello", "Fjallraven", "Montblanc", "Converse", "Neosack"
  ];

  const categories = [
    { name: "Kaos", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop", count: "120+ items" },
    { name: "Kemeja", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop", count: "85+ items" },
    { name: "Celana", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop", count: "95+ items" },
    { name: "Jaket", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop", count: "60+ items" }
  ];

  const products = [
    {
      id: 1,
      name: "Vintage Denim Jacket",
      price: "Rp 175,000",
      originalPrice: "Rp 350,000",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
      rating: 4.8,
      reviews: 124,
      discount: "50%"
    },
    {
      id: 2,
      name: "Oversized Flannel Shirt",
      price: "Rp 125,000",
      originalPrice: "Rp 250,000",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop",
      rating: 4.6,
      reviews: 89,
      discount: "50%"
    },
    {
      id: 3,
      name: "Retro Band Tee",
      price: "Rp 85,000",
      originalPrice: "Rp 170,000",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
      rating: 4.7,
      reviews: 156,
      discount: "50%"
    },
    {
      id: 4,
      name: "High-Waist Mom Jeans",
      price: "Rp 195,000",
      originalPrice: "Rp 390,000",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop",
      rating: 4.9,
      reviews: 203,
      discount: "50%"
    },
    {
      id: 5,
      name: "Leather Bomber Jacket",
      price: "Rp 275,000",
      originalPrice: "Rp 550,000",
      image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=500&h=500&fit=crop",
      rating: 4.5,
      reviews: 67,
      discount: "50%"
    },
    {
      id: 6,
      name: "Cropped Sweater",
      price: "Rp 145,000",
      originalPrice: "Rp 290,000",
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=500&fit=crop",
      rating: 4.4,
      reviews: 92,
      discount: "50%"
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b py-4">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">Categories</Link>
            <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">Shop</Link>
            <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">Sale</Link>
            <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">Features</Link>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-500 via-purple-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Discover The Best
                <br />
                <span className="text-yellow-300">Thrift Fashion</span> for You
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Koleksi fashion thrift berkualitas tinggi dengan harga terjangkau. 
                Temukan gaya unik Anda dengan produk preloved terbaik.
              </p>
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                Shop Now
              </Button>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&h=400&fit=crop" 
                  alt="Fashion 1" 
                  className="rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
                />
                <img 
                  src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=300&h=400&fit=crop" 
                  alt="Fashion 2" 
                  className="rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300 mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {brands.map((brand, index) => (
              <div key={index} className="text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Shop Popular Categories</h2>
            <Link to="/" className="text-purple-600 hover:text-purple-700 font-semibold">See All</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-gray-100 rounded-2xl p-8 text-center hover:bg-gradient-to-br hover:from-purple-100 hover:to-blue-100 transition-all duration-300 group-hover:scale-105">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-24 h-24 mx-auto mb-4 rounded-xl object-cover shadow-lg"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600">{category.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Featured Products</h2>
            <Link to="/" className="text-purple-600 hover:text-purple-700 font-semibold">View All</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:scale-105">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      -{product.discount}
                    </div>
                    <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 cursor-pointer" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                        <span className="ml-1 text-sm text-gray-400">({product.reviews})</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-purple-600">{product.price}</span>
                        <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                      </div>
                      <Button 
                        size="sm" 
                        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Updated with Latest Finds</h2>
          <p className="text-xl mb-8 text-purple-100">
            Dapatkan notifikasi produk thrift terbaru dan penawaran eksklusif
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <Button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full font-semibold">
              Subscribe
            </Button>
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

export default Index;
