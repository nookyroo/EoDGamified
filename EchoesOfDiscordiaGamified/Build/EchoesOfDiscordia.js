"use strict";
var EchoesOfDiscordia;
(function (EchoesOfDiscordia) {
    EchoesOfDiscordia.ƒ = FudgeCore;
    EchoesOfDiscordia.ƒS = FudgeStory;
    console.log("FudgeStory EchoesOfDiscordia starting");
    //Sound
    EchoesOfDiscordia.sound = {
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
    EchoesOfDiscordia.locations = {
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
        moonhavenLowerCity: {
            name: "Lower City",
            background: "Images/Locations/Kazagaard_Streets.jpg",
        },
        moonhavenUpperCity: {
            name: "Upper City",
            background: "Images/Locations/Kazagaard_Streets.jpg",
        },
        moonhavenUniversity: {
            name: "University",
            background: "Images/Locations/Kazagaard_Streets.jpg",
        },
        moonhavenTempleAndano: {
            name: "Temple of Andano",
            background: "Images/Locations/Kazagaard_Streets.jpg",
        },
        moonhavenTomb: {
            name: "Artefact Chamber",
            background: "Images/Locations/Kazagaard_Streets.jpg",
        },
        blackout: {
            name: "Blackscreen",
            background: "Images/Locations/Blackout.jpg",
        },
    };
    //Characters
    EchoesOfDiscordia.characters = {
        gameDirector: {
            name: "Game Director"
        },
        protagonist: {
            name: "You"
        },
        Caspia: {
            name: "Caspia",
            origin: EchoesOfDiscordia.ƒS.ORIGIN.BOTTOMCENTER,
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
            origin: EchoesOfDiscordia.ƒS.ORIGIN.BOTTOMCENTER,
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
            origin: EchoesOfDiscordia.ƒS.ORIGIN.BOTTOMCENTER,
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
    };
    //Start Scene NAchschauen hier start
    window.addEventListener("load", start);
    function start(_event) {
        // Scene Hierarchy fragen
        let scenes = [
            { scene: EchoesOfDiscordia.kazagaardCityWall, name: "Western City Gate" },
            // { scene: kazagaardRooftops, name: "Rooftops" },
            // { scene: kazagaardLiquorStore, name: "Rooftops" },
            //{ scene: kazagaardStreets, name: "Rooftops" },
            // { scene: kazagaardTemple, name: "Temple of Kolia" },
        ];
        // // start the sequence
        EchoesOfDiscordia.ƒS.Progress.go(scenes);
        // cpms = characters per millisecond (DODO)
        EchoesOfDiscordia.ƒS.Speech.setTickerDelays(40, 5000);
    }
})(EchoesOfDiscordia || (EchoesOfDiscordia = {}));
var EchoesOfDiscordia;
(function (EchoesOfDiscordia) {
    async function kazagaardCityWall() {
        console.log("Kazagaard Western City Gate");
        // cpms = characters per millisecond
        EchoesOfDiscordia.ƒS.Speech.setTickerDelays(30, 5000);
        EchoesOfDiscordia.ƒS.Speech.clear();
        EchoesOfDiscordia.ƒS.Speech.hide();
        await EchoesOfDiscordia.ƒS.Location.show(EchoesOfDiscordia.locations.kazagaardCityWall);
        EchoesOfDiscordia.ƒS.Sound.play(EchoesOfDiscordia.sound.kazagaardCity, .5, true);
        await EchoesOfDiscordia.ƒS.update(2);
        EchoesOfDiscordia.ƒS.Speech.show();
        await EchoesOfDiscordia.ƒS.update(1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "<i>Kazagaard. A city known for its prison and the mines, in which the criminals held there must work under harsh conditions.</i>");
        EchoesOfDiscordia.ƒS.Sound.play(EchoesOfDiscordia.sound.kazagaardRooftops, 5, false);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "<i>As you pass the City Gate a labyrinth of dark narrow alleys opens in front of you, giving the whole city a sinister and foreboding look.</i>");
        EchoesOfDiscordia.ƒS.Sound.fade(EchoesOfDiscordia.sound.kazagaardRooftops, 0, 1);
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.protagonist, "Hey watch out!");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.happy, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "Wow nearly bumped into you there, watch where you're going! Mail coming through!");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.protagonist, "Sorry I... hey wait a second! You seem like you know your way around here. Mind showing me some things?");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.happy, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "Sure! That'll be 5 silver.");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.protagonist, "(Gives her 5 silver)");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.confused, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "Lesson one to survive in Kazagaard: don't let yourself be ripped off.");
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "Hey no taking backsies, take it as my teacher fee.");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.surprised, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        EchoesOfDiscordia.ƒS.Speech.setTickerDelays(40, 5000);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "See the people here are the worst of the worst criminals, kept in the mines to pay for their heinous crimes.");
        EchoesOfDiscordia.ƒS.Speech.setTickerDelays(100, 5000);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.protagonist, "...");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.happy, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        EchoesOfDiscordia.ƒS.Speech.setTickerDelays(30, 5000);
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "Just kiddiiinnngggg, we're chill.");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.surprised, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        EchoesOfDiscordia.ƒS.Speech.setTickerDelays(60, 5000);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "(cough) Mostly.");
        EchoesOfDiscordia.ƒS.Speech.setTickerDelays(30, 5000);
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.embarrassed, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "What? No I didn't say anything! You're imagining things!");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.happy, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "But really this shithole is known for its prisons and mines where the Inmates work their asses off.");
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "You can see some of those caves right there at the Ashfrost Mountains.");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.confused, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "What's behind them?!");
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "The Ashlands dummy.");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.surprised, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "Don't ever go there! I mean it.");
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "It's a dangerous place, I can't loose my only... I mean best customer.");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.update(1);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Loraviel, EchoesOfDiscordia.characters.Loraviel.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(1);
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Loraviel);
        //Loraviel enter
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Loraviel, EchoesOfDiscordia.characters.Loraviel.pose.happy, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Loraviel, "No, I'm searching a Paladin! Big guy, wearing chain mail. Probably with the symbol of Kolia like the one on my plate here.");
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.youngGirl, "Oh my god he's an elf!");
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.youngBoy, "And a Paladin too!!");
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Loraviel, "Please keep your hands of my sword young one's! I'll have to keep going with my mission for now, but I promise we can play hide and seek later.");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Loraviel);
        await EchoesOfDiscordia.ƒS.update(1);
        // Vanessa back
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(1);
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.happy, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "Anyways the guard is about to change so let's move on.");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.embarrassed, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "What? I'm not evading someone, you are. Come or don't I don't care.");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.happy, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "Oh I'm Vanessa by the way. Nice to meet you pipsqueak!");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(1);
        //Choice
        let vanessaCharactersheet = true;
        do {
            let openVanessaCharactersheet = {
                follow: "Follow her.",
                infos: "Learn more about her."
            };
            let choiceToOpen = await EchoesOfDiscordia.ƒS.Menu.getInput(openVanessaCharactersheet, "choices");
            switch (choiceToOpen) {
                //scene continues here then
                case openVanessaCharactersheet.infos:
                    await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "<i>This option will end the city investigation and your progress will be lost.</i>");
                    await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "<i>Do you still want to leave?</i>");
                    let confirmation = {
                        yes: "Yes, take me there.",
                        no: "No."
                    };
                    //Insert if statement for yes with link
                    let confirmationClick = await EchoesOfDiscordia.ƒS.Menu.getInput(confirmation, "choices");
                    if (confirmationClick == confirmation.no)
                        vanessaCharactersheet = false;
                default:
                    await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                    await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.happy, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
                    await EchoesOfDiscordia.ƒS.update(.1);
                    await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "Let's get going then.");
                    await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                    await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
                    await EchoesOfDiscordia.ƒS.update(.1);
                    vanessaCharactersheet = false;
            }
        } while (vanessaCharactersheet);
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        EchoesOfDiscordia.ƒS.Speech.clear();
        EchoesOfDiscordia.ƒS.Speech.hide();
        EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        EchoesOfDiscordia.ƒS.Location.show(EchoesOfDiscordia.locations.blackout);
        EchoesOfDiscordia.ƒS.Sound.fade(EchoesOfDiscordia.sound.kazagaardCity, 0, 2);
        await EchoesOfDiscordia.ƒS.update(1);
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
        //ƒS.update(1);
    }
    EchoesOfDiscordia.kazagaardCityWall = kazagaardCityWall;
})(EchoesOfDiscordia || (EchoesOfDiscordia = {}));
// }
var EchoesOfDiscordia;
(function (EchoesOfDiscordia) {
    async function kazagaardLiquorStore() {
        console.log("Kazagaard Liquor Store");
        // cpms = characters per millisecond
        EchoesOfDiscordia.ƒS.Speech.setTickerDelays(30, 5000);
        EchoesOfDiscordia.ƒS.Speech.clear();
        EchoesOfDiscordia.ƒS.Speech.hide();
        await EchoesOfDiscordia.ƒS.Location.show(EchoesOfDiscordia.locations.kazagaardLiquorStore);
        EchoesOfDiscordia.ƒS.Sound.play(EchoesOfDiscordia.sound.kazagaardLiquorStore, .5, true);
        await EchoesOfDiscordia.ƒS.update(2);
        EchoesOfDiscordia.ƒS.Speech.show();
        await EchoesOfDiscordia.ƒS.update(1);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(1);
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.happy, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "Welcome to our humble abode! Don't mind the people laying on the table. Those two don't know when to stop drinking.");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.protagonist, "Ugh it smells like a distillery in here.");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.confused, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "Well what did you expect, it's actually a Liquor Store after all. Why do people always assume I'm lying?");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.protagonist, "Maybe think about that a second?");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.confused, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "... Second's over, no clue. Anyways try not to trip over the goods.");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.angry, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "This place is supposed to be a secret, got it? Cedric is going to blame me if you babble on about it in public, so behave.");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.protagonist, "Who's Cedric again?");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.surprised, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "Cedric as in the Boss here? How did you say you know about this place again?");
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "Well he's back in his office right now, let's see if he's free.");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        //Cedrics office
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "<i>You walk over to the office door and try to push it open.</i>");
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "<i>It doesn't budge.</i>");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.surprised, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "That's weird... He never locks his office.");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        //option link
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.happy, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "Well he's a busy man. Oh how about we check out the Questboard.");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.protagonist, "Sounds good to me!");
        //Questboard
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "<i>The Questboard is filled with Articles and Notes.</i>");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.happy, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "Something caught your eye?");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.protagonist, "Not really.");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.happy, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "How about visiting something else then?");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        //option what to do
        let walkAround = true;
        do {
            let option1 = {
                cedricsOffice: "Let's try the door to Cedrics Office again.",
                questboard: "Let's have a look at the Questboard.",
                streets: "Let's go somewhere else."
            };
            let choice = await EchoesOfDiscordia.ƒS.Menu.getInput(option1, "choices");
            switch (choice) {
                //scene continues here then
                case option1.questboard:
                    await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "<i>The Questboard is filled with Articles and Notes.</i>");
                    await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                    await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.happy, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
                    await EchoesOfDiscordia.ƒS.update(.1);
                    await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "Something caught your eye?");
                    await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                    await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
                    await EchoesOfDiscordia.ƒS.update(.1);
                    await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.protagonist, "Not really.");
                    await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                    await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.happy, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
                    await EchoesOfDiscordia.ƒS.update(.1);
                    await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "How about visiting something else then?");
                    await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                    await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
                    await EchoesOfDiscordia.ƒS.update(.1);
                    break;
                case option1.cedricsOffice:
                    await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "<i>You walk over to the office door and try to push it open.</i>");
                    await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "<i>It doesn't budge.</i>");
                    await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                    await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.surprised, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
                    await EchoesOfDiscordia.ƒS.update(.1);
                    await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "Nope still locked.");
                    await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                    await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
                    await EchoesOfDiscordia.ƒS.update(.1);
                    let option2 = {
                        open: "Want to see whats behind the door? Watch the episode here.",
                        back: "Leave it be."
                    };
                    let choice2 = await EchoesOfDiscordia.ƒS.Menu.getInput(option2, "choices");
                    if (choice2 == option2.open)
                        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "<i>This option would open a Tab with the YouTube episode. For this testing it is not available. The second option will be selected.</i>");
                    if (choice2 == option2.back)
                        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.happy, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
                    await EchoesOfDiscordia.ƒS.update(.1);
                    await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "Well he's a busy man. Oh how about we check out the Questboard.");
                    await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                    await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
                    await EchoesOfDiscordia.ƒS.update(.1);
                    break;
                case option1.streets:
                    await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "<i>Alright, off we go then.</i>");
                    walkAround = false;
            }
        } while (walkAround);
        // Leaving
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.happy, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "Sure thing. BYE SLEEPYHEADS!");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        EchoesOfDiscordia.ƒS.Speech.clear();
        EchoesOfDiscordia.ƒS.Speech.hide();
        EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        EchoesOfDiscordia.ƒS.Location.show(EchoesOfDiscordia.locations.blackout);
        EchoesOfDiscordia.ƒS.Sound.fade(EchoesOfDiscordia.sound.kazagaardLiquorStore, 0, 2);
        await EchoesOfDiscordia.ƒS.update(1);
    }
    EchoesOfDiscordia.kazagaardLiquorStore = kazagaardLiquorStore;
})(EchoesOfDiscordia || (EchoesOfDiscordia = {}));
var EchoesOfDiscordia;
(function (EchoesOfDiscordia) {
    async function kazagaardRooftops() {
        console.log("Kazagaard Rooftops");
        // cpms = characters per millisecond
        EchoesOfDiscordia.ƒS.Speech.setTickerDelays(30, 5000);
        EchoesOfDiscordia.ƒS.Speech.clear();
        EchoesOfDiscordia.ƒS.Speech.hide();
        await EchoesOfDiscordia.ƒS.Location.show(EchoesOfDiscordia.locations.kazagaardRooftops);
        EchoesOfDiscordia.ƒS.Sound.play(EchoesOfDiscordia.sound.kazagaardRooftops, .5, true);
        await EchoesOfDiscordia.ƒS.update(2);
        EchoesOfDiscordia.ƒS.Speech.show();
        await EchoesOfDiscordia.ƒS.update(1);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(1);
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.happy, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "Isn't this a sight to behold? Also the fastest way to get around here.");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "<i>In front of you, the bustling streets resemble ants mingling through the dirt. Even at this height, buildings stack atop one another, connected only by small planks and ropes.</i>");
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "<i>Birds scatter as you reach the top of yet another ladder, leading even higher. From this vantage point, the Ashland Mountains in the distance cast a foreboding shadow over Kazagaard.</i>");
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "<i>The mountain tops' white mantles contrast sharply with the grey, foggy city below, and for once, the air feels clean and refreshing. </i>");
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.protagonist, "Wow it looks...");
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "<i>As your focus shifts back to the labyrinth of streets below, you see people sprinting, others vandalizing walls, pigs and rats running freely, and pickpockets fleeing from their screeching victims, who coincidentally seem to carry knives.</i>");
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.protagonist, "Interesting");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.happy, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "Isn't it just? I love coming up here. It's the only way to endure this lame excuse of a town. The only other nice view coming even close is the Temple of Kolia.");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "<i>The planks beneath your feet squeak as Vanessa skillfully guides you across the rooftop tiles.</i>");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.happy, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "Careful now, we wouldn't want you to fall! It's quite slippery up here.");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "<i>A sudden movement catches your eye, something tall and dark disappearing behind a corner before you can make out what it is. </i>");
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "<i>Your gaze shifts to the narrow gap beside the corner, where the edge of the roof glistens with ice. A grappling hook clings to one of the ledges, its rope dangling down the side of the roof.</i>");
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "<i>Frost coats its lower section, where a seemingly once-wet substance appears to have frozen. The rope’s deep, saturated red stands out starkly against the icy backdrop.</i>");
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "<i>On the other side of the gap lies a puddle, barely recognizable, washed away by the afternoon rain.</i>");
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "<i>As Vanessa skillfully guides you past it, your eyes catch the shattered remains of a wooden plank scattered across the ground.</i>");
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.protagonist, "What happened here?");
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "<i>Vanessa doesn't answer, but you notice a light shift in her demeanor as she kept on walking. </i>");
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "<i>You’re jolted from your musings as the massive clock ahead strikes. Its hollow bell echoes through the alleys, sending a chill down your spine. </i>");
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "<i>Kolias Temple looms in the distance, its imposing structure a silent sentinel. It seems to watch over everything, guarding ancient secrets yet to be unraveled.  </i>");
        console.log(DOMTokenList);
        // Seeing ice
        let ice = true;
        do {
            let option1 = {
                investigate: "If you want to press on about the matter, you can watch the corresponding episode on YouTube.",
                ignore: "Ignore the situation and follow"
            };
            let choice = await EchoesOfDiscordia.ƒS.Menu.getInput(option1, "choices");
            switch (choice) {
                //scene continues here then
                case option1.investigate:
                    await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "<i>This option would open a Tab with the YouTube episode. For this testing it is not available.</i>");
                    await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "<i>Please choose the second option to continue.</i>");
                    break;
                default:
                    await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                    await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.happy, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
                    await EchoesOfDiscordia.ƒS.update(.1);
                    await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "That's the biggest part of it. Where do you want to go now?");
                    await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                    await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
                    await EchoesOfDiscordia.ƒS.update(.1);
                    let option2 = {
                        street: "Let's go down again first",
                        back: "Let's go back a few steps. I think I saw something."
                    };
                    let choice2 = await EchoesOfDiscordia.ƒS.Menu.getInput(option2, "choices");
                    if (choice2 == option2.back)
                        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                    await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.confused, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
                    await EchoesOfDiscordia.ƒS.update(.1);
                    await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "Sure, if you think you did.");
                    await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                    await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
                    await EchoesOfDiscordia.ƒS.update(.1);
                    await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "<i>You walk towards the edge of the roof again, the ice glistening in the light sun rays.</i>");
                    if (choice2 == option2.street)
                        ice = false;
            }
        } while (ice);
        // option where next
        //leave
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.happy, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "Back into the chaos we go then!");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.protagonist, "Yay...");
        EchoesOfDiscordia.ƒS.Speech.clear();
        EchoesOfDiscordia.ƒS.Speech.hide();
        EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        EchoesOfDiscordia.ƒS.Location.show(EchoesOfDiscordia.locations.blackout);
        EchoesOfDiscordia.ƒS.Sound.fade(EchoesOfDiscordia.sound.kazagaardRooftops, 0, 2);
        await EchoesOfDiscordia.ƒS.update(1);
        // Back to the ice
        // await ƒS.Speech.tell(characters.gameDirector, "<i>You walk towards the edge of the roof again, the ice glistening in the light sun rays.</i>");
    }
    EchoesOfDiscordia.kazagaardRooftops = kazagaardRooftops;
})(EchoesOfDiscordia || (EchoesOfDiscordia = {}));
var EchoesOfDiscordia;
(function (EchoesOfDiscordia) {
    async function kazagaardStreets() {
        console.log("Kazagaard Streets");
        // cpms = characters per millisecond
        EchoesOfDiscordia.ƒS.Speech.setTickerDelays(30, 5000);
        EchoesOfDiscordia.ƒS.Speech.clear();
        EchoesOfDiscordia.ƒS.Speech.hide();
        await EchoesOfDiscordia.ƒS.Location.show(EchoesOfDiscordia.locations.kazagaardStreets);
        EchoesOfDiscordia.ƒS.Sound.play(EchoesOfDiscordia.sound.kazagaardCity, .5, true);
        await EchoesOfDiscordia.ƒS.update(2);
        EchoesOfDiscordia.ƒS.Speech.show();
        await EchoesOfDiscordia.ƒS.update(1);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "The bustling streets are teeming with people, packed so tightly that it’s nearly impossible to turn without brushing against someone else.");
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "Children dart through the crowds, laughing as they chase rats, while hawkers shout at the top of their lungs, extolling the virtues of their latest wares.");
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "Walking through the crowd a nagging feeling in the back of your mind urges you to keep an eye on your bag.");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.happy, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "You know I'm also a hawker.");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.protagonist, "I thought you were a mail carrier?");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.happy, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "That too. And now apparently professional City tour guide. Gotta keep busy here in Kazagaard.");
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "So where to next?");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        let destination = {
            temple: "Is that a Temple of Kolia over there?",
            rooftops: "I can barely see anything here. I bet the view would be better up on the Rooftops.",
            liquorStore: "I've heard Kazagaard has quite the famous Liquor Store?",
        };
        let nextDestination = await EchoesOfDiscordia.ƒS.Menu.getInput(destination, "choices");
        switch (nextDestination) {
            //scene continues here then
            case destination.temple:
                await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.confused, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
                await EchoesOfDiscordia.ƒS.update(.1);
                await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "You believe in gods?");
                await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.happy, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
                await EchoesOfDiscordia.ƒS.update(.1);
                await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "Sure let's take a peek in there. The light shining through the window at this time of day is great?");
                await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                EchoesOfDiscordia.ƒS.Speech.clear();
                EchoesOfDiscordia.ƒS.Speech.hide();
                EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                EchoesOfDiscordia.ƒS.Location.show(EchoesOfDiscordia.locations.blackout);
                EchoesOfDiscordia.ƒS.Sound.fade(EchoesOfDiscordia.sound.kazagaardRooftops, 0, 2);
                await EchoesOfDiscordia.ƒS.update(1);
                return "kazagaardTemple";
            case destination.rooftops:
                await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.happy, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
                await EchoesOfDiscordia.ƒS.update(.1);
                await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "Ah a person of taste I see.");
                await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "No complaints here I can deliver some letters while we're at it, it's the fastest way.");
                await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
                await EchoesOfDiscordia.ƒS.update(.1);
                EchoesOfDiscordia.ƒS.Speech.clear();
                EchoesOfDiscordia.ƒS.Speech.hide();
                EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                EchoesOfDiscordia.ƒS.Location.show(EchoesOfDiscordia.locations.blackout);
                EchoesOfDiscordia.ƒS.Sound.fade(EchoesOfDiscordia.sound.kazagaardRooftops, 0, 2);
                await EchoesOfDiscordia.ƒS.update(1);
                return "kazagaardRooftops";
            case destination.liquorStore:
                await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.angry, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
                await EchoesOfDiscordia.ƒS.update(.1);
                await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "What?! How do you.... ");
                await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.confused, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
                await EchoesOfDiscordia.ƒS.update(.1);
                await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "I mean never mind.");
                await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.surprised, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
                await EchoesOfDiscordia.ƒS.update(.1);
                await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "Lower your voice if you need to talk about it and follow me inconspicuously");
                await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
                await EchoesOfDiscordia.ƒS.update(.1);
                EchoesOfDiscordia.ƒS.Speech.clear();
                EchoesOfDiscordia.ƒS.Speech.hide();
                EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                EchoesOfDiscordia.ƒS.Location.show(EchoesOfDiscordia.locations.blackout);
                EchoesOfDiscordia.ƒS.Sound.fade(EchoesOfDiscordia.sound.kazagaardRooftops, 0, 2);
                await EchoesOfDiscordia.ƒS.update(1);
                return "kazagaardLiquorStore";
        }
        ;
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
    EchoesOfDiscordia.kazagaardStreets = kazagaardStreets;
})(EchoesOfDiscordia || (EchoesOfDiscordia = {}));
var EchoesOfDiscordia;
(function (EchoesOfDiscordia) {
    async function kazagaardTemple() {
        console.log("Kazagaard Temple");
        // cpms = characters per millisecond
        EchoesOfDiscordia.ƒS.Speech.setTickerDelays(30, 5000);
        EchoesOfDiscordia.ƒS.Speech.clear();
        EchoesOfDiscordia.ƒS.Speech.hide();
        await EchoesOfDiscordia.ƒS.Location.show(EchoesOfDiscordia.locations.kazagaardTemple);
        EchoesOfDiscordia.ƒS.Sound.play(EchoesOfDiscordia.sound.kazagaardTemple, .5, true);
        await EchoesOfDiscordia.ƒS.update(2);
        EchoesOfDiscordia.ƒS.Speech.show();
        await EchoesOfDiscordia.ƒS.update(1);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "<i>The temple stands tall amidst the small houses stacked haphazardly atop one another.<i>");
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "<i>As you push open the massive oak doors, a wave of incense and the faint tang of metal fills the air. Towering walls stretch high above your head, and at the far end of the hall stands a colossal statue of a man clad in heavy armor.<i>");
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "<i>Dim light filters through the stained glass windows, fracturing into muted hues before it can fully illuminate the space. <i>");
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "<i>To the side, a staircase adorned with ornate braziers spirals upward toward the church’s upper quarters.<i>");
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "<i>In the center of the hall, a priest converses in hushed tones with a red-haired girl, their voices barely audible amidst the solemn silence.<i>");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.happy, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "Beautiful right? I love coming here to admire the lighting. Those windows just do the trick.");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.protagonist, "It's a different vibe to the outside town, that's for sure. Remind me, what is this god's domain again?");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.surprised, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "Oh Kolia? He's responsible for warriors or something along those lines. The priest might know more but... he seems busy.");
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "Maybe ask a Paladin when you see one, they're all about it. So what now?");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        //Options
        let exploreTemple = true;
        do {
            let option1 = {
                evesdrop: "What do you think those two are talking about? Let's evesdrop.",
                leave: "Ignore the situation and follow"
            };
            let choice = await EchoesOfDiscordia.ƒS.Menu.getInput(option1, "choices");
            switch (choice) {
                //Caspia Priest Scene
                case option1.evesdrop:
                    await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                    await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.happy, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
                    await EchoesOfDiscordia.ƒS.update(.1);
                    await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "I like the way you're thinking.");
                    await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                    await EchoesOfDiscordia.ƒS.update(1);
                    await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(35, 100));
                    await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Caspia, EchoesOfDiscordia.characters.Caspia.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(65, 100));
                    await EchoesOfDiscordia.ƒS.update(1);
                    await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Caspia);
                    await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Caspia, EchoesOfDiscordia.characters.Caspia.pose.sad, EchoesOfDiscordia.ƒS.positionPercent(65, 100));
                    await EchoesOfDiscordia.ƒS.update(.1);
                    await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Caspia, "Do you really not know when she will be back?");
                    await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Caspia);
                    await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Caspia, EchoesOfDiscordia.characters.Caspia.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(65, 100));
                    await EchoesOfDiscordia.ƒS.update(.1);
                    await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.priest, "Unfortunately not Ma'am");
                    await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Caspia);
                    await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Caspia, EchoesOfDiscordia.characters.Caspia.pose.sad, EchoesOfDiscordia.ƒS.positionPercent(65, 100));
                    await EchoesOfDiscordia.ƒS.update(.1);
                    await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Caspia, "Well, it is of utmost importance that I speak to her as quickly as possible before...");
                    EchoesOfDiscordia.ƒS.Speech.setTickerDelays(80, 5000);
                    await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Caspia, "Uhm...");
                    EchoesOfDiscordia.ƒS.Speech.setTickerDelays(30, 5000);
                    await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Caspia);
                    await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Caspia, EchoesOfDiscordia.characters.Caspia.pose.confused, EchoesOfDiscordia.ƒS.positionPercent(65, 100));
                    await EchoesOfDiscordia.ƒS.update(.1);
                    await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Caspia, "Do you wish to consult with Father Jack?");
                    await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Caspia);
                    await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Caspia, EchoesOfDiscordia.characters.Caspia.pose.happy, EchoesOfDiscordia.ƒS.positionPercent(65, 100));
                    await EchoesOfDiscordia.ƒS.update(.1);
                    await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Caspia, "Go on ahead then, I can wait. No worries!");
                    await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Caspia);
                    await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Caspia, EchoesOfDiscordia.characters.Caspia.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(65, 100));
                    await EchoesOfDiscordia.ƒS.update(.1);
                    await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.protagonist, "Oh no, don't mind us! Keep on talking.");
                    await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Caspia);
                    await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Caspia, EchoesOfDiscordia.characters.Caspia.pose.angry, EchoesOfDiscordia.ƒS.positionPercent(65, 100));
                    await EchoesOfDiscordia.ƒS.update(.1);
                    await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Caspia, "I'd rather not discuss delicate matters with strangers, if it's all the same to you.");
                    await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Caspia);
                    await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Caspia, EchoesOfDiscordia.characters.Caspia.pose.embarrassed, EchoesOfDiscordia.ƒS.positionPercent(65, 100));
                    await EchoesOfDiscordia.ƒS.update(.1);
                    await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Caspia, "So if you don't mind?");
                    await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Caspia);
                    await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Caspia, EchoesOfDiscordia.characters.Caspia.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(65, 100));
                    await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                    await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.confused, EchoesOfDiscordia.ƒS.positionPercent(35, 100));
                    await EchoesOfDiscordia.ƒS.update(.1);
                    await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "Oh our humble apologies. We'll be on our way first! Come on pipsqueak.");
                    await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                    await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(35, 100));
                    await EchoesOfDiscordia.ƒS.update(.1);
                    await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                    await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Caspia);
                    await EchoesOfDiscordia.ƒS.update(1);
                    await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
                    await EchoesOfDiscordia.ƒS.update(1);
                    await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                    await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.confused, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
                    await EchoesOfDiscordia.ƒS.update(.1);
                    await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "Arrogant snob. Let's go somewhere that doesn't stink of flowers and money.");
                    await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                    await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
                    await EchoesOfDiscordia.ƒS.update(.1);
                    break;
                default:
                    await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                    await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.happy, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
                    await EchoesOfDiscordia.ƒS.update(.1);
                    await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "Moving on then.");
                    await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                    await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
                    await EchoesOfDiscordia.ƒS.update(.1);
                    exploreTemple = false;
            }
        } while (exploreTemple);
        EchoesOfDiscordia.ƒS.Speech.clear();
        EchoesOfDiscordia.ƒS.Speech.hide();
        EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Location.show(EchoesOfDiscordia.locations.blackout);
        EchoesOfDiscordia.ƒS.Sound.fade(EchoesOfDiscordia.sound.kazagaardTemple, 0, 2);
        await EchoesOfDiscordia.ƒS.update(1);
        // Back to the ice
        //await ƒS.Speech.tell(characters.gameDirector, "<i>You walk towards the edge of the roof again, the ice glistening in the light sun rays.</i>");
    }
    EchoesOfDiscordia.kazagaardTemple = kazagaardTemple;
})(EchoesOfDiscordia || (EchoesOfDiscordia = {}));
var EchoesOfDiscordia;
(function (EchoesOfDiscordia) {
    async function moonhavenTempleAndano() {
        console.log("Kazagaard Streets");
        // cpms = characters per millisecond
        EchoesOfDiscordia.ƒS.Speech.setTickerDelays(30, 5000);
        EchoesOfDiscordia.ƒS.Speech.clear();
        EchoesOfDiscordia.ƒS.Speech.hide();
        await EchoesOfDiscordia.ƒS.Location.show(EchoesOfDiscordia.locations.kazagaardStreets);
        EchoesOfDiscordia.ƒS.Sound.play(EchoesOfDiscordia.sound.kazagaardCity, .5, true);
        await EchoesOfDiscordia.ƒS.update(2);
        EchoesOfDiscordia.ƒS.Speech.show();
        await EchoesOfDiscordia.ƒS.update(1);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "The bustling streets are teeming with people, packed so tightly that it’s nearly impossible to turn without brushing against someone else.");
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "Children dart through the crowds, laughing as they chase rats, while hawkers shout at the top of their lungs, extolling the virtues of their latest wares.");
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "Walking through the crowd a nagging feeling in the back of your mind urges you to keep an eye on your bag.");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.happy, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "You know I'm also a hawker.");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.protagonist, "I thought you were a mail carrier?");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.happy, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "That too. And now apparently professional City tour guide. Gotta keep busy here in Kazagaard.");
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "So where to next?");
        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
        await EchoesOfDiscordia.ƒS.update(.1);
        let destination = {
            temple: "Is that a Temple of Kolia over there?",
            rooftops: "I can barely see anything here. I bet the view would be better up on the Rooftops.",
            liquorStore: "I've heard Kazagaard has quite the famous Liquor Store?",
        };
        let nextDestination = await EchoesOfDiscordia.ƒS.Menu.getInput(destination, "choices");
        switch (nextDestination) {
            //scene continues here then
            case destination.temple:
                await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.confused, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
                await EchoesOfDiscordia.ƒS.update(.1);
                await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "You believe in gods?");
                await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.happy, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
                await EchoesOfDiscordia.ƒS.update(.1);
                await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "Sure let's take a peek in there. The light shining through the window at this time of day is great?");
                await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                EchoesOfDiscordia.ƒS.Speech.clear();
                EchoesOfDiscordia.ƒS.Speech.hide();
                EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                EchoesOfDiscordia.ƒS.Location.show(EchoesOfDiscordia.locations.blackout);
                EchoesOfDiscordia.ƒS.Sound.fade(EchoesOfDiscordia.sound.kazagaardRooftops, 0, 2);
                await EchoesOfDiscordia.ƒS.update(1);
                return "kazagaardTemple";
            case destination.rooftops:
                await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.happy, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
                await EchoesOfDiscordia.ƒS.update(.1);
                await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "Ah a person of taste I see.");
                await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "No complaints here I can deliver some letters while we're at it, it's the fastest way.");
                await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
                await EchoesOfDiscordia.ƒS.update(.1);
                EchoesOfDiscordia.ƒS.Speech.clear();
                EchoesOfDiscordia.ƒS.Speech.hide();
                EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                EchoesOfDiscordia.ƒS.Location.show(EchoesOfDiscordia.locations.blackout);
                EchoesOfDiscordia.ƒS.Sound.fade(EchoesOfDiscordia.sound.kazagaardRooftops, 0, 2);
                await EchoesOfDiscordia.ƒS.update(1);
                return "kazagaardRooftops";
            case destination.liquorStore:
                await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.angry, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
                await EchoesOfDiscordia.ƒS.update(.1);
                await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "What?! How do you.... ");
                await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.confused, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
                await EchoesOfDiscordia.ƒS.update(.1);
                await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "I mean never mind.");
                await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.surprised, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
                await EchoesOfDiscordia.ƒS.update(.1);
                await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "Lower your voice if you need to talk about it and follow me inconspicuously");
                await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.idle, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
                await EchoesOfDiscordia.ƒS.update(.1);
                EchoesOfDiscordia.ƒS.Speech.clear();
                EchoesOfDiscordia.ƒS.Speech.hide();
                EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                EchoesOfDiscordia.ƒS.Location.show(EchoesOfDiscordia.locations.blackout);
                EchoesOfDiscordia.ƒS.Sound.fade(EchoesOfDiscordia.sound.kazagaardRooftops, 0, 2);
                await EchoesOfDiscordia.ƒS.update(1);
                return "kazagaardLiquorStore";
        }
        ;
    }
    EchoesOfDiscordia.moonhavenTempleAndano = moonhavenTempleAndano;
})(EchoesOfDiscordia || (EchoesOfDiscordia = {}));
//# sourceMappingURL=EchoesOfDiscordia.js.map