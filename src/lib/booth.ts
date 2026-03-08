interface Booth {
    boothType: 'サークル新歓企画' | 'TPG企画';
    boothImg: ImageMetadata;
    boothTitle: string;
    boothDescription: string;
    boothLocation: string[];
    hasMapLink: boolean;
    hasCircleLink: boolean;
    MapLink?: string;
}

export type { Booth };

import sampleBoothImg from '@assets/booth/booth_sample.jpg';

export const boothData: Booth[] = [
    {
        boothType: 'サークル新歓企画',
        boothImg: sampleBoothImg,
        boothTitle: 'サークルブース',
        boothDescription: '学内最大級の合同新歓イベントならでは！40近くの公認・非公認サークルが一挙に会します',
        boothLocation: ['Taki Plaza 2F', 'Taki Plaza B2F'],
        hasMapLink: true,
        hasCircleLink: true,
        MapLink: '#',
    },
    {
        boothType: 'サークル新歓企画',
        boothImg: sampleBoothImg,
        boothTitle: 'ワークショップ',
        boothDescription: '主にものつくり系の団体によるワークショップ形式のイベントが楽しめます！',
        boothLocation: ['Taki Plaza 2F'],
        hasMapLink: true,
        hasCircleLink: true,
        MapLink: '#',
    },
    {
        boothType: 'サークル新歓企画',
        boothImg: sampleBoothImg,
        boothTitle: 'トーク・ステージ企画',
        boothDescription: 'サークルの活動内容をより深く知ることができるトークや、ステージでのパフォーマンスが楽しめます！',
        boothLocation: ['70周年記念講堂', 'Taki Plaza 外階段'],
        hasMapLink: true,
        hasCircleLink: false,
        MapLink: '#',
    },
    {
        boothType: 'TPG企画',
        boothImg: sampleBoothImg,
        boothTitle: 'ボードゲームコーナー',
        boothDescription: 'ボードゲームを楽しみながら交流できるコーナーです！',
        boothLocation: ['Taki Plaza B1F'],
        hasMapLink: true,
        hasCircleLink: false,
        MapLink: '#',
    },
    {
        boothType: 'TPG企画',
        boothImg: sampleBoothImg,
        boothTitle: '新入生に聞いてみた！',
        boothDescription: '質問に答えてみましょう！',
        boothLocation: ['Taki Plaza B2F'],
        hasMapLink: false,
        hasCircleLink: false,
        MapLink: '#',
    },
    {
        boothType: 'TPG企画',
        boothImg: sampleBoothImg,
        boothTitle: 'キムワイプ卓球',
        boothDescription: 'キムワイプを使った卓球です！',
        boothLocation: ['Taki Plaza B1F'],
        hasMapLink: true,
        hasCircleLink: false,
        MapLink: '#',
    },
];