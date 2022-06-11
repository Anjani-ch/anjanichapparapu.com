import React from 'react';

import ContactGrid from '../components/contact/ContactGrid';

function ContactPage() {
  return (
    <section className="container my-10 mx-24 md:my-20">
      <h1 className="text-4xl text-center mb-9">Contact <span className="text-blue-600 dark:text-blue-500">Me</span></h1>
      <ContactGrid />
    </section>
  )
}

export default ContactPage;