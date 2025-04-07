import { getContactInfo } from "../../services/contacts";
import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "Privacy Policy - Law firm „Burkov, Radev, Djulgerska",
    description:
      "Learn more about our privacy policy and how we process your personal data.",
  };
}

export default async function PrivacyPolicy() {
  const contactInfo = await getContactInfo();

  return (
    <div className="container mx-auto p-6 max-w-5xl bg-white py-12">
      <h1 className="text-3xl font-bold mb-4 text-gray-800 border-b pb-2">
        Privacy Policy
      </h1>
      <p className="mb-4 text-gray-700">
        This Privacy Policy describes how "Law firm „Burkov, Radev, Djulgerska"
        ("We", "Our law firm") collects, uses, and protects the personal data of
        users of our website.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-900">
        1. Collection of personal data
      </h2>
      <p className="text-gray-700">
        We collect the following categories of personal data, provided
        voluntarily by you:
      </p>
      <ul className="list-disc pl-5 text-gray-700 mt-2">
        <li>Name and surname</li>
        <li>Email address (when subscribing to the newsletter)</li>
        <li>Phone number (when filling out the contact form)</li>
        <li>Messages and inquiries sent through the contact form</li>
        <li>IP address and website usage data (through cookies)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-900">
        2. Purposes of processing
      </h2>
      <p className="text-gray-700">
        We process your personal data for the following purposes:
      </p>
      <ul className="list-disc pl-5 text-gray-700 mt-2">
        <li>Responding to inquiries and providing legal services</li>
        <li>Sending newsletters and legal information</li>
        <li>Analyzing and improving user experience</li>
        <li>Complying with legal requirements</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-900">
        3. Storage and protection of personal data
      </h2>
      <p className="text-gray-700">
        Your personal data is stored on secure servers and access to it is
        limited to authorized personnel. We do not provide your data to third
        parties without your explicit consent, unless required by law.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-900">4. Cookies</h2>
      <p className="text-gray-700">
        Our website uses cookies to improve user experience. You can opt out or
        manage the use of cookies through your browser settings.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-900">
        5. Your rights
      </h2>
      <p className="text-gray-700">
        According to the General Data Protection Regulation (GDPR), you have the
        following права:
      </p>
      <ul className="list-disc pl-5 text-gray-700 mt-2">
        <li>Right to access your personal data</li>
        <li>Right to correct inaccurate data</li>
        <li>Right to be forgotten ("right to be forgotten")</li>
        <li>Right to object to processing</li>
        <li>Right to data portability</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-900">6. Contact</h2>
      <p className="text-gray-700">
        If you have questions about our privacy policy or wish to exercise your
        rights, please contact us at:
      </p>
      {contactInfo && (
        <p className="text-gray-700 mt-2">
          <Link
            href={`mailto:${contactInfo.email}`}
            className="hover:text-gray-900"
          >
            <strong>Email:</strong> {contactInfo.email} <br />
          </Link>
          <Link
            href={`tel:${contactInfo.phone_number}`}
            className="hover:text-gray-900"
          >
            <strong>Phone:</strong> {contactInfo.phone_number} <br />
          </Link>
          <strong>Address:</strong> {contactInfo.address}
        </p>
      )}
    </div>
  );
}
