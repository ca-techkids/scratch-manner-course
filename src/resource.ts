export type CommentType = {
  body: string;
  author: string;
  iconUrl: string;
  explanationSlideUrl: string;
  date: Date;
  isAgainstManners: boolean;
  reply?: CommentType[];
};

export function getComments(): CommentType[] {
  return [
    {
      body: "宇宙を舞台にした方が面白いから、作り直したら？",
      author: "QuantumCoder2023",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationSlideUrl: "./img/slide.png",
      date: new Date("2023-08-01"),
      isAgainstManners: true,
    },
    {
      body: "このゲーム面白い！",
      author: "PixelPenguin",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationSlideUrl: "./img/slide.png",
      date: new Date("2023-08-02"),
      isAgainstManners: false,
    },
    {
      body: "このゲーム簡単だよね。誰でもできる。",
      author: "StarlightExplorer",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationSlideUrl: "./img/slide.png",
      date: new Date("2023-08-02"),
      isAgainstManners: true,
    },
    {
      body: "つまんな　Scratchやめたら？",
      author: "BinaryBunny",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationSlideUrl: "./img/slide.png",
      date: new Date("2023-08-03"),
      isAgainstManners: true,
    },
    {
      body: "この人が作った他のゲーム遊んだけど楽しくなかった",
      author: "CodeDragonfly",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationSlideUrl: "./img/slide.png",
      date: new Date("2023-08-04"),
      isAgainstManners: true,
    },
    {
      body: "リミックスします！",
      author: "NeonNarwhal",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationSlideUrl: "./img/slide.png",
      date: new Date("2023-08-04"),
      isAgainstManners: false,
    },
    {
      body: "キャラクターがとてもかわいいね",
      author: "NeonNarwhal",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationSlideUrl: "./img/slide.png",
      date: new Date("2023-08-04"),
      isAgainstManners: false,
    },
    {
      body: "僕のお母さんは渋谷スクランブルスクエアで働いているんだ！",
      author: "PixelPanda2023",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationSlideUrl: "./img/slide.png",
      date: new Date("2023-08-04"),
      isAgainstManners: true,
    },
    {
      body: "僕の電話番号は123-4567-8901だよ！",
      author: "PixelPanda2023",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationSlideUrl: "./img/slide.png",
      date: new Date("2023-08-04"),
      isAgainstManners: true,
    },
    {
      body: "ストーリーが面白かった",
      author: "GlitchGiraffe",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationSlideUrl: "./img/slide.png",
      date: new Date("2023-08-04"),
      isAgainstManners: false,
    },
    {
      body: "クリアできたらここにアクセスして！プレゼントがもらえるよ http://123.xyz.unknown/",
      author: "QuantumKoala",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationSlideUrl: "./img/slide.png",
      date: new Date("2023-08-04"),
      isAgainstManners: true,
    },
    {
      body: "このゲームは宇宙をテーマにしよう",
      author: "CyberneticCheetah",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationSlideUrl: "./img/slide.png",
      date: new Date("2023-08-04"),
      isAgainstManners: true,
      reply: [
        {
          body: "いや海賊をテーマにリミックスした方がいい",
          author: "CodeDragonfly",
          iconUrl: "./img/scratch_manner_course_icon_50px.png",
          explanationSlideUrl: "./img/slide.png",
          date: new Date("2023-08-04"),
          isAgainstManners: true,
          reply: [
            {
              body: "海賊テーマだなんて、子供っぽすぎ。年上の意見を聞け。",
              author: "CyberneticCheetah",
              iconUrl: "./img/scratch_manner_course_icon_50px.png",
              explanationSlideUrl: "./img/slide.png",
              date: new Date("2023-08-04"),
              isAgainstManners: true,
            },
          ],
        },
      ],
    },
    {
      body: "【拡散希望】Scratchのアップデートで全てのデータが消去されるかも！？他の人にもこの文章を回して！",
      author: "ScratchCoder123",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationSlideUrl: "./img/slide.png",
      date: new Date("2023-08-04"),
      isAgainstManners: true,
    },
    {
      body: "お父さんのクレジットカード、使っていいって。番号は5678 9012 3456 7890だよ！",
      author: "CreativityNinja",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationSlideUrl: "./img/slide.png",
      date: new Date("2023-08-04"),
      isAgainstManners: true,
    },
    {
      body: "どうやってこのエフェクトを作ったか教えて！",
      author: "ArtisticPixel",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationSlideUrl: "./img/slide.png",
      date: new Date("2023-08-04"),
      isAgainstManners: false,
    },
    {
      body: "色使いやデザインがきれいだ…",
      author: "ArtisticPixel",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationSlideUrl: "./img/slide.png",
      date: new Date("2023-08-04"),
      isAgainstManners: false,
    },

    {
      body: "すごい！すごい！すごい！私の作品も見て！見て！",
      author: "CodeWizardJr",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationSlideUrl: "./img/slide.png",
      date: new Date("2023-08-04"),
      isAgainstManners: true,
      reply: [
        {
          body: "なんで返信してくれないの？返信して（連投）",
          author: "MusicMaster87",
          iconUrl: "./img/scratch_manner_course_icon_50px.png",
          explanationSlideUrl: "./img/slide.png",
          date: new Date("2023-08-04"),
          isAgainstManners: true,
        },
      ],
    },
    {
      body: "男なのに女の子みたいなゲームだね",
      author: "AnimationGeek",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationSlideUrl: "./img/slide.png",
      date: new Date("2023-08-04"),
      isAgainstManners: true,
    },
    {
      body: "応援してます！",
      author: "GameDevPro101",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationSlideUrl: "./img/slide.png",
      date: new Date("2023-08-04"),
      isAgainstManners: false,
    },
  ];
}
