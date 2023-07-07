import React from "react";

const WithdrawalComponent = () => {
  return (
    <div className="Withdrawal">
      <div className="money">₹6,806,085</div>
      
      <p>withdrawals from SoStronk... so far!</p>

      <div className="payment-list">
        <img
          src="https://www.sostronk.com/static/82cddd5cafc3edd655aff78f988cb037/4e14f/google-pay.webp"
          alt=""
        />
        <img
          src="https://www.sostronk.com/static/779670652a2bd4edc8f76696d6863c7a/bb160/bhim-upi.webp"
          alt=""
        />
        <img
          src="https://www.sostronk.com/static/bbfb156f6e53e43e9494dd5bb5084fee/41975/paytm.webp"
          alt=""
        />
      </div>

      <h5>Supported payment partners</h5>
    </div>
  );
};

export default WithdrawalComponent;
