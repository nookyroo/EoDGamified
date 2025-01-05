declare namespace EchoesOfDiscordia {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let sound: {
        kazagaardCity: string;
        kazagaardRooftops: string;
        kazagaardTemple: string;
        kazagaardLiquorStore: string;
        moonhavenLowerCity: string;
        moonhavenUpperCity: string;
        moonhavenUniversity: string;
        moonhavenTempleAndano: string;
        moonhavenTomb: string;
    };
    let locations: {
        kazagaardCityWall: {
            name: string;
            background: string;
        };
        kazagaardStreets: {
            name: string;
            background: string;
        };
        kazagaardRooftops: {
            name: string;
            background: string;
        };
        kazagaardTemple: {
            name: string;
            background: string;
        };
        kazagaardLiquorStore: {
            name: string;
            background: string;
        };
        moonhavenLowerCity: {
            name: string;
            background: string;
        };
        moonhavenUpperCity: {
            name: string;
            background: string;
        };
        moonhavenUniversity: {
            name: string;
            background: string;
        };
        moonhavenTempleAndano: {
            name: string;
            background: string;
        };
        moonhavenTomb: {
            name: string;
            background: string;
        };
    };
    let characters: {
        gameDirector: {
            name: string;
        };
        protagonist: {
            name: string;
        };
        Caspia: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                idle: string;
                happy: string;
                sad: string;
                angry: string;
                surprised: string;
                scared: string;
                embarrassed: string;
                confused: string;
            };
        };
        Vanessa: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                idle: string;
                happy: string;
                sad: string;
                angry: string;
                surprised: string;
                scared: string;
                embarrassed: string;
                confused: string;
            };
        };
        Loraviel: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                idle: string;
                happy: string;
                sad: string;
                angry: string;
                surprised: string;
                scared: string;
                embarrassed: string;
                confused: string;
            };
        };
    };
}

declare namespace EchoesOfDiscordia {
    function kazagaardCityWall(): ƒS.SceneReturn;
}
