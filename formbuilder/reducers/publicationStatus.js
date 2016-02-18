import {
  FORM_PUBLICATION_PENDING,
  FORM_PUBLICATION_DONE,
} from "../actions/server";

const INITIAL_STATE = {
  status: null,
  collectionID: null,
};

export default function publicationStatus(state = INITIAL_STATE, action) {
  switch(action.type) {

  case FORM_PUBLICATION_PENDING:
    return {...state, status: "pending"};

  case FORM_PUBLICATION_DONE:
    return {
      ...state,
      status: "done",
      collectionID: action.collectionID,
    };
  default:
    return state;
  }
}
