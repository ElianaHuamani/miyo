export interface ICard {
    title: string;
    description: string;
    image: string;
    link: string;
    isActive: boolean;
    timeValue: string;
    audioCount: number;
    creator: ICreator;
}

export interface ICreator {
    name: string;
    isOur: boolean;
    instagram?: string;
    linkedin?: string;
}