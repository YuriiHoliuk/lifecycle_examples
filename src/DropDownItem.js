import React from 'react';

export const DropDownItem = (props) => {
  const {
    selected,
    value,
    label,
    onSelect,
  } = props;

  return (
    <div>
      <li className="dropdown-item" key={value}>
        <button
          className="btn btn-light"
          type="button"
          onClick={() => onSelect(value)}
        >
          {label}
          {' '}
          {selected && '✅'}
        </button>
      </li>
    </div>
  );
};
