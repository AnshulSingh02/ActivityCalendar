import React, { useState } from 'react';
import '../styles/scrollableCalendar.css';
import '../styles/arrowStyles.css';

interface LeftArrowProps {
  onPreviousWeek: () => void;
}

const LeftArrow: React.FC<LeftArrowProps> = ({ onPreviousWeek }) => {
  return (
    <p onClick={onPreviousWeek}>
      <i className="arrow left"></i>
    </p>
  );
};

export default LeftArrow;
