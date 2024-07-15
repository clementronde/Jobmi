// types.ts
export interface Article {
    _id: string;
    title: string;
    content: string;
    author: string;
    slug: string;
    metaDescription: string;
    excerpt: string;
    imageCover: string;
    imageAlt: string;
    readingTime: number;
    category: string;
    tags: string[];
    datePublished: string; // Use Date if you prefer to store it as a Date object
    createdAt: string; // from timestamps
    updatedAt: string; // from timestamps
  }
  