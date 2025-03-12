import mixpanel from 'mixpanel-browser';
import { v4 as uuidv4 } from 'uuid';

const getEnvironmentToken = () => {
    if (import.meta.env.VITE_VERCEL_ENV === 'production') {
      return import.meta.env.VITE_VERCEL_ENV_MIXPANEL_TOKEN;
    }
    return import.meta.env.VITE_VERCEL_ENV_MIXPANEL_TOKEN;
};

const MIXPANEL_TOKEN = getEnvironmentToken();
const MIXPANEL_DEBUG = import.meta.env.VITE_VERCEL_ENV !== 'production';

class MixpanelService {
  private anonymousId: string;

  constructor() {
    mixpanel.init(MIXPANEL_TOKEN, {
        debug: MIXPANEL_DEBUG,
        track_pageview: true
      });
    
    //   console.log('Mixpanel Config:', {
    //     token: MIXPANEL_TOKEN ? 'Token configurado' : 'Sin token',
    //     environment: import.meta.env.VITE_VERCEL_ENV || 'local',
    //     debug: MIXPANEL_DEBUG
    //   });
    

    // Genera o recupera un ID de usuario anónimo
    this.anonymousId = this.getOrCreateAnonymousId();
    this.identifyUser(this.anonymousId);
  }

  // Método para obtener o crear un ID de usuario anónimo
  private getOrCreateAnonymousId(): string {
    // Intenta recuperar de localStorage primero
    let storedId = localStorage.getItem('mixpanel_anonymous_id');
    
    if (!storedId) {
      // Si no existe, genera uno nuevo
      storedId = uuidv4();
      localStorage.setItem('mixpanel_anonymous_id', storedId);
    }

    return storedId;
  }

  // Método para rastrear un evento genérico
  trackEvent(eventName: string, properties: Record<string, any> = {}) {
    try {
      // Añade el ID anónimo a todas las propiedades del evento
      mixpanel.track(eventName, {
        ...properties,
        'Anonymous ID': this.anonymousId
      });
    } catch (error) {
      console.error('Error tracking event:', error);
    }
  }

  // Método para identificar un usuario (puede ser ID anónimo o real)
  identifyUser(userId: string) {
    try {
      mixpanel.identify(userId);
    } catch (error) {
      console.error('Error identifying user:', error);
    }
  }

  // Método para establecer propiedades del perfil de usuario
  setUserProperties(properties: Record<string, any>) {
    try {
      mixpanel.people.set({
        ...properties,
        '$anonymous_id': this.anonymousId
      });
    } catch (error) {
      console.error('Error setting user properties:', error);
    }
  }

  // Método para incrementar propiedades numéricas del perfil
  incrementUserProperty(property: string, value: number) {
    try {
      mixpanel.people.increment(property, value);
    } catch (error) {
      console.error('Error incrementing user property:', error);
    }
  }

  // Método para rastrear páginas (útil en aplicaciones de una sola página)
  trackPageView(pageName: string, properties: Record<string, any> = {}) {
    try {
      mixpanel.track('Page View', {
        'Page Name': pageName,
        ...properties,
        'Anonymous ID': this.anonymousId
      });
    } catch (error) {
      console.error('Error tracking page view:', error);
    }
  }
}

// Exporta una instancia singleton
export default new MixpanelService();