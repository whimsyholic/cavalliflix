# CavalliFlix

An unofficial Roberto Cavalli runway-video archive concept inspired by GallianoFlix.

Open `index.html` in a browser to use it. The site is static and does not need a dev server.

## What is included

- Video-first runway player
- Search by season, mood, source, and tag
- Era filters for Fausto Puglisi, modern Cavalli, Y2K archive, menswear, Just Cavalli, and Resort/Pre-Fall
- Verified direct public embeds for currently found Roberto Cavalli runway videos
- 160 mapped Roberto Cavalli fashion-brand show cards
- Embedded YouTube search playlists for mapped archive cards without a stable direct video ID

## Main references checked

- GallianoFlix: https://www.gallianoflix.com/
- Roberto Cavalli official fashion-show pages: https://www.robertocavalli.com/
- Roberto Cavalli verified YouTube show uploads
- Vogue Roberto Cavalli runway listings
- Public full-show videos from Fashion Feed and FF Channel where official embeds were not surfaced

## Updating the archive

In `app.js`, add or edit an object in the `shows` array.

Use a YouTube video ID in `videoId` when you have a stable public video. Leave `videoId` blank for a search card.
