import { MinifyRecords, table } from "./Airtable";

export const CreateItems = async ({
  recordId,
  User_id,
  Year,
  Month,
  Day,
  Expense_amount,
  Expense_title,
}) => {
  const CreateRecord = await table.create([
    {
      fields: {
        recordId,
        User_id,
        Expense_amount,
        Expense_title,
        Year,
        Month,
        Day,
      },
    },
  ]);

  //   [
  //     {
  //       recordId: "rec4ltJsSqraEBB7V",
  //       User_id: "001",
  //       Expense_date: "2023-08-09",
  //       Expense_amount: 89,
  //       Expense_title: "ejrieo",
  //     },
  //   ];
  const record = MinifyRecords(CreateRecord);
  return record.map((e) => {
    return {
      id: e.recordId,
      name: e.Expense_title,
      Year: e.Year,
      Month: e.Month,
      Day: e.Day,
      price: e.Expense_amount

  }
  });
};

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
