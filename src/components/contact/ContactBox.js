import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ContactBox({ icon, name, value }) {
  return (
    <div className="text-center py-6 rounded-lg border border-slate-400 bg-white shadow-xl dark:border-0 dark:bg-gray-800">
        <FontAwesomeIcon className="text-5xl mb-3" icon={icon} />

        <h3 className="font-bold text-xl mb-1">{name}</h3>

        <p className="text-gray-700 dark:text-gray-400">{value}</p>
    </div>
  )
}

export default ContactBox;