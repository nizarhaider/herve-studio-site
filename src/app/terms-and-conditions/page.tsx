export default function TermsAndConditionsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">Terms & Conditions</h1>
      <p className="mb-4">
        Welcome to <strong>Hervé Studio</strong>. By accessing or using our website, you agree to comply with the following
        terms and conditions. Please review them carefully before making a purchase or engaging our services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Use of the Website</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>You must be at least 18 years old to make a purchase.</li>
        <li>You are responsible for keeping your account credentials secure.</li>
        <li>You agree to provide accurate and current information when registering or checking out.</li>
        <li>Unauthorized use or modification of website content is strictly prohibited.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Products & Services</h2>
      <p className="mb-4">
        We make every effort to present accurate descriptions and visuals of our creative offerings. However, we do not
        guarantee that all details will be completely free from error. Prices and availability are subject to change
        without notice.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Orders & Payments</h2>
      <p className="mb-4">
        By placing an order, you confirm that all details provided are accurate and that you are authorized to use the
        selected payment method. We reserve the right to refuse or cancel orders in cases of suspected fraud or error.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Returns & Refunds</h2>
      <p className="mb-4">
        Returns and refunds are governed by our{' '}
        <a href="/refund-policy" className="text-blue-600 underline">
          Refund Policy
        </a>. Please review it for details on eligibility and process.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Intellectual Property</h2>
      <p className="mb-4">
        All content, designs, and materials on this website are the intellectual property of Hervé Studio or its partners.
        Reproduction or redistribution without permission is prohibited.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Limitation of Liability</h2>
      <p className="mb-4">
        Hervé Studio shall not be liable for any indirect, incidental, or consequential damages resulting from your use
        of the website or our products.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Amendments</h2>
      <p className="mb-4">
        We may update these Terms & Conditions periodically. Continued use of the website constitutes acceptance of the
        revised terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Contact Us</h2>
      <p>
        For questions regarding these Terms & Conditions, please email us at{' '}
        <a href="mailto:hello@hervestudio.com" className="text-blue-600 underline">
          hello@hervestudio.com
        </a>.
      </p>
    </main>
  );
}
