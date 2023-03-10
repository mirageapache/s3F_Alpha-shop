import style from 'styles/css/StepProcess.module.css'

export default function StepProcess({page_index}){
  return(
    <div id='step_process' className="container">
      <h1 className={style.title}>結帳</h1>
      <div className={style.process}>
        <span className="step_icon active"  >
          <span className={style.step_icon_one}>1</span>
          <label>寄送地址</label>
        </span>
        <span className={page_index >= 2 ? "step_icon active" : "step_icon"}>
          <span className={style.step_icon_two}>2</span>
          <label>運送方式</label>
        </span>
        <span className={page_index === 3 ? "step_icon active" : "step_icon"}>
          <span className={style.step_icon_three}>3</span>
          <label>付款資訊</label>
        </span>
      </div>
    </div>
  )
}