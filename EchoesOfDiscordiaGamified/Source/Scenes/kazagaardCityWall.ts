namespace EchoesOfDiscordia {
  export async function kazagaardCityWall(): ƒS.SceneReturn {

    console.log("Kazagaard Western City Gate");

    // cpms = characters per millisecond
    ƒS.Speech.setTickerDelays(30, 5000);
    ƒS.Speech.clear();
    ƒS.Speech.hide();

    await ƒS.Location.show(locations.kazagaardCityWall);
    ƒS.Sound.play(sound.kazagaardCity, .5, true);
    await ƒS.update(2);
    ƒS.Speech.show();
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.gameDirector, "<i>Kazagaard. A city known for its prison and the mines, in which the criminals held there must work under harsh conditions.</i>");
    ƒS.Sound.play(sound.kazagaardRooftops, 5, false);
    await ƒS.Speech.tell(characters.gameDirector, "<i>As you pass the City Gate a labyrinth of dark narrow alleys opens in front of you, giving the whole city a sinister and foreboding look.</i>");
    ƒS.Sound.fade(sound.kazagaardRooftops, 0, 1);
    await ƒS.update(.1);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.protagonist, "Hey watch out!");
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.happy, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);
    await ƒS.Speech.tell(characters.Vanessa, "Wow nearly bumped into you there, watch where you're going! Mail coming through!");
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);
    await ƒS.Speech.tell(characters.protagonist, "Sorry I... hey wait a second! You seem like you know your way around here. Mind showing me some things?");
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.happy, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);
    await ƒS.Speech.tell(characters.Vanessa, "Sure! That'll be 5 silver.");
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);
    await ƒS.Speech.tell(characters.protagonist, "(Gives her 5 silver)");
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.confused, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);
    await ƒS.Speech.tell(characters.Vanessa, "Lesson one to survive in Kazagaard: don't let yourself be ripped off.");
    await ƒS.Speech.tell(characters.Vanessa, "Hey no taking backsies, take it as my teacher fee.");
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.surprised, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);
    ƒS.Speech.setTickerDelays(40, 5000);
    await ƒS.Speech.tell(characters.Vanessa, "See the people here are the worst of the worst criminals, kept in the mines to pay for their heinous crimes.");
    ƒS.Speech.setTickerDelays(100, 5000);
    await ƒS.Speech.tell(characters.protagonist, "...");
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.happy, ƒS.positionPercent(50, 100));
    ƒS.Speech.setTickerDelays(30, 5000);
    await ƒS.update(.1);
    await ƒS.Speech.tell(characters.Vanessa, "Just kiddiiinnngggg, we're chill.");
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.surprised, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);
    ƒS.Speech.setTickerDelays(60, 5000);
    await ƒS.Speech.tell(characters.Vanessa, "(cough) Mostly.");
    ƒS.Speech.setTickerDelays(30, 5000);
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.embarrassed, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);
    await ƒS.Speech.tell(characters.Vanessa, "What? No I didn't say anything! You're imagining things!");
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.happy, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);
    await ƒS.Speech.tell(characters.Vanessa, "But really this shithole is known for its prisons and mines where the Inmates work their asses off.");
    await ƒS.Speech.tell(characters.Vanessa, "You can see some of those caves right there at the Ashfrost Mountains.");
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.confused, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);
    await ƒS.Speech.tell(characters.Vanessa, "What's behind them?!");
    await ƒS.Speech.tell(characters.Vanessa, "The Ashlands dummy.");
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.surprised, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);
    await ƒS.Speech.tell(characters.Vanessa, "Don't ever go there! I mean it.");
    await ƒS.Speech.tell(characters.Vanessa, "It's a dangerous place, I can't loose my only... I mean best customer.");
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.happy, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);
    await ƒS.Speech.tell(characters.Vanessa, "Anyways the guard is about to change so let's move on.");
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.embarrassed, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);
    await ƒS.Speech.tell(characters.Vanessa, "What? I'm not evading someone, you are. Come or don't I don't care.");
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.happy, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);
    await ƒS.Speech.tell(characters.Vanessa, "Oh I'm Vanessa by the way. Nice to meet you pipsqueak!");
    await ƒS.Character.hide(characters.Vanessa);
    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
    await ƒS.update(.1);

   


    //Choice

//     let vanessaCharactersheet = true
//     do {
//       let openVanessaCharactersheet = {
//         follow: "Follow her.",
//         infos: "Learn more about her."
//       };

//       let choiceToOpen = await ƒS.Menu.getInput(openVanessaCharactersheet, "What do you want to do?");
//       switch (choiceToOpen) {
//         //scene continues here then
//         case openVanessaCharactersheet.infos:
//           await ƒS.Speech.tell(characters.gameDirector, "<i>This option will end the city investigation and your progress will be lost.</i>");
//           await ƒS.Speech.tell(characters.gameDirector, "<i>Do you still want to leave?</i>");

