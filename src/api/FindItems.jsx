import { FindRecordByFilter } from './Airtable';

const FindItems = async (expenceset) => {
   try {
    const Record = await FindRecordByFilter('001')
    expenceset(Record.map(e => { 
        return {
            id: e.recordId,
            name: e.Expense_title,
            date: new Date(e.Expense_date.replace("-",",")),
            price: e.Expense_amount

        }
    }))
   } catch (error) {
    console.error(error);
   }
    return null
}



// {

//     id: 'e1',
//   name: 'Car',  
//   date: new Date(2023,5,2),
//   price: 939,
// },

// [
//     {
//         "recordId": "recImGIG7AHUPK45y",
//         "User_id": "001",
//         "Expense_date": "2023-08-23",
//         "Expense_amount": 120,
//         "Expense_title": "exlaso"
//     }
// ]

export default FindItems