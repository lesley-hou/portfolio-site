export interface Projects {
    name: string;
    icon: string;
    alt: string;
    description: string;
  }
  
export const projects: Projects[] = [
    {
        name: "ivey learn plus",
        icon: "IveyLearnPlus",
        alt: "Ivey Learn Plus",
        description: "a javascript chrome extension to streamline room bookings in ivey. 250+ users... or about 30% of students in my year!",
    },
    {
        name: "game boy++",
        icon: "GameBoy",
        alt: "Gameboy",
        description: "a game boy emulator written in c++. sfml for graphics emulation, sprite rendering and catch2 for testing.",
    },
    {
        name: "travel buddy",
        icon: "TravelBuddy",
        alt: "Travel Buddy",
        description: "safety-centric app for travel. built using react, express, and leaflet. used openpass, aerisweather, and openAI apis.",
    },
];
