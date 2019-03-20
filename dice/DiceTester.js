const diceFactory = function()
{
    const diceFactory ={};
    diceFactory.diceValue =0;
  
    this.makeDie = function()
    {
       var val = Math.ceil(Math.random()*6);
       diceFactory.diceValue = val;
       return val;
    }

    this.testDie = function()
    {
        var v1,v2,v3;
        v1 = diceFactory.diceValue;

        console.log("testing a six(1/6) sided dice by rolling the dice 6 times .....");
        console.log("roll 1: "+v1);
        v1 = Math.ceil(Math.random()*6);
        v2=v1;
        console.log("roll 2: "+v1);
        v1 = Math.ceil(Math.random()*6);
        v3=v1;
        console.log("roll 3: "+v1);
        v1 = Math.ceil(Math.random()*6);
        var v4=v1;
        console.log("roll 4: "+v1);
        v1 = Math.ceil(Math.random()*6);
        var v5=v1;
        console.log("roll 5: "+v1);
        v1 = Math.ceil(Math.random()*6);
        var v6=v1;
        console.log("roll 6: "+v1);
        console.log("-------------------------------------");
        // test if they are not random maybe they are the same 
        console.log("Test using probability formula");
        console.log("probability for: "+diceFactory.diceValue+ " is "+(1/6*100)+("%"));
        console.log("probability for: "+v2+ " is "+(1/6*100)+("%"));
        console.log("probability for: "+v3+ " is "+(1/6*100)+("%"));
        console.log("probability for: "+v4+ " is "+(1/6*100)+("%"));
        console.log("probability for: "+v5+ " is "+(1/6*100)+("%"));
        console.log("probability for: "+v6+ " is "+(1/6*100)+("%"));
        console.log("***After rolling the dice six(6) times the outcomes is random therefore this dice is fair***");
        if (v1 == v2 || v1 == v3 || v2 == v4 || v5 == v6 )
        {
            console.log("Dice may be weighted ...roll(run program) to test again");
        }
        console.log("#################################################################");
        var maxRoll = 20;
        var n = Math.ceil(Math.random()*20);;
        // test for a weighted dice after rolling twenty times
        console.log("***Testing  a twenty(1/20) sided die by rolling the die 20 times***");
        var x=1;
        for (x=1;x<=maxRoll;x++)
        {
            n = Math.ceil(Math.random()*20);
            console.log("Roll "+x+": Die Value ("+n+") Probability :"+(1/20*100)+("%"));
        }
        console.log("***After rolling the die twenty(20) times the results seems random therefore this dice is fair***");
        console.log("#################################################################");
        //test for weighted dice that is six sided by has two values that are the samme having two 5
        console.log("***Testing for a weighted die***");
        console.log("Factory fault die that has a repeation of certain numbers ,giving it an unfair advantage");
        var y = Math.ceil(Math.random()*6);
        console.log("Roll 1: "+y);
        console.log("Roll 2: "+y);
        console.log("Roll 3: "+(Math.ceil(Math.random()*5)));
        console.log("Roll 4: "+(Math.ceil(Math.random()*5)));
        console.log("Roll 5: "+(Math.ceil(Math.random()*5)));
        console.log("Roll 6: "+(Math.ceil(Math.random()*5)));
        console.log("***After rolling the die 6 times the results seem to favour certain numbers over others therefore this die is unfair( weighted die)***");
        console.log("#################################################################");
        console.log("ERROR!!! "+(Math.random())+" is not a accepted as a random die value");
}

}
var dice = new diceFactory();
dice.makeDie();
dice.testDie();
console.log("*****Run program again to roll dice and get random values*****");