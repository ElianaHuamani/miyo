import { IJourney } from '../services/backend/IJourney';

export const FinanzasJourneyMock: IJourney = {
  journey: 'Finanzas Personales',
  modules: [
    {
      title: 'Fundamentos de la Inteligencia Financiera',
      podcasts: [
        {
          title: '¿Qué es la inteligencia financiera?',
          description: '¡Domina tus finanzas! 💡 Aprende a usar el dinero de manera inteligente y construye un futuro financiero sólido. ¡Es hora de tomar el control! 💼💰',
          audioLink: '@/assets/audio/journey/finanzaspersonales/1.1.inteligencia_financiera.mp3',
          imageLink: '@/assets/images/journey/finanzaspersonales/1.1.inteligencia_financiera.svg',
          podcastStage: 'enabled',
          order: 1,
        },
        {
          title: '¿Qué son los activos y pasivos?',
          description: 'Activos vs. pasivos: descubre cómo identificarlos y hacer que trabajen para ti 💸. ¡Transforma tu dinero en tu mejor aliado! 🏠📊',
          audioLink: '@/assets/audio/journey/finanzaspersonales/1.2.pasivos_activos.mp3',
          imageLink: '@/assets/images/journey/finanzaspersonales/1.2.pasivos_activos.svg',
          podcastStage: 'disabled',
          order: 2,
        },
        {
          title: 'Creencias limitantes sobre el dinero',
          description: '¡Rompe tus barreras mentales! 🚀 Descubre las creencias que te frenan y transforma tu relación con el dinero. ¡El cambio empieza aquí! 💭💡',
          audioLink: '@/assets/audio/journey/finanzaspersonales/1.3.creencias_limitantes.mp3',
          imageLink: '@/assets/images/journey/finanzaspersonales/1.3.creencias_limitantes.svg',
          podcastStage: 'disabled',
          order: 3,
        }
      ]
    },
    {
      title: 'Gestión Inteligente del Dinero',
      podcasts: [
        {
          title: '¿Qué es un presupuesto?',
          description: '¡Planifica como un experto! 📋💼 Aprende a crear un presupuesto que funcione para ti y te lleve a cumplir tus metas financieras. ¡Fácil y efectivo! 🎯💵',
          audioLink: '@/assets/audio/journey/finanzaspersonales/2.1.presupuesto.mp3',
          imageLink: '@/assets/images/journey/finanzaspersonales/2.1.presupuesto.svg',
          podcastStage: 'disabled',
          order: 1,
        },
        {
          title: 'El Sistema de Frascos para la Gestión del Dinero',
          description: 'Gestiona tu dinero como un maestro 🏆. Descubre el sistema de frascos y aprende a distribuir tus ingresos con éxito 🏺💸',
          audioLink: '@/assets/audio/journey/finanzaspersonales/2.2.frascos.mp3',
          imageLink: '@/assets/images/journey/finanzaspersonales/2.2.frascos.svg',
          podcastStage: 'disabled',
          order: 2,
        },
        {
          title: 'La Importancia del Fondo de Emergencia',
          description: '¡Protege tu futuro! 🔒 Crea un fondo de emergencia para estar preparado ante cualquier imprevisto. Tu tranquilidad financiera está al alcance. 🛡️🌧️',
          audioLink: '@/assets/audio/journey/finanzaspersonales/2.3.fondo_emergencia.mp3',
          imageLink: '@/assets/images/journey/finanzaspersonales/2.3.fondo_emergencia.svg',
          podcastStage: 'disabled',
          order: 3,
        }
      ]
    }
  ]
};
