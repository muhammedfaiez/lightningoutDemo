import { LightningElement } from 'lwc';
//import getAccData from '@salesforce/apex/TestDatatableHelper.getAccData';
const columns = [
    { label: 'Id', fieldName: 'Id' },
    { label: 'No Of Employees', fieldName: 'NumberOfEmployees', type: 'text' },
    { label: 'Account Name', fieldName: 'Name', type: 'Text' },
];
export default class DataTable extends LightningElement {
    data = [];
    columns = columns;
    // connectedCallback() {
    //     getAccData().then((result) => {
    //         console.log('value of account is ' + result);
    //         this.data=result;
    //     }).catch((err) => {
    //         console.log('error from getAccData Funtion is ' + err);
    //     });

    // }

}