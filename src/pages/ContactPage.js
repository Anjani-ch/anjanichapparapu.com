import React from 'react';

import ContactGrid from '../components/contact/ContactGrid';

function ContactPage() {
  return (
    <section className="container my-10 mx-24 md:my-20">
      <h1 className="text-4xl text-center mb-9">Contact <span className="text-blue-600 dark:text-blue-500">Me</span></h1>

      {/* <div className="grid gap-7 grid-cols-1 md:grid-cols-2 md:gap-14">
        <div className="text-center py-6 rounded-lg border border-slate-400 bg-white shadow-xl dark:border-0 dark:bg-gray-800">
          <FontAwesomeIcon className="text-5xl mb-3" icon={faEnvelope} />

          <h3 className="font-bold text-xl mb-1">Email</h3>

          <p className="text-gray-700 dark:text-gray-400">pranav.ch.12@outlook.com</p>
        </div>

        <div className="text-center py-6 rounded-lg border border-slate-400 bg-white shadow-xl dark:border-0 dark:bg-gray-800">
          <FontAwesomeIcon className="text-5xl mb-3" icon={faMobileScreen} />

          <h3 className="font-bold text-xl mb-1">Phone</h3>

          <p className="text-gray-700 dark:text-gray-400">+47 418 41 851</p>
        </div>
      </div> */}
      <ContactGrid />
    </section>
  )
}

export default ContactPage;