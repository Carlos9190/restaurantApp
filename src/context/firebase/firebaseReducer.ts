import {
  FirebaseState,
  FirebaseAction,
  GET_PRODUCTS_SUCCESS,
} from '../../types';

export default function firebaseReducer(
  state: FirebaseState,
  action: FirebaseAction,
): FirebaseState {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        menu: action.payload,
      };

    default:
      return state;
  }
}
