export type EventLocation =
  | "Taki Plaza B2F キッチン"
  | "70周年記念講堂"
  | "Taki Plaza 外階段"
  | "Taki Plaza 2F ワークショップ";

type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type Hour = `0${Digit}` | `1${Digit}` | `2${"0" | "1" | "2" | "3"}`;
type Minute = `${"0" | "1" | "2" | "3" | "4" | "5"}${Digit}`;

export type Time = `${Hour}:${Minute}`;
export type EventDay = "4/10" | "4/11";

export type Event = {
  eventName: string;
  exhibitor: string;
  location: EventLocation;
  startTime: Time;
  endTime: Time;
  days: EventDay[];
};

export const eventData: Event[] = [
    {
        eventName: "ボート部体験会",
        exhibitor: "ボート部",
        location: "Taki Plaza B2F キッチン",
        startTime: "10:00",
        endTime: "12:00",
        days: ["4/10"],
    },
    {
        eventName: "ボート部体験会",
        exhibitor: "ボート部",
        location: "70周年記念講堂",
        startTime: "13:00",
        endTime: "14:00",
        days: ["4/10", "4/11"],
    },
    {
        eventName: "ボート部体験会",
        exhibitor: "ボート部",
        location: "Taki Plaza 2F ワークショップ",
        startTime: "13:00",
        endTime: "15:00",
        days: ["4/10"],
    },
    {
        eventName: "ボート部体験会",
        exhibitor: "ボート部",
        location: "Taki Plaza 2F ワークショップ",
        startTime: "13:00",
        endTime: "15:00",
        days: ["4/10"],
    },
    {
        eventName: "ボート部体験会",
        exhibitor: "ボート部",
        location: "Taki Plaza B2F キッチン",
        startTime: "14:00",
        endTime: "15:15",
        days: ["4/11"],
    },
];
