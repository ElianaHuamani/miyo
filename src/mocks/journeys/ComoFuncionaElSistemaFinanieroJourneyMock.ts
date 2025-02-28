import { IJourney } from '@/services/backend/IJourney';


import audioqueessistemafinanciero from '@/assets/audio/journeys/finanzas/comofuncionaelsistemafinanciero/1.1.queessistemafinanciero.mp3';
import imagequeessistemafinanciero from '@/assets/images/journeys/finanzas/comofuncionaelsistemafinanciero/1.1.queessistemafinanciero.svg';

import audioactoresclaves from '@/assets/audio/journeys/finanzas/comofuncionaelsistemafinanciero/1.2.actoresclaves.mp3';
import imageactoresclaves from '@/assets/images/journeys/finanzas/comofuncionaelsistemafinanciero/1.2.actoresclaves.svg';

import audioregulacion from '@/assets/audio/journeys/finanzas/comofuncionaelsistemafinanciero/1.3.regulacion.mp3';
import imageregulacion from '@/assets/images/journeys/finanzas/comofuncionaelsistemafinanciero/1.3.regulacion.svg';

import audiotarjetasdecreditoydebito from '@/assets/audio/journeys/finanzas/comofuncionaelsistemafinanciero/2.1.tarjetasdecreditoydebito.mp3';
import imagetarjetasdecreditoydebito from '@/assets/images/journeys/finanzas/comofuncionaelsistemafinanciero/2.1.tarjetasdecreditoydebito.svg';

import audioprestamoshipotecas from '@/assets/audio/journeys/finanzas/comofuncionaelsistemafinanciero/2.2.prestamoshipotecas.mp3';
import imageprestamoshipotecas from '@/assets/images/journeys/finanzas/comofuncionaelsistemafinanciero/2.2.prestamoshipotecas.svg';

import audioseguros from '@/assets/audio/journeys/finanzas/comofuncionaelsistemafinanciero/2.3.seguros.mp3';
import imageseguros from '@/assets/images/journeys/finanzas/comofuncionaelsistemafinanciero/2.3.seguros.svg';

import audioquesonmercadosfinancieros from '@/assets/audio/journeys/finanzas/comofuncionaelsistemafinanciero/3.1.quesonmercadosfinancieros.mp3';
import imagequesonmercadosfinancieros from '@/assets/images/journeys/finanzas/comofuncionaelsistemafinanciero/3.1.quesonmercadosfinancieros.svg';

import audioporqueexistenmercadosfinancieros from '@/assets/audio/journeys/finanzas/comofuncionaelsistemafinanciero/3.2.porqueexistenlosmercadosfinancieros.mp3';
import imageporqueexistenmercadosfinancieros from '@/assets/images/journeys/finanzas/comofuncionaelsistemafinanciero/3.2.porqueexistenlosmercadosfinancieros.svg';

import audiocomoganadineroinversionista from '@/assets/audio/journeys/finanzas/comofuncionaelsistemafinanciero/3.3.comoganadineroinversionista.mp3';
import imagecomoganadineroinversionista from '@/assets/images/journeys/finanzas/comofuncionaelsistemafinanciero/3.3.comoganadineroinversionista.svg';

import audioriesgosmercadosfinancieros from '@/assets/audio/journeys/finanzas/comofuncionaelsistemafinanciero/3.4.riesgosmercadosfinancieros.mp3';
import imageriesgosmercadosfinancieros from '@/assets/images/journeys/finanzas/comofuncionaelsistemafinanciero/3.4.riesgosmercadosfinancieros.svg';


export const ComoFuncionaElSistemaFinanieroJourneyMock: IJourney = {
  journey: '¿Cómo funciona el sistema financiero?',
  modules: [
    {
      title: 'Introducción al sistema financiero',
      podcasts: [
        {
          title: '¿Qué es el sistema financiero?',
          description: '',
          audioLink: audioqueessistemafinanciero,
          imageLink: imagequeessistemafinanciero,
          podcastStage: 'enabled',
          order: 1,
        },
        {
          title: 'Actores clave del sistema financiero',
          description: '',
          audioLink: audioactoresclaves,
          imageLink: imageactoresclaves,
          podcastStage: 'enabled',
          order: 2,
        },
        {
          title: 'Regulación y estabilidad del sistema financiero',
          description: '',
          audioLink: audioregulacion,
          imageLink: imageregulacion,
          podcastStage: 'enabled',
          order: 3,
        }
      ]
    },
    {
      title: 'Productos y servicios financieros esenciales',
      podcasts: [
        {
          title: 'Tarjetas de crédito y débito',
          description: '',
          audioLink: audiotarjetasdecreditoydebito,
          imageLink: imagetarjetasdecreditoydebito,
          podcastStage: 'enabled',
          order: 1,
        },
        {
          title: 'Préstamos, créditos e hipotecas',
          description: '',
          audioLink: audioprestamoshipotecas,
          imageLink: imageprestamoshipotecas,
          podcastStage: 'enabled',
          order: 2,
        },
        {
          title: 'Seguros: cómo protegen nuestras finanzas',
          description: '',
          audioLink: audioseguros,
          imageLink: imageseguros,
          podcastStage: 'enabled',
          order: 3,
        }
      ]
    },
    {
      title: 'Mercados financieros y el dinero en movimiento',
      podcasts: [
        {
          title: '¿Qué son los mercados financieros?',
          description: '',
          audioLink: audioquesonmercadosfinancieros,
          imageLink: imagequesonmercadosfinancieros,
          podcastStage: 'enabled',
          order: 1,
        },
        {
          title: '¿Por qué existen los mercados financieros?',
          description: '',
          audioLink: audioporqueexistenmercadosfinancieros,
          imageLink: imageporqueexistenmercadosfinancieros,
          podcastStage: 'enabled',
          order: 2,
        },
        {
          title: '¿Cómo gana dinero un inversionista?',
          description: '',
          audioLink: audiocomoganadineroinversionista,
          imageLink: imagecomoganadineroinversionista,
          podcastStage: 'enabled',
          order: 3,
        },
        {
          title: 'Riesgos de los mercados financieros',
          description: '',
          audioLink: audioriesgosmercadosfinancieros,
          imageLink: imageriesgosmercadosfinancieros,
          podcastStage: 'enabled',
          order: 4,
        }
      ]
    }
  ]
};