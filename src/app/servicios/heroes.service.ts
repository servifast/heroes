import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {
    private heroes: Heroe[] = [
        {
            nombre: "Aquaman",
            bio: "El poder mas reconocido de Aquaman es la capacidad telepatica para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
            img: "assets/img/aquaman.png",
            aparicion: "1941-11-01",
            casa: "DC"
        },
        {
            nombre: "Batman",
            bio: "El poder mas reconocido de Aquaman es la capacidad telepatica para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
            img: "assets/img/batman.png",
            aparicion: "1939-05-01",
            casa: "DC"
        },
        {
            nombre: "Daredevil",
            bio: "El poder mas reconocido de Aquaman es la capacidad telepatica para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
            img: "assets/img/daredevil.png",
            aparicion: "1964-01-01",
            casa: "Marvel"
        },
        {
            nombre: "Hulk",
            bio: "El poder mas reconocido de Aquaman es la capacidad telepatica para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
            img: "assets/img/hulk.png",
            aparicion: "1962-05-01",
            casa: "Marvel"
        },
        {
            nombre: "Linterna Verde",
            bio: "El poder mas reconocido de Aquaman es la capacidad telepatica para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
            img: "assets/img/linterna-verde.png",
            aparicion: "1940-06-01",
            casa: "DC"
        },
        {
            nombre: "Spider-Man",
            bio: "El poder mas reconocido de Aquaman es la capacidad telepatica para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
            img: "assets/img/spiderman.png",
            aparicion: "1940-06-01",
            casa: "Marvel"
        },
        {
            nombre: "Wolverine",
            bio: "El poder mas reconocido de Aquaman es la capacidad telepatica para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
            img: "assets/img/wolverine.png",
            aparicion: "1974-11-01",
            casa: "Marvel"
        }
    ];

    constructor() {
        console.log("Servicio listo para usar!!!");
    }

    getHeroes(): Heroe[] {
        return this.heroes;
    }

    getHeroe(idx: string) {
        return this.heroes[idx];
    }

    buscarHeroes(termino: string):Heroe[] {
        let heroesArr: Heroe[] = [];
        termino = termino.toLowerCase();
        for (let heroe of this.heroes) {
            let nombre = heroe.nombre.toLowerCase();
            if (nombre.indexOf(termino) >= 0) {
                heroesArr.push(heroe);
            }
        }
        return heroesArr;
    }

}

export interface Heroe {
    nombre: string;
    bio: string;
    img: string;
    aparicion: string;
    casa: string;
};