import components from "./components";

const VueTablerUI = {
  install: function (Vue) {
    for (let component in components) {
      Vue.component(components[component].name, components[component]);
    }
  },
};

if (document.querySelector("head")) {
  document.querySelector("head").appendChild(
    Object.assign(document.createElement("link"), {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/@tabler/core@1.0.0-beta17/dist/css/tabler.min.css",
    })
  );
}

export default VueTablerUI;
