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
  description: string;
  location: EventLocation;
  startTime: Time;
  endTime: Time;
  days: EventDay[];
};

export const eventData: Event[] = [
    {
        eventName: "腕相撲大会または部員紹介",
        exhibitor: "アメリカンフットボール部",
        description: "",
        location: "Taki Plaza 外階段",
        startTime: "16:00",
        endTime: "16:25",
        days: ["4/10"],
    },
    {
        eventName: "テニス部の活動紹介",
        exhibitor: "東京科学大学硬式庭球部",
        description: "部の活動紹介的なトークイベント",
        location: "70周年記念講堂",
        startTime: "16:30",
        endTime: "16:45",
        days: ["4/10"],
    },
    {
        eventName: "あじわい新歓アカペラライブ",
        exhibitor: "科学大アカペラサークルあじわい",
        description: "アカペラの演奏、例年約２時間",
        location: "70周年記念講堂",
        startTime: "17:00",
        endTime: "18:00",
        days: ["4/10"],
    },
    {
        eventName: "ジャグてっくジャグリングステージ",
        exhibitor: "ジャグてっく",
        description: "ジャグてっくのメンバーによるジャグリングパフォーマンス、40～60分ほど",
        location: "Taki Plaza 外階段",
        startTime: "18:00",
        endTime: "19:00",
        days: ["4/10"],
    },
    {
        eventName: "ロック研究会大演奏会",
        exhibitor: "ロック研究会",
        description: "",
        location: "70周年記念講堂",
        startTime: "19:00",
        endTime: "19:45",
        days: ["4/10"],
    },
    {
        eventName: "ボート部擬似ボート体験会",
        exhibitor: "東京科学大学理工学系漕艇部",
        description: "ローイングエルゴの100mタイムトライアル大会",
        location: "Taki Plaza 2F ワークショップ",
        startTime: "16:15",
        endTime: "18:00",
        days: ["4/10"],
    },
    {
        eventName: "レゴを組み立てよう！",
        exhibitor: "東京科学大学レゴ同好会",
        description: "私たちレゴ同好会のメンバーが作ったレゴのオリジナルキットを組み立ててみましょう。",
        location: "Taki Plaza 2F ワークショップ",
        startTime: "18:15",
        endTime: "20:00",
        days: ["4/10"],
    },
    {
        eventName: "ハンドメイド・デザイン教室",
        exhibitor: "デザイン研究会",
        description: "",
        location: "Taki Plaza 2F ワークショップ",
        startTime: "16:15",
        endTime: "20:00",
        days: ["4/10"],
    },
    {
        eventName: "とこおけアンサンブルコンサート",
        exhibitor: "東京科学大学管弦楽団",
        description: "弦、木管、金管、打楽器各セクションからアンサンブルをお届けします",
        location: "70周年記念講堂",
        startTime: "10:00",
        endTime: "11:00",
        days: ["4/11"],
    },
    {
        eventName: "サイテク活動紹介",
        exhibitor: "ScienceTechno",
        description: "",
        location: "70周年記念講堂",
        startTime: "11:15",
        endTime: "11:45",
        days: ["4/11"],
    },
    {
        eventName: "クライネスの合唱ステージ",
        exhibitor: "東京科学大学混声合唱団コール・クライネス",
        description: "50人規模の混声合唱ステージ",
        location: "70周年記念講堂",
        startTime: "12:00",
        endTime: "12:15",
        days: ["4/11"],
    },
    {
        eventName: "オリエンってなんですか？",
        exhibitor: "オリエンテーリング部",
        description: "部の活動についての説明。時間は15分から30分を予定しています。",
        location: "70周年記念講堂",
        startTime: "12:30",
        endTime: "13:00",
        days: ["4/11"],
    },
    {
        eventName: "激アツ！ラテンジャズライブ",
        exhibitor: "ロス・ガラチェロス",
        description: "前半は２年生中心のJr.バンドが演奏 後半は３年生中心のReg.バンドが演奏",
        location: "70周年記念講堂",
        startTime: "14:00",
        endTime: "15:00",
        days: ["4/11"],
    },
    {
        eventName: "プラタナスの会若葉祭コンサート",
        exhibitor: "プラタナスの会",
        description: "",
        location: "70周年記念講堂",
        startTime: "16:00",
        endTime: "17:00",
        days: ["4/11"],
    },
    {
        eventName: "心身統一合氣道部若葉祭演武会",
        exhibitor: "心身統一合氣道部",
        description: "",
        location: "Taki Plaza 外階段",
        startTime: "13:00",
        endTime: "14:00",
        days: ["4/11"],
    },
    {
        eventName: "ダンスサークルH2O公演",
        exhibitor: "ストリートダンスサークルH2O",
        description: "",
        location: "Taki Plaza 外階段",
        startTime: "15:00",
        endTime: "15:45",
        days: ["4/11"],
    },
    {
        eventName: "茶道部最中づくりお茶点て体験会",
        exhibitor: "東京科学大学裏千家茶道部",
        description: "最中をつくって食べたあと抹茶たて体験をできます。",
        location: "Taki Plaza B2F キッチン",
        startTime: "12:00",
        endTime: "15:00",
        days: ["4/11"],
    },
    {
        eventName: "サイテク工作教室",
        exhibitor: "Science Techno",
        description: "",
        location: "Taki Plaza 2F ワークショップ",
        startTime: "10:00",
        endTime: "13:45",
        days: ["4/11"],
    },
    {
        eventName: "フライトシミュレーター体験会",
        exhibitor: "グライダー部",
        description: "本物の機体から生まれたシミュレーターを体験！",
        location: "Taki Plaza 2F ワークショップ",
        startTime: "14:00",
        endTime: "17:00",
        days: ["4/11"],
    },
    {
        eventName: "イラストと電子音楽の制作体験会",
        exhibitor: "東京科学大学デジタル創作同好会traP",
        description: "昨年と同様に、電子音楽の制作体験（DTMソフトを用いた打ち込み）と、イラスト制作体験（用意した線画へのデジタル着彩）を行えるイベントを開催する予定です。",
        location: "Taki Plaza 2F ワークショップ",
        startTime: "13:15",
        endTime: "17:00",
        days: ["4/11"],
    },

];
