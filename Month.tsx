import React from 'react';
import Weeks from './Weeks';
import Days from './Days';
import '../styles/scrollableCalendar.css';

interface MonthProps {
  month: string;
  count: number;
}

const Month: React.FC<MonthProps> = ({ month, count }) => {
  return (
    <div className='months'>
      <header>
        <p className='current_date'>{month} {new Date().getFullYear()}</p>
      </header>
      <div className='calender'>
        <Weeks />
        <Days count={count} />
      </div>
    </div>
  );
};

export default Month;
