import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-screen-lg mx-auto px-6 sm:px-12 lg:px-16 text-center">
        {/* Company Info */}
        <p className="text-xs text-gray-500 mb-4">
          © {new Date().getFullYear()} HFT Consultancy. All Rights Reserved.
        </p>

        {/* Terms of Service */}
        <div className="text-xs text-gray-500 leading-relaxed space-y-2">
          <h3 className="font-semibold text-white text-sm mb-2">Terms of Service</h3>
          <p>
            By accessing or using our services, you agree that HFT Consultancy specializes in high-frequency trading (HFT) research, algorithm design, system optimization, and trading strategy development. Deliverables become the client’s property upon full payment, though HFT Consultancy reserves the right to reuse non-client-specific tools. Clients are responsible for compliance with applicable laws and regulations. Both parties agree to protect proprietary and sensitive information during and after the engagement.
          </p>
          <p>
            While we strive for excellence, HFT Consultancy cannot guarantee specific financial outcomes and is not liable for any direct, indirect, or consequential losses arising from our services. Either party may terminate the engagement upon written notice, subject to the conditions outlined in the contract.
          </p>
        </div>

        {/* Contact Info */}
        <p className="text-xs text-gray-500 mt-6">
          For inquiries, contact us at{" "}
          <a href="mailto:support@hftconsultancy.com" className="text-blue-400 hover:underline">
            support@hftconsultancy.com
          </a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
