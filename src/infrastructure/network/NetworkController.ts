import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { HttpData } from "../../config/Config";

export interface MyHttpConfig extends AxiosRequestConfig {
    useToken?: boolean;
}

export default class NetworkController {

    private instance: AxiosInstance;
    private lock: boolean = false;

    constructor(private httpConfig: HttpData) {
        this.instance = axios.create({
            baseURL: this.httpConfig.baseUrl
        })
        this.instance.interceptors.request.use((config) => this.configureRequest(config), (error) => Promise.reject(error));
        this.instance.interceptors.response.use((response) => response, (err) => this.handleResponse(err));
    }

    private configureRequest(config: MyHttpConfig) {
        if (config.useToken === true)
            config.headers = { ...config.headers, "Authorization": `Bearer ${localStorage.getItem("accessToken")}` }
        return config;
    }

    private async handleResponse(err: any) {
        if (err.response && err.response.status) {
            if (err.response.status === 403 || err.response.status === 401) {
                await this.wait();
                this.lock = true;
                await this.refreshToken();
                this.lock = false;
                console.log("Refreshed");
                return this.request(err.response.config);
            }
        }
        return Promise.reject(err)
    }

    private async refreshToken() {
        const data = new URLSearchParams()
        data.append("refresh_token", localStorage.getItem("refreshToken") as string);
        data.append("grant_type", "refresh_token");
        data.append("client_id", "web");

        try {
            const result: any = await axios({
                url: `${this.httpConfig.baseUrl}/utility-app/signin`,
                method: "POST",
                data,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
            localStorage.setItem("accessToken", result.data.access_token)
            localStorage.setItem("refreshToken", result.data.refresh_token)
        }
        catch (ee) {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            console.log("Refresh token fails...");
            console.log("Logout")
            throw ee;
        }
    }

    private wait(): Promise<void> {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (this.lock)
                    this.wait();
                resolve();
            }, 500)
        })
    }

    public request<T>(config: MyHttpConfig): Promise<AxiosResponse<T>> {
        return this.instance.request<T>(config);
    }
}