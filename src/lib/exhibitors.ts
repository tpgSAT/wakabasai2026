
import exhibitor0Logo from '@assets/exhibitors/exhibitor0_logo.jpg';
import exhibitor0Photo from '@assets/exhibitors/exhibitor0_photo.jpg';
import exhibitor1Logo from '@assets/exhibitors/exhibitor1_logo.jpg';
import exhibitor2Logo from '@assets/exhibitors/exhibitor2_logo.png';
import exhibitor2Photo from '@assets/exhibitors/exhibitor2_photo.jpg';
import exhibitor3Logo from '@assets/exhibitors/exhibitor3_logo.jpg';
import exhibitor3Photo from '@assets/exhibitors/exhibitor3_photo.jpg';
import exhibitor4Logo from '@assets/exhibitors/exhibitor4_logo.jpg';
import exhibitor4Photo from '@assets/exhibitors/exhibitor4_photo.jpg';
import exhibitor5Logo from '@assets/exhibitors/exhibitor5_logo.jpg';
import exhibitor5Photo from '@assets/exhibitors/exhibitor5_photo.jpg';
import exhibitor6Logo from '@assets/exhibitors/exhibitor6_logo.jpg';
import exhibitor6Photo from '@assets/exhibitors/exhibitor6_photo.jpg';
import exhibitor7Logo from '@assets/exhibitors/exhibitor7_logo.png';
import exhibitor7Photo from '@assets/exhibitors/exhibitor7_photo.jpg';
import exhibitor8Logo from '@assets/exhibitors/exhibitor8_logo.jpg';
import exhibitor8Photo from '@assets/exhibitors/exhibitor8_photo.jpg';
import exhibitor9Logo from '@assets/exhibitors/exhibitor9_logo.png';
import exhibitor9Photo from '@assets/exhibitors/exhibitor9_photo.jpg';
import exhibitor10Logo from '@assets/exhibitors/exhibitor10_logo.jpg';
import exhibitor10Photo from '@assets/exhibitors/exhibitor10_photo.jpg';
import exhibitor11Logo from '@assets/exhibitors/exhibitor11_logo.jpg';
import exhibitor11Photo from '@assets/exhibitors/exhibitor11_photo.jpg';
import exhibitor12Logo from '@assets/exhibitors/exhibitor12_logo.jpg';
import exhibitor12Photo from '@assets/exhibitors/exhibitor12_photo.jpg';
import exhibitor13Logo from '@assets/exhibitors/exhibitor13_logo.png';
import exhibitor13Photo from '@assets/exhibitors/exhibitor13_photo.jpg';
import exhibitor14Logo from '@assets/exhibitors/exhibitor14_logo.jpg';
import exhibitor14Photo from '@assets/exhibitors/exhibitor14_photo.jpg';
import exhibitor15Logo from '@assets/exhibitors/exhibitor15_logo.png';
import exhibitor15Photo from '@assets/exhibitors/exhibitor15_photo.png';
import exhibitor16Logo from '@assets/exhibitors/exhibitor16_logo.jpg';
import exhibitor16Photo from '@assets/exhibitors/exhibitor16_photo.jpg';
import exhibitor17Logo from '@assets/exhibitors/exhibitor17_logo.png';
import exhibitor17Photo from '@assets/exhibitors/exhibitor17_photo.jpg';
import exhibitor18Logo from '@assets/exhibitors/exhibitor18_logo.jpg';
import exhibitor18Photo from '@assets/exhibitors/exhibitor18_photo.jpg';
import exhibitor19Logo from '@assets/exhibitors/exhibitor19_logo.jpg';
import exhibitor19Photo from '@assets/exhibitors/exhibitor19_photo.jpg';
import exhibitor20Logo from '@assets/exhibitors/exhibitor20_logo.jpg';
import exhibitor20Photo from '@assets/exhibitors/exhibitor20_photo.jpg';
import exhibitor21Logo from '@assets/exhibitors/exhibitor21_logo.jpg';
import exhibitor21Photo from '@assets/exhibitors/exhibitor21_photo.jpg';
import exhibitor22Logo from '@assets/exhibitors/exhibitor22_logo.png';
import exhibitor22Photo from '@assets/exhibitors/exhibitor22_photo.jpg';
import exhibitor23Logo from '@assets/exhibitors/exhibitor23_logo.png';
import exhibitor23Photo from '@assets/exhibitors/exhibitor23_photo.jpg';
import exhibitor24Logo from '@assets/exhibitors/exhibitor24_logo.jpg';
import exhibitor24Photo from '@assets/exhibitors/exhibitor24_photo.jpg';
import exhibitor25Logo from '@assets/exhibitors/exhibitor25_logo.jpg';
import exhibitor25Photo from '@assets/exhibitors/exhibitor25_photo.jpg';
import exhibitor26Logo from '@assets/exhibitors/exhibitor26_logo.jpg';
import exhibitor26Photo from '@assets/exhibitors/exhibitor26_photo.png';
import exhibitor27Logo from '@assets/exhibitors/exhibitor27_logo.png';
import exhibitor27Photo from '@assets/exhibitors/exhibitor27_photo.jpg';
import exhibitor28Logo from '@assets/exhibitors/exhibitor28_logo.jpg';
import exhibitor28Photo from '@assets/exhibitors/exhibitor28_photo.jpg';
import exhibitor29Logo from '@assets/exhibitors/exhibitor29_logo.png';
import exhibitor29Photo from '@assets/exhibitors/exhibitor29_photo.jpg';
import exhibitor30Logo from '@assets/exhibitors/exhibitor30_logo.png';
import exhibitor30Photo from '@assets/exhibitors/exhibitor30_photo.jpg';
import exhibitor31Logo from '@assets/exhibitors/exhibitor31_logo.jpg';
import exhibitor31Photo from '@assets/exhibitors/exhibitor31_photo.jpg';
import exhibitor32Logo from '@assets/exhibitors/exhibitor32_logo.jpg';
import exhibitor33Logo from '@assets/exhibitors/exhibitor33_logo.jpg';
import exhibitor34Logo from '@assets/exhibitors/exhibitor34_logo.jpg';
import exhibitor34Photo from '@assets/exhibitors/exhibitor34_photo.jpg';
import exhibitor35Logo from '@assets/exhibitors/exhibitor35_logo.jpg';
import exhibitor36Logo from '@assets/exhibitors/exhibitor36_logo.png';
import exhibitor36Photo from '@assets/exhibitors/exhibitor36_photo.jpg';

