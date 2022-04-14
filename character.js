class Character {
    constructor(hp, dmg, mana, status) {
        this.hp = hp;
        this.dmg = dmg;
        this.mana = mana;
        this.status = status;
    }

    dealDamage(attaquant, victim){


        if (victim.hp <= 0){
            console.log(`${attaquant[0].name} ne peut pas attaquer ${victim.name} car il/elle est mort(e)`)
        }else {
            console.log(`${attaquant[0].name} attaque ${victim.name} (qui a actuellement ${victim.hp} points de vie) avec son attaque de base qui inflige ${attaquant[0].dmg} points de dégats`)

            victim.hp = victim.hp - attaquant[0].dmg
    
            console.log(`${attaquant[0].name} a infligé ${attaquant[0].dmg}points de dégats à ${victim.name}! Il reste à ${victim.name} ${victim.hp}points de vie`)
        }

    }

    botDamage(attaquant, victim){


        if (victim.hp <= 0){
            console.log(`${attaquant.name} ne peut pas attaquer ${victim.name} car il/elle est mort(e)`)
        }else {
            console.log(`${attaquant.name} attaque ${victim.name} (qui a actuellement ${victim.hp} points de vie) avec son attaque de base qui inflige ${attaquant.dmg} points de dégats`)

            victim.hp = victim.hp - attaquant.dmg
    
            console.log(`${attaquant.name} a infligé ${attaquant.dmg}points de dégats à ${victim.name}! Il reste à ${victim.name} ${victim.hp}points de vie`)
        }

    }

    updateStatus = () => {
        if (this.hp = 0){
            this.status = "looser"
        }
        console.log(`${this.name} a perdu`);
    }
}

class Fighter extends Character {
    constructor(name, hp = 12, dmg = 4, mana = 40, status= "playing") {
        super(hp, dmg, mana, status);
        this.name = name;
    }

}



class Paladin extends Character {
    constructor(name,hp = 16, dmg = 3, mana = 160, status= "playing") {
        super(hp, dmg, mana, status);
        this.name = name;
    }
}

class Monk extends Character {
    constructor(name,hp = 8, dmg = 2, mana = 200, status= "playing") {
        super(hp, dmg, mana, status);
        this.name = name;
    }
}

class Berzerker extends Character {
    constructor(name,hp = 8, dmg = 4, mana = 0, status= "playing") {
        super(hp, dmg, mana, status);
        this.name = name;
    }
}

class Assassin extends Character {
    constructor(name,hp = 6, dmg = 6, mana = 20, status= "playing") {
        super(hp, dmg, mana, status);
        this.name = name;
    }
}




