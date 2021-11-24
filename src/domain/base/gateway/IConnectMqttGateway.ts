import { MqttClient } from "mqtt";

export default interface IConnectMqttGateway {
    connectMqtt(): Promise<MqttClient>;
}