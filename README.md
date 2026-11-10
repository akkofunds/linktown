# Linktown School Arena

A lightweight, browser based multiplayer FPS built from the [Linktown renderer](https://github.com/besoeasy/linktown). Hosted as a static site on GitHub Pages.

## Play

Open the [GitHub Pages game](https://akkofunds.github.io/linktown/?gfx=low&gpu=webgl&dyn=1). Press **Start**, then click the game view to capture the mouse.

- **WASD** move, **mouse** aim, **left click** fire
- **Hold Space** to bunny hop continuously; **R** reloads the 17 round magazine
- Infinite reserve ammo; Glock 19 is the only weapon
- Create a room and share its link with friends to play online

The arena is a flat 1,000 × 1,000 unit baseplate with a perimeter barrier and a minimap showing live player positions. Solo mode has no bots to keep Chromebook CPU and GPU use low.

## Low graphics

The game defaults to its low preset. The Pages URL forces the WebGL 2 backend and adaptive resolution for Chromebook compatibility:

`?gfx=low&gpu=webgl&dyn=1`

## Run locally

```sh
npm ci
npm run dev
```

## Deploy

Pushing to `main` builds the Vite app and deploys it with GitHub Pages Actions.
