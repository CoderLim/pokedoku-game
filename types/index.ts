
export interface IGameConfig {
    title: string;
    logo: string;
    /** 嵌入的游戏 */
    url: string;
}

export interface PageParams {
    [key: string]: any
    locale: string
    gameName: string
}