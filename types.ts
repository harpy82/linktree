export interface LinkItem {
  id: string;
  title: string;
  url: string;
  category?: string;
  highlight?: boolean;
}

export interface ProfileData {
  name: string;
  bio: string;
  avatarUrl: string;
}