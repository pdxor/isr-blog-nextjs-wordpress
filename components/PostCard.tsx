// // "use client";
// // above not needed because this will be in app folder, on server side
// import Link from "next/link";
// import { Course } from "../interfaces"; // Import the Post interface from interfaces.ts
// import Image from "next/image";

// // Define the PostCardProps interface, which includes the post object with the Post type
// interface PostCardProps {
//   course: Course;
// }

// const PostCard: React.FC<PostCardProps> = ({ course }) => {
//     const { title, mainEducatorInstaHandle, slug, courseThumbnailPicture } = course;
  
//     return (
//       <div className="bg-white p-2 shadow-md mr-4 mb-4 b text-center">
//         <Link href={`/course/${(slug)}`}>
//           <div className="card">
//             <div className="card-image-container">
//               {/* <img
//                 src={courseThumbnailPicture?.mediaItemUrl}
//                 alt={title}
//                 width={340}
//                 height={396}
//                 className="fill-image"
//                 style={{ objectFit: "cover" }}
//               /> */}
//             </div>
//           </div>
//           <h3 className="text-sm text-black mt-1">{title}</h3>
//           <p className="text-xs text-black">{mainEducatorInstaHandle}</p>
//         </Link>
//       </div>
//     );
//   };
  
//   export default PostCard;