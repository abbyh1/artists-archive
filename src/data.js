export const FILTER_TAGS = [
  'recently started',
  'music',
  'video',
  'design',
  'writing',
  'digital art',
];

export const PROJECTS = [
  { id: 'midnight-drive', medium: 'music', title: 'midnight drive', creator: 'abby', note: 'needs a chorus', meta: '2:18', tags: ['music', 'recently started'], hashtags: ['music', 'lofi', '2am'], needs: ['vocals', 'lyrics'], files: ['demo.wav', 'project.flp'], versions: 7, longNote: "I made this at 2am and can't figure out a chorus.", artistNote: 'The verses came out in one sitting and I have not touched them since. Every chorus I write over it feels like it belongs to a different song. Take the stems and go wherever.' },
  { id: 'dreaming', medium: 'music', title: 'dreaming', creator: 'mila', note: 'needs vocals', meta: '0:42', tags: ['music', 'recently started'], hashtags: ['music', 'ambient'], needs: ['vocals', 'harmony'], files: ['sketch.wav', 'idea.flp'], versions: 2, longNote: "This has been looping in my head for weeks. I can hum the melody but I can't sing it.", artistNote: 'Recorded on a phone at a bus stop, then rebuilt it in the DAW. The melody is right. My voice is not.' },
  { id: 'lullaby-hum', medium: 'music', finished: true, title: 'hum for a lullaby', creator: 'kai', note: 'surprise me', meta: '1:05', tags: ['music', 'recently started'], hashtags: ['music', 'lullaby'], needs: ['anything'], files: ['hum.wav'], versions: 1, longNote: 'No plan for this one. Do whatever you want with it.', artistNote: 'A single take, no edits. I am curious what someone else hears in it that I do not.' },
  { id: 'character-sketch', medium: 'illustration', title: 'character sketch', creator: 'jun', note: 'finish her outfit', meta: 'digital · unfinished', tags: ['digital art', 'design'], hashtags: ['illustration', 'character'], needs: ['costume design', 'coloring'], files: ['sketch.psd', 'ref.png'], versions: 4, longNote: "I love her face but I keep getting stuck on what she'd wear.", artistNote: 'She started as a warm-up and turned into someone. I have redrawn the outfit six times and every version makes her a different person.' },
  { id: 'creature-study', medium: 'illustration', title: 'untitled creature study', creator: 'sam', note: 'needs color', meta: 'pencil · unfinished', tags: ['digital art'], hashtags: ['illustration', 'creature'], needs: ['color', 'background'], files: ['scan.jpg'], versions: 2, longNote: "Drew this on a napkin and now I'm attached to it.", artistNote: 'The scan still has the napkin texture in it. I did not clean it up on purpose.' },
  { id: 'memory-map', medium: 'illustration', title: 'city map, memory version', creator: 'abby', note: 'keep going', meta: 'ink · unfinished', tags: ['design', 'digital art'], hashtags: ['map', 'ink', 'memory'], needs: ['more streets', 'a legend'], files: ['map.png'], versions: 3, longNote: 'Drawing my hometown from memory. Getting the streets wrong on purpose.', artistNote: 'Everything is drawn at the scale I remember it, not the scale it is. The corner store is enormous.' },
  { id: 'lighthouse-keeper', medium: 'writing', title: 'the last lighthouse keeper', creator: 'priya', note: 'finish this', meta: '1,200 words', tags: ['writing', 'recently started'], hashtags: ['fiction', 'shortstory'], needs: ['an ending', 'a title'], files: ['draft.docx'], versions: 1, longNote: 'I know how it starts. I have no idea how it ends.', opening: "The light hadn't turned in eleven days, and still no one came.", artistNote: 'I have written four endings. Two are too neat, one is cruel, and one is just the beginning again.' },
  { id: 'letters-unsent', medium: 'writing', title: 'letters i never sent', creator: 'noor', note: 'continue this', meta: '340 words', tags: ['writing', 'recently started'], hashtags: ['writing', 'letters'], needs: ['more letters', 'an addressee'], files: ['draft.txt'], versions: 1, longNote: "Started as one letter. Not sure who it's to anymore.", opening: 'Dear whoever finds this—', artistNote: 'It was addressed to someone specific for about a paragraph. Then it stopped being about them.' },
  { id: 'nyc-photo-set', medium: 'photo', title: 'photo set: nyc', creator: 'leo', note: 'remix', meta: '14 photos', tags: ['video', 'design'], hashtags: ['photography', 'nyc'], needs: ['a sequence', 'captions'], files: ['shoot.zip'], versions: 3, longNote: 'Shot these over a weekend and never figured out how to put them in order.', artistNote: 'Fourteen frames, no narrative. Every ordering I try makes it a different weekend.' },
  { id: 'abandoned-diner', medium: 'photo', title: 'abandoned diner, route 9', creator: 'theo', note: 'needs an ending shot', meta: '6 photos', tags: ['video'], hashtags: ['photography', 'roadside'], needs: ['one more shot', 'a caption'], files: ['diner.zip'], versions: 2, longNote: "Went back twice and still don't have the shot that ends it.", artistNote: 'The light is only right for about twenty minutes and I have missed it both times.' },
];

export const CONTINUED = [
  { id: 'creature-study-v2', medium: 'illustration', finished: true, title: 'untitled creature study', creator: 'abby', originalCreator: 'sam', note: 'added color', meta: 'digital · finished', tags: ['digital art'], hashtags: ['illustration', 'color'], needs: [], files: ['color_pass.psd'], versions: 1, longNote: "Sam's linework was too good not to color.", artistNote: 'Kept the napkin texture. Colored around it rather than over it.' },
  { id: 'diner-v2', medium: 'photo', finished: true, title: 'abandoned diner', creator: 'abby', originalCreator: 'theo', note: 'added the ending shot', meta: '7 photos · finished', tags: ['video'], hashtags: ['photography', 'roadside'], needs: [], files: ['diner_v2.zip'], versions: 1, longNote: 'Went back for the shot theo needed.', artistNote: 'Got there at 6:40am on the third try. The seventh frame is the one.' },
];

export const TREE = {
  root: { id: 'orig', title: 'midnight drive', creator: 'abby', note: 'the original — needs a chorus' },
  children: [
    { id: 'c1', title: 'midnight drive (chorus added)', creator: 'sam', note: 'wrote a chorus, kept the verses', child: { id: 'g1', title: 'midnight drive (final mix)', creator: 'kai', note: "mixed and mastered sam's version" } },
    { id: 'c2', title: 'midnight drive (rock version)', creator: 'theo', note: 'sped it up, added guitar' },
    { id: 'c3', title: 'midnight drive (acoustic)', creator: 'noor', note: 'stripped it back to piano', child: { id: 'g2', title: 'midnight drive (remix)', creator: 'priya', note: 'turned it into something danceable' } },
  ],
};
