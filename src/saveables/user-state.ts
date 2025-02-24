import * as discordJs from "discord.js";
import { Json, Saveable, Utils } from "../core";
import { UserStateJson } from "../types";

// TODO: finish wiring up user state for to existing data structure
export class UserState implements Saveable {
  public readonly id: string;

  public nickname: string | null = null;

  public constructor(userOrJson: discordJs.User | Json) {
    if (userOrJson instanceof discordJs.User) {
      const user: discordJs.User = userOrJson;
      this.id = user.id;
    } else {
      const json: Json = userOrJson;
      this.id = Utils.getJsonEntry(json, "id") as string;
      this.nickname = Utils.getJsonEntry(json, "nickname") as string;
    }
  }

  public toJson(): UserStateJson {
    return {
      id: this.id,
      nickname: this.nickname,
    };
  }
}
