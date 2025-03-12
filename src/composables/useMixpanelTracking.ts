import { useRoute } from 'vue-router'
import MixpanelService from '@/services/mixpanel/mixpanel.service.ts';

export function useMixpanelTracking(name: string) {
  const route = useRoute()

  const trackPageVisit = () => {
    MixpanelService.trackEvent(`${name}`, { 
      'Ruta': route.path,
      'Hora de Acceso': new Date().toISOString(),
      'Nombre del Componente': name,
      'Dispositivo': navigator.userAgent,
      'Resolución de Pantalla': `${window.screen.width}x${window.screen.height}`,
      'Plataforma': navigator.platform,
      'Navegador': navigator.appName,
      'Idioma': navigator.language,
      'Tipo de Dispositivo': /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
        ? 'Móvil' 
        : 'Escritorio'
    })
  }
  return {
    trackPageVisit
  }
}