module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: "tta-tech",
      api_key: "991257878188692",
      api_secret: "imkbj8cHJINxSIYGg_nfWy77ysg",
      upload_preset: "ml_default",
    },
  },
  // ...
});
