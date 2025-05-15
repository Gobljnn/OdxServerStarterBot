import type { Client } from "discord.js";
import config from "../../../config.json";

const { Prod: prodServer, Dev: devServer } = config.config[0].Server;
const { Prod: prodChannel, Dev: devChannel } = config.config[0].Channels;

export function shouldSendResponse(client: Client, channelId: string) {
  if (channelId === devChannel || channelId === prodChannel) return true;
  return false;
}
