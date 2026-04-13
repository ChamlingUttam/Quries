import { useFilterStore } from "../store/useFilterStore";

const DataTable = () => {
  const { data, loading } = useFilterStore();

  return (
    <div className="border rounded p-4">
      {loading && <p>Loading...</p>}

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Country</th>
            <th>City</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={6} className="text-center py-6">
                No Data
              </td>
            </tr>
          ) : (
            data.map((item, i) => (
              <tr key={i} className="text-center border-t">
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.salary}</td>
                <td>{item.country}</td>
                <td>{item.city}</td>
                <td>{item.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;