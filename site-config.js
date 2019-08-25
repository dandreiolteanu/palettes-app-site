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
  instagram_username     : "palettesapp",
  twitter_username       : "palettesapp",
  github_username        : null,
  youtube_username       : null,

  // Features List
  features               : [
    {
      title: "Export beautiful photos while keeping their high quality",
      description:
        "",
      fontawesome_icon_name: "magic",
    },
    {
      title: "Change your App theme from one of the 5 available",
      description:
        "",
      fontawesome_icon_name: "adjust",
    },
    {
      title: "Share photos on your favorite social media",
      description:
        "",
      fontawesome_icon_name: "share",
    },
  ],
  header_background             : "rgba(255, 255, 255, 0.8)",
  topbar_title_color            : "#000000",
  cover_overlay_color_rgba      : "rgba(0, 0, 0, 0.7)",
  device_color                  : "black",                          // Set to "black", "blue", "coral", "white", or "yellow"
  body_background_color         : "#ffffff",
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
