class Contact{
    constructor (name, phone, email, group){
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.group = group;
        }
};

let alenka = new Contact ('Аленка', '380001111111', 'mail1@mail.com', 'family');
let anton = new Contact ('Антон', '380001111112', 'mail2@mail.com', 'family');
let ira = new Contact ('Ира', '380001111113', 'mail3@mail.com', 'family');

class ContactManager{
    constructor(){
        this.listOfContacts = [];
    };
    
    empty(){
        this.listOfContacts = [];
    };

    add(contact){
        this.listOfContacts.push(contact);
    };
    
    remove(contact){
        for (let i = 0; i < this.listOfContacts.length; i++){
            let c = this.listOfContacts[i];
            if (c.phone === contact.phone){
                this.listOfContacts.splice(i, i);
                break;
            }
        }
    };
    
    printToConsole(){
        this.listOfContacts.forEach(function(c){
            console.log(c.name);
        });
    };
    
    sort(){
        this.listOfContacts.sort(ContactManager.compareByName);
    };
    
    static compareByName (a,b){
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        else return 0;
    };
    
    save(){
      localStorage.contacts = JSON.stringify(this.listOfContacts);  
    };
    
    load(){
        if(localStorage.contacts !== undefined)
            this.listOfContacts = JSON.parse(localStorage.contacts);
    };

}

let cm = new ContactManager();

cm.add(alenka);
cm.add(ira);
cm.add(anton);

cm.printToConsole();
