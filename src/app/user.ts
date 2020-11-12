export class User {
    id : string;
    userName : string;
    gender : String;
    age : number;
    daysSinceInfection: number;
    status : string;
    locationInfection : string;
    constructor(id, userName, gender, age, daysSinceInfected, status, locationInfected){
        this.id = id;
        this.userName = userName; 
        this.gender = gender;
        this.age = age;  
        this.daysSinceInfection = daysSinceInfected;
        this.status = status;  
        this.locationInfection = locationInfected ;
    }
}
