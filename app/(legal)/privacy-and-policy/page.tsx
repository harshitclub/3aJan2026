export default function PrivacyPolicy() {
  return (
    <div className="bg-white text-gray-800 max-w-(--max-width) mx-auto">
      {/* HEADER */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-(--max-width) px-4 py-16">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            Privacy Policy
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your personal information when you use our
            services.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-(--max-width) px-4 py-16 space-y-12">
        {/* INTRO */}
        <div>
          <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
          <p className="text-gray-600 leading-relaxed">
            At 3A Learning Solutions India Pvt. Ltd., we are committed to
            protecting your privacy. This Privacy Policy outlines how we
            collect, use, disclose, and safeguard your information when you
            visit our website or use our training services.
          </p>
        </div>

        {/* DATA COLLECTION */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            2. Information We Collect
          </h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Full name, email address, and phone number</li>
            <li>Professional and company details (if applicable)</li>
            <li>Course preferences and learning interests</li>
            <li>Payment and billing information (if applicable)</li>
            <li>Website usage data through cookies and analytics tools</li>
          </ul>
        </div>

        {/* USAGE */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>To provide and manage training programs</li>
            <li>To respond to inquiries and support requests</li>
            <li>To improve our website and services</li>
            <li>
              To send important updates, offers, or course-related information
            </li>
            <li>To comply with legal obligations</li>
          </ul>
        </div>

        {/* SHARING */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            4. Sharing of Information
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We do not sell or rent your personal data. However, we may share
            your information with trusted partners and service providers for
            operational purposes such as payment processing, hosting, and
            analytics — only when necessary.
          </p>
        </div>

        {/* DATA SECURITY */}
        <div>
          <h2 className="text-xl font-semibold mb-3">5. Data Security</h2>
          <p className="text-gray-600 leading-relaxed">
            We implement industry-standard security measures to protect your
            personal data. However, no system is completely secure, and we
            cannot guarantee absolute security.
          </p>
        </div>

        {/* COOKIES */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            6. Cookies & Tracking Technologies
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our website uses cookies to enhance user experience, analyze
            traffic, and improve functionality. You can control cookie settings
            through your browser.
          </p>
        </div>

        {/* RIGHTS */}
        <div>
          <h2 className="text-xl font-semibold mb-3">7. Your Rights</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Access or update your personal information</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
            <li>Withdraw consent where applicable</li>
          </ul>
        </div>

        {/* RETENTION */}
        <div>
          <h2 className="text-xl font-semibold mb-3">8. Data Retention</h2>
          <p className="text-gray-600 leading-relaxed">
            We retain your information only as long as necessary for the
            purposes outlined in this policy or as required by law.
          </p>
        </div>

        {/* THIRD PARTY */}
        <div>
          <h2 className="text-xl font-semibold mb-3">9. Third-Party Links</h2>
          <p className="text-gray-600 leading-relaxed">
            Our website may contain links to external websites. We are not
            responsible for the privacy practices of such third-party platforms.
          </p>
        </div>

        {/* UPDATES */}
        <div>
          <h2 className="text-xl font-semibold mb-3">10. Policy Updates</h2>
          <p className="text-gray-600 leading-relaxed">
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with an updated effective date.
          </p>
        </div>

        {/* CONTACT */}
        <div className="bg-gray-200 rounded-sm p-6 -mb-10">
          <h2 className="text-xl font-semibold mb-3">11. Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions regarding this Privacy Policy, you can
            contact us:
          </p>

          <div className="mt-3 text-sm text-gray-700 space-y-1">
            <p>
              <b>Email:</b> info@3alearningsolutions.com
            </p>
            <p>
              <b>Phone:</b> +91-XXXXXXXXXX
            </p>
            <p>
              <b>Address:</b> New Delhi, India
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
