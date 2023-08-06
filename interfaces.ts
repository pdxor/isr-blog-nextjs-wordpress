export interface Author {
    node: {
      firstName: string;
      lastName: string;
    };
}
  
export interface Post {
    title: string;
    content: string;
    uri: string;
    author: Author;
    date: string;
}

export interface ButtonProps {
    text: string;
    link: string;
}


export interface Course {
    title: string;
    id?: string;
    courseMetadata: CourseMetadata;
    uri: string;
    slug: string;
    tags: Tags;  // Updated this line
}
export interface CourseMetadata {
    thumbnailpictures: ThumbnailPicture[];
    maineducatorinstahandl: string;
    courseTestimonialsNew: TestimonialMetadata[];
    finishedlooks: Thumbnail;
    coursechapters: CourseChapter;
    youwlllearn: string;
    youwillrecieve: string;
    relatedcourse: RelatedCourses;
}
export interface Tags {
    nodes: Tag[];
}

export interface Tag {
    name: string;
    slug: string;
}


export interface FullCourse {
    title: string;
}
export interface ThumbnailPicture {
    mediaItemUrl?: string;
}


export interface RelatedCourses {
    id: string;
    uri: string;
}
export interface CourseChapter {
    coursechapter: string;
    fieldGroupName: string;
}
export interface TestimonialMetadata {
    firstname: string;
    lastname: string;
    rating: number;
    timestamp: string;
    userid: string;
    educatorid: string;
}
// export interface CourseNode {
//     id: string;
//     title: string;
//     slug: string;
//     uri: string;
//     courseMetadata: CourseMetadata;
// }

// export interface CourseEdge {
//     node: CourseNode;
// }

// export interface HaircuttingShagsData {
//     courses: {
//         edges: CourseEdge[];
//     };
// }



export interface Educator {
    educatorpicture: string;
    content: string;
    title: string;
    educatorMetaData: EducatorMetaData;
    uri: string;
    slug: string;
}
export interface EducatorMetaData {
    educatorjobtitle: string;
    educatortype: string;
    educatorpicture: Thumbnail;
    careerslink: string;
    courses: Course[];
    topartistlevel: string;
    instahandle: string;
    facebookaccount: string;
    twitterhandle: string;
    pinteresthandle: string;
    youtubeusername: string;
    othersociallink: string;
    othersociallink2: string;
    othersociallink3: string;
    educatoremail: string;
    educatorwebsite: string;
    educatorwebsitetext: string;
    relatededucators : string;
}

export interface Thumbnail {
    mediaItemUrl: string;
}

export interface EducatorBio {
    node: {
        title: string;
        instagramHandle: string;
        educatorPicture: Thumbnail;
        description: string;
    };
}

export interface ArcScissor {
    node: {
        title: string;
        description: string;
    };
}