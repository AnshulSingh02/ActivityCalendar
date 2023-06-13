import React, { useState } from 'react';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import '../styles/scrollableCalendar.css';

const HorizontalDatePicker: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInCurrentMonth = (anyDateInMonth: Date) => {
    return new Date(
      anyDateInMonth.getFullYear(),
      anyDateInMonth.getMonth() + 1,
      0
    ).getDate();
  };

  const rearrangedDays = (getDay: number, days: string[]) => {
    let newDaysArr: string[] = [];
    let ptr1 = 0;
    let ptr2 = getDay;
    while (ptr2 < days.length) {
      newDaysArr.push(days[ptr2]);
      ptr2++;
    }
    while (ptr1 < getDay) {
      newDaysArr.push(days[ptr1]);
      ptr1++;
    }
    return newDaysArr;
  };

  const weeksDates = (date: number) => {
    let newWeeksArray: number[] = [];
    for (let i = 0; i < 7; i++) {
      newWeeksArray.push(date + i);
    }
    return newWeeksArray;
  };

  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const handleNextWeek = () => {
    const nextWeekDate = new Date(currentDate.getTime());
    nextWeekDate.setDate(nextWeekDate.getDate() + 7);
    setCurrentDate(nextWeekDate);
  };

  const handlePreviousWeek = () => {
    const previousWeekDate = new Date(currentDate.getTime());
    previousWeekDate.setDate(previousWeekDate.getDate() - 7);
    setCurrentDate(previousWeekDate);
  };

  return (
    <>
      <div className='horizontalCalenderHeader'>
        <p>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</p>
        <div>
          <LeftArrow onPreviousWeek={handlePreviousWeek} />
          <RightArrow onNextWeek={handleNextWeek} />
        </div>
      </div>
      <ul className='weeks'>
        {rearrangedDays(currentDate.getDay(), days).map((day) => {
          return <li key={day}>{day}</li>;
        })}
      </ul>
      <ul className='weekDates'>
        {weeksDates(currentDate.getDate()).map((date) => {
          return <li key={date}>{date}</li>;
        })}
      </ul>
    </>
  );
};

export default HorizontalDatePicker;
