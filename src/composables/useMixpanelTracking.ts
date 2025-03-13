import { useRoute } from 'vue-router'
import MixpanelService from '@/services/mixpanel/mixpanel.service.ts';

export function useMixpanelTracking(componentName: string) {
  const route = useRoute()

  const trackEvent = (eventName: string, additionalInfo = {}) => {
    MixpanelService.trackEvent(eventName, { 
      'Ruta': route.path,
      'Hora de Acceso': new Date().toISOString(),
      'Nombre del Componente': componentName,
      'Dispositivo': navigator.userAgent,
      'Resolución de Pantalla': `${window.screen.width}x${window.screen.height}`,
      'Plataforma': navigator.platform,
      'Navegador': navigator.appName,
      'Idioma': navigator.language,
      'Tipo de Dispositivo': /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
        ? 'Móvil' 
        : 'Escritorio',
      ...additionalInfo
    })
  }
  
  return {
    trackEvent
  }
}