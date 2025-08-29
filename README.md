# Release Please Monorepo Example

This is an example of how to use release-please-action to manage releases for a monorepo.

This repo has 3 services:
    - server
    - client
    - db

With the release-please workflow (`.github/workflows/release-please.yaml`), the release-please manifest (`release-please-manifest.json`) and the release-please config (`release-please-config.json`), we can have service specific releases.