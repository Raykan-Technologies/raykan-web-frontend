export interface IAppMenu {
    menu: string;
    /**
     * Route name
     */
    route: string;
    child?: Array<IAppMenu>;
}

export type TKebab<T extends string, A extends string = ""> =
    T extends `${infer F}${infer R}`
    ? TKebab<R, `${A}${F extends Lowercase<F> ? "" : "-"}${Lowercase<F>}`>
    : A

export type TKebabKeys<T> = { [K in keyof T as K extends string ? TKebab<Uncapitalize<K>> : K]: T[K] };
