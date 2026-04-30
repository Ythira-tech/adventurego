import React from 'react';
import './Terms.css';

const Terms = () => {
  return (
    <div className="terms-page">
      {/* Hero Section */}
      <section className="terms-hero-section">
        <div className="terms-hero-overlay">
          <div className="terms-container">
            <div className="terms-hero-content">
              <h1 className="terms-hero-title">Terms & Conditions</h1>
              <p className="terms-hero-subtitle">AdventureGo East Africa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="terms-content-section">
        <div className="terms-container">
          <div className="terms-content-wrapper">
            <div className="terms-section-card">
              <h2 className="terms-section-title">1. BOOKING WITH ADVENTUREGO</h2>
              <ul className="terms-section-list">
                <li>Once you have contacted us via email or phone and completed the booking form,
                   a 40% deposit per person is required within fourteen (14) days to secure your reservation.</li>
                <li>After receiving your deposit, we will issue a confirmation invoice and indicate when the remaining 
                  balance is due—typically two months before your departure date.</li>
                <li>For bookings made two weeks or less before the departure date, 
                  full payment is required immediately to confirm the trip.</li>
              </ul>
              <br></br>
              <h2 className="terms-section-title">2. PAYMENTS</h2>
              <ul className="terms-section-list">
                <li>M-pesa payments via our till number through the ‘Buy Goods and Services‘ option—5496587</li>
                <li>Bank Transfers
                    All bank transfer charges are the responsibility of the client. (s).</li>
                <li>Cash Payments
                    Cash payments are accepted in US dollars, euros, or Kenyan shillings at the prevailing exchange rate. 
                    Please contact our office in advance for guidance.
                 </li>
              </ul>
            <p><strong>Kindly note that only specific US dollar note series are accepted.</strong></p>
            </div>
            <br></br>
            <h2 className="terms-section-title">3. CANCELLATIONS BY YOU</h2>
            <p>Confirmed reservations that are canceled, shortened, or reduced in number of guests will attract cancellation or no-show charges as follows:
              <strong>90–60 days before arrival: 50% of total cost
              59–30 days before arrival: 75% of total cost
              Within 29 days to 48 hours before arrival: 100% of total cost
              No-show: 100% of total cost</strong>
            </p>
            <p>Deposits:</p>
            <ul className="terms-section-list">
                <li>Upon written confirmation, you will be invoiced for the agreed deposit (typically 20–30% of the total cost).</li>
                <li>For large payments, a second installment may be required.</li>
                <li>The balance must be fully settled at least eight (8) weeks before the trip and credited to our account.</li>
              </ul>
              <p><strong>For last-minute bookings</strong>, AdventureGo Hiking and Safaris reserves the right to request <strong>full payment upfront</strong> before the safari begins.
                 No trip will commence without <strong>full payment</strong>.</p>
                 <br></br>

            <div className="terms-section-card">
              <h2 className="terms-section-title">4. MODIFICATIONS BY YOU</h2>
              <p>If you wish to modify your itinerary, dates, or accommodations after confirming your tour package, a US$50 per person amendment fee applies up to one month before the trip.
                 Changes made after this period will be treated as cancellations and are subject to applicable cancellation fees.
                 </p>
                 <br></br>
              <h2 className="terms-section-title">5. CANCELLATIONS</h2>
              <p>Occasionally, we may need to adjust itineraries or arrangements due to factors beyond our control (e.g., accommodation availability, route conditions, or natural events).
                We promise that any such changes will still deliver a memorable and rewarding experience.
                If AdventureGo Hiking and Safaris must cancel a safari for reasons other than non-payment, you will have the option to:
                </p>
              <ul className="terms-section-list">
                <li>Rebook another safari (we will cover any price difference if applicable), or</li>
                <li>Receive a full refund, less any bank or transaction fees.</li>
              </ul>
              <br></br>
              <h2 className="terms-section-title">6. TRAVEL INSURANCE</h2>
              <p>All clients are strongly advised to purchase comprehensive travel insurance covering medical emergencies, evacuation, repatriation, and trip cancellation.
                </p>
                <br></br>
                <h2 className="terms-section-title">7. TRAVEL DOCUMENTATION</h2>
                <p>Clients must ensure they have:</p>
                <ul className="terms-section-list">
                <li>A valid passport (minimum 6 months before expiry)</li>
                <li>Any required visas or entry permits</li>
              </ul>
              <p>AdventureGo Hiking and Safaris is not responsible for any issues arising from invalid travel documents or visa delays.
                We cannot be held liable for:</p>
              <ul className="terms-section-list">
                <li>Changes in visa costs or regulations</li>
                <li>Documentation errors or delays caused by third parties</li>
              </ul>
            </div>
            <br></br>
            <div className="terms-section-card">
              <h2 className="terms-section-title">8. RESPONSIBILITY AND LIABILITY</h2>
              <p>AdventureGo Hiking and Safaris prioritizes your safety and comfort. However, travel and adventure activities inherently involve certain risks.
                 The company accepts no liability for:</p>
              <ul className="terms-section-list">
                <li>Illness, injury, infection, or death</li>
                <li>Loss or damage to personal property</li>
                <li>Delays or disruptions caused by third-party providers or natural events</li>
              </ul>
              <br></br>
              <h2 className="terms-section-title">9. ACTIVITIES AND ADVENTURE RISKS</h2>
              <p>By joining AdventureGo Hiking and Safaris activities, clients acknowledge and accept that:</p>
              <ul className="terms-section-list">
                <li>Outdoor activities carry inherent risks that may cause injury.</li>
                <li>They are physically and mentally fit to participate.</li>
                <li>They waive all legal claims against AdventureGo Hiking and Safaris, its employees, and partners for injuries, losses, or damages arising during participation.</li>
              </ul>
              <br></br>
              <h2 className="terms-section-title">10. CONDUCT AND BEHAVIOUR</h2>
              <p>Should any client behave in a manner that causes distress, harm, or danger to others, property, wildlife, or the environment, the tour leader reserves the right to terminate the individual’s participation.
                 In such cases:</p>
                 <ul className="terms-section-list">
                <li>Full cancellation fees will apply.</li>
                <li>No refunds or compensation will be issued.</li>
              </ul>
              <br></br>
              <h2 className="terms-section-title">11. COMPLAINTS</h2>
              <p>If any issue arises during your safari, please bring it to the attention of your guide or our local office immediately so we can resolve it promptly.

                  If unresolved, please submit your complaint in writing to our head office within 15 days after the safari.
                  While we cannot guarantee full satisfaction, every effort will be made to address concerns fairly.</p>
              <br></br>
              <h2 className="terms-section-title">12. SPECIAL REQUESTS</h2>
              <p>Please inform us of any special requests (e.g., dietary restrictions, birthdays, or anniversaries) at the time of booking or as early as possible.

                 If you require a non-English-speaking guide, kindly inform us in advance. These services are considered extras and may attract an additional cost.
                 </p>
                 <br></br>
                 <h2 className="terms-section-title">13. DRINKS</h2>
                 <p>AdventureGo Hiking and Safaris provides adequate bottled water per client per day during safari overnights.
                    Reusable bottles are supplied to reduce plastic waste.

                   Other beverages, including alcoholic drinks, are not included unless otherwise stated.</p>
                  <br></br>
            </div>

            <div className="terms-section-card">
              <h2 className="terms-section-title">14. VISA REQUIREMENTS</h2>
              <p>Most nationalities require a visa or Electronic Travel Authorization (ETA) to enter East African countries.
                 We recommend applying for an e-visa at least one month before your intended travel date.</p>
                 <br></br>
               <h2 className="terms-section-title">15. BAGGAGE ALLOWANCE</h2>
               <p>Domestic flights within East Africa limit luggage to 15 kg per person in soft bags or duffels (no hard cases).
                  Oversized bags may not fit in safari vehicles or small aircraft.
                  All baggage is carried at the owner’s risk, and luggage insurance is strongly recommended.</p>
                <br></br>
               <h2 className="terms-section-title">16. GENERAL LIABILITY</h2>
               <p>AdventureGo Hiking and Safaris acts as an agent for hotels, transport providers, and other service partners.
                  We are not liable for delays, damages, injuries, or itinerary changes caused by third-party suppliers or circumstances beyond our control.

                  Rates may change without notice due to adjustments in park fees, VAT, fuel costs, or other external factors.

                  Clients are responsible for taking malaria precautions and seeking medical advice prior to travel.

                  We may engage subcontractors for part or all of our services, without affecting the terms of our liability.</p>
                <br></br>
            </div>

            <div className="terms-section-card">
              <h2 className="terms-section-title">17. FORCE MAJEURE</h2>
              <p>AdventureGo Hiking and Safaris cannot accept liability or pay compensation for any loss or delay caused by events beyond our control, including war, terrorism, riots, natural disasters, epidemics, political instability, industrial action, or extreme weather conditions.
                </p>
                <br></br>
                <h2 className="terms-section-title">18. INSURANCE</h2>
                <p>Clients who choose to travel without insurance do so at their own risk.
                 AdventureGo Hiking and Safaris does not provide medical care beyond emergency evacuation assistance (e.g., Flying Doctors or RESCUE.CO).
                 Medical treatment thereafter is the responsibility of the client’s insurance provider.</p>
                 <br></br>
                 <h2 className="terms-section-title">19. CHILDREN POLICY</h2>
                 <p>Children under 12 years sharing a room with two adults pay 50–75% of the adult rate (varies by property).
                    Some lodges and camps do not accept children under 7 years for safety and tranquility reasons.
                    Child policies vary per accommodation and will be confirmed upon request.</p>
                 <br></br>
                 <h2 className="terms-section-title">20. ITINERARIES</h2>
                 <p>Due to high demand, accommodations are subject to availability at the time of booking.
                    AdventureGo Hiking and Safaris reserves the right to substitute hotels, lodges, or camps of similar or higher standard.

                    Occasional changes may occur due to road conditions, mechanical issues, or natural causes. We guarantee suitable alternatives of equal value when such adjustments are necessary.
                  </p>
                  <br></br>
            </div>

            <div className="terms-section-card">
              <h2 className="terms-section-title">21. INFORMATION ACCURACY</h2>
              <p>All itineraries, descriptions, and wildlife information are provided in good faith and based on the latest data available.
                 AdventureGo Hiking and Safaris cannot be held liable for omissions or errors caused by external factors such as natural events, political instability, or third-party inaccuracies.
              </p>
              <br></br>
            </div>

            <div className="terms-section-card">
              <h2 className="terms-section-title">22. RWANDA & UGANDA GORILLA PERMITS</h2>
              <p>Full payment is required at the time of booking for gorilla permits in Rwanda or Uganda.
                 These funds are non-refundable, as permits are secured directly with local authorities and subject to availability.
              </p>
              <br></br>
            </div>

            <div className="terms-acceptance-box">
              <h3 className="terms-acceptance-title">AGREEMENT</h3>
              <p className="terms-acceptance-text">
                By confirming your booking with AdventureGo Hiking and Safaris, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.

                Thank you for choosing AdventureGo Hiking and Safaris—where every adventure begins with passion.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;