import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#fffff0] min-h-screen">
      {/* Header Section */}
      <div className="py-16 md:py-24 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2E266D] mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Effective Date: 4 June 2026
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container bg-white mx-auto px-4 md:px-8 py-16">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-[#2E266D] mb-4">
              Introduction
            </h2>
            <p className="text-lg text-[#5D665E] leading-relaxed">
              This Privacy Policy explains how Lime Pitch Ltd (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses, stores, and protects personal information through the Limepitch platform.
              <br /><br />
              Limepitch is a yacht marketing and listing platform that enables users to create accounts, manage yacht listings, publish content, connect social media accounts, and promote yachts across digital channels.
              <br /><br />
              By using Limepitch, users agree to the collection and use of information in accordance with this Privacy Policy.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-[#2E266D] mb-4">
              Information We Collect
            </h2>

            <div className="space-y-6 text-[#5D665E] text-lg">

              <div>
                <h3 className="font-semibold text-[#2E266D] mb-2">
                  Account Information
                </h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Company name</li>
                  <li>Username and password</li>
                  <li>Contact details</li>
                  <li>Profile information</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-[#2E266D] mb-2">
                  Yacht Listing Information
                </h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Yacht descriptions</li>
                  <li>Images and videos</li>
                  <li>Specifications</li>
                  <li>Pricing information</li>
                  <li>Location information</li>
                  <li>Marketing content</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-[#2E266D] mb-2">
                  Social Media Integrations
                </h3>
                <p>
                  We may access data from Facebook, Instagram, or other platforms based on user permissions. This may include public profile data, Pages, Business Account info, publishing permissions, and insights.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#2E266D] mb-2">
                  Website Usage Information
                </h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Device information</li>
                  <li>Pages viewed</li>
                  <li>Usage statistics</li>
                  <li>Cookies and tracking data</li>
                </ul>
              </div>

            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-2xl font-bold text-[#2E266D] mb-4">
              How We Use Information
            </h2>

            <ul className="list-disc pl-6 space-y-2 text-[#5D665E] text-lg">
              <li>Create and manage user accounts</li>
              <li>Publish and manage yacht listings</li>
              <li>Enable social media publishing features</li>
              <li>Improve platform performance</li>
              <li>Respond to support requests</li>
              <li>Communicate updates</li>
              <li>Monitor security and prevent misuse</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          {/* Sharing Information */}
          <section>
            <h2 className="text-2xl font-bold text-[#2E266D] mb-4">
              Sharing Information
            </h2>

            <ul className="list-disc pl-6 space-y-2 text-[#5D665E] text-lg">
              <li>We do not sell personal information</li>
              <li>Shared with service providers</li>
              <li>Legal/regulatory compliance</li>
              <li>Platform security protection</li>
              <li>Social media integrations when required</li>
            </ul>
          </section>

          {/* Data Storage */}
          <section>
            <h2 className="text-2xl font-bold text-[#2E266D] mb-4">
              Data Storage and Security
            </h2>
            <p className="text-lg text-[#5D665E] leading-relaxed">
              We implement technical and organisational measures to protect your data. However, no system is 100% secure.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-[#2E266D] mb-4">
              Cookies and Analytics
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-[#5D665E] text-lg">
              <li>Remember user preferences</li>
              <li>Analyse usage</li>
              <li>Improve functionality</li>
              <li>Measure marketing performance</li>
            </ul>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-[#2E266D] mb-4">
              Data Retention
            </h2>
            <p className="text-lg text-[#5D665E]">
              We retain data only as long as necessary for service delivery, legal compliance, and dispute resolution.
            </p>
          </section>

          {/* Rights */}
          <section>
            <h2 className="text-2xl font-bold text-[#2E266D] mb-4">
              User Rights
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-[#5D665E] text-lg">
              <li>Access data</li>
              <li>Correct data</li>
              <li>Delete data</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>

            <div className="mt-6 bg-[#EAE9FF] p-6 rounded-2xl border border-[#D1CFFA]">
              <h3 className="font-semibold text-[#2E266D] mb-2">
                Data Deletion Requests
              </h3>
              <p className="text-[#5D665E]">
                Email: privacy@limepitch.com — We respond within a reasonable timeframe.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
            <h2 className="text-2xl font-bold text-[#2E266D] mb-4">
              Contact Information
            </h2>
            <p className="text-[#5D665E] text-lg">
              Lime Pitch Ltd<br />
              Email: info@limepitch.com<br />
              Website: www.limepitch.com
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;