export type CommentType = {
  body: string;
  author: string;
  iconUrl: string;
  explanationSlideUrl?: string;
  explanationPage: string;
  dateString: string;
  isAgainstManners: boolean;
  reply?: CommentType[];
};

export function countTarget(comments: CommentType[]) {
  let targetCount = 0;
  const countTargetRecursively = (comment: CommentType) => {
    if (comment.isAgainstManners) targetCount += 1;
    if (comment.reply) comment.reply.forEach((r) => countTargetRecursively(r));
  };
  comments.forEach((c) => countTargetRecursively(c));
  return targetCount;
}

export function getComments(): CommentType[] {
  return [
    {
      body: "宇宙をテーマにした方が面白いから、作り直したら？",
      author: "QuantumCoder2023",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationSlideUrl: "./img/slide_result_1.png",
      explanationPage:
        "https://learning.techkidsschool.jp/#/materials/6524ee29b6270c5442d0a28a?0=%E3%83%8D%E3%83%83%E3%83%88%E3%83%AA%E3%83%86%E3%83%A9%E3%82%B7%E3%83%BC%E8%AC%9B%E5%BA%A7%EF%BC%88%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%88%E7%B7%A8%EF%BC%89&1=%E7%9B%B8%E6%89%8B%E3%81%AE%E6%B0%97%E6%8C%81%E3%81%A1%E3%82%92%E8%80%83%E3%81%88%E3%82%8B",
      dateString: "1日前",
      isAgainstManners: true,
    },
    {
      body: "このゲーム面白い！",
      author: "PixelPenguin",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationPage: "",
      dateString: "1日前",
      isAgainstManners: false,
    },
    {
      body: "このゲームかんたんだよね。誰でもできる。",
      author: "StarlightExplorer",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationSlideUrl: "./img/slide_result_1.png",
      explanationPage:
        "https://learning.techkidsschool.jp/#/materials/6524ee29b6270c5442d0a28a?0=%E3%83%8D%E3%83%83%E3%83%88%E3%83%AA%E3%83%86%E3%83%A9%E3%82%B7%E3%83%BC%E8%AC%9B%E5%BA%A7%EF%BC%88%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%88%E7%B7%A8%EF%BC%89&1=%E7%9B%B8%E6%89%8B%E3%81%AE%E6%B0%97%E6%8C%81%E3%81%A1%E3%82%92%E8%80%83%E3%81%88%E3%82%8B",
      dateString: "3日前",
      isAgainstManners: true,
    },
    {
      body: "つまんな　Scratchやめたら？",
      author: "BinaryBunny",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationPage:
        "https://learning.techkidsschool.jp/#/materials/6524ee29b6270c5442d0a28a?0=%E3%83%8D%E3%83%83%E3%83%88%E3%83%AA%E3%83%86%E3%83%A9%E3%82%B7%E3%83%BC%E8%AC%9B%E5%BA%A7%EF%BC%88%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%88%E7%B7%A8%EF%BC%89&1=%E7%9B%B8%E6%89%8B%E3%81%AE%E6%B0%97%E6%8C%81%E3%81%A1%E3%82%92%E8%80%83%E3%81%88%E3%82%8B",
      dateString: "4日前",
      isAgainstManners: true,
    },
    {
      body: "この人が作った他のゲーム遊んだけど楽しくなかった",
      author: "CodeDragonfly",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationPage:
        "https://learning.techkidsschool.jp/#/materials/6524ee29b6270c5442d0a28a?0=%E3%83%8D%E3%83%83%E3%83%88%E3%83%AA%E3%83%86%E3%83%A9%E3%82%B7%E3%83%BC%E8%AC%9B%E5%BA%A7%EF%BC%88%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%88%E7%B7%A8%EF%BC%89&1=%E7%9B%B8%E6%89%8B%E3%81%AE%E6%B0%97%E6%8C%81%E3%81%A1%E3%82%92%E8%80%83%E3%81%88%E3%82%8B",
      dateString: "7日前",
      isAgainstManners: true,
    },
    {
      body: "リミックスします！",
      author: "NeonNarwhal",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationPage: "",
      dateString: "8日前",
      isAgainstManners: false,
    },
    {
      body: "キャラクターがとてもかわいいね",
      author: "NeonNarwhal",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationPage: "",
      dateString: "8日前",
      isAgainstManners: false,
    },
    {
      body: "ぼくのお母さんは渋谷スクランブルスクエアではたらいているんだ！",
      author: "PixelPanda2023",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationPage:
        "https://learning.techkidsschool.jp/#/materials/6524ee29b6270c5442d0a28a?0=%E3%83%8D%E3%83%83%E3%83%88%E3%83%AA%E3%83%86%E3%83%A9%E3%82%B7%E3%83%BC%E8%AC%9B%E5%BA%A7%EF%BC%88%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%88%E7%B7%A8%EF%BC%89&1=%E5%85%AC%E9%96%8B%E3%81%99%E3%82%8B%E6%83%85%E5%A0%B1%E3%81%AF%E6%85%8E%E9%87%8D%E3%81%AB%E9%81%B8%E3%81%B6",
      dateString: "9日前",
      isAgainstManners: true,
    },
    {
      body: "ぼくの電話番号は123-4567-8901だよ！",
      author: "PixelPanda2023",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationPage:
        "https://learning.techkidsschool.jp/#/materials/6524ee29b6270c5442d0a28a?0=%E3%83%8D%E3%83%83%E3%83%88%E3%83%AA%E3%83%86%E3%83%A9%E3%82%B7%E3%83%BC%E8%AC%9B%E5%BA%A7%EF%BC%88%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%88%E7%B7%A8%EF%BC%89&1=%E5%85%AC%E9%96%8B%E3%81%99%E3%82%8B%E6%83%85%E5%A0%B1%E3%81%AF%E6%85%8E%E9%87%8D%E3%81%AB%E9%81%B8%E3%81%B6",
      dateString: "17日前",
      isAgainstManners: true,
    },
    {
      body: "ストーリーが面白かった",
      author: "GlitchGiraffe",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationPage: "",
      dateString: "19日前",
      isAgainstManners: false,
    },
    {
      body: "クリアできたらここにアクセスして！プレゼントがもらえるよ http://123.xyz.unknown/",
      author: "QuantumKoala",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationPage:
        "https://learning.techkidsschool.jp/#/materials/6524ee29b6270c5442d0a28a?0=%E3%83%8D%E3%83%83%E3%83%88%E3%83%AA%E3%83%86%E3%83%A9%E3%82%B7%E3%83%BC%E8%AC%9B%E5%BA%A7%EF%BC%88%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%88%E7%B7%A8%EF%BC%89&1=%E3%83%8D%E3%83%83%E3%83%88%E3%81%AE%E3%82%A6%E3%82%BD%E3%81%AB%E6%B0%97%E3%82%92%E3%81%A4%E3%81%91%E3%82%8B",
      dateString: "25日前",
      isAgainstManners: true,
    },
    {
      body: "このゲームは宇宙をテーマにしよう",
      author: "CyberneticCheetah",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationPage:
        "https://learning.techkidsschool.jp/#/materials/6524ee29b6270c5442d0a28a?0=%E3%83%8D%E3%83%83%E3%83%88%E3%83%AA%E3%83%86%E3%83%A9%E3%82%B7%E3%83%BC%E8%AC%9B%E5%BA%A7%EF%BC%88%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%88%E7%B7%A8%EF%BC%89&1=%E7%9B%B8%E6%89%8B%E3%81%AE%E6%B0%97%E6%8C%81%E3%81%A1%E3%82%92%E8%80%83%E3%81%88%E3%82%8B",
      dateString: "1ヵ月前",
      isAgainstManners: false,
      reply: [
        {
          body: "いやかいぞくをテーマにリミックスした方がいい",
          author: "CodeDragonfly",
          iconUrl: "./img/scratch_manner_course_icon_50px.png",
          explanationPage:
            "https://learning.techkidsschool.jp/#/materials/6524ee29b6270c5442d0a28a?0=%E3%83%8D%E3%83%83%E3%83%88%E3%83%AA%E3%83%86%E3%83%A9%E3%82%B7%E3%83%BC%E8%AC%9B%E5%BA%A7%EF%BC%88%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%88%E7%B7%A8%EF%BC%89&1=%E7%9B%B8%E6%89%8B%E3%81%AE%E6%B0%97%E6%8C%81%E3%81%A1%E3%82%92%E8%80%83%E3%81%88%E3%82%8B",
          dateString: "1ヵ月前",
          isAgainstManners: false,
          reply: [
            {
              body: "かいぞくがテーマだなんて、子供っぽすぎ。年上の意見を聞け。",
              author: "CyberneticCheetah",
              iconUrl: "./img/scratch_manner_course_icon_50px.png",
              explanationPage:
                "https://learning.techkidsschool.jp/#/materials/6524ee29b6270c5442d0a28a?0=%E3%83%8D%E3%83%83%E3%83%88%E3%83%AA%E3%83%86%E3%83%A9%E3%82%B7%E3%83%BC%E8%AC%9B%E5%BA%A7%EF%BC%88%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%88%E7%B7%A8%EF%BC%89&1=%E7%9B%B8%E6%89%8B%E3%81%AE%E6%B0%97%E6%8C%81%E3%81%A1%E3%82%92%E8%80%83%E3%81%88%E3%82%8B",
              dateString: "20日前",
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
      explanationPage:
        "https://learning.techkidsschool.jp/#/materials/6524ee29b6270c5442d0a28a?0=%E3%83%8D%E3%83%83%E3%83%88%E3%83%AA%E3%83%86%E3%83%A9%E3%82%B7%E3%83%BC%E8%AC%9B%E5%BA%A7%EF%BC%88%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%88%E7%B7%A8%EF%BC%89&1=%E3%83%8D%E3%83%83%E3%83%88%E3%81%AE%E3%82%A6%E3%82%BD%E3%81%AB%E6%B0%97%E3%82%92%E3%81%A4%E3%81%91%E3%82%8B",
      dateString: "1ヵ月前",
      isAgainstManners: true,
    },
    {
      body: "お父さんのクレジットカード、使っていいって。番号は5678 9012 3456 7890だよ！",
      author: "CreativityNinja",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationPage:
        "https://learning.techkidsschool.jp/#/materials/6524ee29b6270c5442d0a28a?0=%E3%83%8D%E3%83%83%E3%83%88%E3%83%AA%E3%83%86%E3%83%A9%E3%82%B7%E3%83%BC%E8%AC%9B%E5%BA%A7%EF%BC%88%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%88%E7%B7%A8%EF%BC%89&1=%E5%85%AC%E9%96%8B%E3%81%99%E3%82%8B%E6%83%85%E5%A0%B1%E3%81%AF%E6%85%8E%E9%87%8D%E3%81%AB%E9%81%B8%E3%81%B6",
      dateString: "1ヵ月前",
      isAgainstManners: true,
    },
    {
      body: "どうやってこのエフェクトを作ったか教えて！",
      author: "ArtisticPixel",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationPage: "",
      dateString: "1ヵ月前",
      isAgainstManners: false,
    },
    {
      body: "色使いやデザインがきれいだ…",
      author: "ArtisticPixel",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationPage: "",
      dateString: "1ヵ月前",
      isAgainstManners: false,
    },

    {
      body: "すごい！",
      author: "CodeWizardJr",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationPage: "",
      dateString: "3ヵ月前",
      isAgainstManners: false,
      reply: [
        {
          body: "私の作品も見て！",
          author: "MusicMaster87",
          iconUrl: "./img/scratch_manner_course_icon_50px.png",
          explanationPage:
            "https://learning.techkidsschool.jp/#/materials/6524ee29b6270c5442d0a28a?0=%E3%83%8D%E3%83%83%E3%83%88%E3%83%AA%E3%83%86%E3%83%A9%E3%82%B7%E3%83%BC%E8%AC%9B%E5%BA%A7%EF%BC%88%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%88%E7%B7%A8%EF%BC%89&1=%E7%9B%B8%E6%89%8B%E3%81%AE%E6%B0%97%E6%8C%81%E3%81%A1%E3%82%92%E8%80%83%E3%81%88%E3%82%8B",
          dateString: "2ヵ月前",
          isAgainstManners: false,
        },
        {
          body: "なんで返信してくれないの？1時間以内に返信して",
          author: "MusicMaster87",
          iconUrl: "./img/scratch_manner_course_icon_50px.png",
          explanationPage:
            "https://learning.techkidsschool.jp/#/materials/6524ee29b6270c5442d0a28a?0=%E3%83%8D%E3%83%83%E3%83%88%E3%83%AA%E3%83%86%E3%83%A9%E3%82%B7%E3%83%BC%E8%AC%9B%E5%BA%A7%EF%BC%88%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%88%E7%B7%A8%EF%BC%89&1=%E7%9B%B8%E6%89%8B%E3%81%AE%E6%B0%97%E6%8C%81%E3%81%A1%E3%82%92%E8%80%83%E3%81%88%E3%82%8B",
          dateString: "1ヵ月前",
          isAgainstManners: true,
        },
      ],
    },
    {
      body: "男なのに女の子みたいなゲームだね",
      author: "AnimationGeek",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationPage:
        "https://learning.techkidsschool.jp/#/materials/6524ee29b6270c5442d0a28a?0=%E3%83%8D%E3%83%83%E3%83%88%E3%83%AA%E3%83%86%E3%83%A9%E3%82%B7%E3%83%BC%E8%AC%9B%E5%BA%A7%EF%BC%88%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%88%E7%B7%A8%EF%BC%89&1=%E7%9B%B8%E6%89%8B%E3%81%AE%E6%B0%97%E6%8C%81%E3%81%A1%E3%82%92%E8%80%83%E3%81%88%E3%82%8B",
      dateString: "3ヵ月前",
      isAgainstManners: true,
    },
    {
      body: "おうえんしてます！",
      author: "GameDevPro101",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationPage: "",
      dateString: "3ヵ月前",
      isAgainstManners: false,
    },
  ];
}
