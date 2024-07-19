import React from 'react';
import Card from './Card';

const WhatSetsUsApart = () => {
  return (
    <div className="card-container">
      <Card
        title="Quality Assurance"
        description="We adhere to stringent quality standards to ensure the reliability and safety of every product we offer."
      />
      <Card
        title="Customer-Centric Approach"
        description="Your satisfaction is our priority. We provide personalized service and support tailored to your specific requirements."
      />
      <Card
        title="Expertise and Experience"
        description="With years of industry experience, our team brings deep expertise and insight into the healthcare equipment landscape."
      />
    </div>
  );
};

export default WhatSetsUsApart;
