namespace EchoesOfDiscordia {
  export async function kazagaardLiquorStore(): ƒS.SceneReturn {

    console.log("Kazagaard Liquor Store");

    // cpms = characters per millisecond
    ƒS.Speech.setTickerDelays(30, 5000);
    ƒS.Speech.clear();
    ƒS.Speech.hide();

    await ƒS.Location.show(locations.kazagaardLiquorStore);
    ƒS.Sound.play(sound.kazagaardLiquorStore, .5, true);
    await ƒS.update(2);
    ƒS.Speech.show();
    await ƒS.update(1);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
    await ƒS.update(1);
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.happy, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);
    await ƒS.Speech.tell(characters.Vanessa, "Welcome to our humble abode! Don't mind the people laying on the table. Those two don't know when to stop drinking.");
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);
    await ƒS.Speech.tell(characters.protagonist, "Ugh it smells like a distillery in here.");
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.confused, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);
    await ƒS.Speech.tell(characters.Vanessa, "Well what did you expect, it's actually a Liquor Store after all. Why do people always assume I'm lying?");
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);
    await ƒS.Speech.tell(characters.protagonist, "Maybe think about that a second?");
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.confused, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);
    await ƒS.Speech.tell(characters.Vanessa, "... Second's over, no clue. Anyways try not to trip over the goods.");
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.angry, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);
    await ƒS.Speech.tell(characters.Vanessa, "This place is supposed to be a secret, got it? Cedric is going to blame me if you babble on about it in public, so behave.");
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);
    await ƒS.Speech.tell(characters.protagonist, "Who's Cedric again?");
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.surprised, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);
    await ƒS.Speech.tell(characters.Vanessa, "Cedric as in the Boss here? How did you say you know about this place again?");
    await ƒS.Speech.tell(characters.Vanessa, "Well he's back in his office right now, let's see if he's free.");
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);

    //Cedrics office
    await ƒS.Speech.tell(characters.gameDirector, "<i>You walk over to the office door and try to push it open.</i>");
    await ƒS.Speech.tell(characters.gameDirector, "<i>It doesn't budge.</i>");
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.surprised, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);
    await ƒS.Speech.tell(characters.Vanessa, "That's weird... He never locks his office.");
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);

    //option link
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.happy, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);
    await ƒS.Speech.tell(characters.Vanessa, "Well he's a busy man. Oh how about we check out the Questboard.");
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);
    await ƒS.Speech.tell(characters.protagonist, "Sounds good to me!");

    //Questboard
    await ƒS.Speech.tell(characters.gameDirector, "<i>The Questboard is filled with Articles and Notes.</i>");
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.happy, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);
    await ƒS.Speech.tell(characters.Vanessa, "Something caught your eye?");
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);
    await ƒS.Speech.tell(characters.protagonist, "Not really.");
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.happy, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);
    await ƒS.Speech.tell(characters.Vanessa, "How about visiting something else then?");
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);
  

    //option what to do

    let walkAround = true
    do {
      let option1 = {
        cedricsOffice: "Let's try the door to Cedrics Office again.",
        questboard: "Let's have a look at the Questboard.",
        streets: "Let's go somewhere else."
      };

      let choice = await ƒS.Menu.getInput(option1, "choices");
      switch (choice) {
        //scene continues here then
        case option1.questboard:
          await ƒS.Speech.tell(characters.gameDirector, "<i>The Questboard is filled with Articles and Notes.</i>");
          await ƒS.Character.hide(characters.Vanessa);
          await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.happy, ƒS.positionPercent(50, 100));
          await ƒS.update(.1);
          await ƒS.Speech.tell(characters.Vanessa, "Something caught your eye?");
          await ƒS.Character.hide(characters.Vanessa);
          await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
          await ƒS.update(.1);
          await ƒS.Speech.tell(characters.protagonist, "Not really.");
          await ƒS.Character.hide(characters.Vanessa);
          await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.happy, ƒS.positionPercent(50, 100));
          await ƒS.update(.1);
          await ƒS.Speech.tell(characters.Vanessa, "How about visiting something else then?");
          await ƒS.Character.hide(characters.Vanessa);
          await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
          await ƒS.update(.1);
          break;

        case option1.cedricsOffice:
          await ƒS.Speech.tell(characters.gameDirector, "<i>You walk over to the office door and try to push it open.</i>");
          await ƒS.Speech.tell(characters.gameDirector, "<i>It doesn't budge.</i>");
          await ƒS.Character.hide(characters.Vanessa);
          await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.surprised, ƒS.positionPercent(50, 100));
          await ƒS.update(.1);
          await ƒS.Speech.tell(characters.Vanessa, "Nope still locked.");
          await ƒS.Character.hide(characters.Vanessa);
          await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
          await ƒS.update(.1);

          let option2 = {
            open: "Want to see whats behind the door? Watch the episode here.",
            back: "Leave it be."
          };

          let choice2 = await ƒS.Menu.getInput(option2, "choices");

          if (choice2 == option2.open)
          await ƒS.Speech.tell(characters.gameDirector, "<i>This option would open a Tab with the YouTube episode. For this testing it is not available. The second option will be selected.</i>");
          
          if (choice2 == option2.back)
            await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.happy, ƒS.positionPercent(50, 100));
          await ƒS.update(.1);
          await ƒS.Speech.tell(characters.Vanessa, "Well he's a busy man. Oh how about we check out the Questboard.");
          await ƒS.Character.hide(characters.Vanessa);
          await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
          await ƒS.update(.1);
          break;

        case option1.streets:
          await ƒS.Speech.tell(characters.gameDirector, "<i>Alright, off we go then.</i>");
          walkAround = false
      }
    } while (walkAround)


    // Leaving
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.happy, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);
    await ƒS.Speech.tell(characters.Vanessa, "Sure thing. BYE SLEEPYHEADS!");
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);

    ƒS.Speech.clear();
    ƒS.Speech.hide();
    ƒS.Character.hide(characters.Vanessa);
    ƒS.Location.show(locations.blackout);
    ƒS.Sound.fade(sound.kazagaardLiquorStore, 0, 2)
    await ƒS.update(1);

  }
}