type BoothType = "サークルブース" | "ワークショップ" | "ステージ企画";

type EventDay = "4/10" | "4/11";

export type exhibitor = {
    exhibitorName: string;
    exhibitorDescription: string;
    exhibitorIcon: ImageMetadata;
    exhibitorPhoto: ImageMetadata | null;
    booths: BoothType[];
    days: EventDay[];
    xLink: string | null;
    instagramLink: string | null;
    youtubeLink: string | null;
    websiteLink: string | null;
}


export const exhibitors: exhibitor[] = [

{
  exhibitorName: "ロボット技術研究会",
  exhibitorDescription: "電子工作から本格的なロボット制作まで幅広い活動を行う団体です。\n部員は個人またはグループで、それぞれの好みや目標に応じて活動しています。\n初心者でも大丈夫！私たちと一緒にロボット作りをしましょう！",
  exhibitorIcon: exhibitor0Logo,
  exhibitorPhoto: exhibitor0Photo,
  booths: ["サークルブース"],
  days: ["4/11"],
  xLink: "https://x.com/ssr_welcome",
  instagramLink: null,
  youtubeLink: null,
  websiteLink: "https://www.rogiken.org/"
}
,
{
  exhibitorName: "ロス・ガラチェロス",
  exhibitorDescription: "ロス・ガラチェロスは激アツラテン🎺ジャズビッグバンドサークル！陽気なラテンリズムで演奏し、仲間と熱く音楽を楽しめる最高の場所です！",
  exhibitorIcon: exhibitor1Logo,
  exhibitorPhoto: null,
  booths: ["ステージ企画"],
  days: ["4/11"],
  xLink: "https://x.com/losguarajr",
  instagramLink: "https://www.instagram.com/los_guaracheros.jr",
  youtubeLink: "https://youtube.com/@losguaracheros9283?si=zZ2ra43B-A2_Wfax",
  websiteLink: "http://losguara.s100.coreserver.jp/"
}
,
{
  exhibitorName: "東京科学大学理工学系漕艇部",
  exhibitorDescription: "ボート部では、初心者から経験者まで楽しめる環境を提供しています。様々な種類のボートを漕いで仲間と共に成長し、達成感を味わえる充実した学生生活を送れます。興味のある方はぜひご参加ください！",
  exhibitorIcon: exhibitor2Logo,
  exhibitorPhoto: exhibitor2Photo,
  booths: ["サークルブース", "ワークショップ"],
  days: ["4/10","4/11"],
  xLink: "https://x.com/st_rowing2026",
  instagramLink: "https://www.instagram.com/sciencetokyo_boat2026",
  youtubeLink: "https://youtube.com/channel/UCJYMqA7YaORz-yyWltEw4Hg?si=b9J-G7TCQrMLJRkR",
  websiteLink: "https://rowingkuramae.com/"
}
,
{
  exhibitorName: "東京科学大学学生ボランティアグループ（VG）",
  exhibitorDescription: "復興支援・防災活動・地域連携の3つを軸に活動する大学公認のボランティア団体です。学士から博士まで、幅広いメンバーで活動しています。興味のある方は、ぜひ週1回昼休みのミーティングに遊びに来てください！",
  exhibitorIcon: exhibitor3Logo,
  exhibitorPhoto: exhibitor3Photo,
  booths: ["サークルブース"],
  days: ["4/11"],
  xLink: "https://x.com/titechVG",
  instagramLink: "https://www.instagram.com/tokodai_vg/",
  youtubeLink: null,
  websiteLink: "https://www.isct.ac.jp/ja/001/about/organizations/student-support-center"
}
,
{
  exhibitorName: "ストリートダンスサークルH2O",
  exhibitorDescription: "活動は月木18:00～20:00@大岡山キャンパスです。\nMiddle, Lock, Break, House, Pop, Waackの全6\nジャンルがあり、2,3年生が約70人活動中！インカレなので他大もいます！",
  exhibitorIcon: exhibitor4Logo,
  exhibitorPhoto: exhibitor4Photo,
  booths: ["ステージ企画"],
  days: ["4/11"],
  xLink: "https://x.com/titechh2o",
  instagramLink: "https://www.instagram.com/titechh2o/",
  youtubeLink: "https://www.youtube.com/@streetdanceH20titech/",
  websiteLink: null
}
,
{
  exhibitorName: "東京科学大学硬式庭球部",
  exhibitorDescription: "科学大硬式庭球部です。男子部は週に3回、女子部は週に１回活動しています。部員構成は男子19人、女子部は13人です。練習はハードコート四面で行っています。現在新入部員大募集中です！ぜひ来てください！",
  exhibitorIcon: exhibitor5Logo,
  exhibitorPhoto: exhibitor5Photo,
  booths: ["サークルブース", "ステージ企画"],
  days: ["4/10"],
  xLink: "https://x.com/ttt_shinkan",
  instagramLink: "https://www.instagram.com/titechtennisclub/",
  youtubeLink: null,
  websiteLink: "https://tokyotech.wixsite.com/tokyotechtennis"
}
,
{
  exhibitorName: "Sylph",
  exhibitorDescription: "Sylphはハンググライダーやパラグライダーに乗って空を飛ぶ部活です！茨城県の足尾山というエリアで色々な大学の仲間と一緒に空を飛んでます！興味のある方はぜひ体験会や説明会に来てください！",
  exhibitorIcon: exhibitor6Logo,
  exhibitorPhoto: exhibitor6Photo,
  booths: ["サークルブース"],
  days: ["4/10"],
  xLink: "https://x.com/sylph2023",
  instagramLink: "https://www.instagram.com/sylph__isct",
  youtubeLink: null,
  websiteLink: "https://www.team-sylph.com/"
}
,
{
  exhibitorName: "東京科学大学デジタル創作同好会traP",
  exhibitorDescription: "総合デジタル創作サークルです。電子音楽、イラスト制作といった創作活動に加えて、競技プログラミング、セキュリティ、機械学習のコンテストにも出場しているほか、Webアプリやゲーム制作にも取り組んでいます。",
  exhibitorIcon: exhibitor7Logo,
  exhibitorPhoto: exhibitor7Photo,
  booths: ["サークルブース", "ワークショップ"],
  days: ["4/11"],
  xLink: "https://x.com/traPisct",
  instagramLink: "https://www.instagram.com/trap_welcome/",
  youtubeLink: "https://www.youtube.com/@traptokyotech5606",
  websiteLink: "https://trap.jp/"
}
,
{
  exhibitorName: "東京科学大学美術部(大岡山)",
  exhibitorDescription: "美術部では日々部員が作品を作り、主に秋の工大祭と冬の国公立展での展示を行っています。伸び伸びと自由に活動できる部活です。",
  exhibitorIcon: exhibitor8Logo,
  exhibitorPhoto: exhibitor8Photo,
  booths: ["サークルブース"],
  days: ["4/10"],
  xLink: "https://x.com/titech_artclub",
  instagramLink: "https://www.instagram.com/titech_artclub",
  youtubeLink: null,
  websiteLink: null
}
,
{
  exhibitorName: "無線研究部",
  exhibitorDescription: "アマチュア無線や電子工作、コンピュータに関する幅広い活動をしています。\n部で管理しているアンテナや無線機、電子部品、測定器、サーバー、ネットワーク機器などを活用して各自が自由に活動をしています。",
  exhibitorIcon: exhibitor9Logo,
  exhibitorPhoto: exhibitor9Photo,
  booths: ["サークルブース"],
  days: ["4/10","4/11"],
  xLink: "https://x.com/JA1YAD",
  instagramLink: null,
  youtubeLink: null,
  websiteLink: "http://musenken.net/"
}
,
{
  exhibitorName: "グライダー部",
  exhibitorDescription: "入学おめでとうございます！グライダー部です！グライダーって何？簡単に言うと、エンジンのない飛行機です。風を使い、空を自由自在に飛ぶことができます。大学生活で、新しいことを始めてみませんか？",
  exhibitorIcon: exhibitor10Logo,
  exhibitorPhoto: exhibitor10Photo,
  booths: ["サークルブース", "ワークショップ"],
  days: ["4/10","4/11"],
  xLink: "https://x.com/TTglider2026",
  instagramLink: "https://www.instagram.com/titech_soaring/",
  youtubeLink: null,
  websiteLink: "https://titechgliderclub.wordpress.com/"
}
,
{
  exhibitorName: "東京科学大学管弦楽団",
  exhibitorDescription: "昨年100周年を迎え、100名程度の規模で活動しています。新入生・他大生・初心者問わず活躍中。年間を通じて多くの演奏会を行っています。5/16の春の定期演奏会のための練習見学だけでもお越しください。",
  exhibitorIcon: exhibitor11Logo,
  exhibitorPhoto: exhibitor11Photo,
  booths: ["サークルブース", "ステージ企画"],
  days: ["4/11"],
  xLink: "https://x.com/titech_kangen",
  instagramLink: "https://www.instagram.com/titech_kangen",
  youtubeLink: null,
  websiteLink: "https://isct-orch.com/"
}
,
{
  exhibitorName: "東京科学大学 弓道部",
  exhibitorDescription: "東京科学大学弓道部です！堅苦しすぎず程よく和やかな雰囲気で活動しています。経験者・未経験者問わず活躍できる環境なので、ぜひ体験会や説明会にお越しください！",
  exhibitorIcon: exhibitor12Logo,
  exhibitorPhoto: exhibitor12Photo,
  booths: ["サークルブース"],
  days: ["4/11"],
  xLink: "https://x.com/tokyotech_kyudo",
  instagramLink: "https://www.instagram.com/sciencetokyo_kyudo",
  youtubeLink: "https://www.youtube.com/@Scitokyokyudo",
  websiteLink: "https://tokyotech-kyudo.com/"
}
,
{
  exhibitorName: "プラタナスの会",
  exhibitorDescription: "プラタナスの会は、東京科学大学・大岡山キャンパスを拠点とするピアノ＆アンサンブルサークルです。演奏形態はピアノソロや連弾、弦楽器、管楽器など様々。音楽が好きな人が集まって和気藹々と活動しています。初心者の方も経験者の方も大歓迎です！",
  exhibitorIcon: exhibitor13Logo,
  exhibitorPhoto: exhibitor13Photo,
  booths: ["ステージ企画"],
  days: ["4/11"],
  xLink: "https://x.com/platanus_piano",
  instagramLink: "https://www.instagram.com/platanus_piano/",
  youtubeLink: "https://www.youtube.com/@platanus-piano-ensemble",
  websiteLink: "https://www.platanus-isct.com/"
}
,
{
  exhibitorName: "フォークソングサークル",
  exhibitorDescription: "軽音やるならFSC！\nオリジナルもコピーも、初心者も経験者も大歓迎。\n年1ライブの人から毎週ステージに立つ人まで、自分のペースでok\n仲間と切磋琢磨しながらのめり込める。\n音楽を通じた居場所、ここにあります。",
  exhibitorIcon: exhibitor14Logo,
  exhibitorPhoto: exhibitor14Photo,
  booths: ["サークルブース"],
  days: ["4/11"],
  xLink: "https://x.com/fscshinkan2026",
  instagramLink: "https://www.instagram.com/fsc_folksong",
  youtubeLink: null,
  websiteLink: null
}
,
{
  exhibitorName: "デザイン研究会",
  exhibitorDescription: "デザイン研究会は手芸、イラスト、ペーパーアート、木工、タイポグラフィおよびグラフィックデザインなどあらゆるジャンルの創作活動を行っているサークルです。",
  exhibitorIcon: exhibitor15Logo,
  exhibitorPhoto: exhibitor15Photo,
  booths: ["サークルブース", "ワークショップ"],
  days: ["4/10"],
  xLink: "https://x.com/titechdesignlab",
  instagramLink: "https://instagram.com/design_titech",
  youtubeLink: null,
  websiteLink: "https://lit.link/en/c3dc956c-9e9f-47b0-a3de-154312b59e4b?fbclid=PAZXh0bgNhZW0CMTEAAaYY975MaYaJ2mdzqBN0kbwxuTID_mASRGCkjE2WSzmv3wElEzLDUV0EwFE_aem_ZZJMKK_bdHEiwzdWRaQs_w"
}
,
{
  exhibitorName: "ジャグてっく",
  exhibitorDescription: "ジャグリングサークル、ジャグてっくです！ジャグてっくは初心者も経験者も沢山いる和気あいあいとしたサークルです！週１の全体練と、好きな時に出来るウッドデッキでの練習で、特技や趣味を増やしてみませんか？",
  exhibitorIcon: exhibitor16Logo,
  exhibitorPhoto: exhibitor16Photo,
  booths: ["ステージ企画"],
  days: ["4/10"],
  xLink: "https://x.com/jug_tech",
  instagramLink: "https://www.instagram.com/jug_tech",
  youtubeLink: "https://youtube.com/@jugtech6807",
  websiteLink: "http://www.jugtech.org"
}
,
{
  exhibitorName: "ScienceTechno",
  exhibitorDescription: "小学生を対象に、小学校や科学館などで工作教室やサイエンスショーの企画・運営を行っています。子どもたちに「科学って面白い！」と思ってもらえる活動です。部費0円、活動も自由！ぜひ参加してみてください！",
  exhibitorIcon: exhibitor17Logo,
  exhibitorPhoto: exhibitor17Photo,
  booths: ["サークルブース", "ステージ企画", "ワークショップ"],
  days: ["4/10","4/11"],
  xLink: "https://x.com/scitech_shinkan",
  instagramLink: "https://www.instagram.com/shinkan_scitech/",
  youtubeLink: null,
  websiteLink: "https://shinkan.t-scitech.net/"
}
,
{
  exhibitorName: "東京科学大学裏千家茶道部",
  exhibitorDescription: "裏千家茶道部では毎週、外部から先生をお招きして茶道のお稽古を行っています。 長く続けられる趣味が欲しい方、ゆっくりとした時間を過ごしたい方、是非お気軽にお声がけください！お待ちしています！",
  exhibitorIcon: exhibitor18Logo,
  exhibitorPhoto: exhibitor18Photo,
  booths: ["サークルブース", "ワークショップ"],
  days: ["4/11"],
  xLink: "https://x.com/titechsadou",
  instagramLink: "https://www.instagram.com/tokodaisado",
  youtubeLink: null,
  websiteLink: "https://sites.google.com/site/tokyotechsadou/"
}
,
{
  exhibitorName: "東京科学大学混声合唱団コール・クライネス",
  exhibitorDescription: "東京科学大・日本女子大・清泉女子大などの学生からなる総勢100名規模の合唱団です！昨年は全日本合唱コンクール全国大会で金賞を受賞しました！初心者大歓迎♪一緒に音楽を楽しみ、沢山の思い出を作りましょう！",
  exhibitorIcon: exhibitor19Logo,
  exhibitorPhoto: exhibitor19Photo,
  booths: ["サークルブース", "ステージ企画"],
  days: ["4/10","4/11"],
  xLink: "https://x.com/chorkleines_wlc",
  instagramLink: "https://www.instagram.com/chorkleines_wlc",
  youtubeLink: "http://www.youtube.com/@chor-kleines",
  websiteLink: "https://www.chorkleines.com/"
}
,
{
  exhibitorName: "工大祭実行委員会",
  exhibitorDescription: "工大祭実行委員会は、毎年秋に行われる学園祭「工大祭」の準備や運営を行なっています！ステージ運営や資金集め、デザインなど様々な活動をしているので、きっと自分に合った活動が見つかるはず…！\nまた、年2回の全体での旅行をはじめ、部署ごとの旅行や遊び、ごはん会などのイベントが多く、メンバー同士の仲がいいのも特長です！\n一緒に新しい工大祭を創りましょう！待ってます〜",
  exhibitorIcon: exhibitor20Logo,
  exhibitorPhoto: exhibitor20Photo,
  booths: ["サークルブース"],
  days: ["4/11"],
  xLink: "https://x.com/jizi_koudaisai",
  instagramLink: "https://www.instagram.com/jizi_koudaisai/",
  youtubeLink: "https://www.youtube.com/channel/UCPb33qE0hjNqtr1kfihfhng",
  websiteLink: "https://jizi.jp/"
}
,
{
  exhibitorName: "心身統一合氣道部",
  exhibitorDescription: "心身統一合氣道は「心と体の使い方」を学ぶ武道です。同期や先輩後輩、さらには師範やOB・OGの方々と稽古に勤しんでいます！身体を動かしたい方、武道に興味のある方大歓迎です！",
  exhibitorIcon: exhibitor21Logo,
  exhibitorPhoto: exhibitor21Photo,
  booths: ["サークルブース", "ステージ企画"],
  days: ["4/11"],
  xLink: "https://x.com/tokyotechaikido",
  instagramLink: "https://www.instagram.com/aikido_tokyotech",
  youtubeLink: null,
  websiteLink: "https://tokyotech-aikido.studio.site/"
}
,
{
  exhibitorName: "科学大アカペラサークルあじわい",
  exhibitorDescription: "東京科学大学(旧東京工業大学)唯一の公認アカペラサークルです！2013年創設、現在13年目です。音楽未経験の方や他大生も多く所属しています！",
  exhibitorIcon: exhibitor22Logo,
  exhibitorPhoto: exhibitor22Photo,
  booths: ["ステージ企画"],
  days: ["4/10"],
  xLink: "https://x.com/Toko_a_cappella",
  instagramLink: "https://www.instagram.com/titechajy",
  youtubeLink: "https://youtube.com/channel/UCgcJWQuacXZsXoUMaoPgoQw?si=uunZ4qqjwnZM5cSZ",
  websiteLink: "https://titechajy.jimdofree.com/"
}
,
{
  exhibitorName: "アニメーション研究会",
  exhibitorDescription: "アニメ研では、自主制作のアニメーションを作っています！キャラを描いたり、色を塗ったり、撮影で合成したり、皆で作業を繋いで一つの動画にしていきます。少しでも興味があれば遊びに来てね！",
  exhibitorIcon: exhibitor23Logo,
  exhibitorPhoto: exhibitor23Photo,
  booths: ["サークルブース", "ワークショップ"],
  days: ["4/11"],
  xLink: "https://x.com/titech_animeken",
  instagramLink: null,
  youtubeLink: "https://www.youtube.com/channel/UCo0e2tv6k3gVVV6BDFc1IMQ",
  websiteLink: null
}
,
{
  exhibitorName: "オリエンテーリング部",
  exhibitorDescription: "地図とコンパスを頼りに自然の中を駆け巡る！隠されたポイントを頭を使って探し出す爽快感は格別です。\nほぼ全員が大学からのスタートです。あなたも自然に囲まれる非日常な冒険をしませんか？体験会、来てください！",
  exhibitorIcon: exhibitor24Logo,
  exhibitorPhoto: exhibitor24Photo,
  booths: ["サークルブース", "ステージ企画"],
  days: ["4/11"],
  xLink: "https://x.com/olt_shinkan",
  instagramLink: "https://www.instagram.com/scitokyo_olt",
  youtubeLink: null,
  websiteLink: "https://olt.main.jp/"
}
,
{
  exhibitorName: "水泳部",
  exhibitorDescription: "こんにちは!水泳部です‼︎体育館横のプールで活動しています🏊‍♂️🏊‍♀️経験者も初心者も大歓迎！！マネージャー大募集中です！他大との交流もあり和気あいあいとしています。なんと水球もできます🤽‍♂️✨",
  exhibitorIcon: exhibitor25Logo,
  exhibitorPhoto: exhibitor25Photo,
  booths: ["サークルブース"],
  days: ["4/10"],
  xLink: "https://x.com/STswim_2026",
  instagramLink: "https://www.instagram.com/isct.swim.2026",
  youtubeLink: null,
  websiteLink: "http://titswim.web.fc2.com/about.html"
}
,
{
  exhibitorName: "鉄道研究部",
  exhibitorDescription: "鉄道研究部は夏休みに地方私鉄で貸切列車を走らせたり、工大祭で鉄道模型ジオラマ展示をしたり、その他にも多種多様な活動をしています。鉄道に少しでも興味がある方は、ぜひ一度見に来てください！",
  exhibitorIcon: exhibitor26Logo,
  exhibitorPhoto: exhibitor26Photo,
  booths: ["サークルブース"],
  days: ["4/10"],
  xLink: "https://x.com/titechrail",
  instagramLink: null,
  youtubeLink: null,
  websiteLink: "https://titrail.sakura.ne.jp/"
}
,
{
  exhibitorName: "ギター研究会",
  exhibitorDescription: "週1回、クラシックギターをマイペースに練習しています。年2回の演奏会での発表に加え、合宿や飲み会などの行事も活発です。無理なく続けられる、仲の良い雰囲気が特徴です。",
  exhibitorIcon: exhibitor27Logo,
  exhibitorPhoto: exhibitor27Photo,
  booths: ["サークルブース"],
  days: ["4/10"],
  xLink: "https://x.com/gitakenbushitsu",
  instagramLink: "https://instagram.com/gitakenbushitsu/",
  youtubeLink: "https://youtube.com/channel/UCSPn3ifOw_Rp5xcBGU_1WvA?si=NF-9ZkETXSBsl97L",
  websiteLink: "https://gitakenbushitsu.wixsite.com/gitaken"
}
,
{
  exhibitorName: "天文研究部",
  exhibitorDescription: "天文研究部では月一回の遠征や春・夏の合宿で星の観測・撮影を行うほか、工大祭で展示する大学サークル最大規模のプラネタリウム製作もしています。星に興味がある方、綺麗な星空が見たい方は是非見に来てください！",
  exhibitorIcon: exhibitor28Logo,
  exhibitorPhoto: exhibitor28Photo,
  booths: ["サークルブース"],
  days: ["4/10"],
  xLink: "https://x.com/astro_titech",
  instagramLink: "https://www.instagram.com/astro_titech",
  youtubeLink: null,
  websiteLink: "https://titastro.web.fc2.com/index.html"
}
,
{
  exhibitorName: "東京科学大学レゴ同好会",
  exhibitorDescription: "レゴ同好会は毎週水曜の午後に活動しています。部費は0円で「取り敢えず何かサークルに入りたい」という人にもお勧めです。工大祭でレゴを展示したり、小学校や公民館などでレゴの講座を開いたりしています。",
  exhibitorIcon: exhibitor29Logo,
  exhibitorPhoto: exhibitor29Photo,
  booths: ["サークルブース", "ワークショップ"],
  days: ["4/10"],
  xLink: "https://x.com/titech0505",
  instagramLink: null,
  youtubeLink: null,
  websiteLink: null
}
,
{
  exhibitorName: "フェンシング部",
  exhibitorDescription: "アットホーム\n初心者大歓迎\n他の部活サークルと両立がしやすい\n自由な空間\n大会運営や工大祭の経験\n\n活動日、活動場所、種目\n\n\nフェンシング部は月曜と水曜(時々土日も)に体育館で、アットホームで自由な雰囲気の中活動しています。大会では全国の大学が集まり、東工大でも年に2回大会を運営しています。初心者経験者問わず大歓迎です！",
  exhibitorIcon: exhibitor30Logo,
  exhibitorPhoto: exhibitor30Photo,
  booths: ["サークルブース"],
  days: ["4/11"],
  xLink: "https://x.com/scitokyo_fen",
  instagramLink: "https://www.instagram.com/sciencetokyo_fencing",
  youtubeLink: null,
  websiteLink: null
}
,
{
  exhibitorName: "自動車部",
  exhibitorDescription: "普段から運転練習と整備・ものつくりを行っています。ドライブや旅行など自動車での活動はとても充実しています！車好きはもちろん、動くものを創りたい人、頭脳系スポーツやツーリングに興味がある人募集中です！",
  exhibitorIcon: exhibitor31Logo,
  exhibitorPhoto: exhibitor31Photo,
  booths: ["サークルブース"],
  days: ["4/10"],
  xLink: "https://x.com/sciencetokyoac",
  instagramLink: null,
  youtubeLink: null,
  websiteLink: "https://www.isctac.jp/"
}
,
{
  exhibitorName: "アメリカンフットボール部",
  exhibitorDescription: "我々科学大アメフト部は現在関東2部リーグに所属しており、1部昇格という大きな目標に向け日々鍛錬を重ねています！今年こそ目標を達成するために共に戦う仲間を探しています。皆さんを心からお待ちしております。",
  exhibitorIcon: exhibitor32Logo,
  exhibitorPhoto: null,
  booths: ["サークルブース", "ステージ企画"],
  days: ["4/10","4/11"],
  xLink: null,
  instagramLink: "https://www.instagram.com/buffs.shinkan.2026",
  youtubeLink: null,
  websiteLink: "https://titech-buffaloes.com/"
}
,
{
  exhibitorName: "ロック研究会",
  exhibitorDescription: "ロック、メタルを中心に様々な音楽を演奏します。",
  exhibitorIcon: exhibitor33Logo,
  exhibitorPhoto: null,
  booths: ["ステージ企画"],
  days: ["4/10"],
  xLink: null,
  instagramLink: null,
  youtubeLink: null,
  websiteLink: null
}
,
{
  exhibitorName: "ラグビー部",
  exhibitorDescription: "未経験から始めた部員も多く、これまでの運動経験を活かして、新しい競技に挑戦できます。\n関東大学リーグ3部に所属し、競技力向上に本気で取り組みながらも、部員同士の距離が近く挑戦しやすい雰囲気が魅力です。",
  exhibitorIcon: exhibitor34Logo,
  exhibitorPhoto: exhibitor34Photo,
  booths: ["サークルブース"],
  days: ["4/10","4/11"],
  xLink: "https://x.com/scitokyo_rfc",
  instagramLink: "https://www.instagram.com/scitokyo_rfc_2025",
  youtubeLink: null,
  websiteLink: "https://sciencetokyo-rfc.site/"
}
,
{
  exhibitorName: "科学大お笑いサークルオゾン",
  exhibitorDescription: "科学大お笑いサークルオゾンです。大喜利会や部内のネタ見せ、隔月ごとの定期ライブを主な活動内容としています。Xに大喜利回答のハイライトを載せていますのでぜひご覧ください！",
  exhibitorIcon: exhibitor35Logo,
  exhibitorPhoto: null,
  booths: ["サークルブース"],
  days: ["4/10"],
  xLink: "https://x.com/SciTokyo_ozone",
  instagramLink: "https://www.instagram.com/tit_shochiku",
  youtubeLink: null,
  websiteLink: null
}
,
{
  exhibitorName: "Taki Plaza Gardener",
  exhibitorDescription: "Taki Plaza gardener (通称TPG)はTaki Plazaを学生主体で企画・運営し、学生の交流を促す目的で活動している公認学生団体です。メンバー同士の交流も活発で学年や所属を超えた繋がりができます！イベントを企画してみたい人、大学で新しい繋がりが欲しい人にはぴったりな団体です！！",
  exhibitorIcon: exhibitor36Logo,
  exhibitorPhoto: exhibitor36Photo,
  booths: ["サークルブース"],
  days: ["4/10","4/11"],
  xLink: "https://x.com/TPGardener/",
  instagramLink: "https://www.instagram.com/taki_plaza_gardener/",
  youtubeLink: null,
  websiteLink: "https://tpgd.jp/"
}

]
