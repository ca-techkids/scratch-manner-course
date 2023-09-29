export type CommentType = {
  body: string;
  author: string;
  iconUrl: string;
  explanationSlideUrl: string;
  date: Date;
  isAgainstManners: boolean;
  reply?: CommentType;
};

export function getComments(): CommentType[] {
  return [
    {
      body: "適切なコメント1",
      author: "testName",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationSlideUrl: "./img/slide.png",
      date: new Date("2023-08-01"),
      isAgainstManners: false,
    },
    {
      body: "適切なコメント2",
      author: "2ndName",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationSlideUrl: "./img/slide.png",
      date: new Date("2023-08-02"),
      isAgainstManners: false,
    },
    {
      body: "不適切なコメント1",
      author: "3rdName",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationSlideUrl: "./img/slide.png",
      date: new Date("2023-08-03"),
      isAgainstManners: true,
    },
    {
      body: "不適切なコメント2",
      author: "4thName",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationSlideUrl: "./img/slide.png",
      date: new Date("2023-08-04"),
      isAgainstManners: true,
    },
    {
      body: "適切なコメント3 (返信つき)",
      author: "5thName",
      iconUrl: "./img/scratch_manner_course_icon_50px.png",
      explanationSlideUrl: "./img/slide.png",
      date: new Date("2023-08-05"),
      isAgainstManners: false,
      reply: {
        body: "適切な返信1",
        author: "6thName",
        iconUrl: "./img/scratch_manner_course_icon_50px.png",
        explanationSlideUrl: "./img/slide.png",
        date: new Date("2023-08-10"),
        isAgainstManners: false,
      },
    },
  ];
}
