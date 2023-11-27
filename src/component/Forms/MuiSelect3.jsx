import React from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { DatePicker, Space, Typography } from 'antd';
import { InputLabel } from '@mui/material';

dayjs.extend(customParseFormat);

const dateFormat = 'YYYY/MM/DD';

const MuiSelect3 = () => {
  // Function to set minimum date to tomorrow and maximum date to 10 days from now
  const disabledDate = (current) => {
    const today = dayjs();
    const tenDaysLater = today.add(10, 'day');
    return (
      current &&
      (current < today.startOf('day') || current.day() === 5 || current.day() === 6 || current > tenDaysLater)
    );
  };

  return (
    <Space direction="vertical" size={12}>
      <DatePicker
        defaultValue={dayjs().add(1, 'day')}
        format={dateFormat}
        disabledDate={disabledDate}
        showTime={false} // Disable time selection
        className='MuiSelect'

      />
    </Space>
  );
};

export default MuiSelect3;
