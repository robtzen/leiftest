import React from 'react';

interface Props {
  props?: any;
}

const Humidity: React.FC<Props> = props => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clip-path="url(#clip0)">
      <path d="M15.687 4.99C14.691 3.44768 13.521 2.025 12.2 0.75C8.535 4.212 4.867 9.855 4.867 15.913" stroke="#2B2F51" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.21201 21.441C8.59632 22.6357 10.3717 23.2796 12.2 23.25C13.1732 23.286 14.1433 23.1209 15.0498 22.7649C15.9563 22.4089 16.7795 21.8698 17.4682 21.1812C18.1568 20.4925 18.6959 19.6693 19.0519 18.7628C19.4079 17.8563 19.573 16.8862 19.537 15.913C19.4947 14.087 19.143 12.2814 18.497 10.573" stroke="#2B2F51" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M22.5 2.25L1.5 23.25" stroke="#2B2F51" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="24" height="24" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

export default Humidity;