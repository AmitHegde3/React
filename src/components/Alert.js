import React from "react";

export default function Alert(props) {

    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.msg && <div className={`alert alert-${props.msg.type} alert-dismissible fade show`} role="alert">
      <strong>{props.msg.type==="success"?capitalize(props.msg.type):"Success"}</strong> : {props.msg.msg}
    </div>
  );
}
