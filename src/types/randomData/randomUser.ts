

interface IRandomUser {
  id: number;
  name: string;
  profileImage: ProfileAndCover;
     post: Post;
     url:string
}

interface Post {
  postText: string;
  postImage: string;
}

interface ProfileAndCover {
  profile: string;
  cover: string;
}