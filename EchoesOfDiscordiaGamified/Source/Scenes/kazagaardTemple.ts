namespace EchoesOfDiscordia {
    export async function kazagaardTemple(): ƒS.SceneReturn {
  
      console.log("Kazagaard Temple");
  
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

      ƒS.Speech.clear();
      ƒS.Speech.hide();
      await ƒS.Location.show(locations.blackout);
      ƒS.Sound.fade(sound.kazagaardCity, 0, 2);
      await ƒS.update(2);
      return "Kazagaard Streets";

 
    


      // Back to the ice
      //await ƒS.Speech.tell(characters.gameDirector, "<i>You walk towards the edge of the roof again, the ice glistening in the light sun rays.</i>");

  }
}