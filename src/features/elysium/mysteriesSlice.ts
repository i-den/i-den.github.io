import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { AppState } from "../../app/store";
import { CategoryName, categories } from "./mysteryTypes";
import { Category } from "./mysteryTypes";
import { Highlight } from "./mysteryTypes";

export type MysteriesState = {
  categories: Record<CategoryName, Category>;
  highlights: Record<CategoryName, Record<string, Highlight>>;
};

const initialState: MysteriesState = categories().reduce(
  (acc, category) => {
    acc.categories[category.name] = category;
    acc.highlights[category.name] = {};
    return acc;
  },
  {
    categories: {} as Pick<MysteriesState, "categories">["categories"],
    highlights: {} as Pick<MysteriesState, "highlights">["highlights"],
  },
);

const mysteriesSlice = createSlice({
  name: "mysteries",
  initialState,
  reducers: {
    registerHighlight: (state, action: PayloadAction<{ highlight: Omit<Highlight, "listed"> }>) => {
      const { highlight } = action.payload;
      state.highlights[highlight.categoryName][highlight.name] = {
        ...highlight,
        listed: false,
      };
    },
    listHighlight: (state, action: PayloadAction<{ categoryName: CategoryName; name: string }>) => {
      const { categoryName, name } = action.payload;
      state.highlights[categoryName][name].listed = true;
    },
  },
});

export const { registerHighlight, listHighlight } = mysteriesSlice.actions;

export const selectMysteries = (state: AppState) => state.mysteries;
export const selectCategories = createSelector(selectMysteries, (mysteries) => mysteries.categories);
export const selectHighlights = createSelector(selectMysteries, (mysteries) => mysteries.highlights);

export const selectHighlightsCount = createSelector([selectHighlights], (highlights) =>
  Object.values(highlights).reduce(
    (acc, categoryHighlights) => {
      const categoryCount = Object.values(categoryHighlights).reduce(
        (categoryAcc, highlight) => {
          return {
            total: categoryAcc.total + 1,
            listed: highlight.listed ? categoryAcc.listed + 1 : categoryAcc.listed,
          };
        },
        { total: 0, listed: 0 },
      );

      return {
        total: acc.total + categoryCount.total,
        listed: acc.listed + categoryCount.listed,
      };
    },
    { total: 0, listed: 0 },
  ),
);

export const makeSelectHighlightsForCategory = (categoryName: CategoryName) =>
  createSelector([selectHighlights], (highlights) => highlights[categoryName]);

export default mysteriesSlice.reducer;
