import React from "react";
import Block from "dxc-flex";
import Main from "./Main/Main";
export default class IndexPage extends React.Component {
  render() {
    return (
      <div style={{ padding: "30px 15px" }}>
        <div
          style={{
            textAlign: "center",
            fontSize: 18,
            fontWeight: 700,
            marginBottom: 15,
          }}
        >
          纯前端图片加水印，拒绝上传保证个人信息安全。
        </div>
        <Block style={{ margin: "15px 0", fontSize: 12 }} horizontal="center">
          在各种证件上添加“仅用于办理XXXX，他用无效。”，防止证件被他人盗用！
        </Block>
        <Main />
      </div>
    );
  }
}
