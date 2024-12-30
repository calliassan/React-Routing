import { useEffect, useState } from "react";

export function Email({ userId }) {
  const [email, setemail] = useState("");
  const fetchdata = async () => {
    const res = await fetch(`https://reqres.in/api/users/${userId}`);
    const datas = await res.json();
    console.log(datas);
    setemail(datas.data.email);
  };
  useEffect(() => {
    fetchdata();
  }, [userId]);
  return (
    <div>
      <h1>{email}</h1>
    </div>
  );
}
