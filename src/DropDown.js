import React, { Component } from 'react';
import { DropDownItem } from './DropDownItem';

class DropDown extends Component {
  state = {
    isOpen: false,
  };

  componentDidMount() {
    document.addEventListener('click', this.closeOnOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.closeOnOutsideClick);
  }

  componentDidUpdate(prevProps, prevState) {
    const { options, onChange } = this.props;

    if (options !== prevProps.options) {
      onChange(null);
    }
  }

  closeOnOutsideClick = ({ target }) => {
    if (!target.closest('.dropdown')) {
      this.setState({ isOpen: false });
    }
  };

  toggleDropDown = () => {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  };

  selectItem = (value) => {
    const { onChange } = this.props;

    onChange(value);
    this.setState({ isOpen: false });
  };

  render() {
    const {
      options,
      value,
    } = this.props;
    const { isOpen } = this.state;

    const menuClassName = `dropdown-menu ${isOpen ? 'show' : ''}`;

    return (
      <div className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          onClick={this.toggleDropDown}
        >
          Value:
          {' '}
          {value}
        </button>

        <ul className={menuClassName}>
          {options.map(({ label, value: optionValue }) => (
            <DropDownItem
              key={optionValue}
              value={optionValue}
              selected={value === optionValue}
              label={label}
              onSelect={this.selectItem}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default DropDown;
