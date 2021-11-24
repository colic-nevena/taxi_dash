import { MqttClient } from "mqtt";

export default interface IBaseRepository {
    connectMqtt(): Promise<MqttClient>;
}