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

      //set scene if there before
      await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
      await ƒS.update(1);
      await ƒS.Character.hide(characters.Vanessa);
      await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.happy, ƒS.positionPercent(50, 100));
      await ƒS.update(.1);
      await ƒS.Speech.tell(characters.Vanessa, "So where to next?");
      await ƒS.Character.hide(characters.Vanessa);
      await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
      await ƒS.update(.1);
    }
}