console.log("hello world");
require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res)=>{
  res.send('harshdotcom')
})

app.get('/login', (req,res)=>{
  res.send('<h1>please login at website</h1>')
})

app.get('/youtube', (req,res)=>{
  res.send("<h2>chai or sutta</h2>")
})

const githubdata = {
  "login": "harshkhangarot07",
  "id": 140736594,
  "node_id": "U_kgDOCGN4Ug",
  "avatar_url": "https://avatars.githubusercontent.com/u/140736594?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/harshkhangarot07",
  "html_url": "https://github.com/harshkhangarot07",
  "followers_url": "https://api.github.com/users/harshkhangarot07/followers",
  "following_url": "https://api.github.com/users/harshkhangarot07/following{/other_user}",
  "gists_url": "https://api.github.com/users/harshkhangarot07/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/harshkhangarot07/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/harshkhangarot07/subscriptions",
  "organizations_url": "https://api.github.com/users/harshkhangarot07/orgs",
  "repos_url": "https://api.github.com/users/harshkhangarot07/repos",
  "events_url": "https://api.github.com/users/harshkhangarot07/events{/privacy}",
  "received_events_url": "https://api.github.com/users/harshkhangarot07/received_events",
  "type": "User",
  "site_admin": false,
  "name": "harsh_Wardhan",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 2,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-07-27T15:51:27Z",
  "updated_at": "2024-02-07T04:59:34Z"
}

app.get('/github',(req,res)=>{
  res.json(githubdata)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

// app.listen()
