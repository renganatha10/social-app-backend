const http = require("http");

const createQueue = require("./create-queue");
const toobusy = require("./../../middlewares/too-busy");

const sumArr = (input, prop) => {
  return input.reduce((sum, item) => sum + item[prop], 0);
};

const createWorker = queueMap => {
  const queues = Object.keys(queueMap).map(name => {
    const queue = createQueue(name);
    queue.process(queueMap[name]);
    return queue;
  });

  return http.createServer((req, res) => {
    const defaultResponse = () =>
      toobusy(req, res, () => {
        res.setHeader("Content-Type", "application/json");
        // Summarize the data across all the queues
        Promise.all(queues.map(queue => queue.getJobCounts())).then(
          jobCounts => {
            const data = {
              waiting: sumArr(jobCounts, "waiting"),
              active: sumArr(jobCounts, "active"),
              completed: sumArr(jobCounts, "completed"),
              failed: sumArr(jobCounts, "failed"),
              delayed: sumArr(jobCounts, "delayed")
            };

            res.end(JSON.stringify(data, null, 2));
          }
        );
      });

    return defaultResponse();
  });
};

module.exports = createWorker;
