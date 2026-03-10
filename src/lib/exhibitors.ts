type BoothType = "サークルブース" | "ワークショップ" | "トーク・ステージ企画";

export type exhibitor = {
    exhibitorName: string;
    exhibitorDescription: string;
    exhibitorIcon: ImageMetadata;
    exhibitorPhoto: ImageMetadata;
    booths: BoothType[];
    xLink: string | null;
    instagramLink: string | null;
    youtubeLink: string | null;
    webisiteLink: string | null;
}


import sampleBoothImg from '@assets/booth/booth_sample.jpg';

export const exhibitorsData: exhibitor[] = [
    {
        exhibitorName: "サークルA",
        exhibitorDescription: "サークルAは、学生が主体となって活動するサークルです。様々なイベントや活動を通じて、学生同士の交流を深めています。",
        exhibitorIcon: sampleBoothImg,
        exhibitorPhoto: sampleBoothImg,
        booths: ["サークルブース", "ワークショップ"],
        xLink: "https://twitter.com/circleA",
        instagramLink: "https://www.instagram.com/circleA",
        youtubeLink: null,
        webisiteLink: "https://www.circleA.com",
    },
    {
        exhibitorName: "サークルB",
        exhibitorDescription: "サークルBは、文化系の活動を中心に行うサークルです。音楽やアートなど、多彩なジャンルのイベントを開催しています。",
        exhibitorIcon: sampleBoothImg,
        exhibitorPhoto: sampleBoothImg,
        booths: ["トーク・ステージ企画"],
        xLink: null,
        instagramLink: "https://www.instagram.com/circleB",
        youtubeLink: "https://www.youtube.com/circleB",
        webisiteLink: null,
    },
    // 他の出展者データも同様に追加
];