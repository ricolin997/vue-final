// store.js
import { createStore } from "vuex";
import axios from "axios";
import Cookies from "js-cookie";

const store = createStore({
  state() {
    return {
      token: Cookies.get("token") || null,
      expired: Cookies.get("expired") || null, // 新增 expired
    };
  },
  mutations: {
    setToken(state, { token, expired }) {
      state.token = token;
      state.expired = expired; // 儲存 expired
      Cookies.set("token", token, { expires: 1 }); // 設置 cookie 有效期為 1 天
      Cookies.set("expired", expired, { expires: 1 }); // 設置 expired
    },
    clearToken(state) {
      state.token = null;
      state.expired = null; // 清除 expired
      Cookies.remove("token"); // 刪除 cookie
      Cookies.remove("expired"); // 刪除 expired
    },
  },
  actions: {
    login({ commit }, user) {
      const api = `${process.env.VUE_APP_API}/admin/signin`;
      return axios.post(api, user).then((res) => {
        const token = res.data.token; // 根據你的 API 回應結構調整
        const expired = res.data.expired; // 獲取 expired
        commit("setToken", { token, expired }); // 提交 mutation
      });
    },
    logout({ commit }) {
      commit("clearToken");
    },
  },
});

export default store;

// store.js
// import { createStore } from "vuex";
// import axios from "axios";

// const store = createStore({
//   state() {
//     return {
//       token: sessionStorage.getItem("token") || null,
//       expired: sessionStorage.getItem("expired") || null, // 新增 expired
//     };
//   },
//   mutations: {
//     setToken(state, { token, expired }) {
//       state.token = token;
//       state.expired = expired; // 儲存 expired
//       sessionStorage.setItem("token", token);
//       sessionStorage.setItem("expired", expired); // 儲存到 sessionStorage
//     },
//     clearToken(state) {
//       state.token = null;
//       state.expired = null; // 清除 expired
//       sessionStorage.removeItem("token");
//       sessionStorage.removeItem("expired"); // 刪除 expired
//     },
//   },
//   actions: {
//     login({ commit }, user) {
//       const api = `${process.env.VUE_APP_API}admin/signin`;
//       return axios.post(api, user).then((res) => {
//         const token = res.data.token; // 根據你的 API 回應結構調整
//         const expired = res.data.expired; // 獲取 expired
//         commit("setToken", { token, expired }); // 提交 mutation
//       });
//     },
//     logout({ commit }) {
//       commit("clearToken");
//     },
//   },
// });

// export default store;

// import { createStore } from 'vuex'

// export default createStore({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
