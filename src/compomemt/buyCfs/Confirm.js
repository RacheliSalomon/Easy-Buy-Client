import React, { useEffect, useRef, useContext } from "react";
import { Messages } from "primereact/messages";
import { ProgressBar } from "primereact/progressbar";
import { useFunc } from "../../Hook/useFunc";
import { isVisible } from "@testing-library/user-event/dist/utils";



const Confirm = (props) => {
  const { deteteData } = useFunc();
  const msgs = useRef(null);
  const currentCredit = props.credit;

  // http://localhost:2000/1?id=2
  useEffect(() => {
    deteteData("cfs/", currentCredit?.ID, "?id=2").then((data) => {
        console.log(data);
      if (!data) {
        msgs.current.show([
            {
              sticky: true,
              severity: "error",
              summary: "Error",
              detail: "- Request Denied",
              closable: false,
            },
          ]);
      } else {
        if (data.status==500) {
          msgs.current.show([
            {
              sticky: true,
              severity: "warn",
              summary: "Warning",
              detail: "- Some Error accoured, Check your details ",
              closable: false,
            },
          ]);
        } else {
            msgs.current.show([
                {
                  sticky: true,
                  severity: "success",
                  summary: "Success",
                  detail: "! Enjoy your new Credit",
                  closable: false,
                },
                
              ]);
          
        }
      }
    });
  }, []);

  return (
    <>
      <ProgressBar mode="indeterminate" style={{ height: "6px" }}></ProgressBar>
      <h3>Treat Your Rquerst...</h3>
      <Messages ref={msgs} />
    </>
  );
};
export default Confirm;
