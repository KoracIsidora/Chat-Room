import { Dashboard } from "./layout/dashboard";
import { UserReturn } from "./components/userReturn";
import { getInfo } from "./utilities/services";

const app = document.querySelector("#app");
let dasboard = new Dashboard();
app.appendChild(dasboard.getNode());
setInterval(function(){
   location.reload();
}, 100000);