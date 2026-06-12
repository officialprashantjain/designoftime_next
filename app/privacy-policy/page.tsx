// @ts-nocheck
import Link from 'next/link';

export default function privacypolicyPage() {
  return (
    <>
      <div data-template="DefaultTemplate" data-title="Privacy Policy" className="template DefaultTemplate" data-menu-color="black">
        <style dangerouslySetInnerHTML={{__html: `
        :root {
          --bg: #f2f2f2;
          --surface: #fbfbfb;
          --text: #0f0f10;
          --muted: #5a5a5d;
          --line: #d7d7da;
          --black: #090909;
          --radius: 18px;
        }

        * {
          box-sizing: border-box;
        }

        .logo {
          display: none !important;
        }

        .privacy-page {
          background: radial-gradient(circle at 20% -10%, #ffffff 0%, var(--bg) 46%);
          color: var(--text);
          font-family: "Inter", "Avenir Next", "Helvetica Neue", Arial, sans-serif;
          line-height: 1.6;
          width: min(96vw, 1580px);
          margin: 0 auto;
          padding: 28px 0 0;
        }

        .hero {
          padding: 8px 6vw 58px;
        }

        .privacy-logo {
          display: block;
          width: clamp(58px, 5vw, 78px);
          height: auto;
          margin: 0 auto 42px;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 64px;
          align-items: start;
        }

        h1 {
          margin: 0 0 12px;
          font-size: clamp(58px, 8vw, 126px);
          line-height: 0.9;
          letter-spacing: -0.05em;
          text-transform: uppercase;
        }

        .company {
          margin: 0;
          font-size: clamp(20px, 2vw, 30px);
          font-weight: 700;
        }

        .effective-date {
          margin: 6px 0 0;
          color: var(--muted);
          font-size: 14px;
          letter-spacing: 0.02em;
        }

        .hero-copy {
          margin-top: 18px;
          font-size: clamp(16px, 1.2vw, 20px);
          color: #27272a;
        }

        .hero-copy ul {
          margin: 14px 0 14px 20px;
          padding: 0;
        }

        .content-shell {
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid #ececef;
          border-radius: 28px;
          backdrop-filter: blur(5px);
          margin: 0 3vw;
          padding: 30px 3.4vw 48px;
        }

        section {
          padding: 26px 0 28px;
          border-bottom: 1px solid var(--line);
        }

        section:last-of-type {
          border-bottom: 0;
        }

        h2 {
          margin: 0 0 10px;
          font-size: clamp(34px, 3.3vw, 62px);
          line-height: 0.95;
          letter-spacing: -0.03em;
        }

        h3 {
          margin: 24px 0 10px;
          font-size: 22px;
          letter-spacing: -0.01em;
        }

        p {
          margin: 0 0 14px;
          max-width: 110ch;
          font-size: clamp(16px, 1.1vw, 19px);
        }

        ul {
          margin: 0 0 12px 22px;
          padding: 0;
          max-width: 112ch;
        }

        li {
          margin: 0 0 8px;
          font-size: clamp(15px, 1.05vw, 18px);
        }

        .two-col-list {
          columns: 2;
          column-gap: 52px;
        }

        .contact-block {
          margin-top: 14px;
          font-weight: 600;
        }

        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.8s cubic-bezier(0.25, 0.1, 0.25, 1),
            transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1);
        }

        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .Footer {
          margin-top: 56px;
          display: block !important;
        }

        .Footer .container .grid .left {
          display: block !important;
        }

        .Footer .container .grid .left img {
          opacity: 1 !important;
        }

        .Footer .right .section.external .emailLink {
          pointer-events: auto !important;
        }

        @media (max-width: 1100px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }

        @media (max-width: 900px) {
          .two-col-list {
            columns: 1;
          }
        }

        @media (max-width: 768px) {
          .privacy-page {
            width: 100%;
          }

          .hero {
            padding: 18px 6vw 40px;
          }

          .content-shell {
            margin: 0;
            border-radius: 22px 22px 0 0;
            padding: 24px 6vw 38px;
          }

          .Footer {
            margin-top: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
        `}} />

        <main className="privacy-page container">
          <header className="hero reveal is-visible">
            <Link href="/" className="privacy-logo-link" style={{ display: 'block', width: 'fit-content', margin: '0 auto' }}>
              <img className="privacy-logo" src="https://d1hokgyh8522ma.cloudfront.net/assets/images/Logo_mono.svg" alt="Design Of Time logo" style={{ margin: '0' }} />
            </Link>
            <div className="hero-grid">
              <div>
                <h1>Global Privacy Statement</h1>
                <p className="company">Design Of Time Co.</p>
                <p className="effective-date">Effective Date: 1st April 2026</p>
              </div>
              <div className="hero-copy">
                <p>
                  Design Of Time Co. ("Design Of Time", "we", "our", or "us") respects your privacy
                  and is committed to protecting your personal data.
                </p>
                <p>
                  This Global Privacy Statement explains how we collect, use, store, and protect
                  personal information when you:
                </p>
                <ul>
                  <li>visit our website</li>
                  <li>contact us for business, support, partnerships, or general inquiries</li>
                  <li>apply for a role or internship</li>
                  <li>interact with us through professional communications and events</li>
                </ul>
                <p>
                  By using our website or engaging with us, you agree to the practices described in
                  this statement.
                </p>
              </div>
            </div>
          </header>

          <div className="content-shell">
            <section className="reveal is-visible">
              <h2>1. Who We Are</h2>
              <p>
                Design Of Time Co. is a creative and technology company offering services such as
                branding, marketing, web development, mobile app development, software solutions,
                consulting, and related business services.
              </p>
              <p>
                If you have any questions about this Privacy Statement or how your personal data is
                handled, you may contact us at:
              </p>
              <p className="contact-block">Email: hello@designoftime.co.in</p>
            </section>

            <section className="reveal is-visible">
              <h2>2. Personal Data We Collect</h2>
              <p>
                Depending on how you interact with us, we may collect the following categories of
                personal data:
              </p>
              <h3>a. Contact Information</h3>
              <ul className="two-col-list">
                <li>name</li>
                <li>email address</li>
                <li>phone number</li>
                <li>company name</li>
                <li>country or city</li>
                <li>any details you include when contacting us</li>
              </ul>
              <h3>b. Business and Inquiry Information</h3>
              <ul className="two-col-list">
                <li>project details</li>
                <li>service interests</li>
                <li>meeting notes</li>
                <li>correspondence shared through forms, email, or calls</li>
              </ul>
              <h3>c. Recruitment Information</h3>
              <ul className="two-col-list">
                <li>name</li>
                <li>phone number</li>
                <li>email address</li>
                <li>resume or CV</li>
                <li>portfolio links</li>
                <li>work history</li>
                <li>education details</li>
                <li>any information submitted as part of a job or internship application</li>
              </ul>
              <h3>d. Technical and Usage Data</h3>
              <ul className="two-col-list">
                <li>IP address</li>
                <li>browser type</li>
                <li>device type</li>
                <li>operating system</li>
                <li>pages visited</li>
                <li>time spent on the website</li>
                <li>referral source</li>
                <li>cookie and analytics data</li>
              </ul>
              <h3>e. Communication Preferences</h3>
              <ul>
                <li>whether you want to hear from us</li>
                <li>newsletter or marketing preferences</li>
                <li>preferences shared during your interactions with us</li>
              </ul>
            </section>

            <section className="reveal is-visible">
              <h2>3. How We Collect Your Data</h2>
              <p>We may collect personal data when:</p>
              <ul className="two-col-list">
                <li>you fill out a contact or inquiry form</li>
                <li>you email or call us</li>
                <li>you apply for a job or internship</li>
                <li>you subscribe to updates or newsletters</li>
                <li>you interact with our website through cookies or analytics tools</li>
                <li>you communicate with us during meetings, pitches, or events</li>
              </ul>
            </section>

            <section className="reveal is-visible">
              <h2>4. How We Use Your Data</h2>
              <p>
                We use personal data only where necessary and for legitimate business purposes,
                including to:
              </p>
              <ul className="two-col-list">
                <li>respond to inquiries and requests</li>
                <li>discuss potential projects or partnerships</li>
                <li>provide our services</li>
                <li>manage client and business relationships</li>
                <li>review job and internship applications</li>
                <li>improve our website, services, and communication</li>
                <li>send updates, marketing, or event-related communication where permitted</li>
                <li>maintain website security and prevent misuse</li>
                <li>comply with legal or regulatory obligations</li>
              </ul>
            </section>

            <section className="reveal is-visible">
              <h2>5. Legal Basis for Processing</h2>
              <p>
                Where applicable, we process personal data on one or more of the following legal bases:
              </p>
              <ul>
                <li>your consent</li>
                <li>performance of a contract</li>
                <li>steps requested before entering into a contract</li>
                <li>compliance with legal obligations</li>
                <li>
                  our legitimate business interests, provided your rights and interests do not override
                  them
                </li>
              </ul>
            </section>

            <section className="reveal is-visible">
              <h2>6. Cookies and Analytics</h2>
              <p>
                Our website may use cookies and similar technologies to improve functionality,
                understand usage, and enhance user experience.
              </p>
              <p>These may include:</p>
              <ul>
                <li>essential cookies required for the website to function</li>
                <li>analytics cookies to understand traffic and performance</li>
                <li>preference cookies to remember settings</li>
              </ul>
              <p>
                You can control or disable cookies through your browser settings. Please note that some
                website features may not work properly if certain cookies are disabled.
              </p>
            </section>

            <section className="reveal is-visible">
              <h2>7. Sharing of Personal Data</h2>
              <p>We do not sell your personal data.</p>
              <p>We may share your personal data only when necessary with:</p>
              <ul>
                <li>employees, team members, or affiliated personnel working on your request or project</li>
                <li>
                  service providers who help us operate our website, communications, recruitment,
                  analytics, or business systems
                </li>
                <li>legal, regulatory, or law enforcement authorities where required by law</li>
                <li>professional advisors such as accountants, lawyers, or consultants where necessary</li>
              </ul>
              <p>
                Any third party handling data on our behalf is expected to use it only for legitimate
                business purposes and with appropriate safeguards.
              </p>
            </section>

            <section className="reveal is-visible">
              <h2>8. International Data Transfers</h2>
              <p>
                Because we may work with clients, collaborators, platforms, and service providers
                across different countries, your personal data may be processed outside your country of
                residence.
              </p>
              <p>
                Where such transfers happen, we take reasonable steps to ensure your data is handled
                securely and in line with applicable privacy standards.
              </p>
            </section>

            <section className="reveal is-visible">
              <h2>9. Data Retention</h2>
              <p>
                We keep personal data only for as long as reasonably necessary for the purpose it was
                collected, including for:
              </p>
              <ul>
                <li>responding to inquiries</li>
                <li>delivering services</li>
                <li>evaluating applications</li>
                <li>maintaining records</li>
                <li>meeting legal, accounting, or compliance obligations</li>
              </ul>
              <p>
                When the data is no longer needed, we will delete, anonymize, or securely archive it as
                appropriate.
              </p>
            </section>

            <section className="reveal is-visible">
              <h2>10. Data Security</h2>
              <p>
                We take reasonable technical and organizational measures to protect personal data
                against unauthorized access, misuse, loss, disclosure, or alteration.
              </p>
              <p>
                However, no method of transmission over the internet or electronic storage is
                completely secure, so we cannot guarantee absolute security.
              </p>
            </section>

            <section className="reveal is-visible">
              <h2>11. Your Rights</h2>
              <p>Depending on your location and applicable law, you may have rights including:</p>
              <ul>
                <li>the right to access your personal data</li>
                <li>the right to correct inaccurate data</li>
                <li>the right to request deletion of your data</li>
                <li>the right to restrict or object to certain processing</li>
                <li>the right to withdraw consent where processing is based on consent</li>
                <li>the right to request a copy of your data, where applicable</li>
              </ul>
              <p>To exercise any of these rights, contact us at:</p>
              <p className="contact-block">Email: hello@designoftime.co.in</p>
              <p>We may need to verify your identity before acting on your request.</p>
            </section>

            <section className="reveal is-visible">
              <h2>12. Children's Privacy</h2>
              <p>
                Our website and services are not directed toward children. We do not knowingly collect
                personal data from children without appropriate legal basis or consent. If you believe a
                child has submitted personal data to us, please contact us and we will take appropriate
                steps.
              </p>
            </section>

            <section className="reveal is-visible">
              <h2>13. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites or platforms. We are not
                responsible for the privacy practices, content, or security of those third-party
                services. We encourage you to review their privacy policies separately.
              </p>
            </section>

            <section className="reveal is-visible">
              <h2>14. Changes to This Privacy Statement</h2>
              <p>
                We may update this Privacy Statement from time to time to reflect changes in our
                business, website, services, or legal requirements. The updated version will be posted
                on this page with a revised effective date.
              </p>
            </section>

            <section className="reveal is-visible">
              <h2>15. Contact Us</h2>
              <p>
                If you have any questions, requests, or concerns about this Privacy Statement or how we
                handle your personal data, please contact:
              </p>
              <p className="contact-block">
                Design Of Time Co.<br />
                Email: hello@designoftime.co.in
              </p>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
