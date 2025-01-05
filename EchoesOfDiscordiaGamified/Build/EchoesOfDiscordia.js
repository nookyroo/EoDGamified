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
            background: "Images/Locations/Kazagaard_Streets.png",
        },
        kazagaardStreets: {
            name: "City",
            background: "Images/Locations/Kazagaard_Streets.jpg",
        },
        kazagaardRooftops: {
            name: "Rooftops",
            background: "Images/Locations/Kazagaard_KoliaTemple.jpg",
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
    };
    //Start Scene NAchschauen hier start
    window.addEventListener("load", start);
    function start(_event) {
        // Scene Hierarchy fragen
        let scenes = [
            { scene: EchoesOfDiscordia.kazagaardCityWall, name: "Western City Gate" },
            // { scene: kazagaardStreets, name: "Intro Scene" }
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
        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "<i>As you pass the City Gate a labyrinth of dark narrow alleys opens in front of you, giving the whole city a sinister and foreboding look.</i>");
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
        await EchoesOfDiscordia.ƒS.update(.1);
        //Choice
        let options = {
            continue: "Follow her.",
            Charactersheet: "Learn more about her"
        };
        let optionsElement = await EchoesOfDiscordia.ƒS.Menu.getInput(options, "choices");
        switch (optionsElement) {
            case options.continue:
                //scene continues here then
                await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.happy, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
                await EchoesOfDiscordia.ƒS.update(.1);
                await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "Sooo... any sightseeing points in mind?");
            //Link to Charactersheet
            case options.Charactersheet: //need to insert Link
                await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                await EchoesOfDiscordia.ƒS.update(1);
                await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.gameDirector, "<i>This option will exit the city inspection. All your progress will be lost. Do you still wish to continue?</i>");
                //Choices:
                // let options = {
                //  Temple: "Is that a Temple of Kolia over there?",
                // Rooftops: "I can barely see anything here. I bet the view would be better up on the Rooftops.",
                // LiquorStore: "I've heard Kazagaard has quite the famous Liquor Store?"
                // }
                //Lines Vanessa
                //Temple
                let optionsElement = await EchoesOfDiscordia.ƒS.Menu.getInput(options, "choices");
                switch (optionsElement) {
                    case options.Temple:
                        // continue path here
                        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "You believe in gods? Sure let's take a peek in there. The light shining through the window at this time of day is great.");
                        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                        EchoesOfDiscordia.ƒS.Sound.fade(EchoesOfDiscordia.sound.kazagaardCity, 0, 2);
                        await EchoesOfDiscordia.ƒS.update(2);
                        //Rooftops
                        let optionsElement = await EchoesOfDiscordia.ƒS.Menu.getInput(options, "choices");
                        switch (optionsElement) {
                            case options.Rooftops:
                                // continue path here
                                await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "Oh you bet it is! Come on I'll show you!");
                                await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                                EchoesOfDiscordia.ƒS.Sound.fade(EchoesOfDiscordia.sound.kazagaardCity, 0, 2);
                                await EchoesOfDiscordia.ƒS.update(2);
                                //Liquor Store
                                let optionsElement = await EchoesOfDiscordia.ƒS.Menu.getInput(options, "choices");
                                switch (optionsElement) {
                                    case options.LiquorStore:
                                        // continue path here
                                        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.angry, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
                                        await EchoesOfDiscordia.ƒS.update(.1);
                                        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "What?! How do you....");
                                        await EchoesOfDiscordia.ƒS.Character.show(EchoesOfDiscordia.characters.Vanessa, EchoesOfDiscordia.characters.Vanessa.pose.surprised, EchoesOfDiscordia.ƒS.positionPercent(50, 100));
                                        await EchoesOfDiscordia.ƒS.update(.1);
                                        await EchoesOfDiscordia.ƒS.Speech.tell(EchoesOfDiscordia.characters.Vanessa, "I mean never mind. Lower your voice if you need to talk about it and follow me inconspicuously.");
                                        EchoesOfDiscordia.ƒS.Speech.clear();
                                        EchoesOfDiscordia.ƒS.Speech.hide();
                                        await EchoesOfDiscordia.ƒS.Character.hide(EchoesOfDiscordia.characters.Vanessa);
                                        EchoesOfDiscordia.ƒS.Sound.fade(EchoesOfDiscordia.sound.kazagaardCity, 0, 2);
                                        await EchoesOfDiscordia.ƒS.update(2);
                                }
                                EchoesOfDiscordia.ƒS.Speech.clear();
                                EchoesOfDiscordia.ƒS.Speech.hide();
                        }
                }
        }
    }
    EchoesOfDiscordia.kazagaardCityWall = kazagaardCityWall;
})(EchoesOfDiscordia || (EchoesOfDiscordia = {}));
//# sourceMappingURL=EchoesOfDiscordia.js.map