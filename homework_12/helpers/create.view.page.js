const path = require('path');
const creaateViewpage = (page) => path.join(__dirname, "../views", `${page}.ejs`);

module.exports={
    creaateViewpage,
}
