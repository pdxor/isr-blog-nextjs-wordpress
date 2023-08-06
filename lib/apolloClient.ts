// import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

// let client: ApolloClient<any> | null = null;

// export const getClient = () => {
//   // create a new client if there's no existing one or if we are running on the server.
//   if (!client || typeof window === "undefined") {
//     client = new ApolloClient({
//       link: new HttpLink({
//         uri: process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
//         credentials: "include",
//       }),
//       cache: new InMemoryCache(),
//     });
//   }

//   return client;
// };

import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const link = createHttpLink({
	uri: process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
	credentials: 'include',
  });
  
export const client = new ApolloClient({
	cache: new InMemoryCache(),
	link
});