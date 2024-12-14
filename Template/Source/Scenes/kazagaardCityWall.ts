namespace Template {
  export async function kazagaardCityWall(): ƒS.SceneReturn {
    console.log("Kazagaard Western City Gate");
  
   // cpms = characters per millisecond
   ƒS.Speech.setTickerDelays(40, 5000);

   await ƒS.Location.show(locations.kazagaardCityWall);
   ƒS.Sound.play(sound.kazagaardCity, .5, true);
   ƒS.Speech.show();
   await ƒS.Speech.tell(characters.gameDirector, "<i>(Kazagaard. A city known for its prison and the mines, in which the criminals held there must work under harsh conditions)</i>");
   await ƒS.Speech.tell(characters.gameDirector, "<i>(As you pass the City Gate a labyrinth of dark narrow alleys opens in front of you, giving the whole city a sinister and foreboding look.)</i>");
   await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
   await ƒS.Speech.tell(characters.protagonist, "Hey watch out!");
   await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.happy, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
   await ƒS.Speech.tell(characters.Vanessa, "Wow nearly bumped into you there, watch where you're going! Mail coming through!");
   await ƒS.Speech.tell(characters.protagonist, "Sorry I... hey wait a second! You seem like you know your way around here. Mind showing me around?");
   await ƒS.Speech.tell(characters.Vanessa, "Sure! That'll be 5 silver.");
   await ƒS.Speech.tell(characters.protagonist, "(Gives her 5 silver)");
   await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.confused, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
   await ƒS.Speech.tell(characters.Vanessa, "Lesson one to survive in Kazagaard: don't let yourself be ripped off.");
   await ƒS.Speech.tell(characters.Vanessa, "Hey no taking backsies, take it as my teacher fee.");
   await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.surprised, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
   await ƒS.Speech.tell(characters.Vanessa, "See the people here are the worst of the worst criminals, kept in the mines to pay for their heinous crimes.");
   ƒS.Speech.setTickerDelays(100, 5000);
   await ƒS.Speech.tell(characters.protagonist, "...");
   ƒS.Speech.setTickerDelays(40, 5000);
   await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.happy, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
   await ƒS.Speech.tell(characters.Vanessa, "Just kiddiiinnngggg, we're chill.");
   await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.surprised, ƒS.positionPercent(50, 100));
   await ƒS.update(.1);
   await ƒS.Speech.tell(characters.Vanessa, "(cough) Mostly.");
   await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.embarrassed, ƒS.positionPercent(50, 100));
   await ƒS.update(.1);
   await ƒS.Speech.tell(characters.Vanessa, "What? No I didn't say anything! You're imagining things!");
   await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.happy, ƒS.positionPercent(50, 100));
   await ƒS.update(.1);
   await ƒS.Speech.tell(characters.Vanessa, "But really this shithole is known for its prisons and mines where the Inmates work their asses off.");
   await ƒS.Speech.tell(characters.Vanessa, "You can see some of those caves right there at the Ashfrost Mountains.");
   await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.confused, ƒS.positionPercent(50, 100));
   await ƒS.update(.1);
   await ƒS.Speech.tell(characters.Vanessa, "What's behind them?!");
   await ƒS.Speech.tell(characters.Vanessa, "The Ashlands dummy.");
   await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.surprised, ƒS.positionPercent(50, 100));
   await ƒS.update(.1);
   await ƒS.Speech.tell(characters.Vanessa, "Don't ever go there! I mean it.");
   await ƒS.Speech.tell(characters.Vanessa, "It's a dangerous place, I can't loose my only... I mean best customer.");
   await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.happy, ƒS.positionPercent(50, 100));
   await ƒS.update(.1);
   await ƒS.Speech.tell(characters.Vanessa, "Anyways the guard is about to change so let's move on.");
   await ƒS.Speech.tell(characters.Vanessa, "What? I'm not evading someone, you are. Come or don't I don't care.");
   await ƒS.Speech.tell(characters.Vanessa, "Oh I'm Vanessa by the way. Nice to meet you pipsqueak!");
   await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
   await ƒS.update(.1);

   //Choice
   let choice1 = {
    neutral: "Follow her.",
    good: "Learn more about her"
};

//continue scene
   await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.happy, ƒS.positionPercent(50, 100));
   await ƒS.update(.1);
   await ƒS.Speech.tell(characters.Vanessa, "Sooo... any sightseeing points in mind?");
  

  //Choices:
  let options = {
    Temple: "Is that a Temple of Kolia over there?",
    Rooftops: "I can barely see anything here. I bet the view would be better up on the Rooftops.",
    LiquorStore: "I've heard Kazagaard has quite the famous Liquor Store?"
}


  //Lines Vanessa

  //Temple
  let optionsElement = await ƒS.Menu.getInput(options, "choices");
        switch (optionsElement) {
            case options.Temple:
                // continue path here
              await ƒS.Speech.tell(characters.Vanessa, "You believe in gods? Sure let's take a peek in there. The light shining through the window at this time of day is great.");
              await ƒS.Character.hide(characters.Vanessa);
              ƒS.Sound.fade(sound.kazagaardCity, 0, 2)
              await ƒS.update(2);

  //Rooftops
  let optionsElement = await ƒS.Menu.getInput(options, "choices");
  switch (optionsElement) {
      case options.Rooftops:
          // continue path here
        await ƒS.Speech.tell(characters.Vanessa, "Oh you bet it is! Come on I'll show you!");
        await ƒS.Character.hide(characters.Vanessa);
        ƒS.Sound.fade(sound.kazagaardCity, 0, 2)
        await ƒS.update(2);

  //Liquor Store
  let optionsElement = await ƒS.Menu.getInput(options, "choices");
  switch (optionsElement) {
      case options.LiquorStore:
          // continue path here
        await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.angry, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.Vanessa, "What?! How do you....");
        await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.surprised, ƒS.positionPercent(50, 100));
          await ƒS.update(.1);
        await ƒS.Speech.tell(characters.Vanessa, "I mean never mind. Lower your voice if you need to talk about it and follow me inconspicuously.");
         ƒS.Speech.clear();
         ƒS.Speech.hide();
        await ƒS.Character.hide(characters.Vanessa);
        ƒS.Sound.fade(sound.kazagaardCity, 0, 2)
        await ƒS.update(2);

}
}
