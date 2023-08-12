import { table } from "./Airtable";

const DeleteItem = (id) => {
   table.destroy(id, (err, deletedRecords) => {
        if (err) {
          if (err) {
            console.error(err);
            return;
          } 
        }
        return (deletedRecords?.id);
      });

  
};

 
export default DeleteItem;
