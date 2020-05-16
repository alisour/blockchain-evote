'use strict'

class Election{
    /**
    *
    * Election
    *
    * Constructor for an Election object. Specifies start and end date.
    *  
    * @param items - an array of choices 
    * @param election - what election you are making ballots for 
    * @param voterId - the unique Id which corresponds to a registered voter
    * @returns - registrar object
    */
    constructor(name, country, year, startDate, endDate){
        //create the election object
        this.electionId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        this.name = name;
        this.country = country;
        this.year = year;
        this.startDate = startDate;
        this.endDate = endDate;
        this.type = 'election';
        if (this.__isContract) {
            delete this.__isContract;
        }
        return this;
    }
}
module.exports = Election;