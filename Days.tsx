import React from 'react';
import '../styles/scrollableCalendar.css';

interface DaysProps {
  count: number;
}

const Days: React.FC<DaysProps> = (props) => {
  let date = new Date();
  let currentYear = date.getFullYear();
  let currentMonth = date.getMonth();

  let firstDayOfMonth = new Date(currentYear, props.count - 1, 1).getDay();
  let lastDateOfMonth = new Date(currentYear, props.count, 0).getDate();
  let lastDayOfMonth = new Date(currentYear, props.count - 1, lastDateOfMonth).getDay();
  let lastDateOfLastMonth = new Date(currentYear, props.count - 1, 0).getDate();

  const days: JSX.Element[] = [];

  for (let i = firstDayOfMonth; i > 0; i--) {
    days.push(<li className='prevMonthDays'>{lastDateOfLastMonth - i + 1}</li>);
  }

  for (let i = 1; i <= lastDateOfMonth; i++) {
    let isToday = 'currentMonthDays';
    if (props.count === currentMonth + 1) {
      if (i === date.getDate()) {
        isToday = 'active';
      } else {
        isToday = 'currentMonthDays';
      }
    }
    days.push(<li className={isToday}>{i}</li>);
  }

  for (let i = lastDayOfMonth; i < 6; i++) {
    days.push(<li className='prevMonthDays'>{i - lastDayOfMonth + 1}</li>);
  }

  return (
    <div>
      <ul className='days'>
        {days}
      </ul>
    </div>
  );
};

export default Days;
