# YouTube Playlist
This is a legacy work in progress code I just wrote to build a chrome extension using react and redux

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)[![Build Status](https://img.shields.io/travis/fossapps/YouTubePlay/master.svg?style=flat-square)](https://travis-ci.org/fossapps/YouTubePlay)[![devDependencies Status](https://david-dm.org/fossapps/YouTubePlay/dev-status.svg?style=flat-square)](https://david-dm.org/fossapps/YouTubePlay?type=dev)[![dependencies Status](https://david-dm.org/fossapps/YouTubePlay/status.svg?style=flat-square)](https://david-dm.org/fossapps/YouTubePlay)
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

## Special thanks to PhpStorm
I thought I pushed to github and deleted the local repository so that my readme works exactly the way it says it works,
but to my surprise, pushing to github failed unexpectedly. And my entire project was gone. But PhpStorm came to rescue
and restored from it's local history.

License: GPL
