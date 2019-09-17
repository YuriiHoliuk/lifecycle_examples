import React, { PureComponent } from 'react';

class ListSelector extends PureComponent {
  componentDidUpdate() {
    console.log('ListSelector updated');
  }

  render() {
    const { selectedListName, onChange } = this.props;

    return (
      <div>
        <div className="form-check">
          <label className="form-check-label">
            <input
              className="form-check-input"
              type="radio"
              name="list"
              value="LONG_LIST"
              checked={selectedListName === 'LONG_LIST'}
              onChange={onChange}
            />
            Long list
          </label>
        </div>

        <div className="form-check">
          <label className="form-check-label">
            <input
              className="form-check-input"
              type="radio"
              name="list"
              value="SHORT_LIST"
              checked={selectedListName === 'SHORT_LIST'}
              onChange={onChange}
            />
            Short list
          </label>
        </div>
      </div>
    );
  }
}

export default ListSelector;
