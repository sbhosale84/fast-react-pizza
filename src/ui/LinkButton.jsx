import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LinkButton({ children, to }) {
  const navigate = useNavigate();

  const className = 'text-sm text-blue-500 hover:text-blue-900';
  if (navigate === '-1') return;
  <button onClick={() => navigate(-1)}>{children}</button>;

  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
}

export default LinkButton;
