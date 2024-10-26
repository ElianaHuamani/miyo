
  export interface IPodcast {
    title: string;
    description: string;
    audioLink: string;
    imageLink: string;
    podcastStage: PodcastStage;
    order: number;
  }

  export type PodcastStage = 'completed' | 'enabled' | 'disabled';
  
  export interface IModule {
    title: string;
    podcasts: IPodcast[];
  }
  
  export interface IJourney {
    journey: string;
    modules: IModule[];
  }
  