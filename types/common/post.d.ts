interface Recruit {
  recruitStart: string; // ISO8601, ex) "2024-02-24T01:02:21.848Z"
  recruitEnd: string; // ISO8601, ex) "2024-02-24T01:02:21.848Z"
  recruitURL: string;
  recruitTarget: string; // [{"name": "선수", "count": 0}, ...]
}

interface Post {
  id: number;
  title: string;
  content: string;
  image: ImageFile[];
}

interface RecruitPost extends Post{
  recruit: Recruit
}

interface NoticePost extends Post {
  view: number;
  username: string;
  createdAt: string; // ISO8601, ex) "2024-02-24T01:02:21.848Z" 
  updatedAt: string; // ISO8601, ex) "2024-02-24T01:02:21.848Z" 
}