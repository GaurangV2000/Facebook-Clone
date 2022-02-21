import { Button } from "@material-ui/core";
import React from "react";
import "./Log_in.css";
import { auth, provider } from "./Firbase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

const Log_in = () => {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // console.log(result.user.multiFactor.user);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
          // user: result.user.multiFactor.user,
        });
console.log(result.user);

      })
      .catch((err) => {
        alert("Error message");
      });
  };
  return (
    <>
      <div className="login">
        <div className="login_logo">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoW4yDx4gnD6oIBVEK230BqF7Oig0yR6XDw&usqp=CAU"
            alt=""
          />
        </div>
        <Button type="submit" onClick={signIn}>
          Sign IN
        </Button>
      </div>
    </>
  );
};

export default Log_in;
