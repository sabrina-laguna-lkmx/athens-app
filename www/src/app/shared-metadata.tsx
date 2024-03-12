// import { ImageModel } from "@/types/strapi";

// export function simpleMetadata(title: string, urlPage: string) {
//   console.log(process.env.METADATA_BASE_URL);
//   return {
//     metadataBase: new URL(`${process.env.METADATA_BASE_URL}}`),
//     title: title,
//     description:
//       "Delivering top waste collection and recycling solutions to over 250k customers in SoCal, we are a family-owned company with 60+ years of experience.",
//     keywords:
//       "waste collection, waste management, garbage disposal services, recycling, urban waste management, garbage collection company, sustainable waste solutions, commercial waste disposal, waste management services, residential trash pickup",
//     robots:
//       "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
//     openGraph: {
//       title: title,
//       description:
//         "Delivering top waste collection and recycling solutions to ov/*  */er 250k customers in SoCal, we are a family-owned company with 60+ years of experience.",

//       type: "website",
//       images: "/opengraph-image.png",
//       url: `${urlPage}`,
//     },
//   };
// }

// export function generalMetadata(
//   pageName: string,
//   robots: string,
//   urlPage: string
// ) {
//   return {
//     metadataBase: new URL(`${process.env.METADATA_BASE_URL}}`),
//     title: `${pageName} - Athens Services`,
//     description:
//       "Delivering top waste collection and recycling solutions to over 250k customers in SoCal, we are a family-owned company with 60+ years of experience.",
//     keywords:
//       "waste collection, waste management, garbage disposal services, recycling, urban waste management, garbage collection company, sustainable waste solutions, commercial waste disposal, waste management services, residential trash pickup",
//     robots: robots,
//     openGraph: {
//       title: `${pageName} - Athens Services`,
//       description:
//         "Delivering top waste collection and recycling solutions to over 250k customers in SoCal, we are a family-owned company with 60+ years of experience.",
//       type: "website",
//       images: "/opengraph-image.png",
//       url: `${urlPage}`,
//     },
//   };
// }

// export function eventMetadata(
//   urlPage: string,
//   pageName: string,
//   excerpt: string,
//   eventImage: ImageModel,
//   prevousImages: any
// ) {
//   return {
//     metadataBase: new URL(`${process.env.METADATA_BASE_URL}}`),
//     title: `${pageName} - Athens Services`,
//     description: excerpt,
//     keywords:
//       "waste collection, waste management, garbage disposal services, recycling, urban waste management, garbage collection company, sustainable waste solutions, commercial waste disposal, waste management services, residential trash pickup",
//     robots:
//       "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
//     openGraph: {
//       title: `${pageName} - Athens Services`,
//       description: excerpt,
//       type: "website",
//       images: [`${eventImage?.data?.attributes?.url}`, ...prevousImages],
//       url: `${urlPage}`,
//     },
//   };
// }
