const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Pass-through: /assets/* keeps its path; /static/* lands at root
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/static": "/" });

  // ISO date filter for sitemap
  eleventyConfig.addFilter("isoDate", (date) => {
    return new Date(date).toISOString();
  });

  // Year filter for footer
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Watch CSS for live reload
  eleventyConfig.addWatchTarget("src/assets/css/");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes/layouts",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
