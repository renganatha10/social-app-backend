/* eslint-disable no-console */

const { db } = require("../models");

async function syncDb() {
  await db.User.sync({ force: true });
  await db.Post.sync({ force: true });
  console.log(
    "Finished Rewriting tables >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
  );
}

async function syncAndLoad() {
  console.log("Starte");
  await syncDb();
  process.exit(0);
}

syncAndLoad();
