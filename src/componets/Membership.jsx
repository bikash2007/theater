import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicketAlt, faCrown, faStar } from '@fortawesome/free-solid-svg-icons';

const Membership = () => {
  const membershipData = [
    {
      title: "Normal Membership",
      description:
        "Designed for those who enjoy regular theatre visits and wish to benefit from priority booking, discounts on tickets, and exclusive members-only events.",
      benefits: [
        "Priority booking privileges",
        "Special discounts on tickets",
        "Invitations to members-only events",
        "Pre-show meet-and-greet opportunities",
      ],
      price: "Rs 5,000/year",
      icon: <FontAwesomeIcon icon={faTicketAlt} size="2x" className="text-blue-500" />,
    },
    {
      title: "VIP Membership",
      description:
        "Tailored for dedicated patrons seeking premium experiences, including all normal membership benefits, VIP seating options, and complimentary show tickets.",
      benefits: [
        "All Normal Membership benefits",
        "VIP seating options",
        "Complimentary show tickets",
        "Access to special promotions and merchandise",
      ],
      price: "Rs 10,000/year",
      icon: <FontAwesomeIcon icon={faCrown} size="2x" className="text-yellow-500" />,
    },
    {
      title: "Lifetime Membership",
      description:
        "Created for the true theatre aficionado, offering unmatched access and perks such as free entry to all performances, recognition on the donor wall, and all VIP benefits.",
      benefits: [
        "All VIP Membership benefits",
        "Lifetime free entry to all performances",
        "Recognition on the donor wall",
        "Exclusive behind-the-scenes experiences",
      ],
      price: "Rs 50,000 (one-time)",
      icon: <FontAwesomeIcon icon={faStar} size="2x" className="text-purple-500" />,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 to-black text-white py-12 px-6">
      <h1 className="text-4xl font-bold text-center  text-transparent mb-3 bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
        Membership Tiers
      </h1>
      <h3 className='mb-10  w-full flex justify-center text-center font-semibold'>Join Hansadhwani Theatre and become a vital part of our vibrant cultural
landscape. Secure your membership today and enjoy unparalleled access to the magic of live
theatre!</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-12">
        {membershipData.map((membership, index) => (
          <div
            key={index}
            className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform"
          >
            <div className="p-8">
              <div className="flex items-center justify-center mb-6">
                {membership.icon}
              </div>
              <h2 className="text-2xl font-bold text-center mb-4 text-yellow-400">
                {membership.title}
              </h2>
              <p className="text-gray-300 text-center mb-6">{membership.description}</p>
              <ul className="mb-6 space-y-3">
                {membership.benefits.map((benefit, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-gray-200"
                  >
                    <span className="text-green-400">✔</span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-pink-500 to-yellow-500 text-center py-3 font-bold text-lg text-black">
                {membership.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Membership;
