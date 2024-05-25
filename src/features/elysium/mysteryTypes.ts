export enum CategoryName {
  About = "About",
  Experience = "Experience",
  Hobbies = "Hobbies",
}
export type Category = {
  name: CategoryName;
  order: number;
};

export function categories(): Category[] {
  return [
    {
      name: CategoryName.About,
      order: 1,
    },
    {
      name: CategoryName.Experience,
      order: 2,
    },
  ];
}

export type HighlightCtx = {
  categoryName: CategoryName;
  name: string;
  content: string;
};

export type Highlight = HighlightCtx & {
  listed: boolean;
};
