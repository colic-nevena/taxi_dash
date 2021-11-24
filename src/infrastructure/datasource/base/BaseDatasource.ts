import { MqttClient } from "mqtt";
import IBaseDatasource from "./IBaseDatasource";

const mqtt = require("mqtt");
const connectionOptions = {
  keepalive: 30,
  protocolId: "MQTT",
  protocolVersion: 4,
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
  will: {
    topic: "WillMsg",
    payload: "Connection Closed abnormally..!",
    qos: 0,
    retain: false,
  },
  rejectUnauthorized: false
};

export class BaseDataSourceError extends Error {
  constructor(message: string) {
    super(`[BaseDataSource] Error - ${message}`);
  }
}

export default class BaseDataSource implements IBaseDatasource {
  async connectMqtt(): Promise<MqttClient> {
    return await mqtt.connect("ws://broker.emqx.io:8083/mqtt", connectionOptions);
  }
}