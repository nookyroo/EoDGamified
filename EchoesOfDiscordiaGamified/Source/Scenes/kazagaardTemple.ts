namespace EchoesOfDiscordia {
  export async function kazagaardTemple(): ƒS.SceneReturn {

    console.log("Kazagaard Temple");

    // cpms = characters per millisecond
    ƒS.Speech.setTickerDelays(30, 5000);
    ƒS.Speech.clear();
    ƒS.Speech.hide();

    await ƒS.Location.show(locations.kazagaardTemple);
    ƒS.Sound.play(sound.kazagaardTemple, .5, true);
    await ƒS.update(2);
    ƒS.Speech.show();
    await ƒS.update(1);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.gameDirector, "<i>The temple stands tall amidst the small houses stacked haphazardly atop one another.<i>");
    await ƒS.Speech.tell(characters.gameDirector, "<i>As you push open the massive oak doors, a wave of incense and the faint tang of metal fills the air. Towering walls stretch high above your head, and at the far end of the hall stands a colossal statue of a man clad in heavy armor.<i>");
    await ƒS.Speech.tell(characters.gameDirector, "<i>Dim light filters through the stained glass windows, fracturing into muted hues before it can fully illuminate the space. <i>");
    await ƒS.Speech.tell(characters.gameDirector, "<i>To the side, a staircase adorned with ornate braziers spirals upward toward the church’s upper quarters.<i>");
    await ƒS.Speech.tell(characters.gameDirector, "<i>In the center of the hall, a priest converses in hushed tones with a red-haired girl, their voices barely audible amidst the solemn silence.<i>");
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.happy, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);
    await ƒS.Speech.tell(characters.Vanessa, "Beautiful right? I love coming here to admire the lighting. Those windows just do the trick.");
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);
    await ƒS.Speech.tell(characters.protagonist, "It's a different vibe to the outside town, that's for sure. Remind me, what is this god's domain again?");
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.surprised, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);
    await ƒS.Speech.tell(characters.Vanessa, "Oh Kolia? He's responsible for warriors or something along those lines. The priest might know more but... he seems busy.");
    await ƒS.Speech.tell(characters.Vanessa, "Maybe ask a Paladin when you see one, they're all about it. So what now?");
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);
    //Options

    let exploreTemple = true
    do {
      let option1 = {
        evesdrop: "What do you think those two are talking about? Let's evesdrop.",
        leave: "Back to the main road then."
      };

      let choice = await ƒS.Menu.getInput(option1, "choices");
      switch (choice) {
        //Caspia Priest Scene
        case option1.evesdrop:
          await ƒS.Character.hide(characters.Vanessa);
          await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.happy, ƒS.positionPercent(50, 100));
          await ƒS.update(.1);
          await ƒS.Speech.tell(characters.Vanessa, "I like the way you're thinking.");
          await ƒS.Character.hide(characters.Vanessa);
          await ƒS.update(1);
          await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(35, 100));
          await ƒS.Character.show(characters.Caspia, characters.Caspia.pose.idle, ƒS.positionPercent(65, 100));
          await ƒS.update(1);

          await ƒS.Character.hide(characters.Caspia);
          await ƒS.Character.show(characters.Caspia, characters.Caspia.pose.sad, ƒS.positionPercent(65, 100));
          await ƒS.update(.1);
          await ƒS.Speech.tell(characters.Caspia, "Do you really not know when she will be back?");
          await ƒS.Character.hide(characters.Caspia);
          await ƒS.Character.show(characters.Caspia, characters.Caspia.pose.idle, ƒS.positionPercent(65, 100));
          await ƒS.update(.1);
          await ƒS.Speech.tell(characters.priest, "Unfortunately not Ma'am");
          await ƒS.Character.hide(characters.Caspia);
          await ƒS.Character.show(characters.Caspia, characters.Caspia.pose.sad, ƒS.positionPercent(65, 100));
          await ƒS.update(.1);
          await ƒS.Speech.tell(characters.Caspia, "Well, it is of utmost importance that I speak to her as quickly as possible before...");
          ƒS.Speech.setTickerDelays(80, 5000);
          await ƒS.Speech.tell(characters.Caspia, "Uhm...");
          ƒS.Speech.setTickerDelays(30, 5000);
          await ƒS.Character.hide(characters.Caspia);
          await ƒS.Character.show(characters.Caspia, characters.Caspia.pose.confused, ƒS.positionPercent(65, 100));
          await ƒS.update(.1);
          await ƒS.Speech.tell(characters.Caspia, "Do you wish to consult with Father Jack?");
          await ƒS.Character.hide(characters.Caspia);
          await ƒS.Character.show(characters.Caspia, characters.Caspia.pose.happy, ƒS.positionPercent(65, 100));
          await ƒS.update(.1);
          await ƒS.Speech.tell(characters.Caspia, "Go on ahead then, I can wait. No worries!");
          await ƒS.Character.hide(characters.Caspia);
          await ƒS.Character.show(characters.Caspia, characters.Caspia.pose.idle, ƒS.positionPercent(65, 100));
          await ƒS.update(.1);
          await ƒS.Speech.tell(characters.protagonist, "Oh no, don't mind us! Keep on talking.");
          await ƒS.Character.hide(characters.Caspia);
          await ƒS.Character.show(characters.Caspia, characters.Caspia.pose.angry, ƒS.positionPercent(65, 100));
          await ƒS.update(.1);
          await ƒS.Speech.tell(characters.Caspia, "I'd rather not discuss delicate matters with strangers, if it's all the same to you.");
          await ƒS.Character.hide(characters.Caspia);
          await ƒS.Character.show(characters.Caspia, characters.Caspia.pose.embarrassed, ƒS.positionPercent(65, 100));
          await ƒS.update(.1);
          await ƒS.Speech.tell(characters.Caspia, "So if you don't mind?");
          await ƒS.Character.hide(characters.Caspia);
          await ƒS.Character.show(characters.Caspia, characters.Caspia.pose.idle, ƒS.positionPercent(65, 100));
          await ƒS.Character.hide(characters.Vanessa);
          await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.confused, ƒS.positionPercent(35, 100));
          await ƒS.update(.1);
          await ƒS.Speech.tell(characters.Vanessa, "Oh our humble apologies. We'll be on our way first! Come on pipsqueak.");
          await ƒS.Character.hide(characters.Vanessa);
          await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(35, 100));
          await ƒS.update(.1);
          await ƒS.Character.hide(characters.Vanessa);
          await ƒS.Character.hide(characters.Caspia);
          await ƒS.update(1);
          await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
          await ƒS.update(1);
          await ƒS.Character.hide(characters.Vanessa);
          await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.confused, ƒS.positionPercent(50, 100));
          await ƒS.update(.1);
          await ƒS.Speech.tell(characters.Vanessa, "Arrogant snob. Let's go somewhere that doesn't stink of flowers and money.");
          await ƒS.Character.hide(characters.Vanessa);
          await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
          await ƒS.update(.1);
          break;

        default:
          await ƒS.Character.hide(characters.Vanessa);
          await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.happy, ƒS.positionPercent(50, 100));
          await ƒS.update(.1);
          await ƒS.Speech.tell(characters.Vanessa, "Moving on then.");
          await ƒS.Character.hide(characters.Vanessa);
          await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
          await ƒS.update(.1);
          exploreTemple = false
      }
    } while (exploreTemple)

    ƒS.Speech.clear();
    ƒS.Speech.hide();
    ƒS.Character.hide(characters.Vanessa);
    await ƒS.Location.show(locations.blackout);
    ƒS.Sound.fade(sound.kazagaardTemple, 0, 2);
    await ƒS.update(1);
return "kazagaardStreets"



    // Back to the ice
    //await ƒS.Speech.tell(characters.gameDirector, "<i>You walk towards the edge of the roof again, the ice glistening in the light sun rays.</i>");

  }
}