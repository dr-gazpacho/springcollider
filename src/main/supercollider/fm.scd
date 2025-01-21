(
//init/cleanup
s.reboot;
s.boot;
s.newBusAllocators;
s.freeAll;
OSCdef.freeAll;
//until you reboot SC, current environment has references to processes on all servers

s.waitForBoot({
    s.plotTree;
    SynthDef(\fm, {
        arg freq=500, mRatio=1, cRatio=1, index=1, amp=0.2;
        var car, mod, env;
        mod = SinOsc.ar(freq * mRatio, mul:freq * mRatio);
        car = SinOsc.ar(freq * cRatio + mod) * amp;
        //direct out/reverb send
        Out.ar(0, car);
    }).add;

	OSCdef.new(\create, {
    |msg, time, addr, recvPort|
    var name = msg[1];
    var freq = msg[2];

    //avoid overwriting references to synths
    //if I make 'test' and then another 'test', the first UGEN keeps playing (cont.)
    //I just just my reference to the first one

		if(currentEnvironment.at(name.asSymbol).notNil) {
        currentEnvironment.at(name.asSymbol).free;
		currentEnvironment.removeAt(name.asSymbol);
    };
    //this would be the same I think as ~name
    currentEnvironment.put(
        name.asSymbol,
        Synth(\fm, [\freq, freq])
    );
    }, '/synth/create');
    //remove synth with a given name
    OSCdef.new(\free, {
        |msg, time, addr, recvPort|
        var name = msg[1];
        if(currentEnvironment.at(name.asSymbol).notNil) {
            currentEnvironment.at(name.asSymbol).free;
			currentEnvironment.removeAt(name.asSymbol);
        };
    }, '/synth/free');

});
)