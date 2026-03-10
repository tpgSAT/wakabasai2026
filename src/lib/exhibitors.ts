type BoothType = "サークルブース" | "ワークショップ" | "トーク・ステージ企画";

export type exhibitor = {
    exhibitorName: string;
    exhibitorDescription: string;
    exhibitorIcon: ImageMetadata;
    exhibitorPhoto: ImageMetadata | null;
    booths: BoothType[];
    xLink: string | null;
    instagramLink: string | null;
    youtubeLink: string | null;
    websiteLink: string | null;
}


import sampleBoothImg from '@assets/booth/booth_sample.jpg';

export const exhibitorsData: exhibitor[] = [
    {
        exhibitorName: "ロボット技術研究会",
        exhibitorDescription: "電子工作から本格的なロボット制作まで幅広い活動を行う団体です。部員は個人またはグループで、それぞれの好みや目標に応じて活動しています。初心者でも大丈夫！私たちと一緒にロボット作りをしましょう！",
        exhibitorIcon: sampleBoothImg,
        exhibitorPhoto: sampleBoothImg,
        booths: ["サークルブース", "ワークショップ"],
        xLink: "https://twitter.com/circleA",
        instagramLink: "https://www.instagram.com/circleA",
        youtubeLink: null,
        websiteLink: "https://www.circleA.com",
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
        websiteLink: null,
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
        websiteLink: null,
    },
    // 他の出展者データも同様に追加
];