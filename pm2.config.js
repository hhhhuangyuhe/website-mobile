module.exports = {
  apps: [
    {
      name: 'website-mobile',
      cwd: './',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      watch: false,
      exec_mode: 'cluster',
      instances: '2',
      ignore_watch: [
        "node_modules",
        "logs"
      ],
      error_file:"./logs/error.log",
      out_file:"./logs/out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      merge_logs: true
    },
  ],
};
