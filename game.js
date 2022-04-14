class Game {
    constructor(characterArray= [], enemiesArray = [], choiceCharacter = [], turnName = 0, tirage, turnLeft = 10) {
        this.turnLeft = turnLeft;
        this.characterArray = characterArray;
        this.enemiesArray = enemiesArray;
        this.choiceCharacter = choiceCharacter;
        this.turnName = turnName;
        this.tirage = tirage;
        this.characterClass = new Character();
    };

    playerInitializer = () => {
        
        let grace = new Fighter("Grace");
        let ulder = new Paladin("Ulder");
        let moona = new Monk("Moona");
        let draven = new Berzerker("Draven");
        let carl = new Assassin("Carl");
        this.enemiesArray.push(grace, ulder, moona, draven, carl);
        this.characterArray.push(grace, ulder, moona, draven, carl);
        console.log(`Bienvenu, voici la liste des champions!`);
        this.characterArray.forEach(character => {
            console.log("")
            console.log(`${character.name}, ${character.hp} points de vie, ${character.mana} points de mana, et inflige ${character.dmg} points de dégats par attaque`)
            
        });
        /*
        let choiceCharacter = ""
        while(choiceCharacter === "") {
            choiceCharacter = prompt("Choisis ton perso");
        } 
        */
        return 
    }

    chooseCharacter = () => {
        let divIntro = document.getElementById("showCharacter");
        let showCharacterGrace = document.getElementById("showGrace")
        let showCharacterUlder = document.getElementById("showUlder")
        let showCharacterMoona = document.getElementById("showMoona")
        let showCharacterDraven = document.getElementById("showDraven")
        let showCharacterCarl = document.getElementById("showCarl")
        let atkChoice = document.getElementById("CharacterAtkChoice")
        
            // showCharacterGrace
            // showCharacterUlder
            // showCharacterMoona
            // showCharacterDraven
            // showCharacterCarl
        this.choiceCharacter = ""
        while(this.choiceCharacter === "") {
            this.choiceCharacter = prompt("Choisis ton perso en rentrant son numéro");
        } 

        

        if(parseInt(this.choiceCharacter) === 1 ){
            console.log("Tu as choisie Grace!")
            this.choiceCharacter = this.enemiesArray.filter(user => user.name === "Grace");
            this.enemiesArray = this.enemiesArray.filter(user => user.name !== "Grace");
            divIntro.style.display = "none";
            showCharacterGrace.innerHTML = `${this.characterArray[0].name} : ❤️ ${this.characterArray[0].hp}   💧${this.characterArray[0].mana}    🗡${this.characterArray[0].dmg}`;
            showCharacterUlder.innerHTML = `🩸 ${this.characterArray[1].name} : ❤️ ${this.characterArray[1].hp}   💧${this.characterArray[1].mana}    🗡${this.characterArray[1].dmg}`;
            showCharacterMoona.innerHTML = `🩸 ${this.characterArray[2].name} : ❤️ ${this.characterArray[2].hp}   💧${this.characterArray[2].mana}    🗡${this.characterArray[2].dmg}`;
            showCharacterDraven.innerHTML = `🩸 ${this.characterArray[3].name} : ❤️ ${this.characterArray[3].hp}   💧${this.characterArray[3].mana}    🗡${this.characterArray[3].dmg}`;
            showCharacterCarl.innerHTML = `🩸 ${this.characterArray[4].name} : ❤️ ${this.characterArray[4].hp}   💧${this.characterArray[4].mana}    🗡${this.characterArray[4].dmg}`;
            atkChoice.innerHTML = "⚔️ attaque quelqu'un en appuyant ici ⚔️"

        }else if((parseInt(this.choiceCharacter) === 2 )){
            console.log("Tu as choisie Ulder!")
            this.choiceCharacter = this.enemiesArray.filter(user => user.name === "Ulder");
            this.enemiesArray = this.enemiesArray.filter(user => user.name !== "Ulder");
            divIntro.style.display = "none";
            showCharacterGrace.innerHTML = `${this.characterArray[1].name} : ❤️ ${this.characterArray[1].hp}   💧${this.characterArray[1].mana}    🗡${this.characterArray[1].dmg}`;
            showCharacterUlder.innerHTML = `🩸 ${this.characterArray[0].name} : ❤️ ${this.characterArray[0].hp}   💧${this.characterArray[0].mana}    🗡${this.characterArray[0].dmg} `;
            showCharacterMoona.innerHTML = `🩸 ${this.characterArray[2].name} : ❤️ ${this.characterArray[2].hp}   💧${this.characterArray[2].mana}    🗡${this.characterArray[2].dmg} `;
            showCharacterDraven.innerHTML = `🩸 ${this.characterArray[3].name} : ❤️ ${this.characterArray[3].hp}   💧${this.characterArray[3].mana}    🗡${this.characterArray[3].dmg}`;
            showCharacterCarl.innerHTML = `🩸 ${this.characterArray[4].name} : ❤️ ${this.characterArray[4].hp}   💧${this.characterArray[4].mana}    🗡${this.characterArray[4].dmg}`;
            atkChoice.innerHTML = "⚔️ attaque quelqu'un en appuyant ici ⚔️"
        }else if((parseInt(this.choiceCharacter) === 3 )){
            console.log("Tu as choisie Moona!")
            this.choiceCharacter = this.enemiesArray.filter(user => user.name === "Moona");
            this.enemiesArray = this.enemiesArray.filter(user => user.name !== "Moona");
            divIntro.style.display = "none";
            showCharacterGrace.innerHTML = `${this.characterArray[2].name} : ❤️ ${this.characterArray[2].hp}   💧${this.characterArray[2].mana}    🗡${this.characterArray[2].dmg}`;
            showCharacterUlder.innerHTML = `🩸 ${this.characterArray[0].name} : ❤️ ${this.characterArray[0].hp}   💧${this.characterArray[0].mana}    🗡${this.characterArray[0].dmg} `;
            showCharacterMoona.innerHTML = `🩸 ${this.characterArray[1].name} : ❤️ ${this.characterArray[1].hp}   💧${this.characterArray[1].mana}    🗡${this.characterArray[1].dmg} `;
            showCharacterDraven.innerHTML = `🩸 ${this.characterArray[3].name} : ❤️ ${this.characterArray[3].hp}   💧${this.characterArray[3].mana}    🗡${this.characterArray[3].dmg}`;
            showCharacterCarl.innerHTML = `🩸 ${this.characterArray[4].name} : ❤️ ${this.characterArray[4].hp}   💧${this.characterArray[4].mana}    🗡${this.characterArray[4].dmg} `;
            atkChoice.innerHTML = "⚔️ attaque quelqu'un en appuyant ici ⚔️"
        }else if((parseInt(this.choiceCharacter) === 4 )){
            console.log("Tu as choisie Draven!")
            this.choiceCharacter = this.enemiesArray.filter(user => user.name === "Draven");
            this.enemiesArray = this.enemiesArray.filter(user => user.name !== "Draven");
            divIntro.style.display = "none";
            showCharacterGrace.innerHTML = `${this.characterArray[3].name} : ❤️ ${this.characterArray[3].hp}   💧${this.characterArray[3].mana}    🗡${this.characterArray[3].dmg}`;
            showCharacterUlder.innerHTML = `🩸 ${this.characterArray[0].name} : ❤️ ${this.characterArray[0].hp}   💧${this.characterArray[0].mana}    🗡${this.characterArray[0].dmg} `;
            showCharacterMoona.innerHTML = `🩸 ${this.characterArray[1].name} : ❤️ ${this.characterArray[1].hp}   💧${this.characterArray[1].mana}    🗡${this.characterArray[1].dmg} `;
            showCharacterDraven.innerHTML = `🩸 ${this.characterArray[2].name} : ❤️ ${this.characterArray[2].hp}   💧${this.characterArray[2].mana}    🗡${this.characterArray[2].dmg} `;
            showCharacterCarl.innerHTML = `🩸 ${this.characterArray[4].name} : ❤️ ${this.characterArray[4].hp}   💧${this.characterArray[4].mana}    🗡${this.characterArray[4].dmg} `;
            atkChoice.innerHTML = "⚔️ attaque quelqu'un en appuyant ici ⚔️"
        }else if((parseInt(this.choiceCharacter) === 5 )){
            console.log("Tu as choisie Carl!")
            this.choiceCharacter = this.enemiesArray.filter(user => user.name === "Carl");
            this.enemiesArray = this.enemiesArray.filter(user => user.name !== "Carl");
            divIntro.style.display = "none";
            showCharacterGrace.innerHTML = `${this.characterArray[4].name} : ❤️ ${this.characterArray[4].hp}   💧${this.characterArray[4].mana}    🗡${this.characterArray[4].dmg}`;
            showCharacterUlder.innerHTML = `🩸 ${this.characterArray[0].name} : ❤️ ${this.characterArray[0].hp}   💧${this.characterArray[0].mana}    🗡${this.characterArray[0].dmg} `;
            showCharacterMoona.innerHTML = `🩸 ${this.characterArray[1].name} : ❤️ ${this.characterArray[1].hp}   💧${this.characterArray[1].mana}    🗡${this.characterArray[1].dmg} `;
            showCharacterDraven.innerHTML = `🩸 ${this.characterArray[2].name} : ❤️ ${this.characterArray[2].hp}   💧${this.characterArray[2].mana}    🗡${this.characterArray[2].dmg} `;
            showCharacterCarl.innerHTML = `🩸 ${this.characterArray[3].name} : ❤️ ${this.characterArray[3].hp}   💧${this.characterArray[3].mana}    🗡${this.characterArray[3].dmg} `;
            atkChoice.innerHTML = "⚔️ attaque quelqu'un en appuyant ici ⚔️"
        }

    }

    showStat = () => {
        document.getElementById("CharacterAtkChoice").style.display = "block";
        document.getElementById("nextTurn").innerHTML = "";
        let showCharacterGrace = document.getElementById("showGrace")
        let showCharacterUlder = document.getElementById("showUlder")
        let showCharacterMoona = document.getElementById("showMoona")
        let showCharacterDraven = document.getElementById("showDraven")
        let showCharacterCarl = document.getElementById("showCarl")
        console.log("Voici les stats")

        if(this.choiceCharacter[0].hp > 0 && this.enemiesArray[0].hp <= 0 && this.enemiesArray[1].hp <= 0 && this.enemiesArray[2].hp <= 0 && this.enemiesArray[3].hp <= 0){
            document.getElementById("bordGame").style.display = "none"
            document.getElementById("youWin").style.display = "block"
        }

        if(this.choiceCharacter[0].hp <= 0){
            document.getElementById("youAreDead").style.display = "block"
            document.getElementById("bordGame").style.display = "none"
        }

        if (this.choiceCharacter[0].name === "Grace" ){
            showCharacterGrace.innerHTML = ""
            showCharacterGrace.innerHTML = `${this.characterArray[0].name} : ❤️ ${this.characterArray[0].hp}   💧${this.characterArray[0].mana}    🗡${this.characterArray[0].dmg}`;
            showCharacterUlder.innerHTML = ""
            console.log(this.characterArray)
            if (this.characterArray[1].hp > 0){
                showCharacterUlder.innerHTML = `🩸 ${this.characterArray[1].name} : ❤️ ${this.characterArray[1].hp}   💧${this.characterArray[1].mana}    🗡${this.characterArray[1].dmg}`;
            }else{
                showCharacterUlder.innerHTML = `☠️ ${this.characterArray[1].name} s'est fait(e) fumé`
            }
            showCharacterMoona.innerHTML = ""
            if (this.characterArray[2].hp > 0){
                showCharacterMoona.innerHTML = `🩸 ${this.characterArray[2].name} : ❤️ ${this.characterArray[2].hp}   💧${this.characterArray[2].mana}    🗡${this.characterArray[2].dmg}`;
            }else{
                showCharacterMoona.innerHTML = `☠️ ${this.characterArray[2].name} s'est fait(e) fumé`
            }
            showCharacterDraven.innerHTML = ""
            if (this.characterArray[3].hp > 0){
                showCharacterDraven.innerHTML = `🩸 ${this.characterArray[3].name} : ❤️ ${this.characterArray[3].hp}   💧${this.characterArray[3].mana}    🗡${this.characterArray[3].dmg}`;
            }else{
                showCharacterDraven.innerHTML = `☠️ ${this.characterArray[3].name} s'est fait(e) fumé`
            }
            showCharacterCarl.innerHTML = ""
            if (this.characterArray[4].hp > 0){
                showCharacterCarl.innerHTML = `🩸 ${this.characterArray[4].name} : ❤️ ${this.characterArray[4].hp}   💧${this.characterArray[4].mana}    🗡${this.characterArray[4].dmg}`;
            }else{
                showCharacterCarl.innerHTML = `☠️ ${this.characterArray[4].name} s'est fait(e) fumé`
            }
            
        }else if(this.choiceCharacter[0].name === "Ulder" ){
            showCharacterGrace.innerHTML = ""
            showCharacterGrace.innerHTML = `${this.characterArray[1].name} : ❤️ ${this.characterArray[1].hp}   💧${this.characterArray[1].mana}    🗡${this.characterArray[1].dmg}`;
            showCharacterUlder.innerHTML = ""
            if (this.characterArray[0].hp > 0){
                showCharacterUlder.innerHTML = `🩸 ${this.characterArray[0].name} : ❤️ ${this.characterArray[0].hp}   💧${this.characterArray[0].mana}    🗡${this.characterArray[0].dmg}`;
            }else{
                showCharacterUlder.innerHTML = `☠️ ${this.characterArray[0].name} s'est fait(e) fumé`
            }
            showCharacterMoona.innerHTML = ""
            if (this.characterArray[2].hp > 0){
                showCharacterMoona.innerHTML = `🩸 ${this.characterArray[2].name} : ❤️ ${this.characterArray[2].hp}   💧${this.characterArray[2].mana}    🗡${this.characterArray[2].dmg}`;
            }else{
                showCharacterMoona.innerHTML = `☠️ ${this.characterArray[2].name} s'est fait(e) fumé`
            }
            showCharacterDraven.innerHTML = ""
            if (this.characterArray[3].hp > 0){
                showCharacterDraven.innerHTML = `🩸 ${this.characterArray[3].name} : ❤️ ${this.characterArray[3].hp}   💧${this.characterArray[3].mana}    🗡${this.characterArray[3].dmg}`;
            }else{
                showCharacterDraven.innerHTML = `☠️ ${this.characterArray[3].name} s'est fait(e) fumé`
            }
            showCharacterCarl.innerHTML = ""
            if (this.characterArray[4].hp > 0){
                showCharacterCarl.innerHTML = `🩸 ${this.characterArray[4].name} : ❤️ ${this.characterArray[4].hp}   💧${this.characterArray[4].mana}    🗡${this.characterArray[4].dmg}`;
            }else{
                showCharacterCarl.innerHTML = `☠️ ${this.characterArray[4].name} s'est fait(e) fumé`
            }

        }else if(this.choiceCharacter[0].name === "Moona" ){
            showCharacterGrace.innerHTML = ""
            showCharacterGrace.innerHTML = `${this.characterArray[2].name} : ❤️ ${this.characterArray[2].hp}   💧${this.characterArray[2].mana}    🗡${this.characterArray[2].dmg}`;
            showCharacterUlder.innerHTML = ""
            if (this.characterArray[0].hp > 0){
                showCharacterUlder.innerHTML = `🩸 ${this.characterArray[0].name} : ❤️ ${this.characterArray[0].hp}   💧${this.characterArray[0].mana}    🗡${this.characterArray[0].dmg}`;
            }else{
                showCharacterUlder.innerHTML = `☠️ ${this.characterArray[0].name} s'est fait(e) fumé`
            }
            showCharacterMoona.innerHTML = ""
            if (this.characterArray[1].hp > 0){
                showCharacterMoona.innerHTML = `🩸 ${this.characterArray[1].name} : ❤️ ${this.characterArray[1].hp}   💧${this.characterArray[1].mana}    🗡${this.characterArray[1].dmg}`;
            }else{
                showCharacterMoona.innerHTML = `☠️ ${this.characterArray[1].name} s'est fait(e) fumé`
            }
            showCharacterDraven.innerHTML = ""
            if (this.characterArray[3].hp > 0){
                showCharacterDraven.innerHTML = `🩸 ${this.characterArray[3].name} : ❤️ ${this.characterArray[3].hp}   💧${this.characterArray[3].mana}    🗡${this.characterArray[3].dmg}`;
            }else{
                showCharacterDraven.innerHTML = `☠️ ${this.characterArray[3].name} s'est fait(e) fumé`
            }
            showCharacterCarl.innerHTML = ""
            if (this.characterArray[4].hp > 0){
                showCharacterCarl.innerHTML = `🩸 ${this.characterArray[4].name} : ❤️ ${this.characterArray[4].hp}   💧${this.characterArray[4].mana}    🗡${this.characterArray[4].dmg}`;
            }else{
                showCharacterCarl.innerHTML = `☠️ ${this.characterArray[4].name} s'est fait(e) fumé`
            }

        }else if(this.choiceCharacter[0].name === "Draven" ){
            showCharacterGrace.innerHTML = ""
            showCharacterGrace.innerHTML = `${this.characterArray[3].name} : ❤️ ${this.characterArray[3].hp}   💧${this.characterArray[3].mana}    🗡${this.characterArray[3].dmg}`;
            showCharacterUlder.innerHTML = ""
            if (this.characterArray[0].hp > 0){
                showCharacterUlder.innerHTML = `🩸 ${this.characterArray[0].name} : ❤️ ${this.characterArray[0].hp}   💧${this.characterArray[0].mana}    🗡${this.characterArray[0].dmg}`;
            }else{
                showCharacterUlder.innerHTML = `☠️ ${this.characterArray[0].name} s'est fait(e) fumé`
            }
            showCharacterMoona.innerHTML = ""
            if (this.characterArray[1].hp > 0){
                showCharacterMoona.innerHTML = `🩸 ${this.characterArray[1].name} : ❤️ ${this.characterArray[1].hp}   💧${this.characterArray[1].mana}    🗡${this.characterArray[1].dmg}`;
            }else{
                showCharacterMoona.innerHTML = `☠️ ${this.characterArray[1].name} s'est fait(e) fumé`
            }
            showCharacterDraven.innerHTML = ""
            if (this.characterArray[2].hp > 0){
                showCharacterDraven.innerHTML = `🩸 ${this.characterArray[2].name} : ❤️ ${this.characterArray[2].hp}   💧${this.characterArray[2].mana}    🗡${this.characterArray[2].dmg}`;
            }else{
                showCharacterDraven.innerHTML = `☠️ ${this.characterArray[2].name} s'est fait(e) fumé`
            }
            showCharacterCarl.innerHTML = ""
            if (this.characterArray[4].hp > 0){
                showCharacterCarl.innerHTML = `🩸 ${this.characterArray[4].name} : ❤️ ${this.characterArray[4].hp}   💧${this.characterArray[4].mana}    🗡${this.characterArray[4].dmg}`;
            }else{
                showCharacterCarl.innerHTML = `☠️ ${this.characterArray[4].name} s'est fait(e) fumé`
            }

        }else if(this.choiceCharacter[0].name === "Carl" ){
            showCharacterGrace.innerHTML = ""
            showCharacterGrace.innerHTML = `${this.characterArray[4].name} : ❤️ ${this.characterArray[4].hp}   💧${this.characterArray[4].mana}    🗡${this.characterArray[4].dmg}`;
            showCharacterUlder.innerHTML = ""
            if (this.characterArray[0].hp > 0){
                showCharacterUlder.innerHTML = `🩸 ${this.characterArray[0].name} : ❤️ ${this.characterArray[0].hp}   💧${this.characterArray[0].mana}    🗡${this.characterArray[0].dmg}`;
            }else{
                showCharacterUlder.innerHTML = `☠️ ${this.characterArray[0].name} s'est fait(e) fumé`
            }
            showCharacterMoona.innerHTML = ""
            if (this.characterArray[1].hp > 0){
                showCharacterMoona.innerHTML = `🩸 ${this.characterArray[1].name} : ❤️ ${this.characterArray[1].hp}   💧${this.characterArray[1].mana}    🗡${this.characterArray[1].dmg}`;
            }else{
                showCharacterMoona.innerHTML = `☠️ ${this.characterArray[1].name} s'est fait(e) fumé`
            }
            showCharacterDraven.innerHTML = ""
            if (this.characterArray[2].hp > 0){
                showCharacterDraven.innerHTML = `🩸 ${this.characterArray[2].name} : ❤️ ${this.characterArray[2].hp}   💧${this.characterArray[2].mana}    🗡${this.characterArray[2].dmg}`;
            }else{
                showCharacterDraven.innerHTML = `☠️ ${this.characterArray[2].name} s'est fait(e) fumé`
            }
            showCharacterCarl.innerHTML = ""
            if (this.characterArray[3].hp > 0){
                showCharacterCarl.innerHTML = `🩸 ${this.characterArray[3].name} : ❤️ ${this.characterArray[3].hp}   💧${this.characterArray[3].mana}    🗡${this.characterArray[3].dmg}`;
            }else{
                showCharacterCarl.innerHTML = `☠️ ${this.characterArray[3].name} s'est fait(e) fumé`
            }
            console.log(this.characterArray)
        }
    }

    playerTurn = () => {
        let atkChoice = document.getElementById("CharacterAtkChoice").style.display = "none";
        document.getElementById("endOfTurn").style.display = "block"
        document.getElementById("endOfTurn").innerHTML = "Fin du tour"
        this.turnName ++ ;
        this.turnLeft --;
        console.log(`Tour n° ${this.turnName}, il ne reste que ${this.turnLeft} tours`);
        let atkChoiceCharacter = ""
        while(atkChoiceCharacter === "") {
            atkChoiceCharacter = prompt("Mets le nom de celui ou celle que tu veux attaquer");
        }
        if (atkChoiceCharacter === "Grace"){
            if (this.choiceCharacter[0].name === "Grace"){
                atkChoiceCharacter = prompt("T'attaques pas toi même bg");
            }else if (this.characterArray[0].hp <= 0 ){
                atkChoiceCharacter = prompt("Déjà 6 pieds sous terre");
            }else{
                this.characterClass.dealDamage(this.choiceCharacter, this.characterArray[0]);
            }
        }else if(atkChoiceCharacter === "Ulder"){
            if (this.choiceCharacter[0].name === "Ulder"){
                atkChoiceCharacter = prompt("T'attaques pas toi même bg");
            }else if (this.characterArray[1].hp <= 0 ){
                atkChoiceCharacter = prompt("Déjà 6 pieds sous terre");
            }else{
                this.characterClass.dealDamage(this.choiceCharacter, this.characterArray[1]);
            }
        }else if(atkChoiceCharacter === "Moona"){
            if (this.choiceCharacter[0].name === "Moona"){
                atkChoiceCharacter = prompt("T'attaques pas toi même bg");
            }else if (this.characterArray[2].hp <= 0 ){
                atkChoiceCharacter = prompt("Déjà 6 pieds sous terre");
            }else{
                this.characterClass.dealDamage(this.choiceCharacter, this.characterArray[2]);
            }
        }else if(atkChoiceCharacter === "Draven"){
            if (this.choiceCharacter[0].name === "Draven"){
                atkChoiceCharacter = prompt("T'attaques pas toi même bg");
            }else if (this.characterArray[3].hp <= 0 ){
                atkChoiceCharacter = prompt("Déjà 6 pieds sous terre");
            }else{
                this.characterClass.dealDamage(this.choiceCharacter, this.characterArray[3]);
            }
        }else if(atkChoiceCharacter === "Carl"){
            if (this.choiceCharacter[0].name === "Carl"){
                atkChoiceCharacter = prompt("T'attaques pas toi même bg");
            }else if (this.characterArray[4].hp <= 0 ){
                atkChoiceCharacter = prompt("Déjà 6 pieds sous terre");
            }else{
                this.characterClass.dealDamage(this.choiceCharacter, this.characterArray[4]);
            }
        }
    };

    botTurn = () => {
        document.getElementById("endOfTurn").style.display = "none";

        if (this.enemiesArray[0].hp > 0){
            this.tirage = Math.floor(Math.random() * 5);
            while (this.tirage === 1 || (this.characterArray[this.tirage].hp <= 0)){
                this.tirage = Math.floor(Math.random() * 5)
                console.log(this.tirage)
            };
    
            if(this.tirage !== 1 || (this.characterArray[this.tirage].hp > 0)){
                this.characterClass.botDamage(this.enemiesArray[0], this.characterArray[this.tirage]);
            }
        }else {
            console.log(`${this.enemiesArray[0].name} est mort`)
        }

        if (this.enemiesArray[1].hp > 0){
            this.tirage = Math.floor(Math.random() * 5);
            while (this.tirage === 2 || (this.characterArray[this.tirage].hp <= 0)){
                this.tirage = Math.floor(Math.random() * 5)
            };
    
            if(this.tirage !== 2 || (this.characterArray[this.tirage].hp > 0)){
                this.characterClass.botDamage(this.enemiesArray[1], this.characterArray[this.tirage]);
            }
        }else {
            console.log(`${this.enemiesArray[1].name} est mort`)
        }

        if (this.enemiesArray[2].hp > 0){
            this.tirage = Math.floor(Math.random() * 5);
            while (this.tirage === 3 || (this.characterArray[this.tirage].hp <= 0)){
                this.tirage = Math.floor(Math.random() * 5)
            };
    
            if(this.tirage !== 3 || (this.characterArray[this.tirage].hp > 0)){
                this.characterClass.botDamage(this.enemiesArray[2], this.characterArray[this.tirage]);
            }
        }else {
            console.log(`${this.enemiesArray[2].name} est mort`)
        }

        if (this.enemiesArray[3].hp > 0){
            this.tirage = Math.floor(Math.random() * 5);
            while (this.tirage === 4 || (this.characterArray[this.tirage].hp <= 0)){
                this.tirage = Math.floor(Math.random() * 5)
            };
    
            if(this.tirage !== 4 || (this.characterArray[this.tirage].hp > 0)){
                this.characterClass.botDamage(this.enemiesArray[3], this.characterArray[this.tirage]);
            }
        }else {
            console.log(`${this.enemiesArray[3].name} est mort`)
        }

        document.getElementById("nextTurn").innerHTML = "Tour suivant";
    }

    
};

