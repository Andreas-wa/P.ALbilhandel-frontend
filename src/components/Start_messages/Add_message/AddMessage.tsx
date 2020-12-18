import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export interface IUser {
  _id: string;
  description: string;
  email: string;
  subject: string;
  regnumber: string;
  name: string;
}

export default function AddMessage() {
  const { id }: any = useParams();
  interface IUser extends Array<IUser> {
    _id: string;
    subject: string;
    regnumber: string;
    name: string;
    email: string;
    description: string;
  }
  const [message, setMessage] = useState<IUser[]>();

  // useEffect(() => {
  const fetchMSG = async () => {
    await Axios.get(`http://localhost:5000/admin/messages/add/${id}`).then(
      (response) => {
        setMessage([
          response.data?.subject,
          response.data?._id,
          response.data?.regnumber,
          response.data?.name,
          response.data?.email,
          response.data?.description,
        ]);
      }
    );
  };
  fetchMSG();
  console.log(message);
  // }, [id]);

  // if (message === undefined) {
  //   return <span>loading...</span>;
  // } else {
  let msg = message?.map((m) => {
    return (
      <div key={m._id}>
        <div>Email: {m.description}</div> <div>Ämne: {m.email}</div>
        <div>Regnummer: {m.name}</div> <div>Namn: {m.regnumber}</div>
        <div>Beskrivning: {m.subject}</div>
      </div>
    );
  });
  return (
    <div>
      <h1>Svara meddelande</h1>
      <div>{msg}</div>
    </div>
  );
}
