// src/services/backend/Journey.ts

export interface Podcast {
    title: string;
    order: number;
    podcastStage: 'completed' | 'enabled' | 'disabled';
  }
  
  export interface Module {
    title: string;
    podcasts: Podcast[];
  }
  
  export interface Journey {
    journey: string;
    modules: Module[];
  }
  