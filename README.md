# Spring Collider
I don't know Spring. I am rusty with React. I want to learn super collider better. Why not stick em all together?

In the UI, I plan to build a small handlful of synth modules: some basic things like FM Synthesis/Additive Synthesis and Wave Tables.
I also plan to build a digital UI to test some code for an embedded build on a Raspberry Pi.

In the Spring app, I'm going to try to implement a simple Chain of Responsibility. Supercollider can recieve OSC/UDP messages, and therefore sends no responses.
I need to build out an application that keeps track of which synths are running in supercollider so it can handle user input successfully

The Supercollider file should mostly wind up being paramterized SynthDefs and OSC listeners

Notes on FM
- Modulator Frequency: determines sideband spacing
- Modulator Amplitude (mul): determines number of audible side bands
  - Index of Modulation: modulatorAmplitude/modulatorFrequency - loosly correlates to number of sideband pairs (numOfPairs ~ index + 1)
- Carrier Frequencty: the anchor around which we create sidebands
- A clear sense of pitch arises when the carrier and modulator form a simple ratio

## Running
You're gonna have to run a few different things, but when they're all up, it's pretty easy to make them all talk

### React
I'm using NPM as a package manager. It's just a simple react app with Tailwind. To get cooking with the react app you can do one of two things:
1. Thing one:
 - From the root of the project, `cd src/main/sc-client && npm install`
 - Then either `npm run dev` if you want to run the react app on its own dev server (nice for hot reloading)
 - Or run `npm run build` to make a new js bundle that gets served by the spring app
 - Or hell do both and just live free but let your heart be your guide and hope to God you got a good one for all of our sakes
