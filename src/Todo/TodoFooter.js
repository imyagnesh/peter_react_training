import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FILTET_TYPE_ALL, FILTET_TYPE_COMPLETED, FILTET_TYPE_PENDING } from '../constants';

const TodoFooter = ({ setFilterType }) => {
  console.log('TodoFooter file');
  return (
    <div>
      <input type="button" value="All Tasks" onClick={() => setFilterType(FILTET_TYPE_ALL)} />
      <input
        type="button"
        value="Pending Tasks"
        onClick={() => setFilterType(FILTET_TYPE_PENDING)}
      />
      <input
        type="button"
        value="Completed Tasks"
        onClick={() => setFilterType(FILTET_TYPE_COMPLETED)}
      />
    </div>
  );
};

TodoFooter.propTypes = {
  setFilterType: PropTypes.func.isRequired,
};

export default memo(TodoFooter);
