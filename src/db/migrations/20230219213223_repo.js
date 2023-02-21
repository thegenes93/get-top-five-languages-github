/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("repo", (table) => {
    table.increments("document_id").primary().notNull().unique();
    table.boolean("allow_forking");
    table.string("archive_url");
    table.boolean("archived");
    table.string("username");
    table.string("updated_at");
    table.string(`assignees_url`);
    table.string(`blobs_url`);
    table.string(`branches_url`);
    table.string(`clone_url`);
    table.string(`collaborators_url`);
    table.string(`comments_url`);
    table.string(`commits_url`);
    table.string(`compare_url`);
    table.string(`contents_url`);
    table.string(`contributors_url`);
    table.string(`created_at`);
    table.string(`default_branch`);
    table.string(`deployments_url`);
    table.string(`description`);
    table.string(`disabled`);
    table.string(`downloads_url`);
    table.string(`events_url`);
    table.string(`fork`);
    table.string(`forks`);
    table.string(`forks_count`);
    table.string(`forks_url`);
    table.string(`full_name`);
    table.string(`git_commits_url`);
    table.string(`git_refs_url`);
    table.string(`git_tags_url`);
    table.string(`git_url`);
    table.string(`has_discussions`);
    table.string(`has_downloads`);
    table.string(`has_issues`);
    table.string(`has_pages`);
    table.string(`has_projects`);
    table.string(`has_wiki`);
    table.string(`homepage`);
    table.string(`hooks_url`);
    table.string(`html_url`);
    table.integer("id");
    table.string(`is_template`);
    table.string(`issue_comment_url`);
    table.string(`issue_events_url`);
    table.string(`issues_url`);
    table.string(`keys_url`);
    table.string(`labels_url`);
    table.string(`language`);
    table.string(`languages_url`);
    table.string(`license`);
    table.string(`merges_url`);
    table.string(`milestones_url`);
    table.string(`mirror_url`);
    table.string(`name`);
    table.string(`node_id`);
    table.string(`notifications_url`);
    table.string(`open_issues`);
    table.string(`open_issues_count`);
    table.string(`owner`);
    table.string(`private`);
    table.string(`pulls_url`);
    table.string(`pushed_at`);
    table.string(`releases_url`);
    table.string(`score`);
    table.string(`size`);
    table.string(`ssh_url`);
    table.string(`stargazers_count`);
    table.string(`stargazers_url`);
    table.string(`statuses_url`);
    table.string(`subscribers_url`);
    table.string(`subscription_url`);
    table.string(`svn_url`);
    table.string(`tags_url`);
    table.string(`teams_url`);
    table.string(`topics`);
    table.string(`trees_url`);
    table.string(`url`);
    table.string(`visibility`);
    table.string(`watchers`);
    table.string(`watchers_count`);
    table.string(`web_commit_signoff_required`);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("repo");
};
