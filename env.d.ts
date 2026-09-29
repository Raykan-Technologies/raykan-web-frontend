/// <reference types="vite/client" />

interface ImportMetaEnv {
    /**
     * Application name
     */
    readonly VITE_APP_NAME: string;
    /**
     * Application locale
     */
    readonly VITE_LOCALE: string;
    /**
     * Application locale fallback
     */
    readonly VITE_FALLBACK_LOCALE: string;
}
