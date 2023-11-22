interface Content {
  type: string;
  content: string;
}

export default interface IProject {
  name: string;
  description: string;
  stack: string[];
  img: string;
  imgGif: string;
  information: Content[];
}
