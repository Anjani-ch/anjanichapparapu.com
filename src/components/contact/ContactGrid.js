import React from 'react';
import { faEnvelope, faMobileScreen } from '@fortawesome/free-solid-svg-icons';

import ContactBox from './ContactBox';

function ContactGrid() {
  return (
    <div className="grid gap-7 grid-cols-1 md:grid-cols-2 md:gap-14">
        <ContactBox icon={faEnvelope} name="Email" value="pranav.ch.12@outlook.com" />
        <ContactBox icon={faMobileScreen} name="Phone" value="+47 418 41 851" />
    </div>
  )
}

export default ContactGrid;