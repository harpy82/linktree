import { LinkItem, ProfileData } from './types';

export const PROFILE: ProfileData = {
  name: "Alex Designer",
  bio: "Digital Creator 🎨 | UI/UX Enthusiast ✨ | Building cool stuff on the web.",
  avatarUrl: "https://picsum.photos/200/200",
};

export const LINKS: LinkItem[] = [
  { 
    id: '1', 
    title: 'Latest YouTube Video', 
    url: 'https://youtube.com', 
    category: 'Content',
    highlight: true 
  },
  { 
    id: '2', 
    title: 'My Design Portfolio', 
    url: 'https://dribbble.com', 
    category: 'Work' 
  },
  { 
    id: '3', 
    title: 'Download Free Assets', 
    url: 'https://gumroad.com', 
    category: 'Resources' 
  },
  { 
    id: '4', 
    title: 'Join the Discord Community', 
    url: 'https://discord.com', 
    category: 'Community' 
  },
  { 
    id: '5', 
    title: 'Follow on Twitter / X', 
    url: 'https://twitter.com', 
    category: 'Social' 
  },
  { 
    id: '6', 
    title: 'Read my Blog', 
    url: 'https://medium.com', 
    category: 'Writing' 
  },
  { 
    id: '7', 
    title: 'Support on Patreon', 
    url: 'https://patreon.com', 
    category: 'Support' 
  }
];