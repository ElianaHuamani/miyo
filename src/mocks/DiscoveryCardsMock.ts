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
import journeycrecimientopersonalcreenciaslimitantes from '@/assets/images/coursecovers/journey-crecimientopersonal-creenciaslimitantes.svg';

export const finanzasSectionMock : ICard[] = [
    { 
      title: '', 
      description: '', 
      image: journeyfinanzasdesentranandocreenciasfinancieras, 
      link: '/journey?course=finanzas-desentranando-creencias-financieras',
      isActive: true,
      timeValue: '8:06 min',
      audioCount: 10,
      creator: {
        name: 'Miyo',
        isOur: false,
      },
    },
    {
      title: '¿Cómo funciona el sistema financiero?', 
      description: '', 
      image: journeyfinanzascomofuncionaelsistemafinanciero, 
      link: '/journey?course=finanzas-como-funciona-el-sistema-financiero',
      isActive: true,
      timeValue: '11:27 min',
      audioCount: 10,
      creator: {
        name: 'Miyo',
        isOur: false,
      },
    },
        { 
      title: 'Construye tu libertad financiera', 
      description: '', 
      image: journeyfinanzasconstruyetulibertadfinanciera, 
      link: '/journey?course=finanzas-construye-tu-libertad-financiera',
      isActive: true,
      timeValue: '13:09 min',
      audioCount: 12,
      creator: {
        name: 'Miyo',
        isOur: false,
      },
    },
    {
      title: 'Inversiones para principiantes', 
      description: '', 
      image: journeyfinanzasinveriones, 
      link: '',
      isActive: false,
      timeValue: '13 min',
      audioCount: 18,
      creator: {
        name: 'Miyo',
        isOur: false,
      },
    },
    {
      title: 'Psicología del dinero', 
      description: '', 
      image: journeyfinanzaspsicologiadinero, 
      link: '',
      isActive: false,
      timeValue: '45 min',
      audioCount: 18,
      creator: {
        name: 'Miyo',
        isOur: false,
      },
    }
  ];

  export const crecimientoSectionMock : ICard[] = [
    { 
      title: 'Hackea tu mente: Desbloquea creencias limitantes', 
      description: '', 
      image: journeycrecimientopersonalcreenciaslimitantes, 
      link: '/journey?course=crecimientopersonal-creencias-limitantes',
      isActive: true,
      timeValue: '60:15 min',
      audioCount: 21,
      creator: {
        name: 'Victor Acosta',
        isOur: true,
        instagram: 'https://www.instagram.com/acostaruizvictor',
        linkedin: 'https://www.linkedin.com/in/victoracostaruiz',
      },
    },
    { 
      title: 'Autoconocimiento y gestión emocional', 
      description: '', 
      image: journeycrecimientoautoconocimiento, 
      link: '',
      isActive: false,
      timeValue: '20 min',
      audioCount: 18,
      creator: {
        name: 'Miyo',
        isOur: false,
      },
    },
    {
      title: 'Comunicación asertiva', 
      description: '', 
      image: journeycrecimientocomunicacion, 
      link: '',
      isActive: false,
      timeValue: '17 min',
      audioCount: 18,
      creator: {
        name: 'Miyo',
        isOur: false,
      },
    },
    { 
      title: 'Desarrollo de habitos poderosos', 
      description: '', 
      image: journeycrecimientohabitos, 
      link: '',
      isActive: false,
      timeValue: '13',
      audioCount: 18,
      creator: {
        name: 'Miyo',
        isOur: false,
      },
    },
    { 
      title: 'Mentalidad de crecimiento', 
      description: '', 
      image: journeycrecimientomentalidad, 
      link: '',
      isActive: false,
      timeValue: '36 min',
      audioCount: 18,
      creator: {
        name: 'Miyo',
        isOur: false,
      },
    },
    { 
      title: 'Proposito de vida y definición de metas', 
      description: '', 
      image: journeycrecimientoproposito, 
      link: '',
      isActive: false,
      timeValue: '20 min',
      audioCount: 18,
      creator: {
        name: 'Miyo',
        isOur: false,
      },
    }
  ];
  