# Hexpawn

A game framework built on nextjs using sass modules, dprint, biome, and editor config.

## Installation:

1. Install global Dprint: `brew install dprint`
2. Install packages: `pnpm i`

## Run one of the below options in your console:

- From the workspace run `pnpm hexpawn:dev`
- From the workspace run `pnpm -C 'packages/hexpawn/' run dev`
- From the workspace run `pnpm -r run dev` to recurively dev on all projects.
- Run the command directly `pnpm run dev`

note: you must have a global install of pnpm for this to work. This does not use `yarn` or `npm`

### Biome

Biome configuration is done in the `dprint.json` file

### SVGs

SVGs can be loaded from files via SVGR which uses the `svgrc.json` file for configuration. They can also be created inline as one would expect.
