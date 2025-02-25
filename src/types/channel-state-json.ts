import { UserStateJson } from ".";
import { TrackName } from "../enums";

export type ChannelStateJson = {
  readonly channelId: string;
  readonly usedTracks: TrackName[];
  readonly userStates: Record<string, UserStateJson>;
};
