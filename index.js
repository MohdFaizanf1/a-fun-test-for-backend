require('dotenv').config()
const express = require('express')

const app = express()

const port = 3000

const gitHubData={
    
  "login": "MohdFaizanf1",
  "id": 197926943,
  "node_id": "U_kgDOC8wgHw",
  "avatar_url": "https://avatars.githubusercontent.com/u/197926943?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/MohdFaizanf1",
  "html_url": "https://github.com/MohdFaizanf1",
  "followers_url": "https://api.github.com/users/MohdFaizanf1/followers",
  "following_url": "https://api.github.com/users/MohdFaizanf1/following{/other_user}",
  "gists_url": "https://api.github.com/users/MohdFaizanf1/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/MohdFaizanf1/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/MohdFaizanf1/subscriptions",
  "organizations_url": "https://api.github.com/users/MohdFaizanf1/orgs",
  "repos_url": "https://api.github.com/users/MohdFaizanf1/repos",
  "events_url": "https://api.github.com/users/MohdFaizanf1/events{/privacy}",
  "received_events_url": "https://api.github.com/users/MohdFaizanf1/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Mohd Faizan",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 8,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-02-05T14:01:48Z",
  "updated_at": "2026-02-24T09:34:53Z"

}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res) => {
    res.send('Faizan')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login at chai aur code</h1>')
});

app.get('/youtube',(req,res)=>{
    res.send('<h2>Chai Aur code</h2>')
})


app.get('/github', (req,res) => {
    res.json(gitHubData)
})

app.listen(process.env.PORT,() => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})