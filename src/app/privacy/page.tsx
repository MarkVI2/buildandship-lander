import React from 'react';

export const metadata = {
  title: 'Privacy Policy - MUCalSync',
  description: 'Privacy Policy for MUCalSync application',
};

export default function Privacy() {
  return (
    <div className="bg-gray-50 text-gray-900 pl-4">
      <div className="container">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">MUCalSync Privacy Policy</h1>
          <div className="text-gray-600">
            <p>Effective Date: 13th November 2024</p>
            <p>Last Updated: 18th November 2024</p>
          </div>
        </header>
        
        <section className="mb-6">
          <p className="mb-4">Welcome to MUCalSync. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, share, and protect your data when you use our services with Google Calendar and Google Authenticator.</p>
          <p className="mb-4">By using our services, you agree to the terms outlined in this Privacy Policy.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">1. Information We Collect</h2>
          <p className="mb-4">To provide our services through Google Calendar and Google Authenticator, we collect and process the following types of data:</p>
          <ul className="list-disc list-inside ml-4">
            <li className="mb-2">
              <strong>Google Calendar Data:</strong> With your permission, we may create, edit, and delete event details, times, dates, and reminders on your Google Calendar. We do not access personal notes or other sensitive information stored in your calendar events.
            </li>
            <li>
              <strong>Google Authenticator Data:</strong> We use Google Authenticator solely to verify your identity and ensure secure access to our services. We do not store any data from Google Authenticator on our servers, as all verification occurs directly through Google Authenticator. Google Authenticator is required to use Google Calendar services.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">The information we collect from Google Calendar and Google Authenticator is used only for the following purposes:</p>
          <ul className="list-disc list-inside ml-4">
            <li className="mb-2">
              <strong>Service Delivery:</strong> To provide scheduling, reminders, and other features integrated with Google Calendar as part of our service.
            </li>
            <li>
              <strong>Authentication and Security:</strong> To verify your identity using Google Authenticator and protect access to your account.
            </li>
          </ul>
          <p className="mt-4">We do not use any of this data for advertising, profiling, or any purpose other than what is specified here.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">3. Sharing of Information</h2>
          <p className="mb-4">We do not sell, rent, or otherwise share your data with third parties, except under the following circumstances:</p>
          <ul className="list-disc list-inside ml-4">
            <li className="mb-2">
              <strong>Service Providers:</strong> We may share limited information with trusted vendors who assist us in operating our services, such as hosting providers and technical support.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose information if required to do so by law or in response to a valid legal request, such as a subpoena or court order.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">4. Security of Your Data</h2>
          <p>We take the security of your data seriously and use encryption and other safeguards to protect your data from unauthorized access, alteration, or disclosure. However, no data transmission over the internet is completely secure, so we cannot guarantee absolute security.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">5. Your Rights and Choices</h2>
          <p className="mb-4">Depending on your location, you may have the right to:</p>
          <ul className="list-disc list-inside ml-4">
            <li className="mb-2">Access and Correct Information: You can review and update the personal information you provide to us</li>
            <li className="mb-2">Data Portability: Request a copy of your data in a structured, commonly used format</li>
            <li className="mb-2">Right to Object or Restrict Processing: Where applicable, you may have the right to object to or request restrictions on our processing of your data</li>
            <li className="mb-2">Revoke Access to Google Services: You can revoke our access to your Google Calendar and Google Authenticator data at any time via your Google Account settings</li>
            <li>Consent to Sync: Each time you click "Sync Calendar," you agree to the terms in this Privacy Policy</li>
          </ul>
          <p className="mt-4">We do not sell or disclose personal information to third parties for advertising or marketing purposes.</p>
          <p>To exercise any of these rights, please contact us using the information below.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">6. Data Retention</h2>
          <p className="mb-4">We retain your data only as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. You may request deletion of your data at any time.</p>
          <p className="mb-4">We do not store your tokens in any shape or form, all the generated tokens are flushed out on an hourly basis. By using our software, you give us consent to temporarily login into MUERP for the span until the tokens are flushed or a new login attempt is made from your account.</p>
          <p>We do not store the given login credentials anywhere and are flushed along with the tokens.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Legal Basis for Processing Personal Data (GDPR)</h2>
          <p className="mb-4">We process your personal data based on the following legal grounds:</p>
          <ul className="list-disc list-inside ml-4">
            <li className="mb-2">Consent: With your explicit consent when granting access to Google Calendar</li>
            <li>Legitimate Interest: To secure our platform and verify identity using Google Authenticator</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">7. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website and updating the effective date. We encourage you to review this Privacy Policy periodically.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">8. Contact Us</h2>
          <p>If you have questions about this Privacy Policy or our data practices, please contact us at:</p>
          <div className="mt-4 bg-gray-100 p-4 rounded">
            <p className="font-semibold">MUCalSync Contact Information</p>
            <p>Email: <a href="mailto:mark.atharv@gmail.com" className="text-blue-600 hover:underline">mark.atharv@gmail.com</a></p>
          </div>
        </section>
      </div>
    </div>
  );
} 