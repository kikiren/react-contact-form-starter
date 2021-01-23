import cloudbase from "@cloudbase/js-sdk";

const app = cloudbase.init({
  env: process.env.REACT_APP_ENV_ID,
});

export { app };
