export interface Experiences {
    title: string;
    company: string;
    link: string;
    date: string;
    location: string;
    description: string;
    isPresent?: boolean;
  }
  
  export const experiences: Experiences[] = [
    {
        title: "software engineer intern",
        company: "perpetua",
        link: "https://perpetua.io/",
        date: "may to august 2023/2024",
        location: "toronto, ontario, canada",
        isPresent: true,
        description: "started as a frontend developer on the amazon sponsored display ads team. returned the following summer as a fullstack developer on the amazon demand-side platform engineering team."
    },
    {
        title: "software engineer intern",
        company: "greencube analytics",
        link: "https://www.crunchbase.com/organization/greencube",
        date: "may to august 2022",
        location: "toronto, ontario, canada",
        description: "greencube is an ai-powered, ethically driven b2b marketing platform. i joined as a backend developer."
    },
  ];
  