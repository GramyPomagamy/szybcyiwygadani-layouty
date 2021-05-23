'use strict';

// Packages
const fs = require('fs');


// Ours
const nodecg = require('./util/nodecg-api-context').get();

const nowPlaying = nodecg.Replicant('nowPlaying', {defaultValue: {}, persistent: true});

function GetSong() {
	let song = fs.readFileSync(nodecg.bundleConfig.musicTitlePath, 'utf8');
	nowPlaying.value = song;
}

fs.watch(nodecg.bundleConfig.musicTitlePath, () => {
	GetSong()
});

GetSong();
