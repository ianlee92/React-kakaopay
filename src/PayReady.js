import React from "react";
import axios from "axios";

class PayReady extends React.Component {
  state = {
    next_redirect_pc_url: "",
    tid: "",
    params: {
      cid: "cid코드",
      partner_order_id: "partner_order_id",
      partner_user_id: "partner_user_id",
      item_name: "초코파이",
      quantity: 1,
      total_amount: 2200,
      tax_free_amount: 0,
      // router에 지정한 PayResult의 경로로 수정
      approval_url: "http://localhost:3000/payresult",
      fail_url: "http://localhost:3000/payresult",
      cancel_url: "http://localhost:3000/payresult",
    },
  };

  componentDidMount() {
    const { params } = this.state;
    axios({
      url: "/v1/payment/ready",
      method: "POST",
      headers: {
        Authorization: "KakaoAK admin키",
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      params,
    }).then((response) => {
      const {
        data: { next_redirect_pc_url, tid },
      } = response;

      console.log(next_redirect_pc_url);
      console.log(tid);
      // localstorage에 tid 저장
	  window.localStorage.setItem("tid", tid);
      this.setState({ next_redirect_pc_url, tid });
    });
  }

  render() {
    const { next_redirect_pc_url } = this.state;
    return (
      <div>
        <h2>Pay page</h2>
        <a href={next_redirect_pc_url}>
            <img src="img/payment.png" alt="kakaopay" />
        </a>
      </div>
    );
  }
}
export default PayReady;