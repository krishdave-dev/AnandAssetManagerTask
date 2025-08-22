import Image from "next/image";


export default function Footer() {
  return (
    <footer className="w-full bg-[#005E89] text-white font-nunito">
      <div className="px-4 lg:px-10 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Company Info and Socials */}
          <div className="lg:col-span-2">
            <div className=" flex items-center ">
              <Image 
                src="/logo.png"
                alt="Equitycase Logo"
                width={50}
                height={32}
                className="h-8 brightness-0 mb-2 invert object-contain"
              />
              <span className="text-xl mb-2 font-bold ">Equitycase</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Anand Asset Management, C-3 Haridaya,<br />
              Subhash Rd, opposite Laxmi Cinema,<br />
              Anand, Gujarat 388001
            </p>
            
            <div className="mb-4">
              <h4 className="font-nunito text-base font-bold mb-2">Find us on:</h4>
              <div className="flex items-center gap-3">
                <a href="#" aria-label="Facebook">
                  <Image src="/facebook.png" alt="Facebook" width={32} height={32} className="w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity" />
                </a>
                <a href="#" aria-label="Instagram">
                  <Image src="/instagram.png" alt="Instagram" width={32} height={32} className="w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity" />
                </a>
                <a href="#" aria-label="WhatsApp">
                  <Image src="/whatsapp.png" alt="WhatsApp" width={32} height={32} className="w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity" />
                </a>
                <a href="#" aria-label="YouTube">
                  <Image src="/youtube.png" alt="YouTube" width={32} height={32} className="w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity" />
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-nunito text-base font-bold mb-3">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:opacity-80 transition-opacity">About us</a></li>
              <li><a href="#" className="hover:opacity-80 transition-opacity">Managers</a></li>
              <li><a href="#" className="hover:opacity-80 transition-opacity">FAQ's</a></li>
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="font-nunito text-base font-bold mb-3">Products</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:opacity-80 transition-opacity">Strategies</a></li>
              <li><a href="#" className="hover:opacity-80 transition-opacity">Screeners</a></li>
              <li><a href="#" className="hover:opacity-80 transition-opacity">Back Test</a></li>
            </ul>
          </div>

          {/* Important Disclosures */}
          <div>
            <h4 className="font-nunito text-base font-bold mb-3">Important Disclosures</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:opacity-80 transition-opacity">Terms & Conditions</a></li>
              <li><a href="#" className="hover:opacity-80 transition-opacity">Disclaimers</a></li>
              <li><a href="#" className="hover:opacity-80 transition-opacity">Privacy Policy</a></li>
              <li><a href="#" className="hover:opacity-80 transition-opacity">Refund Policy</a></li>
            </ul>
          </div>

          {/* Contact Info - Sidewise */}
          <div>
            <h4 className="font-nunito text-base font-bold mb-3">Contact us</h4>
            <ul className="space-y-3 text-sm">
              <li>+91-9925511993</li>
              <li>info@profitbuddy.in</li>
            </ul>
          </div>
        </div>

        {/* Bottom Border and Copyright */}
        <div className="border-t border-white/20 mt-8 pt-6">
          <p className="text-center text-sm font-medium tracking-wider">
            © 2025 Khatavkar Technologies Private Limited. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}