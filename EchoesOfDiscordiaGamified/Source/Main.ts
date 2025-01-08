namespace EchoesOfDiscordia {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory EchoesOfDiscordia starting");

  //Sound
  export let sound = {
    // Kazagaard
    kazagaardCity: "Audio/Stakeout (Looping)CityNoises.mp3",
    kazagaardRooftops: "Audio/Barn of Creake.mp3",
    kazagaardTemple: "Audio/EoDYouAreTheLight.mp3",
    kazagaardLiquorStore: "Audio/Silk and Spice (Looping).mp3",
    //Moonhaven
    moonhavenTownSquare: "Audio/MoonhavenCityAmbience.mp3",
    moonhavenUniversityExterior: "Audio/Temple of Secrets - Loop.mp3",
    moonhavenUniversityInterior: "Audio/EoDEmptyHalls.mp3",
    moonhavenTempleAndano: "Audio/Baldur_s_Gate_3_OST_Dark_Corners(1).wav",
    moonhavenTomb: "Audio/EoDInTheUnderdark.mp3",

    //Foreshadowing
    YouTubeReference: "Audio/EoDYouAreTheLight.mp3",

    //Items
    SilverCoins: "Audio/276208__littlerobotsoundfactory__coins_few_40.wav",
    Birds: "Audio/360409__nakhas__pigeons-taking-off.wav",
    Ice: "Audio/IceSoundlooped.mp3",

  };

  //Locations
  export let locations = {

    //Kazagaard
    kazagaardCityWall: {
      name: "Eastern City Wall",
      background: "Images/Locations/Kazagaard_CityGate.jpg",
    },
    kazagaardStreets: {
      name: "City",
      background: "Images/Locations/Kazagaard_Streets.jpg",
    },
    kazagaardRooftops: {
      name: "Rooftops",
      background: "Images/Locations/Kazagaard_Rooftop.jpg",
    },
    kazagaardTemple: {
      name: "Temple of Kolia",
      background: "Images/Locations/Kazagaard_KoliaTemple.jpg",
    },
    kazagaardLiquorStore: {
      name: "Liquor Store",
      background: "Images/Locations/Kazagaard_ThievesGuildHideout.jpg",
    },

    //Moonhaven
    moonhavenCityEntrance: {
      name: "City Entrance",
      background: "Images/Locations/Moonhaven_CityEntrance.jpg",
    },

    moonhavenTownHall: {
      name: "Town Hall",
      background: "Images/Locations/Moonhaven_TownHall.jpg",
    },

    moonhavenTownSquare: {
      name: "Town Square",
      background: "Images/Locations/Moonhaven_TownSquare.jpg",
    },

    moonhavenUniversityExterior: {
      name: "University Exterior",
      background: "Images/Locations/Moonhaven_UniversityExterior.jpg",
    },

    moonhavenUniversityInterior: {
      name: "University Interior",
      background: "Images/Locations/Moonhaven_UniversityInterior.jpg",
    },

    moonhavenTempleAndano: {
      name: "Temple of Andano",
      background: "Images/Locations/Moonhaven_AndanoTempleAlternative1.jpg",
    },

    moonhavenTomb: {
      name: "Artefact Chamber",
      background: "Images/Locations/Moonhaven_Tomb.jpg",
    },

    blackout: {
      name: "Blackscreen",
      background: "Images/Locations/Blackout.jpg",
    },

  };

  //Characters
  export let characters = {
    gameDirector: {
      name: "Game Director"
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
        embarrassed: "Images/Characters/VanessaEmbarrased.png",
        confused: "Images/Characters/VanessaConfused.png"
      }
    },

    Loraviel: {
      name: "Loraviel",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        idle: "Images/Characters/CaspiaIdle.png",
        happy: "Images/Characters/CaspiaIdle.png",
        sad: "Images/Characters/CaspiaIdle.png",
        angry: "Images/Characters/CaspiaIdle.png",
        surprised: "Images/Characters/CaspiaIdle.png",
        scared: "Images/Characters/CaspiaIdle.png",
        embarrassed: "Images/Characters/CaspiaIdle.png",
        confused: "Images/Characters/CaspiaIdle.png"
      }
    },

    priest: {
      name: "Priest"
    },

    youngGirl: {
      name: "Young Girl"
    },

    youngBoy: {
      name: "Young Boy"
    },

    valrim: {
      name: "Valrim"
    },

  }

  //Start Scene NAchschauen hier start
  window.addEventListener("load", start);
  function start(_event: Event): void {

    // Scene Hierarchy fragen
    let scenes: ƒS.Scenes = [
      { scene: kazagaardCityWall, name: "Western City Gate" },
      
      { id: "kazagaardRooftops", scene: kazagaardRooftops, name: "Rooftops" },
      { id: "kazagaardLiquorStore", scene: kazagaardLiquorStore, name: "LiquorStore" },
      { id: "kazagaardStreets", scene: kazagaardStreets, name: "Rooftops" },
      { id: "kazagaardTemple", scene: kazagaardTemple, name: "Temple of Kolia" },

    ];

    // // start the sequence
    ƒS.Progress.go(scenes);


    // cpms = characters per millisecond (DODO)
    ƒS.Speech.setTickerDelays(40, 5000);


  }
}
