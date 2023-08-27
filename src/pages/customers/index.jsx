import Table from "@/components/ui/Table";
import axios from "axios";
import { useEffect, useState } from "react";
const Customers = () => {
  const [data, setData] = useState([]);

  const getCustomers = async () => {
    const response = await axios.post(
      "https://05f3bd2c-040c-4d5c-a66c-64cb84d6a377.mock.pstmn.io/customers/index",
      {
        page_no: "1",
        per_page: "20",
      }
    );
    setData(response.data.data);
  };

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <div>
      <Table data={data} />
    </div>
  );
};

export default Customers;
