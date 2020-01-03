import React from 'react';

const Radio = ({ name, options }) => {
  return (
    <>
      {
        options.map((option, idx) => {
          return (
            <>
              <input
                key={idx + Math.random()}
                type="radio"
                id={option.name}
                name={name}
                value={option.speed}
              />
              <label
                key={idx + Math.random()}
                htmlFor={option.name}
              >
                {`${option.name} (${option.total_no})`}
              </label>
            </>
          )
        })
      }
    </>
  )
};

export default Radio;
