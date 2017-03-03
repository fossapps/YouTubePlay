# YouTube Playlist
This is a legacy work in progress code I just wrote to build a chrome extension using react and redux

## What and Why?
When I'm listening to songs on YouTube, I can't make a quick list on the fly according to my taste. This is a plugin
which adds a link for queuing a video, so when the current video ends, instead of going with the normal flow, it plays
the one on queue. When queue is finished, normal flow is resumed.

## Building from source:
- Clone this repo
- cd into the repo
- run `npm install` or `yarnpkg`
- run `npm run build` or `yarnpkg build`
- Open chrome and go to `chrome://extensions/` page
- Enable Developer if not already done so
- Click on "Load unpacked extension..." button
- Select `dist` directory inside this project

## FAQ
> Where are the tests?

There are none, as of now. This project will have to be re-written in a better way.
There are a few things where everything is not done properly as I'm doing in a hurry. You can see the UI.
But they will come soon.

> Why do you call it a legacy code if you just wrote.

As per my definition, any code which can't be refactored easily is a legacy code, there're no tests, hence it's a legacy
code, that should change soon.

> I'm having trouble using this extension.

As it states, it's a work in progress. It has only implementation for watch page, hence if you go to a video and there
aren't any queue buttons, just hit refresh, and you'll see queue links near videos on right. When you click on them, and
click on Extension Icon near address bar, you should see queue displayed there.

License: GPL
