import { IJourney } from '@/services/backend/IJourney';

import audiocreenciaslimitantes from '@/assets/audio/journeys/finanzas/desentranandocreenciasfinancieras/1.1.creenciaslimitantes.mp3';
import imagecreenciaslimitantes from '@/assets/images/journeys/finanzas/desentranandocreenciasfinancieras/1.1.creenciaslimitantes.svg';

import audioemocionesdinero from '@/assets/audio/journeys/finanzas/desentranandocreenciasfinancieras/1.2.emocionesdinero.mp3';
import imageemocionesdinero from '@/assets/images/journeys/finanzas/desentranandocreenciasfinancieras/1.2.emocionesdinero.svg';

import audiohistoriafinanciera from '@/assets/audio/journeys/finanzas/desentranandocreenciasfinancieras/1.3.historiafinanciera.mp3';
import imagehistoriafinanciera from '@/assets/images/journeys/finanzas/desentranandocreenciasfinancieras/1.3.historiafinanciera.svg';

import audioIngresosgastosppto from '@/assets/audio/journeys/finanzas/desentranandocreenciasfinancieras/2.1.ingresosgastosppto.mp3';
import imageIngresosgastosppto from '@/assets/images/journeys/finanzas/desentranandocreenciasfinancieras/2.1.ingresosgastosppto.svg';

import audiosistemaahorro from '@/assets/audio/journeys/finanzas/desentranandocreenciasfinancieras/2.2.sistemaahorro.mp3';
import imagesistemaahorro from '@/assets/images/journeys/finanzas/desentranandocreenciasfinancieras/2.2.sistemaahorro.svg';

import audiosalirdedeudas from '@/assets/audio/journeys/finanzas/desentranandocreenciasfinancieras/2.3.salirdedeudas.mp3';
import imagesalirdedeudas from '@/assets/images/journeys/finanzas/desentranandocreenciasfinancieras/2.3.salirdedeudas.svg';

import audiosmentalidadabundanciavsescasez from '@/assets/audio/journeys/finanzas/desentranandocreenciasfinancieras/3.1.mentalidadabundanciavsescasez.mp3';
import imagementalidadabundanciavsescasez from '@/assets/images/journeys/finanzas/desentranandocreenciasfinancieras/3.1.mentalidadabundanciavsescasez.svg';

import audioInvertirenti from '@/assets/audio/journeys/finanzas/desentranandocreenciasfinancieras/3.2.invertirenti.mp3';
import imageInvertirenti from '@/assets/images/journeys/finanzas/desentranandocreenciasfinancieras/3.2.invertirenti.svg';

import audioobjetivosfinancieros from '@/assets/audio/journeys/finanzas/desentranandocreenciasfinancieras/4.1.objetivosfinancieros.mp3';
import imageobjetivosfinancieros from '@/assets/images/journeys/finanzas/desentranandocreenciasfinancieras/4.1.objetivosfinancieros.svg';

import audioplandeaccion from '@/assets/audio/journeys/finanzas/desentranandocreenciasfinancieras/4.2.plandeaccion.mp3';
import imageplandeaccion from '@/assets/images/journeys/finanzas/desentranandocreenciasfinancieras/4.2.plandeaccion.svg';


export const DesentranandoCreenciasFinancierasJourneyMock: IJourney = {
  id: 3,
  journey: 'Desentrañando Creencias Financieras',
  modules: [
    {
      title: 'Entendiendo tu relación con el dinero',
      podcasts: [
        {
          title: 'Creencias limitantes sobre el dinero',
          description: '',
          audioLink: audiocreenciaslimitantes,
          imageLink: imagecreenciaslimitantes,
          podcastStage: 'enabled',
          order: 1,
        },
        {
          title: 'Emociones y dinero',
          description: '',
          audioLink: audioemocionesdinero,
          imageLink: imageemocionesdinero,
          podcastStage: 'enabled',
          order: 2,
        },
        {
          title: 'Tu historia financiera',
          description: '',
          audioLink: audiohistoriafinanciera,
          imageLink: imagehistoriafinanciera,
          podcastStage: 'enabled',
          order: 3,
        }
      ]
    },
    {
      title: 'Construyendo una base financiera sólida',
      podcasts: [
        {
          title: 'Ingresos, gastos y presupuesto',
          description: '',
          audioLink: audioIngresosgastosppto,
          imageLink: imageIngresosgastosppto,
          podcastStage: 'enabled',
          order: 1,
        },
        {
          title: 'Sistema de ahorro',
          description: '',
          audioLink: audiosistemaahorro,
          imageLink: imagesistemaahorro,
          podcastStage: 'enabled',
          order: 2,
        },
        {
          title: 'Estrategias para salir de deudas',
          description: '',
          audioLink: audiosalirdedeudas,
          imageLink: imagesalirdedeudas,
          podcastStage: 'enabled',
          order: 3,
        }
      ]
    },
    {
      title: 'Mentalidad de crecimiento financiero',
      podcasts: [
        {
          title: 'La mentalidad de abundancia vs. escasez',
          description: '',
          audioLink: audiosmentalidadabundanciavsescasez,
          imageLink: imagementalidadabundanciavsescasez,
          podcastStage: 'enabled',
          order: 1,
        },
        {
          title: 'Invertir en ti mismo',
          description: '',
          audioLink: audioInvertirenti,
          imageLink: imageInvertirenti,
          podcastStage: 'enabled',
          order: 2,
        }
      ]
    },
    {
      title: 'Acción y sostenibilidad financiera',
      podcasts: [
        {
          title: 'Definiendo tus objetivos financieros',
          description: '',
          audioLink: audioobjetivosfinancieros,
          imageLink: imageobjetivosfinancieros,
          podcastStage: 'enabled',
          order: 1,
        },
        {
          title: 'Plan de acción y siguientes pasos',
          description: '',
          audioLink: audioplandeaccion,
          imageLink: imageplandeaccion,
          podcastStage: 'enabled',
          order: 2,
        }
      ]
    }
  ]
};