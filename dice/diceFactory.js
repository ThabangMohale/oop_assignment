var diceFactory = function()
{
    this.typeOfDice ="";
    this.diceValue =0;

    this.rollDice = function()
    {
        //six
        var value;
        var value1;

        //twenty 
        var value2;
        var value3;

        //for the six sided dice
        value = Math.ceil(Math.random()*6);
        value1 = Math.ceil(Math.random()*6);

        //for the twenty sided dice
        value2 = Math.ceil(Math.random()*20);
        value3 = Math.ceil(Math.random()*20);

        if ((value >= 1 && value <= 6)&&( value1 >= 1 && value1 <= 6))
        {
            this.typeOfDice = "Six(1/6) sided dices";
            console.log(this.typeOfDice);
            console.log("Rolling...");
            console.log("Die 1: "+value);
            console.log("Die 2: "+value1);
            console.log("Result: "+(value+value1))
        }

        if ((value2 >= 1 && value2 <= 20)&&( value3 >= 1 && value3 <= 20))
        {
            this.typeOfDice = "Twenty(1/20) sided dices";
            console.log(this.typeOfDice);
            console.log("Rolling...");
            console.log("Die 1: "+value2);
            console.log("Die 2: "+value3);
            console.log("Result: "+(value2+value3));
        }

    };
}
var dice = new diceFactory();
dice.rollDice();
console.log("***run program again to roll dice & get random values***");