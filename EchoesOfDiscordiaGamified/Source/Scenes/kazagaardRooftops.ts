namespace EchoesOfDiscordia {
    export async function kazagaardRooftops(): ƒS.SceneReturn {

        console.log("Kazagaard Rooftops");

        // cpms = characters per millisecond
        ƒS.Speech.setTickerDelays(30, 5000);
        ƒS.Speech.clear();
        ƒS.Speech.hide();

        await ƒS.Location.show(locations.kazagaardRooftops);
        ƒS.Sound.play(sound.kazagaardRooftops, .5, true);
        await ƒS.update(2);
        ƒS.Speech.show();
        await ƒS.update(1);
        await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
        await ƒS.update(1);
        await ƒS.Character.hide(characters.Vanessa);
        await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.happy, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.Vanessa, "Isn't this a sight to behold? Also the fastest way to get around here.");
        await ƒS.Character.hide(characters.Vanessa);
        await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.gameDirector, "<i>In front of you, the bustling streets resemble ants mingling through the dirt. Even at this height, buildings stack atop one another, connected only by small planks and ropes.</i>");
        await ƒS.Speech.tell(characters.gameDirector, "<i>Birds scatter as you reach the top of yet another ladder, leading even higher. From this vantage point, the Ashland Mountains in the distance cast a foreboding shadow over Kazagaard.</i>");
        await ƒS.Speech.tell(characters.gameDirector, "<i>The mountain tops' white mantles contrast sharply with the grey, foggy city below, and for once, the air feels clean and refreshing. </i>");
        await ƒS.Speech.tell(characters.protagonist, "Wow it looks...");
        await ƒS.Speech.tell(characters.gameDirector, "<i>As your focus shifts back to the labyrinth of streets below, you see people sprinting, others vandalizing walls, pigs and rats running freely, and pickpockets fleeing from their screeching victims, who coincidentally seem to carry knives.</i>");
        await ƒS.Speech.tell(characters.protagonist, "Interesting");
        await ƒS.Character.hide(characters.Vanessa);
        await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.happy, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.Vanessa, "Isn't it just? I love coming up here. It's the only way to endure this lame excuse of a town. The only other nice view coming even close is the Temple of Kolia.");
        await ƒS.Character.hide(characters.Vanessa);
        await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.gameDirector, "<i>The planks beneath your feet squeak as Vanessa skillfully guides you across the rooftop tiles.</i>");
        await ƒS.Character.hide(characters.Vanessa);
        await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.happy, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.Vanessa, "Careful now, we wouldn't want you to fall! It's quite slippery up here.");
        await ƒS.Character.hide(characters.Vanessa);
        await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.gameDirector, "<i>A sudden movement catches your eye, something tall and dark disappearing behind a corner before you can make out what it is. </i>");
        await ƒS.Speech.tell(characters.gameDirector, "<i>Your gaze shifts to the narrow gap beside the corner, where the edge of the roof glistens with ice. A grappling hook clings to one of the ledges, its rope dangling down the side of the roof.</i>");
        await ƒS.Speech.tell(characters.gameDirector, "<i>Frost coats its lower section, where a seemingly once-wet substance appears to have frozen. The rope’s deep, saturated red stands out starkly against the icy backdrop.</i>");
        await ƒS.Speech.tell(characters.gameDirector, "<i>On the other side of the gap lies a puddle, barely recognizable, washed away by the afternoon rain.</i>");
        await ƒS.Speech.tell(characters.gameDirector, "<i>As Vanessa skillfully guides you past it, your eyes catch the shattered remains of a wooden plank scattered across the ground.</i>");
        await ƒS.Speech.tell(characters.protagonist, "What happened here?");
        await ƒS.Speech.tell(characters.gameDirector, "<i>Vanessa doesn't answer, but you notice a light shift in her demeanor as she kept on walking. </i>");
        await ƒS.Speech.tell(characters.gameDirector, "<i>You’re jolted from your musings as the massive clock ahead strikes. Its hollow bell echoes through the alleys, sending a chill down your spine. </i>");
        await ƒS.Speech.tell(characters.gameDirector, "<i>Kolias Temple looms in the distance, its imposing structure a silent sentinel. It seems to watch over everything, guarding ancient secrets yet to be unraveled.  </i>");
        console.log(DOMTokenList);
        // Seeing ice
        let ice = true
        do {
            let option1 = {
                investigate: "If you want to press on about the matter, you can watch the corresponding episode on YouTube.",
                ignore: "Ignore the situation and follow"
            };

            let choice = await ƒS.Menu.getInput(option1, "choices");
            switch (choice) {
                //scene continues here then
                case option1.investigate:
                    await ƒS.Speech.tell(characters.gameDirector, "<i>This option would open a Tab with the YouTube episode. For this testing it is not available.</i>");
                    await ƒS.Speech.tell(characters.gameDirector, "<i>Please choose the second option to continue.</i>");
                    break;

                default:
                    await ƒS.Character.hide(characters.Vanessa);
                    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.happy, ƒS.positionPercent(50, 100));
                    await ƒS.update(.1);
                    await ƒS.Speech.tell(characters.Vanessa, "That's the biggest part of it. Where do you want to go now?");
                    await ƒS.Character.hide(characters.Vanessa);
                    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
                    await ƒS.update(.1);

                    let option2 = {
                        street: "Let's go down again first",
                        back: "Let's go back a few steps. I think I saw something."
                    };

                    let choice2 = await ƒS.Menu.getInput(option2, "choices");

                    if (choice2 == option2.back)
                    await ƒS.Character.hide(characters.Vanessa);
                    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.confused, ƒS.positionPercent(50, 100));
                    await ƒS.update(.1);
                    await ƒS.Speech.tell(characters.Vanessa, "Sure, if you think you did.");
                    await ƒS.Character.hide(characters.Vanessa);
                    await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
                    await ƒS.update(.1);
                    await ƒS.Speech.tell(characters.gameDirector, "<i>You walk towards the edge of the roof again, the ice glistening in the light sun rays.</i>");

                    if (choice2 == option2.street)
                        ice = false
            }
        } while (ice)
        // option where next

        //leave
        await ƒS.Character.hide(characters.Vanessa);
        await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.happy, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.Vanessa, "Back into the chaos we go then!");
        await ƒS.Character.hide(characters.Vanessa);
        await ƒS.Character.show(characters.Vanessa, characters.Vanessa.pose.idle, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.protagonist, "Yay...");

        ƒS.Speech.clear();
        ƒS.Speech.hide();
        ƒS.Character.hide(characters.Vanessa);
        ƒS.Location.show(locations.blackout);
        ƒS.Sound.fade(sound.kazagaardRooftops, 0, 2)
        await ƒS.update(1);

        // Back to the ice
        // await ƒS.Speech.tell(characters.gameDirector, "<i>You walk towards the edge of the roof again, the ice glistening in the light sun rays.</i>");

    }
}