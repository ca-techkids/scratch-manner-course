export type CommentType = {
  body: string;
  author: string;
  iconUrl: string;
  date: Date;
  isAgainstManners: boolean
};

export function getComments(): CommentType[] {
  return [
    {
      body: "適切なコメント1",
      author: "testName",
      iconUrl: "./logo.svg",
      date: new Date("2023-08-01"),
      isAgainstManners: false
    },
    {
      body: "適切なコメント2",
      author: "2ndName",
      iconUrl: "./logo.svg",
      date: new Date("2023-08-02"),
      isAgainstManners: false
    },
    {
      body: "不適切なコメント1",
      author: "3rdName",
      iconUrl: "./logo.svg",
      date: new Date("2023-08-03"),
      isAgainstManners: true
    },
    {
      body: "不適切なコメント2",
      author: "4thName",
      iconUrl: "./logo.svg",
      date: new Date("2023-08-04"),
      isAgainstManners: true
    },
  ]

}
