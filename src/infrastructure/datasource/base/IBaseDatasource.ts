import { MqttClient } from "mqtt";

export default interface IBaseDatasource {
    connectMqtt(): Promise<MqttClient>;
}