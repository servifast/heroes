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
            bio: "Batman, durante su infancia perdió a sus padres como consecuencia de un asesinato del cual él mismo fue testigo y que sería la causa fundamental de su decisión de crear a ese superhombre justiciero.",
            img: "assets/img/batman.png",
            aparicion: "1939-05-01",
            casa: "DC"
        },
        {
            nombre: "Daredevil",
            bio: "Una carga radiactiva cae sobre él, queda ciego pero como contrapartida desarrolla notablemente el resto de sus sentidos, siendo capaz de ver a pesar de esa ceguera.",
            img: "assets/img/daredevil.png",
            aparicion: "1964-01-01",
            casa: "Marvel"
        },
        {
            nombre: "Hulk",
            bio: "Hulk es la forma adoptada por Bruce Banner cada vez que está estresado o enfurecido.",
            img: "assets/img/hulk.png",
            aparicion: "1962-05-01",
            casa: "Marvel"
        },
        {
            nombre: "Linterna Verde",
            bio: "Su principal fuerza radica en la posesión de un anillo de poder que es capaz de crear luz sólida a partir de su pensamiento.",
            img: "assets/img/linterna-verde.png",
            aparicion: "1940-06-01",
            casa: "DC"
        },
        {
            nombre: "Spider-Man",
            bio: "Dispone de poderes especiales para enfrentar y derrotar a sus enemigos: fuerza, rapidez, reflejos y la capacidad de adhesión a las superficies como tienen las arañas, es capaz de trepar como nadie inmensas alturas y para ello además se vale de telarañas que creó él mismo a través de su impactante inteligencia.",
            img: "assets/img/spiderman.png",
            aparicion: "1940-06-01",
            casa: "Marvel"
        },
        {
            nombre: "Wolverine",
            bio: "Wolverine es un mutante que se recupera sencillamente de cualquier daño que lo afecta, es ágil, fuerte y dispone de poderes psíquicos y telepatía.",
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

    buscarHeroes(termino: string): Heroe[] {
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