class Turn extends Game{
    constructor(characterArray, choiceCharacter, enemiesArray, turnName = 0, tirage, turnLeft = 10) {
        super(turnLeft, characterArray, enemiesArray, choiceCharacter);
        this.turnName = turnName;
        this.tirage = tirage;
    };

    startTurn = () => {
        this.turnName ++ ;
        this.turnLeft --;
        console.log(`Tour n° ${this.turnName}, il ne reste que ${this.turnLeft} tours`);
        console.log(characterArray)
        let atkChoiceCharacter = ""
        while(atkChoiceCharacter === "") {
            atkChoiceCharacter = prompt("Mets le nom de celui ou celle que tu veux attaquer");
        }
        if (atkChoiceCharacter === "Grace"){
            this.character.dealDamage();

        }/*else if(){

        }*/
    };

};

const game = new Game;
const turn = new Turn;
/*
turn.startTurn();
turn.startTurn();
turn.startTurn();
*/

btnStart = document.getElementById("Start Btn");

btnStart.addEventListener("click", game.playerInitializer)

btnStart.addEventListener("click", function handleClick(event) {
    btnStart.remove();
    document.getElementById("Présentation").innerHTML = "Ouvre la console en faisant clique droit et 'inspecter' pour avoir plus d'infos sur les champions!";
    document.getElementById("Grace").innerHTML = "1 : Grace ❤️ ";
    document.getElementById("Ulder").innerHTML = "2 : Ulder 🧡";
    document.getElementById("Moona").innerHTML = "3 : Moona 💛";
    document.getElementById("Draven").innerHTML = "4 : Draven 💚";
    document.getElementById("Carl").innerHTML = "5 : Carl 💙";
    document.getElementById("Choice").innerHTML = "Clique ici si t'as choisi";
  });
  document.getElementById("youAreDead").style.display = "none"
  document.getElementById("youWin").style.display = "none"
  document.getElementById("Choice").addEventListener("click", game.chooseCharacter);
  document.getElementById("CharacterAtkChoice").addEventListener("click", game.playerTurn);
  document.getElementById("endOfTurn").addEventListener("click", game.botTurn);
  document.getElementById("nextTurn").addEventListener("click", game.showStat);
  
/*  document.getElementById("Choice").addEventListener("click", function startGame(eventStartGame){
    document.getElementById("showCharacter").remove();
  })
*/


// startGame = () => {
//     const game = new Game;
// };

// ;
// const turn = new Turn;

