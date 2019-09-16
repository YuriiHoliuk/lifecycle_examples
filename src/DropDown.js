import React, { Component } from 'react';

class DropDown extends Component {
  componentDidUpdate(prevProps, prevState) {
    const { options, onChange } = this.props;

    if (options !== prevProps.options) {
      onChange(null);
    }
  }

  render() {
    const {
      options,
      value,
      onChange,
    } = this.props;

    return (
      <div>
        <span>
          Value:
          {' '}
          {value}
        </span>

        <ul>
          {options.map(({ label, value: optionValue }) => {
            const selected = value === optionValue;

            return (
              <li key={optionValue}>
                <button
                  type="button"
                  onClick={() => onChange(optionValue)}
                >
                  {label}
                  {' '}
                  {selected && '✅'}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default DropDown;
