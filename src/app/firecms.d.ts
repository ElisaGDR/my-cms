declare module "firecms" {
    export type Property<T> = {
      dataType: string;
      name: string;
      properties?: Record<string, Property<any>>;
    };
  
    export function buildCollection<T>(config: {
      name: string;
      path: string;
      properties: Record<string, Property<any>>;
    }): any;
  
    export function buildProperty(config: Property<any>): Property<any>;
  
    export type Authenticator<T> = (user: T | null) => boolean | Promise<boolean>;
  
    export const FirebaseCMSApp: React.FC<{
      name: string;
      authentication: Authenticator<any>;
      collections: any[];
      firebaseConfig: any;
      primaryColor: string;
      secondaryColor: string;
      signInOptions: { provider: string }[];
    }>;
  }
  