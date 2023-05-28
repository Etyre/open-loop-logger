import { Octokit } from "octokit"

// Accessing the github API

const octokit = new Octokit({
    auth: 'YOUR-TOKEN'
});
  
await octokit.request('GET /repos/etyre/Roam_Backup/contents/json', {
    owner: 'etyre',
    repo: 'Roam_Backup',
    path: 'json',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

// Acessing google sheets