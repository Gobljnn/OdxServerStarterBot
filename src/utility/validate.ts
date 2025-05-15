import type { Client } from "discord.js";
import config from "../config.json";
import authUsers from "../authUsers.json"

const { Prod: prodServer, Dev: devServer } = config.config[0].Server;
const { Prod: prodChannel, Dev: devChannel } = config.config[0].Channels;
const authorizedUsers: string[] = authUsers.AuthorizedUsers;

export function shouldSendResponse(userId: string, channelId: string) {
  if (!authorizedUsers.includes(userId)) return false;
  if (channelId === devChannel || channelId === prodChannel) return true;
  return false;
}
