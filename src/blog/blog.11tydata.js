// Directory data for all blog posts.
// Scheduled publishing: a post whose `date` is still in the future is hidden
// (not output, not in the blog list, not in the sitemap). The weekly GitHub
// Actions build (cron, Mondays) re-evaluates "now", so each queued post goes
// live automatically on schedule. Set INCLUDE_FUTURE=true to preview locally.
module.exports = {
  layout: "base.njk",
  tags: ["post"],
  pageKey: "blog",
  eleventyComputed: {
    eleventyExcludeFromCollections: (data) => {
      const future = data.date && new Date(data.date) > new Date();
      if (future && process.env.INCLUDE_FUTURE !== "true") return true;
      return data.eleventyExcludeFromCollections || false;
    },
    permalink: (data) => {
      const future = data.date && new Date(data.date) > new Date();
      if (future && process.env.INCLUDE_FUTURE !== "true") return false;
      return data.permalink; // undefined → Eleventy uses the default file-based permalink
    },
  },
};
