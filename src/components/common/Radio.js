import React from 'react';
import shortid from 'shortid';

const Radio = ({ styles, name, options, onSelect }) => {
  return (
    <>
      {
        options.map((option) => (
          <div>
            <input
              key={shortid.generate()}
              type="radio"
              className={styles}
              id={option.name}
              name={name}
              value={option.name}
              onChange={onSelect}
            />
            <label
              key={shortid.generate()}
              htmlFor={option.name}
            >
              {` ${option.name} (${option.total_no})`}
            </label>
          </div>
        )
        )
      }
    </>
  )
};

export default Radio;
