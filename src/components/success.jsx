import successI from '../img/success.png'

//successActive с setTimeout изменяется в form.jsx при событии submit 
export function Success({ successActive }) {

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