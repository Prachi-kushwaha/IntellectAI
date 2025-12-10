import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { getToken } = useAuth();
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const token = await getToken(); // <-- Clerk session token

      const res = await fetch(import.meta.env.VITE_API_URL + "/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const json = await res.json();
      setData(json);
    })();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
