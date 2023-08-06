import { gql } from "@apollo/client";

// PAGES

// PAGE - Haircutting
export const GET_ALL_HAIRCUTTING_COURSES = gql`
query haircutting {
  courses(where: {categoryName: "haircutting"}, first: 200) {
   nodes {
          title
          slug
          uri
          tags{
            nodes{
              name
              slug
            }
          } 
          courseMetadata {
            thumbnailpictures {
              mediaItemUrl
            }         
            maineducatorinstahandl
            courseTestimonialsNew {
              ... on Testimonial {
                testimonialMetadata {
                  rating
                }
              }
            }
          }
        }
  }
}
`;

// PAGE - Hair Color
export const GET_ALL_HAIRCOLOR_COURSES = gql`
query hairColorCats {
  courses(where: {categoryName: "haircolor"}, first: 200) {
   nodes {
          title
          slug
          uri
          tags{
            nodes{
              name
              slug
            }
          } 
          courseMetadata {
            thumbnailpictures {
              mediaItemUrl
            }         
            maineducatorinstahandl
            courseTestimonialsNew {
              ... on Testimonial {
                testimonialMetadata {
                  rating
                }
              }
            }
          }
        }
  }
}
`;

// PAGE - Men's
export const GET_ALL_MENS_COURSES = gql`
query mens {
  courses(where: {categoryName: "mens"}, first: 40) {
    nodes {
      title
      slug
      uri
      tags{
        nodes{
          name
          slug
        }
      } 
      courseMetadata {
        thumbnailpictures {
          mediaItemUrl
        }         
        maineducatorinstahandl
        courseTestimonialsNew {
          ... on Testimonial {
            testimonialMetadata {
              rating
            }
          }
        }
      }
    }
  }
}
`;

// PAGE - Business
export const GET_ALL_BUSINESS_COURSES = gql`
query businessbyCat {
  courses(where: {categoryName: "business"}, first: 200) {
   nodes {
          title
          slug
          uri
          tags{
            nodes{
              name
              slug
            }
          } 
          courseMetadata {
            thumbnailpictures {
              mediaItemUrl
            }         
            maineducatorinstahandl
            courseTestimonialsNew {
              ... on Testimonial {
                testimonialMetadata {
                  rating
                }
              }
            }
          }
        }
  }
}
`;

// PAGE - BTC Events
export const GET_ALL_BTC_EVENTS_COURSES = gql`
query eventbyCat {
  courses(where: {categoryName: "btc-events"}, first: 200) {
   nodes {
          title
          slug
          uri
          tags{
            nodes{
              name
              slug
            }
          } 
          courseMetadata {
            thumbnailpictures {
              mediaItemUrl
            }         
            maineducatorinstahandl
            courseTestimonialsNew {
              ... on Testimonial {
                testimonialMetadata {
                  rating
                }
              }
            }
          }
        }
  }
}
`;


// PAGES - Texture
export const GET_ALL_TEXTURE_COURSES = gql`
query getTextureByCat {
  courses(where: {categoryName: "texture"}, first: 999) {
   nodes {
          title
          slug
          uri
          tags{
            nodes{
              name
              slug
            }
          } 
          courseMetadata {
            thumbnailpictures {
              mediaItemUrl
            }         
            maineducatorinstahandl
            courseTestimonialsNew {
              ... on Testimonial {
                testimonialMetadata {
                  rating
                }
              }
            }
          }
        }
  }
}
`;

// PAGE - Hair Extensions
export const GET_ALL_HAIR_EXTENSIONS_COURSES = gql`
query getHairExtensionsByCat {
  courses(where: {categoryName: "extensions"}, first: 999) {
   nodes {
          title
          slug
          uri
          tags{
            nodes{
              name
              slug
            }
          } 
          courseMetadata {
            thumbnailpictures {
              mediaItemUrl
            }         
            maineducatorinstahandl
            courseTestimonialsNew {
              ... on Testimonial {
                testimonialMetadata {
                  rating
                }
              }
            }
          }
        }
  }
}
`;

