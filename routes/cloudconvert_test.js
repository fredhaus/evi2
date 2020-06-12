var CloudConvert = require("cloudconvert");

const cloudConvert = new CloudConvert(
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijc3NDU1Mzc0MjI1ZTk5MTkxZjQ5MTNiZGMxMTg2YWE0MmMwZDY4MmZmYWNiMDM4MDU3NzFiYWNkYjUxOTcxNGRhZDVjOGFhMWQzM2UwMzdmIn0.eyJhdWQiOiIxIiwianRpIjoiNzc0NTUzNzQyMjVlOTkxOTFmNDkxM2JkYzExODZhYTQyYzBkNjgyZmZhY2IwMzgwNTc3MWJhY2RiNTE5NzE0ZGFkNWM4YWExZDMzZTAzN2YiLCJpYXQiOjE1Nzg5OTkxNjQsIm5iZiI6MTU3ODk5OTE2NCwiZXhwIjo0NzM0NjcyNzY0LCJzdWIiOiIzOTk1NDE0OSIsInNjb3BlcyI6WyJ1c2VyLnJlYWQiLCJ1c2VyLndyaXRlIiwidGFzay5yZWFkIiwidGFzay53cml0ZSIsIndlYmhvb2sucmVhZCIsIndlYmhvb2sud3JpdGUiLCJwcmVzZXQucmVhZCIsInByZXNldC53cml0ZSJdfQ.DlunQacNyags5gOK3-62n8U8CvXFsToDY-6fBVHkwBBmH5QFnyEK_q8E3_BoPhPShaLNfOavRGzxIwj9n5r_-ptT-_C0eonOxBmu717hVRIbvkGsWINzRIqwAqRQf7Ecvo-vfrdiFhIps6hlV0AxORtNmMqlicZnEKJBm1Em7ZqbyuIEZXui_nfQtqs1-kkU5VLbeurZYlLIM-TH15YNKgJ-kveTU1s-lIq1TJsFdJJyKz6X8lS5FsITg5gVYrEIRQU3yz1unV-CAc0hSlFLHv1qWc4-sDTR4347mp7jSB0Oc-9WGlWBB2fj84uP4S4y5QBd4Twb1DUC8gPwHb5HMHWAJBvSdKB-YxOLNbUeHbs1lOPyQvdfdC2GKkbHEPedvzajXH3-yvh6dGyv6q0C6qeJFcbo75I7K-m_Tcgnh0uKA7dAFzmbWkEEpGVmMBSO4Vjz4Fg65i6W8vwuzAcSrA-MirUY03mVK6x3zo111cGVOQQaw72Bnv9WA9t0sux1MmS52NeaO20A74aP4IoBqftdOdv3mVRJlHgnsijsahYoHLAf4UnQEkmW7iSbfHfgt2eJZakPFokt2Q5VaW2QI5cA0MJVhYUjzfYAQEXEx9x07Ar7mnbB4SuxdSFQs0CUlqcOmqeC7Z7Pt8eGes041Q6ikWZoUa6GyulSkmWDjmc"
);

let job;

async function asyncCall() {
  // job = await cloudConvert.jobs.create({
  //   tasks: {
  //     "import-my-file": {
  //       operation: "import/url",
  //       url: "https://google.de"
  //     },
  //     "convert-my-file": {
  //       operation: "convert",
  //       input: "import-my-file",
  //       output_format: "pdf"
  //     },
  //     "export-my-file": {
  //       operation: "export/url",
  //       input: "convert-my-file"
  //     }
  //   }
  // });
  let job = await cloudConvert.jobs.create({
    "tasks": {
        "task-1": {
            "operation": "capture-website",
            "url": "https://www.google.com/",
            "output_format": "pdf",
            "engine": "chrome",
            "zoom": 1,
            "margin_top": 10,
            "margin_bottom": 10,
            "margin_left": 10,
            "margin_right": 10,
            "print_background": true,
            "display_header_footer": false,
            "wait_until": "load",
            "wait_time": 0
        },
        "export-1": {
            "operation": "export/url",
            "input": [
                "task-1"
            ],
            "inline": false,
            "archive_multiple_files": false
        }
    }
});
  job = await cloudConvert.jobs.wait(job.id);
  console.log(job);
}

asyncCall();
