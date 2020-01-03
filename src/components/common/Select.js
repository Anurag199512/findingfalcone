import React from 'react';
import shortid from 'shortid';

const Select = ({ styles, name, options, onSelect }) => {
  if (options.length && options[0].name && options[0].name !== "Select") {
    options.unshift({ name: "Select", distance: 0 });
  }

  return (
    <>
      {
        options.length
          ?
          <select
            name={name}
            onChange={onSelect}
            className={styles}
          >
            {options.map((option) => (
              <option
                key={shortid.generate()}
                value={option.name}
              >
                {option.name}
              </option>
            )
            )}
          </select>
          : null
      }
    </>
  )
};

export default Select;
