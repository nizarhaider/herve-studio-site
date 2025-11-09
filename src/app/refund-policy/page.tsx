export default function RefundPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">Refund Policy</h1>
      <p className="mb-4">
        Thank you for shopping at <strong>Hervé Studio</strong>. We value your satisfaction and aim to ensure
        an exceptional experience with our creative products and services. If you’re not fully satisfied with your purchase,
        we’re here to help.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Returns</h2>
      <p className="mb-4">
        We accept returns within 14 days from the date of purchase. To qualify, the item must be unused, in its original
        packaging, and in the same condition you received it.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Refunds</h2>
      <p className="mb-4">
        Once we receive and inspect your return, we’ll notify you about your refund status. Approved refunds will be processed
        to your original payment method. Shipping costs are non-refundable.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Exchanges</h2>
      <p className="mb-4">
        Exchanges are available for eligible items (e.g., different sizes or variants). Please contact us within 14 days
        of delivery for exchange instructions.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Non-Returnable Items</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Gift cards</li>
        <li>Digital downloads</li>
        <li>Custom or personalized designs</li>
        <li>Perishable or consumable items</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Damaged or Defective Items</h2>
      <p className="mb-4">
        If your order arrives damaged or defective, please contact us immediately at{' '}
        <a href="mailto:support@hervestudio.com" className="text-blue-600 underline">
          support@hervestudio.com
        </a>. We’ll arrange a replacement or refund as soon as possible.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Processing Time</h2>
      <p className="mb-4">
        Refunds and exchanges are typically processed within 5–7 business days after we receive your return.
        Please note that your bank or card issuer may take additional time to post the refund.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Contact Us</h2>
      <p>
        For questions about our refund policy, reach out at{' '}
        <a href="mailto:support@hervestudio.com" className="text-blue-600 underline">
          support@hervestudio.com
        </a>.
      </p>
    </main>
  );
}
