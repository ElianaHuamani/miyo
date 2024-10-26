import { Journey } from '../services/backend/IJourney';

export const FinanzasJourneyMock: Journey = {
  journey: 'Finanzas Personales',
  modules: [
    {
      title: 'Fundamentos de la Inteligencia Financiera',
      podcasts: [
        {
          title: '¿Qué es la inteligencia financiera?',
          order: 1,
          podcastStage: 'enabled'
        },
        {
          title: '¿Qué son los activos y pasivos?',
          order: 2,
          podcastStage: 'disabled'
        },
        {
          title: 'Creencias limitantes sobre el dinero',
          order: 3,
          podcastStage: 'disabled'
        }
      ]
    },
    {
      title: 'Gestión Inteligente del Dinero',
      podcasts: [
        {
          title: '¿Qué es un presupuesto?',
          order: 1,
          podcastStage: 'disabled'
        },
        {
          title: 'El Sistema de Frascos para la Gestión del Dinero',
          order: 2,
          podcastStage: 'disabled'
        },
        {
          title: 'La Importancia del Fondo de Emergencia',
          order: 3,
          podcastStage: 'disabled'
        },
        {
          title: 'Testing',
          order: 4,
          podcastStage: 'disabled'
        }
      ]
    }
  ]
};
