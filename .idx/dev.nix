{ pkgs, ... }: {
  channel = "stable-24.11";

  packages = [
    pkgs.nodejs_22
  ];

  env = {};

  idx = {
    extensions = [
      "google.gemini-cli-vscode-ide-companion"
    ];

    previews = {
      enable = true;
      previews = {
        web = {
          command = [
            "npx"
            "serve"
            "deploy-6a1d08109257f99b531cced4"
            "-l"
            "$PORT"
          ];
          manager = "web";
        };
      };
    };
  };
}