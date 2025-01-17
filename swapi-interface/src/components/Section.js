import React from 'react';
import Card from './Card';

const Section = ({ id, title }) => (
  <section id={id} className="mb-5">
    <h2 className="mb-3">{title}</h2>
    <div className="row">
      <div className="col-md-4">
        <Card title={`${title} Name`} text={`Details about the ${title.toLowerCase()} will appear here.`} />
      </div>
    </div>
  </section>
);

export default Section;
