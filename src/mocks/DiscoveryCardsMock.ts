// Datos simulados (mock) para las tarjetas de la sección
import journeyfinanzaspersonales from '@/assets/images/journey-finanzas-personales.svg';
import journeyinveriones from '@/assets/images/journey-inveriones.svg';
import journeyplanificacionfinanciera from '@/assets/images/journey-planificacion-financiera.svg';

export const section1CardsMock = [
    { 
      title: 'Finanzas personales', 
      description: 'TEST -Esta es una descripción que no supera los 50 caracteres.', 
      image: journeyfinanzaspersonales, 
      link: '/pagina1'
    },
    { 
      title: 'Inversiones', 
      description: 'Descripción un poco más larga que debería truncarse a los 50 caracteres para no mostrar demasiado contenido.', 
      image: journeyinveriones, 
      link: '/pagina2'
    },
    { 
      title: 'Planificacion Financiera', 
      description: 'Descripción corta.', 
      image: journeyplanificacionfinanciera, 
      link: '/pagina3'
    }
  ];
  