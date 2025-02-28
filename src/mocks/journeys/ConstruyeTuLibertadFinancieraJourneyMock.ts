import { IJourney } from '@/services/backend/IJourney';

import audiolibertadfinanciera from '@/assets/audio/journeys/finanzas/construyetulibertadfinanciera/1.1.libertadfinanciera.mp3';
import imagelibertadfinanciera from '@/assets/images/journeys/finanzas/construyetulibertadfinanciera/1.1.libertadfinanciera.svg';

import audioestabilidadseguridadlibertad from '@/assets/audio/journeys/finanzas/construyetulibertadfinanciera/1.2.estabilidadseguridadlibertad.mp3';
import imageestabilidadseguridadlibertad from '@/assets/images/journeys/finanzas/construyetulibertadfinanciera/1.2.estabilidadseguridadlibertad.svg';

import audiodiagnosticofinancieropersonal from '@/assets/audio/journeys/finanzas/construyetulibertadfinanciera/1.3.diagnosticofinancieropersonal.mp3';
import imagediagnosticofinancieropersonal from '@/assets/images/journeys/finanzas/construyetulibertadfinanciera/1.3.diagnosticofinancieropersonal.svg';

import audiocontroldegastos from '@/assets/audio/journeys/finanzas/construyetulibertadfinanciera/2.1.controldegastos.mp3';
import imagecontroldegastos from '@/assets/images/journeys/finanzas/construyetulibertadfinanciera/2.1.controldegastos.svg';

import audioahorros from '@/assets/audio/journeys/finanzas/construyetulibertadfinanciera/2.2.ahorros.mp3';
import imageahorros from '@/assets/images/journeys/finanzas/construyetulibertadfinanciera/2.2.ahorros.svg';

import audioppto from '@/assets/audio/journeys/finanzas/construyetulibertadfinanciera/2.3.ppto.mp3';
import imageppto from '@/assets/images/journeys/finanzas/construyetulibertadfinanciera/2.3.ppto.svg';

import audioactivovspasivo from '@/assets/audio/journeys/finanzas/construyetulibertadfinanciera/3.1.activovspasivo.mp3';
import imageactivovspasivo from '@/assets/images/journeys/finanzas/construyetulibertadfinanciera/3.1.activovspasivo.svg';

import audioingresosextras from '@/assets/audio/journeys/finanzas/construyetulibertadfinanciera/3.2.ingresosextras.mp3';
import imageingresosextras from '@/assets/images/journeys/finanzas/construyetulibertadfinanciera/3.2.ingresosextras.svg';

import audioemprenderoinvertir from '@/assets/audio/journeys/finanzas/construyetulibertadfinanciera/3.3.emprenderoinvertir.mp3';
import imageemprenderoinvertir from '@/assets/images/journeys/finanzas/construyetulibertadfinanciera/3.3.emprenderoinvertir.svg';

import audioinvertirdinero from '@/assets/audio/journeys/finanzas/construyetulibertadfinanciera/4.1.invertirdinero.mp3';
import imageinvertirdinero from '@/assets/images/journeys/finanzas/construyetulibertadfinanciera/4.1.invertirdinero.svg';

import audioplanificacionalargoplazo from '@/assets/audio/journeys/finanzas/construyetulibertadfinanciera/4.2.planificacionalargoplazo.mp3';
import imageplanificacionalargoplazo from '@/assets/images/journeys/finanzas/construyetulibertadfinanciera/4.2.planificacionalargoplazo.svg';

import audioplanderetiro from '@/assets/audio/journeys/finanzas/construyetulibertadfinanciera/4.3.planderetiro.mp3';
import imageplanderetiro from '@/assets/images/journeys/finanzas/construyetulibertadfinanciera/4.3.planderetiro.svg';


export const ConstruyeTuLibertadFinancieraJourneyMock: IJourney = {
  journey: 'Construye tu libertad financiera',
  modules: [
    {
      title: 'Fundamentos de la libertad financiera',
      podcasts: [
        {
          title: '¿Qué es la libertad financiera y por qué es importante?',
          description: '',
          audioLink: audiolibertadfinanciera,
          imageLink: imagelibertadfinanciera,
          podcastStage: 'enabled',
          order: 1,
        },
        {
          title: 'Diferencias entre estabilidad, seguridad y libertad financiera.',
          description: '',
          audioLink: audioestabilidadseguridadlibertad,
          imageLink: imageestabilidadseguridadlibertad,
          podcastStage: 'enabled',
          order: 2,
        },
        {
          title: 'Diagnóstico financiero personal',
          description: '',
          audioLink: audiodiagnosticofinancieropersonal,
          imageLink: imagediagnosticofinancieropersonal,
          podcastStage: 'enabled',
          order: 3,
        }
      ]
    },
    {
      title: 'Cómo optimizar tus ingresos y gastos',
      podcasts: [
        {
          title: 'Control de gastos',
          description: '',
          audioLink: audiocontroldegastos,
          imageLink: imagecontroldegastos,
          podcastStage: 'enabled',
          order: 1,
        },
        {
          title: 'Ahorro inteligente',
          description: '',
          audioLink: audioahorros,
          imageLink: imageahorros,
          podcastStage: 'enabled',
          order: 2,
        },
        {
          title: 'Cómo crear un presupuesto flexible',
          description: '',
          audioLink: audioppto,
          imageLink: imageppto,
          podcastStage: 'enabled',
          order: 3,
        }
      ]
    },
    {
      title: 'Cómo crear un presupuesto flexible',
      podcasts: [
        {
          title: 'Ingresos activos vs. ingresos pasivos.',
          description: '',
          audioLink: audioactivovspasivo,
          imageLink: imageactivovspasivo,
          podcastStage: 'enabled',
          order: 1,
        },
        {
          title: 'Cómo generar ingresos extra sin dejar tu trabajo actual',
          description: '',
          audioLink: audioingresosextras,
          imageLink: imageingresosextras,
          podcastStage: 'enabled',
          order: 2,
        },
        {
          title: '¿Emprender o invertir?',
          description: '',
          audioLink: audioemprenderoinvertir,
          imageLink: imageemprenderoinvertir,
          podcastStage: 'enabled',
          order: 3,
        }
      ]
    },
    {
      title: 'Estrategias para alcanzar la independencia financiera',
      podcasts: [
        {
          title: 'Cómo invertir para que tu dinero trabaje por ti',
          description: '',
          audioLink: audioinvertirdinero,
          imageLink: imageinvertirdinero,
          podcastStage: 'enabled',
          order: 1,
        },
        {
          title: 'Planificación a largo plazo',
          description: '',
          audioLink: audioplanificacionalargoplazo,
          imageLink: imageplanificacionalargoplazo,
          podcastStage: 'enabled',
          order: 2,
        },
        {
          title: 'Creando un plan de retiro y asegurando tu futuro',
          description: '',
          audioLink: audioplanderetiro,
          imageLink: imageplanderetiro,
          podcastStage: 'enabled',
          order: 3,
        }
      ]
    }
  ]
};
