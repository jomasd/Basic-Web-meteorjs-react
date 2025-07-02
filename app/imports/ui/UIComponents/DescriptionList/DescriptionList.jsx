import React from 'react';
import PropTypes from 'prop-types';
import './styles/DescriptionList.css';

const DescriptionList = ({ data }) => {
  return (
    <dl className="description-list">
      {Object.keys(data).map((key, index) => (
        <React.Fragment key={index}>
          <dt>{key}</dt>
          <dd>{data[key]}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
};

DescriptionList.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DescriptionList;
