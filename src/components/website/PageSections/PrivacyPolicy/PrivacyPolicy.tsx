import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#fffff0] min-h-screen">
      {/* Header Section */}
      <div className=" py-16 md:py-24 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2E266D] mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Effective Date: February 1, 2026
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container bg-white y-20 mx-auto px-4 md:px-8 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction */}
          <section>
            <p className="text-lg text-[#5D665E] leading-relaxed">
              This Privacy Policy describes how we collect, use, and protect information when you use our website.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-[#2E266D] mb-4 flex items-center">
              {/* <span className="w-8 h-8 bg-[#65A30D] text-white rounded-full flex items-center justify-center mr-3 text-sm">1</span> */}
              Information We Collect
            </h2>
            <div className="pl-11 space-y-4">
              <ul className="list-disc space-y-3 text-[#5D665E] text-lg">
                <li>Information you provide directly (such as when you fill out a form or contact us).</li>
                <li>Basic technical data (such as IP address, browser type, and pages visited).</li>
                <li>Cookies and similar technologies to improve user experience.</li>
              </ul>
            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-2xl font-bold text-[#2E266D] mb-4 flex items-center">
              {/* <span className="w-8 h-8 bg-[#65A30D] text-white rounded-full flex items-center justify-center mr-3 text-sm">2</span> */}
              How We Use Information
            </h2>
            <div className="pl-11 space-y-4">
              <p className="text-lg text-[#5D665E]">We use the information we collect to:</p>
              <ul className="list-disc space-y-3 text-[#5D665E] text-lg">
                <li>Provide and improve our services.</li>
                <li>Respond to inquiries or requests.</li>
                <li>Analyze site usage and trends.</li>
                <li>Comply with legal requirements.</li>
              </ul>
            </div>
          </section>

          {/* Sharing of Information */}
          <section>
            <h2 className="text-2xl font-bold text-[#2E266D] mb-4 flex items-center">
              {/* <span className="w-8 h-8 bg-[#65A30D] text-white rounded-full flex items-center justify-center mr-3 text-sm">3</span> */}
              Sharing of Information
            </h2>
            <div className="pl-11">
              <p className="text-lg text-[#5D665E] leading-relaxed">
                We do not sell or rent personal information to third parties. We may share limited information with trusted service providers who help us operate our website or comply with the law.
              </p>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-[#2E266D] mb-4 flex items-center">
              {/* <span className="w-8 h-8 bg-[#65A30D] text-white rounded-full flex items-center justify-center mr-3 text-sm">4</span> */}
              Data Security
            </h2>
            <div className="pl-11">
              <p className="text-lg text-[#5D665E] leading-relaxed">
                We use reasonable safeguards to protect your information. However, no method of transmission or storage is 100% secure.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-[#2E266D] mb-4 flex items-center">
              {/* <span className="w-8 h-8 bg-[#65A30D] text-white rounded-full flex items-center justify-center mr-3 text-sm">5</span> */}
              Your Rights
            </h2>
            <div className="pl-11 space-y-6">
              <p className="text-lg text-[#5D665E] leading-relaxed">
                Depending on your location, you may have rights to access, update, or delete your personal information. You can request data deletion through our Facebook app integration or contact us at the email below to exercise these rights.
              </p>
              <div className="bg-[#EAE9FF] p-6 rounded-2xl border border-[#D1CFFA]">
                <h3 className="text-lg font-semibold text-[#2E266D] mb-2 text-balance">Data Deletion</h3>
                <p className="text-[#5D665E]">
                  When you remove our app from your Facebook account or request data deletion, we will process your request and provide you with a confirmation code and status tracking URL. Data deletion requests are typically processed within 30 days.
                </p>
              </div>
            </div>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-2xl font-bold text-[#2E266D] mb-4 flex items-center">
              {/* <span className="w-8 h-8 bg-[#65A30D] text-white rounded-full flex items-center justify-center mr-3 text-sm">6</span> */}
              Third-Party Links
            </h2>
            <div className="pl-11">
              <p className="text-lg text-[#5D665E] leading-relaxed">
                Our website may contain links to other sites. We are not responsible for the privacy practices of those websites.
              </p>
            </div>
          </section>

          {/* Changes to This Policy */}
          <section>
            <h2 className="text-2xl font-bold text-[#2E266D] mb-4 flex items-center">
              {/* <span className="w-8 h-8 bg-[#65A30D] text-white rounded-full flex items-center justify-center mr-3 text-sm">7</span> */}
              Changes to This Policy
            </h2>
            <div className="pl-11">
              <p className="text-lg text-[#5D665E] leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date.
              </p>
            </div>
          </section>

          {/* Contact Us */}
          <section className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
            <h2 className="text-2xl font-bold text-[#2E266D] mb-6">Contact Us</h2>
            <p className="text-[#5D665E] text-lg mb-6">
              If you have questions about this Privacy Policy, you can contact us at:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:privacy@limepitch.com" 
                className="bg-[#5A50F5] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#483fd8] transition-all text-center"
              >
                Email: privacy@limepitch.com
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
