export class Clinic {
    id : string;
    clinicName : string;
    Location : String;
    totalBed : number;
    totalStaff: number;
    nameSuperintendent : string;
    contactSuperintendent : number;
    activeCase: number;
    recoveredCase: number
    constructor(id, clinicName, Location, totalBed, totalStaff, nameSuperintendent, contactSuperintendent, activeCase, recoveredCase){
        this.id = id;
        this.clinicName = clinicName; 
        this.Location = Location;
        this.totalBed = totalBed;  
        this.totalStaff = totalStaff;
        this.nameSuperintendent = nameSuperintendent;  
        this.contactSuperintendent = contactSuperintendent;
        this.activeCase = activeCase;
        this.recoveredCase = recoveredCase
    }
}
