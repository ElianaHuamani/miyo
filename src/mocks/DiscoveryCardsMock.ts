import { ICard } from '@/services/backend/ICard';


import journeyfinanzasdesentranandocreenciasfinancieras from '@/assets/images/coursecovers/journey-finanzas-desentranando-creencias-financieras.svg';
import journeyfinanzascomofuncionaelsistemafinanciero from '@/assets/images/coursecovers/journey-finanzas-como-funciona-el-sistema-financiero.svg';
import journeyfinanzasconstruyetulibertadfinanciera from '@/assets/images/coursecovers/journey-finanzas-construye-tu-libertad-financiera.svg';
import journeyfinanzasinveriones from '@/assets/images/coursecovers/journey-finanzas-inveriones.svg';
import journeyfinanzaspsicologiadinero from '@/assets/images/coursecovers/journey-finanzas-psicologia-dinero.svg';
import journeycrecimientoautoconocimiento from '@/assets/images/coursecovers/journey-crecimiento-autoconocimiento.svg';
import journeycrecimientocomunicacion from '@/assets/images/coursecovers/journey-crecimiento-comunicacion.svg';
import journeycrecimientohabitos from '@/assets/images/coursecovers/journey-crecimiento-habitos.svg';
import journeycrecimientomentalidad from '@/assets/images/coursecovers/journey-crecimiento-mentalidad.svg';
import journeycrecimientoproposito from '@/assets/images/coursecovers/journey-crecimiento-proposito.svg';

export const finanzasSectionMock : ICard[] = [
    { 
      title: '', 
      description: '', 
      image: journeyfinanzasdesentranandocreenciasfinancieras, 
      link: '/journey?course=finanzas-desentranando-creencias-financieras',
      isActive: true,
      timeValue: '8:06 min',
      audioCount: 10,
    },
    {
      title: '¿Cómo funciona el sistema financiero?', 
      description: '', 
      image: journeyfinanzascomofuncionaelsistemafinanciero, 
      link: '/journey?course=finanzas-como-funciona-el-sistema-financiero',
      isActive: true,
      timeValue: '11:27 min',
      audioCount: 10,
    },
        { 
      title: 'Construye tu libertad financiera', 
      description: '', 
      image: journeyfinanzasconstruyetulibertadfinanciera, 
      link: '/journey?course=finanzas-construye-tu-libertad-financiera',
      isActive: true,
      timeValue: '13:09 min',
      audioCount: 12,
    },
    {
      title: 'Inversiones para principiantes', 
      description: '💸 ¿Te gustaría poner tu dinero a trabajar para ti? En este curso, descubrirás los conceptos clave de las inversiones de una forma simple y práctica. ¡Empieza a invertir sin miedo y con confianza! 🚀', 
      image: journeyfinanzasinveriones, 
      link: '',
      isActive: false,
      timeValue: '13 min',
      audioCount: 18,
    },
    
    { 
      title: 'Psicología del dinero', 
      description: '🧠💰 ¿Sabías que nuestra relación con el dinero afecta nuestras decisiones financieras? Este curso te ayudará a comprender cómo piensas sobre el dinero y a mejorar tu relación con él para alcanzar tus metas. ¡Transforma tu mente y tu bolsillo! 💡', 
      image: journeyfinanzaspsicologiadinero, 
      link: '',
      isActive: false,
      timeValue: '45 min',
      audioCount: 18,
    }
  ];

  export const crecimientoSectionMock : ICard[] = [
    { 
      title: 'Autoconocimiento y gestión emocional', 
      description: '🌿❤️ Entenderte a ti mismo es clave para una vida equilibrada. Aprende a gestionar tus emociones, a conocerte mejor y a construir una versión más fuerte y serena de ti. ¡Haz las paces contigo mismo y empieza a florecer! 🌱', 
      image: journeycrecimientoautoconocimiento, 
      link: '',
      isActive: false,
      timeValue: '20 min',
      audioCount: 18,
    },
    {
      title: 'Comunicación asertiva', 
      description: '🗣️🤝 ¿Te cuesta expresar lo que piensas o sientes? Descubre cómo comunicarte de manera clara y respetuosa, mientras construyes relaciones más sanas y efectivas. ¡Hablar con confianza nunca fue tan fácil! 📢', 
      image: journeycrecimientocomunicacion, 
      link: '',
      isActive: false,
      timeValue: '17 min',
      audioCount: 18,
    },
    { 
      title: 'Desarrollo de habitos poderosos', 
      description: '🔄💪 Los pequeños hábitos diarios pueden generar grandes cambios. Aprende cómo crear y mantener hábitos que te acerquen a tus objetivos más ambiciosos. ¡Tú tienes el poder de mejorar tu vida, un paso a la vez! 🏆', 
      image: journeycrecimientohabitos, 
      link: '',
      isActive: false,
      timeValue: '13',
      audioCount: 18,
    },
    { 
      title: 'Mentalidad de crecimiento', 
      description: '🚀🧠 ¿Te gustaría ver cada reto como una oportunidad? En este curso aprenderás a desarrollar una mentalidad de crecimiento que te permitirá aprender, mejorar y triunfar en cualquier situación. ¡El éxito empieza en tu mente! 💡', 
      image: journeycrecimientomentalidad, 
      link: '',
      isActive: false,
      timeValue: '36 min',
      audioCount: 18,
    },
    { 
      title: 'Proposito de vida y definición de metas', 
      description: 'Tes🎯✨ ¿Te sientes sin rumbo? Descubre cómo identificar tu propósito de vida y trazar metas claras que te motiven a seguir adelante. ¡Conéctate con lo que realmente te mueve y da el siguiente paso hacia una vida más plena! 🌟t3', 
      image: journeycrecimientoproposito, 
      link: '',
      isActive: false,
      timeValue: '20 min',
      audioCount: 18,
    }
  ];
  