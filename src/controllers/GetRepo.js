const axios = require("axios");
const connection = require("../db/config");

module.exports = {
  async userRepo(req, res) {
    const path = "https://api.github.com/search/repositories?q=topic:";
    const languages = ["javascript", "java", "c", "python", "elixir"];
    try {
      let repos = await connection("repo").select(
        `allow_forking`,
        `archive_url`,
        `archived`,
        `assignees_url`,
        `blobs_url`,
        `branches_url`,
        `clone_url`,
        `collaborators_url`,
        `comments_url`,
        `commits_url`,
        `compare_url`,
        `contents_url`,
        `contributors_url`,
        `created_at`,
        `default_branch`,
        `deployments_url`,
        `description`,
        `disabled`,
        `downloads_url`,
        `events_url`,
        `fork`,
        `forks`,
        `forks_count`,
        `forks_url`,
        `full_name`,
        `git_commits_url`,
        `git_refs_url`,
        `git_tags_url`,
        `git_url`,
        `has_discussions`,
        `has_downloads`,
        `has_issues`,
        `has_pages`,
        `has_projects`,
        `has_wiki`,
        `homepage`,
        `hooks_url`,
        `html_url`,
        `id`,
        `is_template`,
        `issue_comment_url`,
        `issue_events_url`,
        `issues_url`,
        `keys_url`,
        `labels_url`,
        `language`,
        `languages_url`,
        `license`,
        `merges_url`,
        `milestones_url`,
        `mirror_url`,
        `name`,
        `node_id`,
        `notifications_url`,
        `open_issues`,
        `open_issues_count`,
        `owner`,
        `private`,
        `pulls_url`,
        `pushed_at`,
        `releases_url`,
        `score`,
        `size`,
        `ssh_url`,
        `stargazers_count`,
        `stargazers_url`,
        `statuses_url`,
        `subscribers_url`,
        `subscription_url`,
        `svn_url`,
        `tags_url`,
        `teams_url`,
        `topics`,
        `trees_url`,
        `updated_at`,
        `url`,
        `visibility`,
        `watchers`,
        `watchers_count`,
        `web_commit_signoff_required`
      );

      if (!repos.length > 0) {
        for (let i in languages) {
          const { data: { items = [] } = {} } = await axios.get(
            `${path}${languages[i]}`
          );
          await connection("repo").insert(items[0]);
          repos.push(items[0]);
        }
      }
      
      res.status(200).send(repos);
    } catch (error) {
      return res.status(500).send({ msg: "Error get repository's", error });
    }
  },
};
