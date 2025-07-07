
import { Link } from "react-router-dom";
import { CheckCircle, Package, Clock, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const OrderSuccess = () => {
  const orderNumber = "TH" + Date.now().toString().slice(-6);
  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 7);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Success Animation */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
          <p className="text-gray-600">Thank you for your purchase</p>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="text-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Order #{orderNumber}</h2>
            <p className="text-sm text-gray-600">
              Estimated delivery: {estimatedDelivery.toLocaleDateString('id-ID', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          {/* Order Timeline */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Order Confirmed</p>
                <p className="text-sm text-gray-600">Just now</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <Package className="w-5 h-5 text-gray-400" />
              </div>
              <div>
                <p className="font-semibold text-gray-600">Processing</p>
                <p className="text-sm text-gray-500">1-2 business days</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <Truck className="w-5 h-5 text-gray-400" />
              </div>
              <div>
                <p className="font-semibold text-gray-600">Shipped</p>
                <p className="text-sm text-gray-500">3-5 business days</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-gray-400" />
              </div>
              <div>
                <p className="font-semibold text-gray-600">Delivered</p>
                <p className="text-sm text-gray-500">5-7 business days</p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h3 className="font-semibold text-gray-900 mb-4">Order Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span>Rp 425,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span>Rp 15,000</span>
            </div>
            <div className="border-t pt-3">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span className="text-purple-600">Rp 440,000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <Link to="/" className="block">
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl">
              Continue Shopping
            </Button>
          </Link>
          <Button 
            variant="outline" 
            className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white py-3 rounded-xl"
          >
            Track Order
          </Button>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            Questions about your order?{" "}
            <Link to="/contact" className="text-purple-600 hover:text-purple-700 font-semibold">
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
