//call

var personal ={
    name :"ranjth",
    mob : 8122739465
}



// function person(a){

//     console.log(a.name);
// }
// person(personal)



function person(){                                              // calls the function with a given this value and allows passing in arguments 

    console.log(this.name);
}
person.call(personal)





let p1 = {
    firstName: 'John',
    lastName: 'Smith'
  };
  let p2 = {
    firstName: 'Ann',
    lastName: 'Brown'
  };
  function sayWelcome() {
    console.log( this.firstName + ' ' + this.lastName);
  }
  sayWelcome.call(p1); 
  sayWelcome.call(p2); 


  //apply

  let pa = {
    firstName: 'Johvn',
    lastName: 'Smith'
  };
  let pb = {
    firstName: 'Ann',
    lastName: 'Brown'
  };
  function sayWelcome() {
    console.log( this.firstName + ' ' + this.lastName);
  }
  sayWelcome.apply(pa); 
  sayWelcome.call(pb); 




  //bind

  let personA = {
    firstName: 'John',
    lastName: 'Smith'
  };
  let personB = {
    firstName: 'Ann',
    lastName: 'Brown'
  };
  function sayWelcome() {
    console.log('Welcome ' + this.firstName + ' ' + this.lastName);
  }
  let sayWelcomeJohn = sayWelcome.bind(personA);
  let sayWelcomeAnn = sayWelcome.bind(personB);
  sayWelcomeJohn(); // Welcome John Smith
  sayWelcomeAnn(); // Welcome Ann Brown
