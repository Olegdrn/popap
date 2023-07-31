import successI from '../img/success.png';
import { useContext } from "react";
import { MyContext } from "../App";

//successActive с setTimeout изменяется в form.jsx при событии submit 
export function Success() {

  const { successActive } = useContext(MyContext);


  return <>
    <section className={successActive ? "success visible" : "success"}>
      <div className="successArea">
        <div className="imgSuccess">
          <img src={successI} alt="none" />
        </div>
        <h2>SUCCESS</h2>
      </div>
    </section>
  </>
}