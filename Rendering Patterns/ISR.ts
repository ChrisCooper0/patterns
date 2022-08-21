/*
Incremental Static Re-generation (ISR)
Static Generation (SSG) addresses most of the concerns of SSR and CSR but is suitable for rendering mostly static content. It poses limitations when the content to be rendered is dynamic or changing frequently.

Think of a growing blog with multiple posts. You wouldn't possibly want to rebuild and redeploy the site just because you want to correct a typo in one of the posts. Similarly, one new blog post should also not require a rebuild for all the existing pages. Thus, SSG on its own is not enough for rendering large websites or applications.

The Incremental Static Generation (iSSG) pattern was introduced as an upgrade to SSG, to help solve the dynamic data problem and help static sites scale for large amounts of frequently changing data. iSSG allows you to update existing pages and add new ones by pre-rendering a subset of pages in the background even while fresh requests for pages are coming in.

Next.js revalidate: prop forces the page to revalidate after the specified number of seconds

ISR Advantages:

iSSG provides all the advantages of SSG and then some more. The following list covers them in detail.

Dynamic data: The first advantage is obviously why iSSG was envisioned. Its ability to support dynamic data without a need to rebuild the site.

Speed: iSSG is at least as fast as SSG because data retrieval and rendering still takes place in the background. There is little processing required on the client or the server.

Availability: A fairly recent version of any page will always be available online for users to access. Even if the regeneration fails in the background, the old version remains unaltered.

Consistent: As the regeneration takes place on the server one page at a time, the load on the database and the backend is low and performance is consistent. As a result, there are no spikes in latency.

Ease of Distribution: Just like SSG sites, iSSG sites can also be distributed through a network of CDN's used to serve pre-rendered web pages.



*/
