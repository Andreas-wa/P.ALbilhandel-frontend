import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./startMessages.scss";

export default function StartMessages() {
  const [message, setMessage] = useState({ message: [] });

  useEffect(() => {
    Axios.get("http://localhost:5000/admin/start/messages").then((response) => {
      console.log(response.data);
    });
    return () => {};
  }, [message]);

  return (
    <div>
      <h1>Meddelanden</h1>
      <table></table>
    </div>
  );
}
