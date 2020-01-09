import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

/* ... */

const UndoRedo = ({
  canUndo, canRedo, onUndo, onRedo
}) => (
  <p>
    <button onClick={onUndo} disabled={!canUndo}>
      Undo
    </button>
    <button onClick={onRedo} disabled={!canRedo}>
      Redo
    </button>
  </p>
);

const mapStateToProps = (state) => ({
  canUndo: state.demo.past.length > 0,
  canRedo: state.demo.future.length > 0
});

const mapDispatchToProps = (dispatch) => ({
  onUndo: () => dispatch(UndoActionCreators.undo()),
  onRedo: () => dispatch(UndoActionCreators.redo())
});


UndoRedo.propTypes = {
  onUndo: PropTypes.func.isRequired,
  onRedo: PropTypes.func.isRequired,
  canRedo: PropTypes.bool.isRequired,
  canUndo: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoRedo);
