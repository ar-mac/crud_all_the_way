# CRUD all the way 🌈

This is sandbox app used to play and learn react-query 

## Getting Started

To setup the application (one time only) run:

`yarn install`
`yarn run init:db`

To start the application run in separate terminal windows:
`yarn start` and `yarn run serv`

## Tools

Apart from [react-query](https://react-query.tanstack.com) we'll be using [AntDesign](https://ant.design/components/overview/) to quickly create good looking application. The backend is created by [json-server](https://github.com/typicode/json-server) for simplicity sake.

## Materials and reference

[Ract query](https://react-query.tanstack.com/overview) documentation

[AntDesign components](https://ant.design/components/overview/) if needed

[json-server docs](https://github.com/typicode/json-server)

[json-server relationships](https://keyholesoftware.com/2020/03/16/mock-restful-server-fast-with-json-server/) how to fetch data for relationships from json-server

## Info

Whenever using `axios` import it from `/src/api/axios.js`

Whenever you need to generate the ID use the function from `/src/helpers/nanoid.js`

## Tasks for Basic+

1. √ In /users Fetch all users
2. √ In /users/featured Fetch 3 featured users
3. In /users/:userId 
   1. √ Fetch user data
   2. √ Fetch posts created by the user
   3. X Fetch posts observed by the user
4. √ In /posts/create implement post creation
5. X In /posts fetch paginated list of posts
6. In /posts/:postId
   1. √ Fetch post data
   2. √ Fetch information how many users observe the post
   3. X Add ability to observe/stop observing post depending on the situation
   4. √ Add ability to like/unlike the post

## Tasks for Intermediate

1. In /users/featured add ability to change limit param
   1. By default limit === 3
   2. Debounce input changes to load the query after 500ms
2. In /posts/:postId
   1. Add optimistic loading for like/unlike to mitigate slow server response
   2. Add ability to observe/stop observing post depending on the situation
3. In /users/:userId 
   1. Fetch posts observed by the user
4. In /posts fetch paginated list of posts

Tips:
* Do not add onSuccess in reusable hooks

## Disclaimer

For anyone (rightfully :D) disgusted by the styling/authentication, focus of this app is to provide playground for react-query not to learn best practices in styling/authentication.
