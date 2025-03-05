import { IJourney } from '@/services/backend/IJourney';

import audiobienvenida from '@/assets/audio/journeys/crecimientopersonal/creenciaslimitantes/1.1.bienvenida.mp3';
import imagebienvenida from '@/assets/images/journeys/crecimientopersonal/creenciaslimitantes/1.1.bienvenida.svg';
import audioquesonlascreenciaslimitantes from '@/assets/audio/journeys/crecimientopersonal/creenciaslimitantes/1.2.quesoncreenciaslimitantes.mp3';
import imagequesonlascreenciaslimitantes from '@/assets/images/journeys/crecimientopersonal/creenciaslimitantes/1.2.quesoncreenciaslimitantes.svg';
import audiodedondevienenlascreenciaslimitantes from '@/assets/audio/journeys/crecimientopersonal/creenciaslimitantes/1.3.dondevienencreenciaslimitantes.mp3';
import imagededondevienenlascreenciaslimitantes from '@/assets/images/journeys/crecimientopersonal/creenciaslimitantes/1.3.dondevienencreenciaslimitantes.svg';
import audioporqueesimportanteconocerlas from '@/assets/audio/journeys/crecimientopersonal/creenciaslimitantes/1.4.porqueesimportanteconocerlas.mp3';
import imageporqueesimportanteconocerlas from '@/assets/images/journeys/crecimientopersonal/creenciaslimitantes/1.4.porqueesimportanteconocerlas.svg';
import audiocreenciaslimitantesenelcampolaboral from '@/assets/audio/journeys/crecimientopersonal/creenciaslimitantes/2.1.creenciaslimitantescampolaboral.mp3';
import imagecreenciaslimitantesenelcampolaboral from '@/assets/images/journeys/crecimientopersonal/creenciaslimitantes/2.1.creenciaslimitantescampolaboral.svg';
import audiocreenciaslimitantesenlasrelacionespersonales from '@/assets/audio/journeys/crecimientopersonal/creenciaslimitantes/2.2.creenciaslimitantescampopersonales.mp3';
import imagecreenciaslimitantesenlasrelacionespersonales from '@/assets/images/journeys/crecimientopersonal/creenciaslimitantes/2.2.creenciaslimitantescampopersonales.svg';
import audiocreenciaslimitantesenlasaludybienestar from '@/assets/audio/journeys/crecimientopersonal/creenciaslimitantes/2.3.creenciaslimitantescamposalud.mp3';
import imagecreenciaslimitantesenlasaludybienestar from '@/assets/images/journeys/crecimientopersonal/creenciaslimitantes/2.3.creenciaslimitantescamposalud.svg';
import audioimpactodelascreenciaslimitantesennuestrasdecisionesdiarias from '@/assets/audio/journeys/crecimientopersonal/creenciaslimitantes/2.4.creenciaslimitantescampodiarias.mp3';
import imageimpactodelascreenciaslimitantesennuestrasdecisionesdiarias from '@/assets/images/journeys/crecimientopersonal/creenciaslimitantes/2.4.creenciaslimitantescampodiarias.svg';
import audioclavesparareconocercreenciaslimitantesennosotros from '@/assets/audio/journeys/crecimientopersonal/creenciaslimitantes/3.1.clavesparareconocercreenciaslimitantes.mp3';
import imageclavesparareconocercreenciaslimitantesennosotros from '@/assets/images/journeys/crecimientopersonal/creenciaslimitantes/3.1.clavesparareconocercreenciaslimitantes.svg';
import audiopreguntaspoderosasparadescubrirbarrerasmentales from '@/assets/audio/journeys/crecimientopersonal/creenciaslimitantes/3.2.barrerasmentales.mp3';
import imagepreguntaspoderosasparadescubrirbarrerasmentales from '@/assets/images/journeys/crecimientopersonal/creenciaslimitantes/3.2.barrerasmentales.svg';
import audiolasemocionescomomanifestaciondelascreenciaslimitantes from '@/assets/audio/journeys/crecimientopersonal/creenciaslimitantes/3.3.emociones.mp3';
import imagelasemocionescomomanifestaciondelascreenciaslimitantes from '@/assets/images/journeys/crecimientopersonal/creenciaslimitantes/3.3.emociones.svg';
import audiocreenciaslimitantesvslarealidad from '@/assets/audio/journeys/crecimientopersonal/creenciaslimitantes/3.4.creenciasvsrealidad.mp3';
import imagecreenciaslimitantesvslarealidad from '@/assets/images/journeys/crecimientopersonal/creenciaslimitantes/3.4.creenciasvsrealidad.svg';
import audiolareestructuracioncognitiva from '@/assets/audio/journeys/crecimientopersonal/creenciaslimitantes/4.1.reestructuracognitiva.mp3';
import imagelareestructuracioncognitiva from '@/assets/images/journeys/crecimientopersonal/creenciaslimitantes/4.1.reestructuracognitiva.svg';
import audioafirmacionespositivasysupoder from '@/assets/audio/journeys/crecimientopersonal/creenciaslimitantes/4.2.afirmacionespositiva.mp3';
import imageafirmacionespositivasysupoder from '@/assets/images/journeys/crecimientopersonal/creenciaslimitantes/4.2.afirmacionespositiva.svg';
import audioelentornocomoclaveparasuperarcreenciaslimitantes from '@/assets/audio/journeys/crecimientopersonal/creenciaslimitantes/4.3.entornosuperarcreenciaslimitantes.mp3';
import imageelentornocomoclaveparasuperarcreenciaslimitantes from '@/assets/images/journeys/crecimientopersonal/creenciaslimitantes/4.3.entornosuperarcreenciaslimitantes.svg';
import audiodesarrollaunamentalidaddecrecimiento from '@/assets/audio/journeys/crecimientopersonal/creenciaslimitantes/5.1.mentalidadcrecimiento.mp3';
import imagedesarrollaunamentalidaddecrecimiento from '@/assets/images/journeys/crecimientopersonal/creenciaslimitantes/5.1.mentalidadcrecimiento.svg';
import audiolaconfianzaenunomismo from '@/assets/audio/journeys/crecimientopersonal/creenciaslimitantes/5.2.confianza.mp3';
import imagelaconfianzaenunomismo from '@/assets/images/journeys/crecimientopersonal/creenciaslimitantes/5.2.confianza.svg';
import audioelcaminocontinuomanteniendoelprogreso from '@/assets/audio/journeys/crecimientopersonal/creenciaslimitantes/5.3.caminocontinuo.mp3';
import imageelcaminocontinuomanteniendoelprogreso from '@/assets/images/journeys/crecimientopersonal/creenciaslimitantes/5.3.caminocontinuo.svg';
import audioentrevistaajoscambiarsedecarrera3veces from '@/assets/audio/journeys/crecimientopersonal/creenciaslimitantes/5.4.entrevista-jos.mp3';
import imageentrevistaajoscambiarsedecarrera3veces from '@/assets/images/journeys/crecimientopersonal/creenciaslimitantes/5.4.entrevista-jos.svg';
import audioentrevistaaalmendraacostarenunciaryviajarporelmundo from '@/assets/audio/journeys/crecimientopersonal/creenciaslimitantes/5.5.entrevista-almendraacosta.mp3';
import imageentrevistaaalmendraacostarenunciaryviajarporelmundo from '@/assets/images/journeys/crecimientopersonal/creenciaslimitantes/5.5.entrevista-almendraacosta.svg';
import audioagradecimiento from '@/assets/audio/journeys/crecimientopersonal/creenciaslimitantes/5.6.agradecimiento.mp3';
import imageagradecimiento from '@/assets/images/journeys/crecimientopersonal/creenciaslimitantes/5.6.agradecimiento.svg';


