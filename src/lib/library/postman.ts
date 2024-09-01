import axios, { AxiosHeaders, type AxiosInstance, type AxiosResponse } from "axios";

export interface ApiOptionsInterface {
    url: string;
    data: Record<string, unknown>;
    headers: AxiosHeaders;
}

export default class Postman {
    private axiosInstance: AxiosInstance;

    constructor(baseUrl: string, headers: AxiosHeaders, token?: string) {
        if (token) {
            this.axiosInstance = axios.create({
                baseURL: baseUrl,
                headers: {
                    Authorization: `Bearer ${token}`,
                    ...headers,
                },
            });
        } else {
            this.axiosInstance = axios.create({
                baseURL: baseUrl,
                headers,
            });
        }
    }

    get instance() {
        return this.axiosInstance;
    }

    async post<T extends AxiosResponse>(options: ApiOptionsInterface): Promise<AxiosResponse>{
        return await this.axiosInstance.post<T>(options.url, options.data, { headers: options.headers })
    }

    async get<T extends AxiosResponse>(options: ApiOptionsInterface): Promise<AxiosResponse>{
        return await this.axiosInstance.get<T>(options.url, { headers: options.headers })
    }
}
