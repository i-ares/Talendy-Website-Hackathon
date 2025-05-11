import React from 'react';
import './ClientLogos.css';
import Client1Logo from '../../assets/logos/client1.svg';
import Client2Logo from '../../assets/logos/client2.svg';
import Client3Logo from '../../assets/logos/client3.svg';
import Client4Logo from '../../assets/logos/client4.svg';
import Client5Logo from '../../assets/logos/client5.svg';
import Client6Logo from '../../assets/logos/client6.svg';

const ClientLogos = () => {
  const logos = [
    { id: 1, src: Client1Logo, alt: 'Client 1' },
    { id: 2, src: Client2Logo, alt: 'Client 2' },
    { id: 3, src: Client3Logo, alt: 'Client 3' },
    { id: 4, src: Client4Logo, alt: 'Client 4' },
    { id: 5, src: Client5Logo, alt: 'Client 5' },
    { id: 6, src: Client6Logo, alt: 'Client 6' },
  ];

  return (
    <div className="client-logos">
      {logos.map(logo => (
        <div key={logo.id} className="logo-item">
          <img src={logo.src} alt={logo.alt} />
        </div>
      ))}
    </div>
  );
};

export default ClientLogos;
