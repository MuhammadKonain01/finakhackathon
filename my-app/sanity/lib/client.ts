// // import { createClient } from 'next-sanity'

// // import { apiVersion, dataset, projectId, useCdn } from '../env'
// // import { SanityClient } from 'sanity'


// // const client = createClient({
// //   token: process.env.SANITY_ACCESS_TOKEN,
// //   apiVersion : "v2023-08-24",
// //   dataset : "production",
// //   projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
// //   useCdn : true,
// // })

// // client.fetch("")

// // // export default SanityClient;
// // // export default client;


// import { createClient } from "next-sanity";

// import { apiVersion, dataset, projectId, useCdn } from "../env";

// export const client = createClient({
//   token: process.env.SANITY_ACCESS_TOKEN,
//   apiVersion : "v2023-08-24",
//   dataset : "production",
//   projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   useCdn : true,
// });





import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})
