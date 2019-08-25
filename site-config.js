module.exports = {
  // App Info
  appstore_link         : null,                                  // Enter App Store URL.
  playstore_link        : null,                                  // Enter Google Play Store URL.
  google_analytics_ID   : null,                                        // Enter Google Analytics ID or ""
  presskit_download_link: null,                                  // Enter a link to downloadable file or (e.g. public Dropbox link to a .zip file). 
  video_or_screenshot   : "screenshot",                                           // "screenshot" or "video"
  app_url               : "https://palettes.app",                            // Domain of your website without path_prefix.
  path_prefix           : "/",                                                    // Prefixes all links. For cases when deployed to example.github.io/automatic-gatsbyjs-app-landing-page/.
  app_name              : "Palettes",
  app_price             : "Free",
  app_description       : "Find the color palette from a photo and place it anywhere.",
  app_keywords          : ["palette", "palettes", "photo editor", "get palette from image", "colors"],

  // Personal Info
  your_name              : "Andrei Olteanu",
  your_link              : "https://olteanu.webflow.io",
  your_city              : "Cluj-Napoca",
  email_address          : "contact@palettes.app",
  linkedin_username      : null,
  facebook_username      : null,
  instagram_username     : "palettes",
  twitter_username       : "palettes",
  github_username        : null,
  youtube_username       : null,

  // Features List
  features               : [
    {
      title: "GitHub Pages GatsbyJS Starter",
      description:
        "Designed for GitHub Pages and Netlify. Fork. Edit site-config.js. Upload screenshot/video. Push to gh-pages branch. Voilà!",
      fontawesome_icon_name: "magic",
    },
    {
      title: "iPhone Device Preview",
      description:
        "Preview your app in the context of an iPhone device. Five different device colors included.",
      fontawesome_icon_name: "mobile",
    },
    {
      title: "Video Support",
      description:
        "Preview app video on the iPhone device simply by placing your video files in the videos folder.",
      fontawesome_icon_name: "play-circle",
    },
    {
      title: "Optimized Performance",
      description:
        "No need to worry about page performance or optimizing images and videos. Everything is already configured for the best performance possible!",
      fontawesome_icon_name: "sync",
    },
    {
      title: "Easy to Tweak",
      description:
        "Tweak accent color, images, icons and transparency via the site-config.js file. No HTML/CSS needed.",
      fontawesome_icon_name: "adjust",
    },
    {
      title: "Feature List",
      description:
        "Add features (like this one) to your site via the site-config.js file. No HTML/CSS needed.",
      fontawesome_icon_name: "star",
    },
    {
      title: "Deploy to Netlify",
      description: "Easily deploy your GatsbyJS landing page to Netlify.",
      fontawesome_icon_name: "arrow-alt-circle-down",
    },
    {
      title: "Social Links",
      description:
        "Easily add social media accounts and contact info in the footer via the site-config.js file. No HTML/CSS needed.",
      fontawesome_icon_name: "link",
    },
    {
      title: "FontAwesome Support",
      description:
        "Pick custom Font Awesome icons for the feature list via the site-config.js file. No HTML/CSS needed.",
      fontawesome_icon_name: "info-circle",
    },
  ],
  header_background             : "rgba(0, 0, 0, 0.1)",
  topbar_title_color            : "#ffffff",
  cover_overlay_color_rgba      : "rgba(54, 59, 61, 0.8)",
  device_color                  : "black",                          // Set to "black", "blue", "coral", "white", or "yellow"
  body_background_color         : "ffffff",
  primary_text_color            : "#000",
  content_width                 : "1170px",
  font                          : `"Helvetica Neue", sans-serif`,
  link_color                    : "#1d63ea",
  app_title_color               : "#ffffff",
  app_price_color               : "#ffffff",
  app_description_color         : "#ffffff",
  feature_title_color           : "#000000",
  feature_text_color            : "#666666",
  feature_icons_foreground_color: "#1d63ea",
  feature_icons_background_color: "#e6e6e6",
  social_icons_foreground_color : "#666666",
  social_icons_background_color : "#e6e6e6",
  footer_text_color             : "#666666",
}