//           let confirmation = {
//             yes: "Yes, take me there.",
//             no: "No."
//           };

//           let confirmationClick = await ƒS.Menu.getInput(confirmation, "choices");
//           if (confirmationClick == confirmation.no)
//             vanessaCharactersheet = false

//         default:
//           await ƒS.Character.hide(characters.Vanessa);
//           await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.happy, ƒS.positionPercent(50, 100));
//           await ƒS.update(.1);
//           await ƒS.Speech.tell(characters.Vanessa, "Let's get going then.");
//           await ƒS.Character.hide(characters.Vanessa);
//           await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
//           await ƒS.update(.1);
// break
          
//       }

//     } while (vanessaCharactersheet)

//     await ƒS.Character.hide(characters.Vanessa);
//         await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.happy, ƒS.positionPercent(50, 100));
//         await ƒS.update(.1);
//         await ƒS.Speech.tell(characters.Vanessa, "ahhhh");
//         await ƒS.Character.hide(characters.Vanessa);
//         await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
//         await ƒS.update(.1);
//         await ƒS.Speech.tell(characters.protagonist, "Yay...");

   



    // let optionsElement = await ƒS.Menu.getInput(options, "choices");
    // switch (optionsElement) {
    //   case options.continue:
    //     //scene continues here then
    //     await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.happy, ƒS.positionPercent(50, 100));
    //     await ƒS.update(.1);
    //     await ƒS.Speech.tell(characters.Vanessa, "Sooo... any sightseeing points in mind?");
    //     let locationPick = {
    //       Temple: "Is that a Temple of Kolia over there?",
    //       Rooftops: "I can barely see anything here. I bet the view would be better up on the Rooftops.",
    //       LiquorStore: "I've heard Kazagaard has quite the famous Liquor Store?"
    //     }
    //     let pickedLocation = await ƒS.Menu.getInput(locationPick, "Let's go");
    //     //let menu: ƒS.Menu = ƒS.Menu.create(locationPick, null);

    //     break




    //   //Link to Charactersheet
    //   case options.Charactersheet: //need to insert Link
    //     await ƒS.Character.hide(characters.Vanessa);
    //     await ƒS.update(1);
    //     await ƒS.Speech.tell(characters.gameDirector, "<i>This option will exit the city inspection. All your progress will be lost. Do you still wish to continue?</i>");



    //Choices:
    // let options = {
    //  Temple: "Is that a Temple of Kolia over there?",
    // Rooftops: "I can barely see anything here. I bet the view would be better up on the Rooftops.",
    // LiquorStore: "I've heard Kazagaard has quite the famous Liquor Store?"
    // }


    //Lines Vanessa

    //Temple
    // let optionsElement = await ƒS.Menu.getInput(options, "choices");
    // switch (optionsElement) {
    //   case options.Temple:
    //     // continue path here
    //     await ƒS.Speech.tell(characters.Vanessa, "You believe in gods? Sure let's take a peek in there. The light shining through the window at this time of day is great.");
    //     await ƒS.Character.hide(characters.Vanessa);
    //     ƒS.Sound.fade(sound.kazagaardCity, 0, 2)
    //     await ƒS.update(2);

    //Rooftops
    // let optionsElement = await ƒS.Menu.getInput(options, "choices");
    // switch (optionsElement) {
    //   case options.Rooftops:
    //     // continue path here
    //     await ƒS.Speech.tell(characters.Vanessa, "Oh you bet it is! Come on I'll show you!");
    //     await ƒS.Character.hide(characters.Vanessa);
    //     ƒS.Sound.fade(sound.kazagaardCity, 0, 2)
    //     await ƒS.update(2);

    //     //Liquor Store
    //     let optionsElement = await ƒS.Menu.getInput(options, "choices");
    //     switch (optionsElement) {
    //       case options.LiquorStore:
    //         // continue path here
    //         await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.angry, ƒS.positionPercent(50, 100));
    //         await ƒS.update(.1);
    //         await ƒS.Speech.tell(characters.Vanessa, "What?! How do you....");
    //         await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.surprised, ƒS.positionPercent(50, 100));
    //         await ƒS.update(.1);
    //         await ƒS.Speech.tell(characters.Vanessa, "I mean never mind. Lower your voice if you need to talk about it and follow me inconspicuously.");
    //         ƒS.Speech.clear();
    //         ƒS.Speech.hide();
    //         await ƒS.Character.hide(characters.Vanessa);
    //         ƒS.Sound.fade(sound.kazagaardCity, 0, 2)
    //         await ƒS.update(2);

    // }

    //     ƒS.Speech.clear();
    //     ƒS.Speech.hide();
    // }
    ƒS.update(1);

  }
}
// }
