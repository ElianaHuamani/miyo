
  export interface IPodcast {
    title: string;
    order: number;
    podcastStage: PodcastStage;
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
  