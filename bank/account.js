//open new account
var open_account = function(name,surname,id,cell,address,accType)
{
    this.FirstName = name;
    this.LastName = surname;
    this.Id=id;
    this.Cell=cell;
    this.Address=address;
    this.MonthlyFee = 50;
    this.InterestRate = 12;
    this.accType = accType;
    this.AccountNumber = Math.ceil(Math.random()*100000000000);
    this.Balance = 1040 + (1000*(12/100)/12) - this.MonthlyFee;

    this.deposit = function(Amount)
    {
        this.Balance = this.Balance + Amount;
        console.log("***DEPOSIT MONEY***");
        console.log("Amount deposited: R"+Amount);
        console.log("New Balance: R"+this.Balance);
        console.log("----------------------------------");
    };

    this.withdraw = function(Amount)
    {
        this.Balance -= Amount;
        console.log("***WITHDRAWN MONEY***");
        console.log("Amount withdrawn: R"+Amount);
        console.log("New Balance: R"+this.Balance);
        console.log("----------------------------------");
    };

    this.FullName = function()
    {
        console.log(this.FirstName+" "+this.LastName);
    };

    this.AccountDetails = function()
    {
        console.log("***Account Information for "+this.FirstName+" "+this.LastName+"***");
        console.log("Name:"+this.FirstName);
        console.log("Surname:"+this.LastName);
        console.log("ID:"+this.Id);
        console.log("Cell: 0"+this.Cell);
        console.log("Address:"+this.Address);
        console.log("***Bank Generated account Details***");
        console.log("______________________________________");
        console.log("Account Number: "+this.AccountNumber);
        console.log("Account Type: "+this.accType);
        console.log("Initial Balance: R"+this.Balance);
        console.log("Monthly Fee: R"+this.MonthlyFee);
        console.log("Interest Rate: "+this.InterestRate+"%");
    };
}

//inheritance
class saving_account extends open_account {
    constructor(name,surname,id,cell,address,accType) {
      super(name,surname,id,cell,address,accType);
      this.name = name;
      this.surname = surname;
      this.id =id;
      this.cell = cell;
      this.address = address;
      this.accType= accType;
      this.AccountNumber = Math.ceil(Math.random()*100000000000);

    }
    get info()
    {
        console.log("This is a "+this.accType+" the owner of this account is "+this.name+" "+this.surname);
        console.log("Cell: "+this.cell+" Address: "+this.address);
        console.log("Account Number: "+this.AccountNumber);
    };
}

//inheritance
class credit_card extends open_account {
    constructor(name,surname,id,cell,address,accType) {
      super(name,surname,id,cell,address,accType);
      this.name = name;
      this.surname = surname;
      this.id =id;
      this.cell = cell;
      this.address = address;
      this.accType= accType;
      this.AccountNumber = Math.ceil(Math.random()*100000000000);

    }
    get info()
    {
        console.log("This is a "+this.accType+" the owner of this account is "+this.name+" "+this.surname);
        console.log("Cell: "+this.cell+" Address: "+this.address);
        console.log("Account Number: "+this.AccountNumber);
    };
}

//inheritance for the cheque account from the account class
class cheque_account extends open_account {
    constructor(name,surname,id,cell,address,accType) {
      super(name,surname,id,cell,address,accType);
      this.name = name;
      this.surname = surname;
      this.id =id;
      this.cell = cell;
      this.address = address;
      this.accType= accType;
      this.AccountNumber = Math.ceil(Math.random()*100000000000);

    }
    get info()
    {
        console.log("This is a "+this.accType+" the owner of this account is "+this.name+" "+this.surname);
        console.log("Cell: "+this.cell+" Address: "+this.address);
        console.log("Account Number: "+this.AccountNumber);
    };
}
  
 // object for the savings account 
var savings = new saving_account("thabang","mohale",950202848473,0743523742,"34 main street","savings account");

savings.AccountDetails();
savings.withdraw(100);
savings.deposit(230);

//object for the cheque account
console.log("==========================================================================");
var cheque = new cheque_account("John","Doe",9102105803089,0837052917,"35 Jules street","Cheque Account");
cheque.AccountDetails();
cheque.deposit(100);
cheque.withdraw(50);

//object for the credit card account
console.log("==========================================================================");
var credit = new credit_card("Thabo","Doede",7603205804079,0738874231,"34 maddison street","Credit Card Account");
credit.AccountDetails();
credit.deposit(2000);
credit.withdraw(1350);
console.log("==========================================================================");
//sending money
console.log("***Transaction processing***");
console.log("sending money from account number ("+(Math.ceil(Math.random()*100000000000))+") to account number ("+(Math.ceil(Math.random()*1000000000000)+")"));

console.log("***Run program again to test the system***");
