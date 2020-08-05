//把alert的state获取过来，然后呈现出来
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//这个alerts是通过props传进来的
const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

//验证通过props传进来的alerts的类型
Alert.propTypes = {
  alerts: PropTypes.array.isRequired, //ptar
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
