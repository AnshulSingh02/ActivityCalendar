import React, { useState } from 'react';
import HorizontalDatePicker from './horizontal_calendar/HorizontalDatePicker';
// import './ styles/scrollableCalender.css'
import '../components/styles/scrollableCalendar.css'
import Month from './vertical_calendar/Month';

const ScrollableCalendar: React.FC = () => {
  const leapYear = (year: number): boolean => {
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
  };

  const monthsAndDays = [
    { month: 'January', count: 1 },
    { month: 'February', count: 2 },
    { month: 'March', count: 3 },
    { month: 'April', count: 4 },
    { month: 'May', count: 5 },
    { month: 'June', count: 6 },
    { month: 'July', count: 7 },
    { month: 'August', count: 8 },
    { month: 'September', count: 9 },
    { month: 'October', count: 10 },
    { month: 'November', count: 11 },
    { month: 'December', count: 12 }
  ];

  return (
    <>
      <div className='calenderWidth'>
        <HorizontalDatePicker />
      </div>
      <div className='verticalCalender'>
        {monthsAndDays.map((monthAndDay) => {
          return <Month month={monthAndDay.month} count={monthAndDay.count} />;
        })}
      </div>
    </>
  );
};

export default ScrollableCalendar;

