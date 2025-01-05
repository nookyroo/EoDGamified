namespace EchoesOfDiscordia {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory EchoesOfDiscordia starting");

  //Sound
  export let sound = {
    // Kazagaard
    kazagaardCity: "Audio/Stakeout (Looping)CityNoises.mp3",
    kazagaardRooftops: "Audio/Barn of Creake.mp3",
    kazagaardTemple: "Audio/.mp3",
    kazagaardLiquorStore: "Audio/Silk and Spice (Looping).mp3",
    //Moonhaven
    moonhavenLowerCity: "Audio/.mp3",
    moonhavenUpperCity: "Audio/.mp3",
    moonhavenUniversity: "Audio/.mp3",
    moonhavenTempleAndano: "Audio/.wav",
    moonhavenTomb: "Audio/.mp3"
  };

  //Locations
  export let locations = {

    //Kazagaard
    kazagaardCityWall: {
      name: "Eastern City Wall",
      background: "Images/Locations/hiking-trail.png",
    },
    kazagaardStreets: {
      name: "City",
      background: "Images/Locations/hiking-trail.png",
    },
    kazagaardRooftops: {
      name: "Rooftops",
      background: "Images/Locations/hiking-trail.png",
    },
    kazagaardTemple: {
      name: "Temple of Kolia",
      background: "Images/Locations/hiking-trail.png",
    },
    kazagaardLiquorStore: {
      name: "Liquor Store",
      background: "Images/Locations/hiking-trail.png",
    },

    //Moonhaven
    moonhavenLowerCity: {
      name: "Lower City",
      background: "Images/Locations/hiking-trail.png",
    },
    moonhavenUpperCity: {
      name: "Upper City",
      background: "Images/Locations/hiking-trail.png",
    },
    moonhavenUniversity: {
      name: "University",
      background: "Images/Locations/hiking-trail.png",
    },
    moonhavenTempleAndano: {
      name: "Temple of Andano",
      background: "Images/Locations/hiking-trail.png",
    },
    moonhavenTomb: {
      name: "Artefact Chamber",
      background: "Images/Locations/hiking-trail.png",
    },
  };

  //Characters
  export let characters = {
    gameDirector: {
      name: ""
    },
    protagonist: {
      name: "You"
    },
    Caspia: {
      name: "Caspia",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        idle: "Images/Characters/CaspiaIdle.png",
        happy: "Images/Characters/CaspiaHappy.png",
        sad: "Images/Characters/CaspiaSad.png",
        angry: "Images/Characters/CaspiaAngry.png",
        surprised: "Images/Characters/CaspiaSurprise.png",
        scared: "Images/Characters/CaspiaScared.png",
        embarrassed: "Images/Characters/CaspiaEmbarrassed.png",
        confused: "Images/Characters/CaspiaConfused.png"
      }
    },

    Vanessa: {
      name: "Vanessa",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        idle: "Images/Characters/VanessaIdle.png",
        happy: "Images/Characters/VanessaHappy.png",
        sad: "Images/Characters/VanessaSad.png",
        angry: "Images/Characters/VanessaAngry.png",
        surprised: "Images/Characters/VanessaSurprise.png",
        scared: "Images/Characters/VanessaScared.png",
        embarrassed: "Images/Characters/VanessaEmbarrassed.png",
        confused: "Images/Characters/VanessaConfused.png"
      }
    },

    Loraviel: {
      name: "Loraviel",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        idle: "Images/Characters/Amaya_neutral.png",
        happy: "Images/Characters/Amaya_sad.png",
        sad: "Images/Characters/Amaya_smiling.png",
        angry: "Images/Characters/Amaya_surprised.png",
        surprised: "Images/Characters/Amaya_thinking.png",
        scared: "Images/Characters/Amaya_upset.png",
        embarrassed: "Images/Characters/Amaya_upset.png",
        confused: "Images/Characters/Amaya_upset.png"
      }
    }

  }

  //Start Scene NAchschauen hier start
  window.addEventListener("load", start);
  function start(_event: Event): void {
    // Scene Hierarchy fragen
    let scenes: ƒS.Scenes = [
      { scene: kazagaardCityWall, name: "Western City Gate" },
      // { scene: kazagaardStreets, name: "Intro Scene" }
    ];

    // // start the sequence
    ƒS.Progress.go(scenes);


    // cpms = characters per millisecond (DODO)
    ƒS.Speech.setTickerDelays(40, 5000);


  }
}
