{% if theme.alipay or theme.wechatpay %}
  <div style="padding: 10px 0; margin: 20px auto; width: 90%; text-align: center;">
    <div>{{ theme.reward_comment }}</div>
    <button id="rewardButton" disable="enable" onclick="var qr = document.getElementById('QR'); if (qr.style.display === 'none') {qr.style.display='block';} else {qr.style.display='none'}">
      <span>赏</span>
    </button>
    <div id="QR" style="display: none;">
      {% if theme.wechatpay %}
        <div id="wechat" style="display: inline-block">
          <img id="wechat_qr" src="{{ theme.wechatpay }}" alt="{{ theme.author }} WeChat Pay"/>
          <p>微信打赏</p>
        </div>
      {% endif %}
      {% if theme.alipay %}
        <div id="alipay" style="display: inline-block">
          <img id="alipay_qr" src="{{ theme.alipay }}" alt="{{ theme.author }} Alipay"/>
          <p>支付宝打赏</p>
        </div>
      {% endif %}
    </div>
  </div>
{% endif %}
<style type="text/css">
  #rewardButton {
    cursor: pointer;
    border: 0;
    outline: 0;
    border-radius: 100%;
    padding: 0;
    margin: 0;
    letter-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
  }
  #rewardButton span {
    display: inline-block;
    width: 80px;
    height: 35px;
    border-radius: 5px;
    color: #fff;
    font-weight: 400;
    font-style: normal;
    font-variant: normal;
    font-stretch: normal;
    font-size: 18px;
    font-family: "Microsoft Yahei";
    background: #f44336;
  }
  #rewardButton span:hover {
    background: #f7877f;
  }
  #QR {
    padding-top: 20px;
  }
  #QR a {
    border: 0;
  }
  #QR img {
    width: 180px;
    max-width: 100%;
    display: inline-block;
    margin: 0.8em 2em 0 2em;
  }
</style>