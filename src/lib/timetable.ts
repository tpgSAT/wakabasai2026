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
        eventName: "腕相撲大会または部員紹介",
        exhibitor: "アメリカンフットボール部",
        location: "Taki Plaza 外階段",
        startTime: "16:00",
        endTime: "16:25",
        days: ["4/10"],
    },
    {
        eventName: "テニス部の活動紹介",
        exhibitor: "硬式庭球部",
        location: "70周年記念講堂",
        startTime: "16:30",
        endTime: "16:45",
        days: ["4/10"],
    },
    {
        eventName: "あじわい新歓アカペラライブ",
        exhibitor: "あじわい",
        location: "70周年記念講堂",
        startTime: "17:00",
        endTime: "18:00",
        days: ["4/10"],
    },
    {
        eventName: "ジャグてっくジャグリングステージ",
        exhibitor: "ジャグてっく",
        location: "Taki Plaza 外階段",
        startTime: "18:00",
        endTime: "19:00",
        days: ["4/10"],
    },
    {
        eventName: "ロック研究会大演奏会",
        exhibitor: "ロック研究会",
        location: "70周年記念講堂",
        startTime: "19:00",
        endTime: "19:45",
        days: ["4/10"],
    },
    {
        eventName: "ボート部疑似ボート体験会",
        exhibitor: "漕艇部",
        location: "Taki Plaza 2F ワークショップ",
        startTime: "16:15",
        endTime: "18:00",
        days: ["4/10"],
    },
    {
        eventName: "レゴを組み立てよう！",
        exhibitor: "レゴ同好会",
        location: "Taki Plaza 2F ワークショップ",
        startTime: "18:15",
        endTime: "20:00",
        days: ["4/10"],
    },
    {
        eventName: "ハンドメイド・デザイン教室",
        exhibitor: "デザイン研",
        location: "Taki Plaza 2F ワークショップ",
        startTime: "16:15",
        endTime: "20:00",
        days: ["4/10"],
    },
];
