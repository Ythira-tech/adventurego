import React from 'react';
import './Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-page">
      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <h1>Privacy Policy</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="privacy-content">
        <div className="container">
          <div className="content-wrapper">
            <div className="privacy-section">
              <h2>1. WHO WE ARE</h2>
              <p>
                When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.

               An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it.
                The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.
              </p>
              <h2>MEDIA</h2>
              <p>
                If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
              </p>
              <h2>COOKIES</h2>
              <p>
              If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. 
              These cookies will last for one year.
              If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.
              When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.
              If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.
              </p>
              <h2>EMBEDDED CONTENT FROM OTHER WEBSITES</h2>
              <p>
                Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.

                These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.
              </p>
              <h2>HOW LONG WE RETAIN YOUR DATA</h2>
              <p>
                 If you request a password reset, your IP address will be included in the reset email.
                 If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.
                 For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.
              </p>
              <h2>WHAT RIGHTS YOU HAVE OVER YOUR DATA</h2>
              <p>
                If you have an account on this site or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
              </p>
            </div>

            <div className="privacy-section">
              <h2>2. HOW WE USE YOUR INFORMATION</h2>
              <h3>(a) To provide you with our services</h3>
              <p>
                We use your personal information to process and manage your booking, fulfill your travel arrangements, and deliver the services you have requested.
                 For example:
              </p>
              <ul>
                <li>To identify you and issue your ticket.</li>
                <li>To accommodate special requests such as dietary preferences.</li>
                <li>To inform our team or guides about specific service upgrades or inclusions.</li>
              </ul>
              <p>
                If you choose to withhold, restrict, or request the deletion of information necessary for us to deliver our services—or withdraw previously given consent for the use of sensitive data—we may be unable to provide some or all of our services.
                 In such cases, cancellation fees may apply.
              </p>
              <h3>(b) To communicate and keep you informed</h3>
              <p>
                We may contact you by email or telephone for administrative or operational reasons, such as:
              </p>
              <ul>
                <li>Sending booking and payment confirmations.</li>
                <li>Providing travel itineraries and updates.</li>
                <li>Notifying you about check-in availability or schedule changes.</li>
              </ul>
              <p>
                If you have opted in, we may also send marketing communications, promotional offers, and surveys to gather your feedback.
                 Your opinions help us enhance our services and customer experience.
              </p>
              <h3>(c) To enhance your online experience</h3>
              <p>
                Using cookies, analytics tools, and similar technologies, we may:
              </p>
              <ul>
                <li>Track website usage to improve content relevance.</li>
                <li>Evaluate and refine our promotions and advertisements.</li>
                <li>Conduct market research and trend analysis.</li>
                <li>Customize marketing messages and retarget campaigns, with your consent.</li>
              </ul>
              <p>
                You may be contacted with additional information about our products or services if you have agreed to receive such communications.
              </p>
              <h3>(d) To personalize and improve your experience</h3>
              <p>
                We use your interactions with us—such as communications, preferences, and website usage—to personalize our services and make our offers more relevant to you.
              </p>
            </div>

            <div className="privacy-section">
              <h2>3. OUR LEGAL BASIS FOR SHARING YOUR INFO</h2>
              <p>
                We process your personal information only when we have a valid legal basis to do so. This may include:
              </p>
              <ul>
                <li><strong>Contract performance</strong>— to manage your booking and deliver agreed services.</li>
                <li><strong>Legal obligation</strong>— to comply with laws or regulations.</li>
                <li><strong>Consent</strong>—when you have agreed to specific uses of your data.</li>
                <li><strong>Legitimate interest</strong>—to improve our services, personalize experiences, and prevent fraud.</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>4. DATA RETENTION</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected or to comply with legal obligations.
                For example, booking information is kept for the duration of your trip and for a period afterward to address any queries, complaints, or legal matters.
                 When data is no longer required, we securely delete or anonymize it.
              </p>
            </div>

            <div className="privacy-section">
              <h2>5. HOW WE PROTECT YOUR INFO</h2>
              <p>
                <strong>AdventureGo Hiking and Safaris</strong> employs physical, organizational, and technological safeguards to protect your personal information from unauthorized access, loss, misuse, or alteration.

                Key measures include
              </p>
              <ul>
                <li><strong>SSL Encryption:</strong> We use Secure Sockets Layer (SSL) technology for online transactions, ensuring secure data transfer between your browser and our server.</li>
                <li><strong>Access Control:</strong> Only authorized employees, trained in data privacy, have access to personal information. Any violation of our privacy standards is subject to disciplinary action.</li>
                <li><strong>Third-Party Compliance:</strong> When sharing information with trusted partners or service providers, we ensure they adhere to our privacy standards and allow audits for compliance.</li>
                <li><strong>Limited Disclosure:</strong> We will not share your information with external organizations unless required by law or explicitly consented to by you.</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>6. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us:
              </p>
              <div className="contact-info">
                <p><strong>Email:</strong> privacy@adventurego.co.ke</p>
                <p><strong>Phone:</strong> +254 711 480 765</p>
                <p><strong>Address:</strong> AdventureGo East Africa, Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;