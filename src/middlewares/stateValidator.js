import stateSchema from './stateSchema';
import tv4 from 'tv4';

export default ({ dispatch, getState }) => (next) => (action) => {
    next(action);

  let tv = (tv4.validate(getState(), stateSchema))

}