export const CreenciasLimitantesMock: IJourney = {
  id: 4,
  journey: 'Hackea tu mente: Desbloquea creencias Limitantes',
  modules: [
    {
      title: 'Introducción a las creencias Limitantes',
      podcasts: [
        {
          title: 'Bienvenida al curso',
          description: '',
          audioLink: audiobienvenida,
          imageLink: imagebienvenida,
          podcastStage: 'enabled',
          order: 1,
        },
        {
          title: '¿Qué son las creencias limitantes?',
          description: '',
          audioLink: audioquesonlascreenciaslimitantes,
          imageLink: imagequesonlascreenciaslimitantes,
          podcastStage: 'enabled',
          order: 2,
        },
        {
          title: '¿De dónde vienen las creencias limitantes?',
          description: '',
          audioLink: audiodedondevienenlascreenciaslimitantes,
          imageLink: imagededondevienenlascreenciaslimitantes,
          podcastStage: 'enabled',
          order: 3,
        },
        {
          title: '¿Por qué es importante conocerlas?',
          description: '',
          audioLink: audioporqueesimportanteconocerlas,
          imageLink: imageporqueesimportanteconocerlas,
          podcastStage: 'enabled',
          order: 4,
        }
      ]
    },
    {
      title: 'Creencias Limitantes en diferentes áreas de nuestra vida',
      podcasts: [
        {
          title: 'Creencias Limitantes en el campo laboral',
          description: '',
          audioLink: audiocreenciaslimitantesenelcampolaboral,
          imageLink: imagecreenciaslimitantesenelcampolaboral,
          podcastStage: 'enabled',
          order: 1,
        },
        {
          title: 'Creencias Limitantes en las relaciones personales',
          description: '',
          audioLink: audiocreenciaslimitantesenlasrelacionespersonales,
          imageLink: imagecreenciaslimitantesenlasrelacionespersonales,
          podcastStage: 'enabled',
          order: 2,
        },
        {
          title: 'Creencias Limitantes en la salud y bienestar',
          description: '',
          audioLink: audiocreenciaslimitantesenlasaludybienestar,
          imageLink: imagecreenciaslimitantesenlasaludybienestar,
          podcastStage: 'enabled',
          order: 3,
        },
        {
          title: 'Impacto de las creencias limitantes en nuestras decisiones diarias',
          description: '',
          audioLink: audioimpactodelascreenciaslimitantesennuestrasdecisionesdiarias,
          imageLink: imageimpactodelascreenciaslimitantesennuestrasdecisionesdiarias,
          podcastStage: 'enabled',
          order: 4,
        }
      ]
    },
    {
      title: 'Cómo identificar tus creencias Limitantes',
      podcasts: [
        {
          title: 'Claves para reconocer creencias limitantes en nosotros',
          description: '',
          audioLink: audioclavesparareconocercreenciaslimitantesennosotros,
          imageLink: imageclavesparareconocercreenciaslimitantesennosotros,
          podcastStage: 'enabled',
          order: 1,
        },
        {
          title: 'Preguntas poderosas para descubrir barreras mentales',
          description: '',
          audioLink: audiopreguntaspoderosasparadescubrirbarrerasmentales,
          imageLink: imagepreguntaspoderosasparadescubrirbarrerasmentales,
          podcastStage: 'enabled',
          order: 2,
        },
        {
          title: 'Las emociones como manifestación de las creencias limitantes',
          description: '',
          audioLink: audiolasemocionescomomanifestaciondelascreenciaslimitantes,
          imageLink: imagelasemocionescomomanifestaciondelascreenciaslimitantes,
          podcastStage: 'enabled',
          order: 3,
        },
        {
          title: 'Creencias limitantes vs La realidad',
          description: '',
          audioLink: audiocreenciaslimitantesvslarealidad,
          imageLink: imagecreenciaslimitantesvslarealidad,
          podcastStage: 'enabled',
          order: 4,
        }
      ]
    },
    {
      title: 'Estrategias para superar creencias Limitantes',
      podcasts: [
        {
          title: 'La reestructuración cognitiva',
          description: '',
          audioLink: audiolareestructuracioncognitiva,
          imageLink: imagelareestructuracioncognitiva,
          podcastStage: 'enabled',
          order: 1,
        },
        {
          title: 'Afirmaciones positivas y su poder',
          description: '',
          audioLink: audioafirmacionespositivasysupoder,
          imageLink: imageafirmacionespositivasysupoder,
          podcastStage: 'enabled',
          order: 2,
        },
        {
          title: 'El entorno como clave para superar creencias limitantes',
          description: '',
          audioLink: audioelentornocomoclaveparasuperarcreenciaslimitantes,
          imageLink: imageelentornocomoclaveparasuperarcreenciaslimitantes,
          podcastStage: 'enabled',
          order: 3,
        }
      ]
    },
    {
      title: 'Lo que puedes lograr al superar creencias limitantes',
      podcasts: [
        {
          title: 'Desarrolla una mentalidad de crecimiento',
          description: '',
          audioLink: audiodesarrollaunamentalidaddecrecimiento,
          imageLink: imagedesarrollaunamentalidaddecrecimiento,
          podcastStage: 'enabled',
          order: 1,
        },
        {
          title: 'La confianza en uno mismo',
          description: '',
          audioLink: audiolaconfianzaenunomismo,
          imageLink: imagelaconfianzaenunomismo,
          podcastStage: 'enabled',
          order: 2,
        },
        {
          title: 'El camino continuo: Manteniendo el progreso',
          description: '',
          audioLink: audioelcaminocontinuomanteniendoelprogreso,
          imageLink: imageelcaminocontinuomanteniendoelprogreso,
          podcastStage: 'enabled',
          order: 3,
        },
        {
          title: 'Entrevista a Jos: Cambiarse de carrera 3 veces',
          description: '',
          audioLink: audioentrevistaajoscambiarsedecarrera3veces,
          imageLink: imageentrevistaajoscambiarsedecarrera3veces,
          podcastStage: 'enabled',
          order: 4,
        },
        {
          title: 'Entrevista a Almendra Acosta: Renunciar y viajar por el mundo',
          description: '',
          audioLink: audioentrevistaaalmendraacostarenunciaryviajarporelmundo,
          imageLink: imageentrevistaaalmendraacostarenunciaryviajarporelmundo,
          podcastStage: 'enabled',
          order: 5,
        },
        {
          title: 'Agradecimiento y resumen',
          description: '',
          audioLink: audioagradecimiento,
          imageLink: imageagradecimiento,
          podcastStage: 'enabled',
          order: 6,
        }
      ]
    }
  ]
};