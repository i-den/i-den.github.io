import { HighlightCtx, CategoryName } from "../../../features/elysium/mysteryTypes";

export function initAboutParagraphs(): { content: string; highlightCtx: HighlightCtx }[] {
  return [
    {
      content: "Results-driven Java Professional with over 4 years of experience in web development",
      highlightCtx: {
        categoryName: CategoryName.About,
        name: "Experience",
        content: "4 years of experience",
      },
    },
    {
      content: "Proficient in building robust and scalable applications using industry-standard technologies",
      highlightCtx: {
        categoryName: CategoryName.About,
        name: "Action",
        content: "With standard technologies",
      },
    },
    {
      content:
        "Established track record of improving company finances - boosted revenue by conceptualizing and automating a profitable new product (virus scanner) and significantly reduced costs by implementing an optimization solution (in the Adobe niche)",
      highlightCtx: {
        categoryName: CategoryName.About,
        name: "Revenue",
        content: "Boosted company revenue",
      },
    },
    {
      content:
        "Passionate about exploring and adopting new technologies and methodologies when they would align with project requirements",
      highlightCtx: {
        categoryName: CategoryName.About,
        name: "Tech",
        content: "Adopting new technologies",
      },
    },
    {
      content:
        "Proactively engaged in learning and staying up to date of modern standards, not being limited only to the Java ecosystem",
      highlightCtx: {
        categoryName: CategoryName.About,
        name: "Learning",
        content: "Proactively learning",
      },
    },
  ];
}

export function maskContent(content: string): string {
  return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum".slice(
    0,
    content.length,
  );
}
