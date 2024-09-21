interface PostClubsRequest {
  tags?: string[]; // 태그
  short: string; // 짧은 소개
  oneLine: string; // 한 줄 소개
  department: string; // 소속학과
  clubName: string; // 동아리 명
  url?: string; // 동아리 홈페이지
  image: string; // 이미지 (파일 이름)
}

interface Tag {
  tagList: {
    id: number;
    tagName: string;
    createdAt: string; // ISO8601, ex) "2024-02-24T01:02:21.848Z" 
  }
}

interface Club {
  id: number;
  clubName: string;
  classification: string;
  oneLine: string;
  isRecruiting: boolean;
  admin: boolean; // enrolled by admin
  tags: Tag[]
}

interface GetClubsResponse {
  maxPage: number,
  clubList: Club[]
}

interface GetClubsIdResponse extends Club {
  short: string;
  pageURL: null | string;
  image: null | ImageFile;
  view: number;
  createdAt: string; // ISO8601, ex) "2024-02-24T01:02:21.848Z" 
  updatedAt: string; // ISO8601, ex) "2024-02-24T01:02:21.848Z" 
  post: RecruitPost;
}