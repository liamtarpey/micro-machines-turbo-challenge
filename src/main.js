import "./style.css";

/** Global Config */
import {GLOBAL_CONFIG} from "./constants/config";

/**
 * Root page injection
 */
// document.querySelector("#app").innerHTML = `
//     <div>
//         <p>Hello</p>
//     </div>
// `;

/**
 * Init
 */
(function () {
    const game = new Phaser.Game(GLOBAL_CONFIG);
    console.log("GAME: ", game);
})();
