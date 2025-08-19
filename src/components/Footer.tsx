import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-[#005E89] text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                <span className="text-blue-600 font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold">Equityease</span>
            </div>
            <div className="text-sm text-blue-100 space-y-2 mb-6">
              <p>Anand Asset Management, C-3 Haridaya,</p>
              <p>Subhash Rd, opposite Laxmi Cinema,</p>
              <p>Anand, Gujarat 388001.</p>
              <p className="mt-4">Invest in us the-smartest way at equityease.com</p>
              <p className="mt-4">Get market insights and facts right in your inbox</p>
            </div>
            
            <div className="flex max-w-md h-12">
              <input 
                type="email" 
                placeholder="Email Address"
                className="flex-1 h-8 px-4 py-3 rounded-md bg-white text-gray-900 border-0 focus:ring-2 focus:ring-green-500 placeholder-gray-500"
              />
              <div className="px-2"></div>
              <Button className="h-8 px-6  bg-green-500 text-white rounded-r-md hover:bg-green-600 font-medium">
                Subscribe
              </Button>
            </div>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <div className="space-y-3 text-sm">
              <a href="#" className="block text-blue-100 hover:text-white transition-colors">Support</a>
              <a href="#" className="block text-blue-100 hover:text-white transition-colors">About us</a>
              <a href="#" className="block text-blue-100 hover:text-white transition-colors">FAQ&apos;s</a>
              <a href="#" className="block text-blue-100 hover:text-white transition-colors">Equitycase</a>
              <a href="#" className="block text-blue-100 hover:text-white transition-colors">Stocks</a>
              <a href="#" className="block text-blue-100 hover:text-white transition-colors">Strategies</a>
              <a href="#" className="block text-blue-100 hover:text-white transition-colors">Credits</a>
            </div>
          </div>

          {/* Right side: Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact us</h3>
            <div className="space-y-3 text-sm mb-6">
              <p className="text-blue-100">+91-9925511993</p>
              <p className="text-blue-100">info@profitbuddy.in</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-blue-100 text-sm">Find us on :</span>
              <div className="flex space-x-3">
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
