import { SORT_NAME, SEARCH_TOOL } from "./type";

const initialState = {
  tools: [
    {
      id: 1,
      name: "ExpsaertSender",
      sites: 0,
      type: "email",
      status: "blocked",
    },
    {
      id: 2,
      name: "Tag Commander",
      sites: 0,
      type: "tag_manager",
      status: "blocked",
    },
    {
      id: 3,
      name: "Ysance",
      sites: 0,
      type: "dmp_crm",
      status: "blocked",
    },
    {
      id: 4,
      name: "AT Internet",
      sites: 1,
      type: "analytics",
      status: "enable",
    },
    {
      id: 5,
      name: "Content Square",
      sites: 3,
      type: "analytics",
      status: "enable",
    },
    {
      id: 6,
      name: "Google Tag Manager",
      sites: 2,
      type: "tag_manager",
      status: "enable",
    },
    {
      id: 7,
      name: "Heatmap",
      sites: 1,
      type: "heatmap",
      status: "enable",
    },
    {
      id: 8,
      name: "Tealium",
      sites: 0,
      type: "dmp_crm",
      status: "disable",
    },
    {
      id: 9,
      name: "Emarsys",
      sites: 0,
      type: "email",
      status: "disable",
    },
  ],
  searchResultTools: [],
  searchValue: "",
};

export default function (oldState = initialState, action) {
  switch (action.type) {
    case SORT_NAME:
      if (action.payload === "asc") {
        oldState.tools.sort((a, b) => (a.name > b.name ? 1 : -1));
      } else {
        oldState.tools.sort((a, b) => (a.name < b.name ? 1 : -1));
      }
      return {
        ...oldState,
        tools: [...oldState.tools],
      };
    case SEARCH_TOOL:
      const searchedTool = oldState.tools.filter((tool) =>
        tool.name.toLowerCase().includes(action.payload.toLowerCase())
      );

      return {
        ...oldState,
        searchResultTools: searchedTool,
        searchValue: action.payload,
      };
    default:
      return oldState;
  }
}
