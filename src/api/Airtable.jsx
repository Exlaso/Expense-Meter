const Airtable = require("airtable");
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.REACT_APP_AIRTABLE_TOKEN,
});
const base = Airtable.base(process.env.REACT_APP_BASE_ID);

export const table = base("Expense");

const MinifyRecord = (Record) => {
  return { 
    recordId: Record.id,
    ...Record.fields };
};
export const MinifyRecords = (Records) => {
  return Records.map((record) => MinifyRecord(record));
};

export const FindRecordByFilter = async (id) => {
   const findCoffeeStoreRecords = await table
    .select({ filterByFormula: `User_id="${id}"` })
    .firstPage();

  return (MinifyRecords(findCoffeeStoreRecords));
};
