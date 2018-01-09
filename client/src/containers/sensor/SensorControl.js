import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Control from '../../components/control/Control';
import Chart from '../../components/chart/Chart'

class SensorControl extends React.Component {
  render() {
    return (
      <Control title={ this.props.title }>
        <Chart data={ this.props.data }/>
      </Control>
    );
  }
}

SensorControl.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  })),
  selectData: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

SensorControl.defaultProps = {
  data: []
};

export const mapStateToProps = (state, props) => ({
  data: props.selectData(state)
});

export { SensorControl };
export default connect(mapStateToProps, null)(SensorControl);
