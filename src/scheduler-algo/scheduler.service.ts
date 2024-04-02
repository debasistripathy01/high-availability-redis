// // Scheduler Algorithm is here

// import { constructor } from "supertest";

// class Scheduler {
//   tasks: any[];
//   constructor() {
//     this.tasks = [];
//   }
//   addTask(task) {
//     this.tasks.push(task);
//   }
//   removeTask(task) {
//     this.tasks.splice(this.tasks.indexOf(task), 1);
//   }
//   runTask() {
//     // this.task.forEach((task) => {
//     //   task();
//     // });
//     while (this.tasks.length) {
//       if (this.tasks[0].index < this.tasks[0].iterations) {
//         this.tasks[0].run();
//       } else {
//         this.tasks[0].onFinish();
//         this.tasks.shift();
//       }
//     }
//   }
// }

// // const scheduler = new Scheduler();

// class RoundRobinScheduler {
//     let tasks: any[];
//     let timeSlotPertask;
//     constructor(timeSlotPertask) {
//       this.tasks = [];
//       this.timeSlotPertask = timeSlotPertask;
//     }
//     addTask(task) {
//       this.tasks.push(task);
//     }
//     run() {
//       let lastSetDate = Date.now();
//       while (this.tasks.length) {
//         if (Date.now() - lastSetDate > this.timeSlotPertask) {
//           this.tasks.push(this.tasks.shift());
//           lastSetDate = Date.now();
//           if (this.tasks.length > 1) {
//             console.log("This is the total task ");
//           }
//         }
  
//         if (this.tasks[0].index < this.tasks[0].iterations) {
//           this.tasks[0].run();
//         } else {
//           this.tasks[0].onFinish();
//           this.tasks.shift();
//         }
//       }
//     }
//   }

