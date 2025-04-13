import { useEffect, useState } from "react";

export default function Dashboard() {
  const [supply, setSupply] = useState<string>("");

//   useEffect(() => {
//     const fetchSupply = async () => {
//       const result = await getTotalSupply();
//       setSupply(result);
//     };
//     fetchSupply();
//   }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">PYRadar Dashboard</h1>
      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-semibold">PYUSD Total Supply</h2>
        <p className="text-2xl mt-2">{supply} PYUSD</p>
      </div>
    </div>
  );
}
