export default function TermsConditions() {
  return (
    <div className="bg-white text-gray-800 max-w-(--max-width) mx-auto">
      {/* HEADER */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-(--max-width) px-4 py-16">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl">
            These terms govern your use of our website and services. By
            accessing our platform or enrolling in our programs, you agree to
            comply with these terms.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-(--max-width) px-4 py-16 space-y-12">
        {/* INTRO */}
        <div>
          <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
          <p className="text-gray-600 leading-relaxed">
            By accessing or using the services provided by 3A Learning Solutions
            India Pvt. Ltd., you agree to be bound by these Terms & Conditions.
            If you do not agree, please do not use our services.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h2 className="text-xl font-semibold mb-3">2. Services Offered</h2>
          <p className="text-gray-600 leading-relaxed">
            We provide professional training services including corporate
            training, individual learning programs, e-learning solutions, and
            certification-based courses. The content and structure of programs
            may be updated without prior notice.
          </p>
        </div>

        {/* ELIGIBILITY */}
        <div>
          <h2 className="text-xl font-semibold mb-3">3. User Eligibility</h2>
          <p className="text-gray-600 leading-relaxed">
            You must be at least 18 years old or have parental/guardian consent
            to use our services. By registering, you confirm that the
            information provided is accurate and complete.
          </p>
        </div>

        {/* PAYMENTS */}
        <div>
          <h2 className="text-xl font-semibold mb-3">4. Payments & Fees</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              All course fees must be paid in full before program access is
              granted
            </li>
            <li>Prices are subject to change without prior notice</li>
            <li>Applicable taxes may be added as per regulations</li>
            <li>Failure to complete payment may result in cancellation</li>
          </ul>
        </div>

        {/* REFUND */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            5. Refund & Cancellation
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Refunds are subject to our refund policy. Generally, once a course
            is enrolled or accessed, refunds may not be applicable. Cancellation
            requests must be made within the specified time frame before the
            program start date.
          </p>
        </div>

        {/* USER RESPONSIBILITY */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            6. User Responsibilities
          </h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Provide accurate registration details</li>
            <li>Maintain confidentiality of login credentials</li>
            <li>Not misuse course content or platform</li>
            <li>Not engage in unlawful or harmful activities</li>
          </ul>
        </div>

        {/* INTELLECTUAL PROPERTY */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            7. Intellectual Property Rights
          </h2>
          <p className="text-gray-600 leading-relaxed">
            All course materials, content, branding, and resources are the
            intellectual property of 3A Learning Solutions. Unauthorized
            reproduction, distribution, or sharing is strictly prohibited.
          </p>
        </div>

        {/* LIMITATION */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            8. Limitation of Liability
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We are not liable for any direct, indirect, incidental, or
            consequential damages arising from the use or inability to use our
            services. We do not guarantee job placement or specific outcomes
            from training programs.
          </p>
        </div>

        {/* THIRD PARTY */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            9. Third-Party Services
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our platform may include links or integrations with third-party
            services. We are not responsible for their content, policies, or
            practices.
          </p>
        </div>

        {/* TERMINATION */}
        <div>
          <h2 className="text-xl font-semibold mb-3">10. Termination</h2>
          <p className="text-gray-600 leading-relaxed">
            We reserve the right to suspend or terminate access to our services
            if a user violates these terms or engages in misconduct.
          </p>
        </div>

        {/* CHANGES */}
        <div>
          <h2 className="text-xl font-semibold mb-3">11. Changes to Terms</h2>
          <p className="text-gray-600 leading-relaxed">
            We may revise these Terms & Conditions at any time. Continued use of
            the website after changes implies acceptance of the updated terms.
          </p>
        </div>

        {/* GOVERNING LAW */}
        <div>
          <h2 className="text-xl font-semibold mb-3">12. Governing Law</h2>
          <p className="text-gray-600 leading-relaxed">
            These terms are governed by the laws of India. Any disputes shall be
            subject to the jurisdiction of courts in New Delhi.
          </p>
        </div>

        {/* CONTACT */}
        <div className="bg-gray-200 rounded-sm p-6 -mb-10">
          <h2 className="text-xl font-semibold mb-3">13. Contact Us</h2>
          <p className="text-gray-600">
            For any questions regarding these Terms & Conditions:
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
