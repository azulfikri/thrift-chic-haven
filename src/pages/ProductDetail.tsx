
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, X, Star, Heart, Minus, Plus, Truck, Shield, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const product = {
    id: 1,
    name: "Vintage Denim Jacket",
    price: "Rp 175,000",
    originalPrice: "Rp 350,000",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=600&fit=crop"
    ],
    rating: 4.8,
    reviews: 124,
    discount: "50%",
    description: "Jaket denim vintage berkualitas tinggi dengan desain klasik yang timeless. Terbuat dari bahan denim premium yang sudah mengalami proses washing untuk memberikan tekstur dan warna yang unik. Cocok untuk gaya kasual maupun semi-formal.",
    features: [
      "100% Cotton Denim",
      "Pre-washed untuk tekstur vintage",
      "Fit: Regular",
      "Warna: Light Blue",
      "Kondisi: Sangat Baik (95%)"
    ],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    category: "Jaket"
  };

  const relatedProducts = [
    {
      id: 2,
      name: "Oversized Flannel Shirt",
      price: "Rp 125,000",
      originalPrice: "Rp 250,000",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=300&fit=crop",
      rating: 4.6,
      reviews: 89
    },
    {
      id: 3,
      name: "Retro Band Tee",
      price: "Rp 85,000",
      originalPrice: "Rp 170,000",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
      rating: 4.7,
      reviews: 156
    },
    {
      id: 4,
      name: "High-Waist Mom Jeans",
      price: "Rp 195,000",
      originalPrice: "Rp 390,000",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop",
      rating: 4.9,
      reviews: 203
    }
  ];

  const addToCart = () => {
    toast({
      title: "Added to Cart!",
      description: `${product.name} (Size: ${selectedSize}) has been added to your cart.`,
    });
  };

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

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="text-sm text-gray-600">
          <Link to="/" className="hover:text-purple-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/" className="hover:text-purple-600">{product.category}</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>
      </div>

      {/* Product Detail */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="mb-4">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <img 
                  key={index}
                  src={image} 
                  alt={`${product.name} ${index + 1}`}
                  className={`w-full h-20 object-cover rounded-lg cursor-pointer transition-all duration-200 ${
                    selectedImage === index ? 'ring-2 ring-purple-600 opacity-100' : 'opacity-70 hover:opacity-100'
                  }`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="ml-2 text-gray-600">({product.reviews} reviews)</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center space-x-4 mb-2">
                <span className="text-3xl font-bold text-purple-600">{product.price}</span>
                <span className="text-xl text-gray-400 line-through">{product.originalPrice}</span>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  -{product.discount}
                </span>
              </div>
              <p className="text-green-600 font-semibold">✓ In Stock</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Size</h3>
              <div className="flex space-x-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-lg border-2 font-semibold transition-all duration-200 ${
                      selectedSize === size
                        ? 'border-purple-600 bg-purple-600 text-white'
                        : 'border-gray-300 text-gray-700 hover:border-purple-600'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Quantity</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 font-semibold">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex space-x-4">
                <Button 
                  onClick={addToCart}
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg font-semibold rounded-xl"
                >
                  Add to Cart
                </Button>
                <Button 
                  variant="outline" 
                  className="px-6 py-3 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-xl"
                >
                  <Heart className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Product Features */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Product Details</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Shipping Info */}
            <div className="border-t mt-6 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <Truck className="w-6 h-6 text-purple-600" />
                  <div>
                    <p className="font-semibold">Free Shipping</p>
                    <p className="text-sm text-gray-600">Order over Rp 200,000</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-purple-600" />
                  <div>
                    <p className="font-semibold">Secure Payment</p>
                    <p className="text-sm text-gray-600">100% protected</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <RotateCcw className="w-6 h-6 text-purple-600" />
                  <div>
                    <p className="font-semibold">Easy Returns</p>
                    <p className="text-sm text-gray-600">7 days return</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="container mx-auto px-4 py-12 border-t">
        <h2 className="text-2xl font-bold mb-6">Description</h2>
        <p className="text-gray-700 leading-relaxed text-lg">{product.description}</p>
      </div>

      {/* Related Products */}
      <div className="container mx-auto px-4 py-12 border-t">
        <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedProducts.map((relatedProduct) => (
            <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:scale-105">
                <div className="relative">
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{relatedProduct.name}</h3>
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{relatedProduct.rating}</span>
                      <span className="ml-1 text-sm text-gray-400">({relatedProduct.reviews})</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-purple-600">{relatedProduct.price}</span>
                    <span className="text-sm text-gray-400 line-through">{relatedProduct.originalPrice}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
