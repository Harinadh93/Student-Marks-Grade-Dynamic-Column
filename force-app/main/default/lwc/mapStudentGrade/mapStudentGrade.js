import { LightningElement,track } from 'lwc';
import getcandilist from '@salesforce/apex/CandidateMarks.getcandilist';

export default class MapStudentGrade extends LightningElement {
    @track candilist = [];
    @track candilistcan = [];
    
    connectedCallback(){        
        getcandilist()
        .then(result=>{
            this.candilist = result;
            var candilist1 = [];
            this.candilist.forEach(rec=>{
                var newrec = {...rec};
                if(newrec.Marks__c >= 80){
                    newrec.Grade = 'A';
                }else if(newrec.Marks__c >= 60){
                    newrec.Grade = 'B';
                }else if(newrec.Marks__c < 60 ){
                    newrec.Grade = 'C';
                }

                candilist1.push(newrec);
                
                this.candilistcan = candilist1;
            })
        })
        .catch(error=>{

        })
    }
}