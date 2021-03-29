import {
  PRODUCT_LIST_START,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_START,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL
} from "../constants/productConstant";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_START:
      //console.log('')
      return {
        isLoading: true,
        products: []
      };
    case PRODUCT_LIST_SUCCESS:
      return {
        isLoading: false,
        products: action.payload
      };
    case PRODUCT_LIST_FAIL:
      return {
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_START:
      return {
        isLoading: true,
        ...state
      };
    case PRODUCT_DETAILS_SUCCESS:
      return {
        isLoading: false,
        product: action.payload
      };
    case PRODUCT_DETAILS_FAIL:
      return {
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
