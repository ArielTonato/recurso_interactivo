import React from 'react';

const BenefitsList = ({ benefits }) => {
  return (
    <ul className="list-disc list-inside text-gray-700">
      {benefits.map((benefit, index) => (
        <li key={index}>{benefit}</li>
      ))}
    </ul>
  );
};

export default BenefitsList;