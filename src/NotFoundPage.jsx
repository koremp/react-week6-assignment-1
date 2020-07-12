import React from 'react';

import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <>
      <p>404 Not Found</p>
      <p><Link to="/">Go to Home</Link></p>
    </>
  );
}
