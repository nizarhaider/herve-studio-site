export default function PrivacyPolicyPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
      <p className="mb-4">
        At <strong>Hervé Studio</strong>, we respect your privacy and are committed to protecting your personal information.
        This Privacy Policy explains how we collect, use, and safeguard your data when you interact with our website or services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Information We Collect</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Personal details such as name, email address, and contact information</li>
        <li>Billing and payment data processed securely by trusted providers</li>
        <li>Browsing data (IP address, device type, etc.) collected via cookies</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">How We Use Your Information</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>To process orders and provide customer support</li>
        <li>To improve our products, services, and website experience</li>
        <li>To communicate updates, promotions, or service notifications</li>
        <li>To ensure website security and prevent fraudulent activities</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Data Protection</h2>
      <p className="mb-4">
        We implement industry-standard encryption and security practices to protect your information.
        However, no system is completely secure, and we encourage you to use strong passwords and keep them confidential.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Cookies</h2>
      <p className="mb-4">
        Hervé Studio uses cookies to enhance user experience and analyze site traffic.
        You may disable cookies in your browser settings, though some features may not function properly as a result.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Policy Updates</h2>
      <p className="mb-4">
        We may update this policy periodically. The latest version will always be available on this page with the “last updated” date.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Contact Us</h2>
      <p>
        If you have questions about our Privacy Policy, please contact us at{' '}
        <a href="mailto:privacy@hervestudio.com" className="text-blue-600 underline">
          privacy@hervestudio.com
        </a>.
      </p>
    </section>
  );
}
