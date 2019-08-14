import React from 'react';
import AdditionalFeature from './AdditionalFeature';

import { connect } from 'react-redux';
import { addFeature } from '../actions/actions.js'; 


const AdditionalFeatures = props => {
 
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} addFeature={props.addFeature}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  console.log('additionalFeatures state', state);
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    store: state.store
  };
};

export default connect(
  mapStateToProps,
  { addFeature }
)(AdditionalFeatures);