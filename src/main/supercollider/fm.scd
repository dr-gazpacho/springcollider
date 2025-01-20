(
//init/cleanup
s.newBusAllocators;
/*~vbus = Bus.audio(s, 2);*/
s.freeAll;
// ~players.do(_.stop);

s.waitForBoot({
	SynthDef(\fm, {
		arg freq=500, mRatio=1, cRatio=1,
		index=1, iScale=5, cAtk=4, cRel=(-4),
		amp=0.2, atk=0.01, rel=3, pan=0,
		out=0, fx=0, fxsend=(-25);
		var car, mod, env, iEnv;

		//index of modulation
		iEnv = EnvGen.kr(
			Env(
				[index, index*iScale, index],
				[atk, rel],
				[cAtk, cRel]
			)
		);

		//amplitude envelope
		env = EnvGen.kr(Env.perc(atk,rel,curve:[cAtk,cRel]),doneAction:2);

		//modulator/carrier
		mod = SinOsc.ar(freq * mRatio, mul:freq * mRatio * iEnv);
		car = SinOsc.ar(freq * cRatio + mod) * env * amp;

		car = Pan2.ar(car, pan);

		//direct out/reverb send
		Out.ar(out, car);
		Out.ar(fx, car * fxsend.dbamp);
	}).add;

	s.sync;

	OSCFunc({
	|msg, time, addr, recvPort|
    var name = msg[1];
	var freq = msg[2];
	//avoid overwriting references to synths
	//if I make 'test' and then another 'test', the first UGEN keeps playing (cont.)
	//I just just my reference to the first one
	if(currentEnvironment.at(name.asSymbol).notNil) {
		postln(currentEnvironment);
        currentEnvironment.at(name.asSymbol).free;
    };
	//this would be the same I think as ~name
    currentEnvironment.put(
        name.asSymbol,
        Synth(\fm, [\freq, freq])
    );
	}, '/synth/create');

	//remove synth with a given name
	OSCFunc({
		|msg, time, addr, recvPort|
		var name = msg[1];
		currentEnvironment.at(name.asSymbol).free;
	}, '/synth/free');


})