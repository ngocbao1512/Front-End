import React from 'react';
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
import { getInvoices } from "../data";

Contact.propTypes = {
    
};

function Contact(props) {
    let invoices = getInvoices();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem"
        }}
      >
        {invoices.map(invoice => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Contact;