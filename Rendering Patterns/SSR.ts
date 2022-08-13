/*
Server-side Rendering (SSR)

Server-side rendering (SSR) is one of the oldest methods of rendering web content.
SSR generates the full HTML for the page content to be rendered in response to a user request. 


Less JavaScript shipped to the client browser leads to quicker FCP and TTI (KPI)

SSR with Next.js

The Next.js framework also supports SSR. This pre-renders a page on the server on every request. It can be accomplished by exporting an async function called getServerSideProps() from a page as follows.

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
The context object contains keys for HTTP request and response objects, routing parameters, querystring, locale, etc.
*/
