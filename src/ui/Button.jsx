import React from 'react';
import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const className =
    'inline-block rounded-full border-none bg-yellow-300 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2  disabled:cursor-not-allowed sm:px-6 sm:py-4';

  const base =
    'inline-block text-sm rounded-full border-none bg-yellow-300 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2  disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' px-4 py-4 sm:px-6 sm:py-4',
    round: base + ' px-2.5 py-1 sm:px-3.5 sm:py-2 text-sm',
    small: base + ' py-2 text-xs md:px-5 md-py-2.5 text-xs',
    secondary:
      ' inline-block rounded-full border-2 border-stone-300  px-4 py-3 font-semibold uppercase tracking-wide text-stone-500 transition-colors duration-300 hover:bg-stone-400 hover:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2  disabled:cursor-not-allowed sm:px-6 sm:py-4',
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={styles[type]}
        disabled={disabled}
        to={to}
      >
        {children}
      </button>
    );
  }
  return (
    <button className={styles[type]} disabled={disabled} to={to}>
      {children}
    </button>
  );
}

export default Button;
