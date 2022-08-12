/*
Next.js code splitting is done via two methods:

Route-based: Implemented by default, when a user visits a route (page), Next only sends the code needed for the initial route. Other chunks are downloaded as needed
Component-based: This type of code splitting allows splitting large components into separate chunks that can by lazy-loaded when required. Next.js supports component-based code splitting through dynamic immport

*/