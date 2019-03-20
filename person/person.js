
    var Person = function(first,last,Age,Gender,interest,Msg)
    {
        
        // construct the object using the arguments
      this.firstName = first;
      this.lastName = last;
      this.age = Age;
      this.gender = Gender;
      var Interest = new Array(interest);
      this.message = Msg;
        // a method which returns the full name
      this.fullName = function() {
            return this.firstName + " " + this.lastName;
      };
    
      this.greetings = function(){
          return "I am "+this.firstName+" "+this.lastName+" I am "+this.age+" years old and my interest are "+Interest[0];
      };
    };

    class engineer extends Person
    {
      constructor(first,last,Age,Gender,interest,Msg){
        super(first,last,Age,Gender,interest,Msg,occupation,salary)
        this.occupation =occupation;
        this.salary =salary;
    }

    get subject() {
      return this.occupation;
    }
  
    set subject(occ) {
      this.occupation = occ;
    }


    get salary() {
      return this.occupation;
    }
  
    set salary(sal) {
      this.salary = sal;
    }


    }


  
        
    console.log("***Information for the first Person***");
    var FirstPerson = new Person("Nosipho", "Masondo",8,"Female","Dancing,Singing","hello");
    var name = FirstPerson.fullName();
    var greet = FirstPerson.greetings();
    console.log(name);
    console.log(greet);
    console.log("------------------------------------------------------------------------------------------");

    console.log("***Information for the Second Person***");
    var SecondPerson = new Person("Thando", "Ngwane",16,"Male","Playing games,Drawing","hello");
    console.log(SecondPerson.fullName());
    console.log(SecondPerson.greetings());
    console.log("---------------------------------------------------------------------------------------------");

    console.log("***Information for the Third Person***");
    var ThirdPerson = new Person("John", "Doe",26,"Male","Playing games","hello");
    console.log(ThirdPerson.fullName());
    console.log(ThirdPerson.greetings());
    console.log("---------------------------------------------------------------------------------------------");
    console.log("***Run program again to generate a person object***");
    