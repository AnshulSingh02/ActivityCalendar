import React, { useState } from 'react';
import '../styles/scrollableCalendar.css';
import '../styles/arrowStyles.css';

interface RightArrowProps {
  onNextWeek: () => void;
}

const RightArrow: React.FC<RightArrowProps> = ({ onNextWeek }) => {
  return (
    <p onClick={onNextWeek}>
      <i className="arrow right"></i>
    </p>
  );
};

export default RightArrow;
