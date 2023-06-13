import React from 'react';
import '../styles/scrollableCalendar.css';

const Weeks: React.FC = () => {
  return (
    <div>
      <ul className='weeks'>
        <li>Sun</li>
        <li>Mon</li>
        <li>Tue</li>
        <li>Wed</li>
        <li>Thu</li>
        <li>Fri</li>
        <li>Sat</li>
      </ul>
    </div>
  );
};

export default Weeks;
