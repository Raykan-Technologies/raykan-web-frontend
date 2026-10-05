export interface IAppMenu {
    menu: string;
    /**
     * Route name
     */
    route: string;
    child?: Array<IAppMenu>;
}

/**
 * Site footer look (route meta `footer`)
 * - solid: primary blue (about)
 * - transparent: no background, laid over the page's last section (home)
 * - gradient: fading into primary blue (default, every other page)
 */
export type TFooterVariant = 'solid' | 'transparent' | 'gradient'

export type TKebab<T extends string, A extends string = ""> =
    T extends `${infer F}${infer R}`
    ? TKebab<R, `${A}${F extends Lowercase<F> ? "" : "-"}${Lowercase<F>}`>
    : A

export type TKebabKeys<T> = { [K in keyof T as K extends string ? TKebab<Uncapitalize<K>> : K]: T[K] };
