import React from 'react';

import { unMask, mask as doMask } from './maskUtils';

interface MaskInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  mask: string;
}

function MaskInput({ mask, onChange, ...props }: MaskInputProps): JSX.Element {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (mask != null) {
      const originalValue = unMask(e.target.value);
      const maskedValue = doMask(originalValue, mask, {});
      e.target.value = maskedValue;
    }

    if (onChange) {
      onChange(e);
    }
  };

  return <input {...props} onChange={handleChange} />;
}

export default MaskInput;
