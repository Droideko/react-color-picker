import { FC, useCallback, useState } from 'react';

import DropdownWrapper from './components/DropdownWrapper';

import { IDropdownColor } from '../../../../interfaces/colorPicker';

const DropdownColor: FC<IDropdownColor> = ({ colors, updateHexColor }) => {
  const [ isOpen, updateIsOpen ] = useState(false);

  const toggleDropdown = useCallback(() => {
    updateIsOpen(isOpen => !isOpen);
  }, []);

  const handleChangeColor = useCallback((value) => {
    updateHexColor(value);
    toggleDropdown();
  }, [updateHexColor, toggleDropdown]);

  return (
    <div className='dropdown-color'>
      <div className='dropdown-color-toggle' onClick={toggleDropdown}>
        <div className='dropdown-color__triangle'></div>
      </div>
      
      <DropdownWrapper
        colors={colors}
        isOpen={isOpen} 
        toggleDropdown={toggleDropdown}
        handleChangeColor={handleChangeColor}
      />
    </div>
  )
};

export default DropdownColor;