// PAGE - Educators

export const GET_All_EDUCATORS = gql`
    query GetAllEducators {
        educators {
            nodes {
              title
              educatorMetaData {
                educatorjobtitle
                educatortype
                educatorpicture {
                    mediaItemUrl
                }
                careerslink
                courses {
                    ... on Course {
                        id
                    }
                }                
                topartistlevel
                instahandle
                facebookaccount
                twitterhandle
                pinteresthandle
                youtubeusername
                othersociallink
                othersociallink2
                othersociallink3
                educatoremail
                educatorwebsite
                educatorwebsitetext
                relatededucators {
                  ... on Educator {
                    id
                    title
                  }
                }
              }
              content
              hasJobs
              isTop
              isEducatorEmailPublic
              isEducatorWebsitePublic
            }
          }
    }
`;

// DYNAMIC LINKING

// Individual Course Page
export const GET_COURSE_BY_SLUG = gql`
    query GetCourseByURI($id: ID!) {
        course(id: $id, idType: SLUG) {
            title
            id
            content
            courseMetadata {
                thumbnailpictures {
                    mediaItemUrl
                  }         
                  maineducatorinstahandl
                  courseTestimonialsNew {
                    ... on Testimonial {
                      testimonialMetadata {
                        rating
                      }
                    }
                }
            }
            uri
        }
    }
`;

export const GET_ALL_COURSES_SLUGS = gql`
    query GetAllCoursesURIs {
        courses(first: 999) {
            nodes {
                id
                slug
            }
        }
    }
`;


// Individual Educator Page

export const GET_EDUCATOR_BY_SLUG = gql`
query GetEducatorByURI($id: ID!) {
    educator(id: $id, idType: SLUG) {
        title
        content
        hasJobs
        isTop
        isEducatorEmailPublic
        isEducatorWebsitePublic            
        educatorMetaData {
            educatorjobtitle
            educatortype
            educatorpicture {
                mediaItemUrl
            }
            careerslink
            courses {
                ... on Course {
                    id
                }
            }                
            topartistlevel
            instahandle
            facebookaccount
            twitterhandle
            pinteresthandle
            youtubeusername
            othersociallink
            othersociallink2
            othersociallink3
            educatoremail
            educatorwebsite
            educatorwebsitetext
            relatededucators {
              ... on Educator {
                id
                title
              }
            }
        }
        uri
    }
}
`;

export const GET_All_EDUCATORS_SLUGS = gql`
query GetAllEducatorsSlugs{
    educators {
        nodes {
            slug
        }
    }
}
`;


// not used for now but might be needed

export const GET_COURSE_BY_DATABASE_ID = gql`
query GetCourseByDBID($id: ID!) {
  course(id: $id, idType: DATABASE_ID) {
    title
    id
    slug
    uri
    courseMetadata {
      maineducatorinstahandl
      youwilllearn
      thumbnailpictures {
        mediaItemUrl
      }
      finishedlooks {
        mediaItemUrl
      }
      coursechapters {
        coursechapter
        fieldGroupName
      }
      courseTestimonialsNew {
        ... on Testimonial {
          id
          testimonialMetadata {
            firstname
            lastname
            rating
            timestamp
            userid
            educatorid
          }
        }
      }
      youwillreceive
      relatedcourses {
        ... on Course {
          id
          uri
        }
      }
    }
  }
}
`;



// this will not be needed, but CourseHighlights.tsx, FinishedLook.tsx, StudentsAreViewing.tsx will error out for now without
export const GET_ALL_COURSES = gql`
    query GetAllCourses {
        courses(first: 999) {
            nodes {
                title
                id
                tags{
                  nodes{
                    name
                    slug
                  }
                }
                courseMetadata {
                    maineducatorinstahandl
                    thumbnailpictures {
                        mediaItemUrl
                    }
                    finishedlooks {
                        mediaItemUrl
                    }                    
                }
                slug
                uri
            }
        }
    }
`;