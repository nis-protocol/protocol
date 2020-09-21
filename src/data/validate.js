import React from "react";
// import { Translate } from "react-localize-redux";
// import _ from "lodash";

export const rules = {
  required: {
    required: true,
    message: "Value is required!"
  },
  // whitespace: {
  //   whitespace: true,
  //   message: <Translate id="VALIDATE.REQUIRED" />
  // },
  // type: {
  //   number: {
  //     type: "number",
  //     transform: val => val - 0,
  //     message: <Translate id="VALIDATE.FORMAT.TYPE.NUMBER" />
  //   },
  //   integer: {
  //     type: "integer",
  //     transform: val => val - 0,
  //     message: <Translate id="VALIDATE.FORMAT.TYPE.INTEGER" />
  //   },
  //   decimal: {
  //     type: "float",
  //     transform: val => val - 0,
  //     message: <Translate id="VALIDATE.FORMAT.TYPE.DECIMAL" />
  //   },
  //   date: {
  //     type: "date",
  //     message: <Translate id="VALIDATE.FORMAT.DATE" />
  //   },
  //   email: {
  //     type: "email",
  //     transform: val => val ? val.trim() : "",
  //     message: <Translate id="VALIDATE.FORMAT.TYPE.EMAIL" />
  //   },
  // },
  // string: {
  //   len: (len) => ({
  //     len,
  //     message: <Translate id="VALIDATE.FORMAT.STRING.LEN" data={{ len }} />
  //   }),
  //   min: (min) => ({
  //     min,
  //     message: <Translate id="VALIDATE.FORMAT.STRING.MIN" data={{ min }} />
  //   }),
  //   max: (max) => ({
  //     max,
  //     message: <Translate id="VALIDATE.FORMAT.STRING.MAX" data={{ max }} />
  //   }),
  //   range: (min, max) => ({
  //     min,
  //     max,
  //     message: <Translate id="VALIDATE.FORMAT.STRING.RANGE" data={{ min, max }} />
  //   }),
  // },
  // number: {
  //   len: (len) => ({
  //     type: "number",
  //     transform: val => val - 0,
  //     len,
  //     message: <Translate id="VALIDATE.FORMAT.NUMBER.LEN" data={{ len }} />
  //   }),
  //   min: (min) => ({
  //     type: "number",
  //     transform: val => val - 0,
  //     min,
  //     message: <Translate id="VALIDATE.FORMAT.NUMBER.MIN" data={{ min }} />
  //   }),
  //   max: (max) => ({
  //     type: "number",
  //     transform: val => val - 0,
  //     max,
  //     message: <Translate id="VALIDATE.FORMAT.NUMBER.MAX" data={{ max }} />
  //   }),
  //   range: (min, max) => ({
  //     type: "number",
  //     transform: val => val - 0,
  //     min,
  //     max,
  //     message: <Translate id="VALIDATE.FORMAT.NUMBER.RANGE" data={{ min, max }} />
  //   })
  // },
  // accountName: ({ getFieldValue }) => ({
  //   validator(rule, value) {
  //     if ((/^[a-zA-Z0-9]+$/).test(value)) {
  //       return Promise.resolve();
  //     }
  //     return Promise.reject(<Translate id="VALIDATE.ACCOUNT" />);
  //   }
  // }),
  // password: ({ getFieldValue }) => ({
  //   validator(rule, value) {
  //     if (!value || getFieldValue("repassword") === value) {
  //       return Promise.resolve();
  //     }
  //     return Promise.reject(<Translate id="VALIDATE.REPASSWORD" />);
  //   }
  // }),
  // repassword: ({ getFieldValue }) => ({
  //   validator(rule, value) {
  //     if (!value || getFieldValue("password") === value) {
  //       return Promise.resolve();
  //     }
  //     return Promise.reject(<Translate id="VALIDATE.REPASSWORD" />);
  //   }
  // }),
  // selectBox: (list = [], key = "id") => ({
  //   type: "number",
  //   transform: val => {
  //     if (Array.isArray(val)) {
  //       return _.intersectionWith(list, val, (a, b) => a[key] === b).length === val.length ? 0 : -1;
  //     } else if (!!val || val === 0) {
  //       return list.findIndex(k => k[key] === val);
  //     } else {
  //       return 0;
  //     }
  //   },
  //   min: 0,
  //   message: <Translate id="VALIDATE.SELECT_BOX" />
  // }),
}