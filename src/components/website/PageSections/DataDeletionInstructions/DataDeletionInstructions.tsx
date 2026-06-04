"use client";
import React from "react";

export default function DataDeletionInstructions() {
    return (
        <div className="bg-[#fffff0] min-h-screen">
            {/* Header */}
            <div className="py-16 md:py-24 border-b border-gray-100">
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#2E266D] mb-4">
                        Data Deletion Instructions
                    </h1>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Limepitch by Lime Pitch Ltd
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-8 py-16 bg-white">
                <div className="max-w-4xl mx-auto space-y-10 text-[#5D665E] text-lg">

                    {/* Intro */}
                    <section>
                        <p className="leading-relaxed">
                            If you have connected your Facebook, Instagram, or other social media account to Limepitch and would like your personal data removed from our systems, please follow the instructions below.
                        </p>
                    </section>

                    {/* Request */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#2E266D] mb-4">
                            Request Account Deletion
                        </h2>

                        <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl">
                            <p className="mb-3">
                                To request deletion of your account and associated data, please email:
                            </p>

                            <a
                                href="mailto:privacy@limepitch.com"
                                className="text-[#5A50F5] font-semibold hover:underline"
                            >
                                privacy@limepitch.com
                            </a>

                            <p className="mt-4 font-medium">Include the following information:</p>

                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>Full name</li>
                                <li>Email address associated with your Limepitch account</li>
                                <li>Social media account connected to Limepitch (if applicable)</li>
                                <li>Subject line: &quot;Data Deletion Request&quot;</li>
                            </ul>
                        </div>
                    </section>

                    {/* What will be deleted */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#2E266D] mb-4">
                            What Data Will Be Deleted
                        </h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>User account information</li>
                            <li>Profile information</li>
                            <li>Yacht listings and associated content</li>
                            <li>Uploaded images and media</li>
                            <li>Connected social media account information</li>
                            <li>Platform activity associated with your account</li>
                        </ul>
                    </section>

                    {/* Retention */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#2E266D] mb-4">
                            Data That May Be Retained
                        </h2>

                        <p>
                            Certain information may be retained where required by law, regulatory obligations, fraud prevention, dispute resolution, or legitimate business record-keeping purposes.
                        </p>
                    </section>

                    {/* Processing time */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#2E266D] mb-4">
                            Processing Time
                        </h2>

                        <p>
                            Data deletion requests are typically processed within <span className="font-semibold">30 days</span> of verification.
                        </p>
                    </section>

                    {/* Contact */}
                    <section className="bg-gray-50 border border-gray-100 p-6 rounded-2xl">
                        <h2 className="text-2xl font-bold text-[#2E266D] mb-4">
                            Questions
                        </h2>

                        <p className="mb-2">
                            If you have any questions regarding your personal data or this process, please contact:
                        </p>

                        <p className="font-semibold">Lime Pitch Ltd</p>
                        <p>Email: info@limepitch.com</p>
                        <p>Website: www.limepitch.com</p>
                    </section>

                    {/* Footer note */}
                    <p className="text-sm text-gray-400 text-center pt-6">
                        Last Updated: 4 June 2026
                    </p>

                </div>
            </div>
        </div>
    );
}