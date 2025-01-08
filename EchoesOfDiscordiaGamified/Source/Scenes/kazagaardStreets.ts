namespace EchoesOfDiscordia {
  export async function kazagaardStreets(): ƒS.SceneReturn {

    console.log("Kazagaard Streets");

    // cpms = characters per millisecond
    ƒS.Speech.setTickerDelays(30, 5000);
    ƒS.Speech.clear();
    ƒS.Speech.hide();

    await ƒS.Location.show(locations.kazagaardStreets);
    ƒS.Sound.play(sound.kazagaardCity, .5, true);
    await ƒS.update(2);
    ƒS.Speech.show();
    await ƒS.update(1);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.gameDirector, "The bustling streets are teeming with people, packed so tightly that it’s nearly impossible to turn without brushing against someone else.");
    await ƒS.Speech.tell(characters.gameDirector, "Children dart through the crowds, laughing as they chase rats, while hawkers shout at the top of their lungs, extolling the virtues of their latest wares.");
    await ƒS.Speech.tell(characters.gameDirector, "Walking through the crowd a nagging feeling in the back of your mind urges you to keep an eye on your bag.");
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.happy, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);
    await ƒS.Speech.tell(characters.Vanessa, "You know I'm also a hawker.");
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);
    await ƒS.Speech.tell(characters.protagonist, "I thought you were a mail carrier?");
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.happy, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);
    await ƒS.Speech.tell(characters.Vanessa, "That too. And now apparently professional City tour guide. Gotta keep busy here in Kazagaard.");
    await ƒS.Speech.tell(characters.Vanessa, "So where to next?");
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);

    let destination = {
      temple: "Is that a Temple of Kolia over there?",
      rooftops: "I can barely see anything here. I bet the view would be better up on the Rooftops.",
      liquorStore: "I've heard Kazagaard has quite the famous Liquor Store?",
    };

    let nextDestination = await ƒS.Menu.getInput(destination, "choices");
    switch (nextDestination) {
      //scene continues here then
      case destination.temple:
        await ƒS.Character.hide(characters.Vanessa);
        await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.confused, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.Vanessa, "You believe in gods?");
        await ƒS.Character.hide(characters.Vanessa);
        await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.happy, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.Vanessa, "Sure let's take a peek in there. The light shining through the window at this time of day is great?");
        await ƒS.Character.hide(characters.Vanessa);
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        ƒS.Character.hide(characters.Vanessa);
        ƒS.Location.show(locations.blackout);
        ƒS.Sound.fade(sound.kazagaardCity, 0, 2)
        await ƒS.update(1);
        return "kazagaardTemple";

      case destination.rooftops:
        await ƒS.Character.hide(characters.Vanessa);
        await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.happy, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.Vanessa, "Ah a person of taste I see.");
        await ƒS.Speech.tell(characters.Vanessa, "No complaints here I can deliver some letters while we're at it, it's the fastest way.");
        await ƒS.Character.hide(characters.Vanessa);
        await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        ƒS.Character.hide(characters.Vanessa);
        ƒS.Location.show(locations.blackout);
        ƒS.Sound.fade(sound.kazagaardCity, 0, 2)
        await ƒS.update(1);
        return "kazagaardRooftops";

      case destination.liquorStore:
        await ƒS.Character.hide(characters.Vanessa);
        await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.angry, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.Vanessa, "What?! How do you.... ");
        await ƒS.Character.hide(characters.Vanessa);
        await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.confused, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.Vanessa, "I mean never mind.");
        await ƒS.Character.hide(characters.Vanessa);
        await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.surprised, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.Vanessa, "Lower your voice if you need to talk about it and follow me inconspicuously");
        await ƒS.Character.hide(characters.Vanessa);
        await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        ƒS.Character.hide(characters.Vanessa);
        ƒS.Location.show(locations.blackout);
        ƒS.Sound.fade(sound.kazagaardCity, 0, 2)
        await ƒS.update(1);
        return "kazagaardLiquorStore";
    };



    //set scene if there before
    // await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
    // await ƒS.update(1);
    // await ƒS.Character.hide(characters.Vanessa);
    // await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.happy, ƒS.positionPercent(50, 100));
    // await ƒS.update(.1);
    // await ƒS.Speech.tell(characters.Vanessa, "So where to next?");
    // await ƒS.Character.hide(characters.Vanessa);
    // await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
    // await ƒS.update(.1);
  }
}