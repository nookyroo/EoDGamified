declare namespace EchoesOfDiscordia {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
}

//name scene
declare namespace EchoesOfDiscordia {
    function CityWalls(): ƒS.SceneReturn;
}

//Index Characters
let characters: {
    gameDirector: { //=Narrator
        name: string;
    };
    protagonist: { //=Spieler
        name: string;
    };
    caspia: {
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
        };B
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

//Index Locations
let locations: {

    //Kazagaard
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

    //Moonhaven
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

//Index Sound
let sound: {
    //Kazagaard
    kazagaardCity
    kazagaardRooftops: string;
    kazagaardTemple: string;
    kazagaardLiquorStore: string;
    //Moonhaven
    moonhavenLowerCity: string;
    moonhavenUpperCity: string;
    moonhavenUniversity: string;
    moonhavenTempleAndano: string;
    moonhavenTomb: string;
};

//Unklar ob ichs brauch
//declare namespace SakuraGlade {
    //function day1Locations(): ƒS.SceneReturn;
   // function day2Locations(): ƒS.SceneReturn;
   // function day2Inventory(): Promise<void>;
//}
//declare namespace SakuraGlade {
    //function Start(): ƒS.SceneReturn;
//}

