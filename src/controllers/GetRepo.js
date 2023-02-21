const axios = require("axios");
const connection = require("../db/config");

module.exports = {
  async userRepo(req, res) {
    const path = "https://api.github.com/search/repositories?q=topic:";
    const languages = ["javascript", "java", "c", "python", "kotlin"];
    try {
      let repos = await connection("repo").select("*");

      if (!repos.length > 0) {
        for (let i in languages) {
          const { data: { items = [] } = {} } = await axios.get(
            `${path}${languages[i]}`
          );
          items.map(async (item) => {
            if (
              item.language &&
              languages.includes(item.language.toLowerCase())
            ) {
              await connection("repo").insert(item);
              await repos.push(item);
            }
          });
        }
      }
      res.status(200).send(repos);
    } catch (error) {
      return res.status(500).send({ msg: "Error get repository's", error });
    }
  },
};
