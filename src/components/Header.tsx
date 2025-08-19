export default function Header() {
  return (
    <header className="py-6 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          {/* Logo - Enhanced with better styling */}
          <div className="flex items-center gap-3 mr-8">
            <div className="w-14 h-14 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span className="text-white font-bold text-xl tracking-tight">A</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-semibold text-gray-800">Anand Assets</h1>
              <p className="text-sm text-gray-500">Investment Management</p>
            </div>
          </div>
          
          {/* Enhanced Navigation Bar */}
          <nav className="bg-[#E7F4F7] backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg px-8 py-4 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-8">
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition-all duration-500 ease-out relative group py-2 px-4 rounded-lg hover:bg-green-50/50">
                Investments
                <div className="absolute -bottom-1 left-1/2 right-1/2 h-0.5 bg-gradient-to-r from-green-400 to-green-600 rounded-full opacity-0 group-hover:opacity-100 group-hover:left-0 group-hover:right-0 transition-all duration-500 ease-out transform origin-center"></div>
              </a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition-all duration-500 ease-out relative group py-2 px-4 rounded-lg hover:bg-green-50/50">
                Managers
                <div className="absolute -bottom-1 left-1/2 right-1/2 h-0.5 bg-gradient-to-r from-green-400 to-green-600 rounded-full opacity-0 group-hover:opacity-100 group-hover:left-0 group-hover:right-0 transition-all duration-500 ease-out transform origin-center"></div>
              </a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition-all duration-500 ease-out relative group py-2 px-4 rounded-lg hover:bg-green-50/50">
                Strategies
                <div className="absolute -bottom-1 left-1/2 right-1/2 h-0.5 bg-gradient-to-r from-green-400 to-green-600 rounded-full opacity-0 group-hover:opacity-100 group-hover:left-0 group-hover:right-0 transition-all duration-500 ease-out transform origin-center"></div>
              </a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition-all duration-500 ease-out relative group py-2 px-4 rounded-lg hover:bg-green-50/50">
                About us
                <div className="absolute -bottom-1 left-1/2 right-1/2 h-0.5 bg-gradient-to-r from-green-400 to-green-600 rounded-full opacity-0 group-hover:opacity-100 group-hover:left-0 group-hover:right-0 transition-all duration-500 ease-out transform origin-center"></div>
              </a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition-all duration-500 ease-out relative group py-2 px-4 rounded-lg hover:bg-green-50/50">
                Account
                <div className="absolute -bottom-1 left-1/2 right-1/2 h-0.5 bg-gradient-to-r from-green-400 to-green-600 rounded-full opacity-0 group-hover:opacity-100 group-hover:left-0 group-hover:right-0 transition-all duration-500 ease-out transform origin-center"></div>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
