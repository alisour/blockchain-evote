'use strict'

class Voter{
    /**
    *
    * Voter
    *
    * Constructor for a Voter object. Voter has a voterId and registrar that the
    * voter is . 
    *  
    * @param items - an array of choices 
    * @param election - what election you are making ballots for 
    * @param voterId - the unique Id which corresponds to a registered voter
    * @returns - registrar object
    */
    constructor(voterId, firstName, lastName){

        this.voterId = voterId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.ballotCreated = false;
        this.type = 'voter';
        if (this.__isContract) {
          delete this.__isContract;
        }
        if (this.name) {
          delete this.name;
        }
        return this;
    }
}
module.exports = Voter;