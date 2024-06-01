// import { TechnologiesIconsMap } from "../enums/TechnologiesIconsMap";

// type TechnologyIcon = keyof typeof TechnologiesIconsMap;

export default interface IProject {
    title: string;
    description: string;
    coverImage: string;
    demonstrationVideo: string;
    repository?: string | undefined;
    projectSite?: string | undefined;
    usedTechnologies: Array<string>
}