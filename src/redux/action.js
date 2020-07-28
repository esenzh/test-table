import { SORT_NAME, SEARCH_TOOL } from "./type";

export const SortNameAC = (direction) => {
  return {
    type: SORT_NAME,
    payload: direction,
  };
};

export const SearchToolAC = (value) => {
  return {
    type: SEARCH_TOOL,
    payload: value,
  };
};
