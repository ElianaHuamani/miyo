// Datos simulados (mock) para las tarjetas de la sección
import journeyfinanzaspersonales from '@/assets/images/journey-finanzas-personales.svg';
import journeyfinanzasinveriones from '@/assets/images/journey-finanzas-inveriones.svg';
import journeyfinanzasplanificacion from '@/assets/images/journey-finanzas-planificacion.svg';
import journeyfinanzaspsicologiadinero from '@/assets/images/journey-finanzas-psicologia-dinero.svg';
import journeycrecimientoautoconocimiento from '@/assets/images/journey-crecimiento-autoconocimiento.svg';
import journeycrecimientocomunicacion from '@/assets/images/journey-crecimiento-comunicacion.svg';
import journeycrecimientohabitos from '@/assets/images/journey-crecimiento-habitos.svg';
import journeycrecimientomentalidad from '@/assets/images/journey-crecimiento-mentalidad.svg';
import journeycrecimientoproposito from '@/assets/images/journey-crecimiento-proposito.svg';



export const section1CardsMock = [
    { 
      title: 'Finanzas Personales', 
      description: '¿Te gustaría dominar tus finanzas, pero no tienes tiempo para leer libros o tomar clases largas? ¡Este curso es para ti! En Finanzas en Claro, aprenderás a gestionar tu dinero de forma sencilla, práctica y entretenida, a través de episodios cortos y dinámicos.', 
      image: journeyfinanzaspersonales, 
      link: '/pagina1',
      isActive: true,
    },
    {
      title: 'Inversiones para principiantes', 
      description: '💸 ¿Te gustaría poner tu dinero a trabajar para ti? En este curso, descubrirás los conceptos clave de las inversiones de una forma simple y práctica. ¡Empieza a invertir sin miedo y con confianza! 🚀', 
      image: journeyfinanzasinveriones, 
      link: '',
      isActive: false,
    },
    { 
      title: 'Planificación para libertad financiera', 
      description: '📈 ¡Imagina vivir sin preocuparte por el dinero! Aquí aprenderás a diseñar un plan que te acerque a la libertad financiera, para que puedas disfrutar de lo que realmente te apasiona. ¡Toma el control de tu futuro hoy! 🗝️', 
      image: journeyfinanzasplanificacion, 
      link: '',
      isActive: false,
    },
    { 
      title: 'Psicología del dinero', 
      description: '🧠💰 ¿Sabías que nuestra relación con el dinero afecta nuestras decisiones financieras? Este curso te ayudará a comprender cómo piensas sobre el dinero y a mejorar tu relación con él para alcanzar tus metas. ¡Transforma tu mente y tu bolsillo! 💡', 
      image: journeyfinanzaspsicologiadinero, 
      link: '',
      isActive: false,
    }
  ];

  export const section2CardsMock = [
    { 
      title: 'Autoconocimiento y gestión emocional', 
      description: '🌿❤️ Entenderte a ti mismo es clave para una vida equilibrada. Aprende a gestionar tus emociones, a conocerte mejor y a construir una versión más fuerte y serena de ti. ¡Haz las paces contigo mismo y empieza a florecer! 🌱', 
      image: journeycrecimientoautoconocimiento, 
      link: '',
      isActive: false,
    },
    {
      title: 'Comunicación asertiva', 
      description: '🗣️🤝 ¿Te cuesta expresar lo que piensas o sientes? Descubre cómo comunicarte de manera clara y respetuosa, mientras construyes relaciones más sanas y efectivas. ¡Hablar con confianza nunca fue tan fácil! 📢', 
      image: journeycrecimientocomunicacion, 
      link: '',
      isActive: false,
    },
    { 
      title: 'Desarrollo de habitos poderosos', 
      description: '🔄💪 Los pequeños hábitos diarios pueden generar grandes cambios. Aprende cómo crear y mantener hábitos que te acerquen a tus objetivos más ambiciosos. ¡Tú tienes el poder de mejorar tu vida, un paso a la vez! 🏆', 
      image: journeycrecimientohabitos, 
      link: '',
      isActive: false,
    },
    { 
      title: 'Mentalidad de crecimiento', 
      description: '🚀🧠 ¿Te gustaría ver cada reto como una oportunidad? En este curso aprenderás a desarrollar una mentalidad de crecimiento que te permitirá aprender, mejorar y triunfar en cualquier situación. ¡El éxito empieza en tu mente! 💡', 
      image: journeycrecimientomentalidad, 
      link: '',
      isActive: false,
    },
    { 
      title: 'Proposito de vida y definición de metas', 
      description: 'Tes🎯✨ ¿Te sientes sin rumbo? Descubre cómo identificar tu propósito de vida y trazar metas claras que te motiven a seguir adelante. ¡Conéctate con lo que realmente te mueve y da el siguiente paso hacia una vida más plena! 🌟t3', 
      image: journeycrecimientoproposito, 
      link: '',
      isActive: false,
    }
  ];
  