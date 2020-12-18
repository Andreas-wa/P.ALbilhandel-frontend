import Axios from "axios";
import React, { useEffect, useState, lazy, Suspense } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenAlt, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./startMessages.scss";
import { useHistory } from "react-router-dom";
const AddMessage = lazy(() => import("./Add_message/AddMessage"));
// import { useParams } from "react-router-dom";
export interface IUser {
  _id: string;
  description: string;
  email: string;
  subject: string;
  regnumber: string;
  name: string;
}

export default function StartMessages() {
  interface IUser extends Array<IUser> {
    _id: any;
    subject: string;
    regnumber: string;
    name: string;
    email: string;
    description: string;
  }
  const [show, setshow] = useState(false);
  let history = useHistory();
  const [message, setMessage] = useState<IUser[]>([]);

  useEffect(() => {
    const fetchMSG = async () => {
      Axios.get<IUser[]>("http://localhost:5000/admin/messages").then(
        (response) => {
          setMessage(response.data);
        }
      );
    };
    fetchMSG();
  }, []);

  const respondeMSG = (msgID: string) => {
    setshow(true);
    let url = `/admin/messages/add/${msgID}`;
    history.push(url);
  };

  const deleteMSG = (id: any) => {
    let url = `http://localhost:5000/admin/messages/${id}`;
    Axios.delete(url).then((res) => {
      const del = message.filter((msg) => id !== msg._id);
      setMessage(del);
    });
  };
  // console.log(message);
  return (
    <div>
      <Suspense
        fallback={
          <div>
            <FontAwesomeIcon icon={faSpinner} />
          </div>
        }
      >
        {show ? (
          <AddMessage />
        ) : (
          <div>
            <h1>Meddelanden</h1>
            <div>
              <table>
                <colgroup span={4}></colgroup>
                <thead>
                  <tr>
                    <th>Ämne</th>
                    <th>Regnr</th>
                    <th>Namn</th>
                    <th>Epost</th>
                    <th>Beskrivning</th>
                    <th>Svara</th>
                    <th>Radera</th>
                  </tr>
                </thead>
                {message &&
                  message.map((m, i) => {
                    return (
                      <tbody key={m._id}>
                        <tr>
                          <td>{m.subject}</td>
                          <td>{m.regnumber.toUpperCase()}</td>
                          <td>{m.name}</td>
                          <td>{m.email}</td>
                          <td className="desc">{m.description}</td>
                          <td>
                            <FontAwesomeIcon
                              icon={faPenAlt}
                              onClick={() => respondeMSG(m._id)}
                            />
                          </td>
                          <td>
                            <FontAwesomeIcon
                              icon={faTrashAlt}
                              onClick={() => deleteMSG(m._id)}
                            />
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
              </table>
            </div>
          </div>
        )}
      </Suspense>
    </div>
  );
}
