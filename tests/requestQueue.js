// Background

// You're working on the infrastructure for the application, which involves processing code execution requests and returning the results. You've been tasked with creating an interface that accepts asynchronous code execution requests, processes them in order, and returns the results.

// Requirements

// Implement the RequestQueue class. This class must have the ability to enqueue an asynchronous request and accept a callback to notify when the request has resolved.

// The queue class must also have methods to cancel a request, get the current size of the queue, and process the next item (in FIFO order).

// See the class methods and comments in the RequestQueue.js file for more detail; the behavioral test cases in tests.js may also be helpful in understanding the desired behavior.

// Hints

// You are permitted to reference JavaScript language documentation, as long as you do not copy or share any code.
// Your code will be scored by the unit tests in tests.js (this file is visible but read-only) and hiddenTests.js (this file is hidden to prevent hard-coding).
// If it is helpful, you can write your own unit tests in sampleTests.js.
// You can also run your code directly without Mocha by changing the run mode to "Run Custom Script" and modifying the main.sh file.
// [execution time limit] 10 seconds

// /**
//  * Your mission:
//  * Create and return a request queue with the following methods.
//  * Carefully read the description of each method.
//  */
class RequestQueue {
  constructor() {
    this.queue = [];
  }

  /**
   * Adds an asynchronous request to the end of the queue.
   *
   * @param {() => Promise<any>} request - The asynchronous request.
   * @param {?Function} onExecuted - An optional callback that should be executed with the resolved
   *   result of the request.
   * @returns {number} - An ID for the enqueued request.
   */
  enqueue(request, onExecuted) {
    let id = new Date().getTime();
    this.queue.push({ id, request, onExecuted });
    return id;
  }

  /**
   * Cancels the request with the given ID.
   *
   * @param {number} id - The ID of the request.
   */

  cancel(id) {
    //finds idx of the item in the queue
    const idx = this.queue.findIndex((obj) => {
      return obj.id === id;
    });
    //removes item from queue
    this.queue = this.queue.slice(0, idx).concat(this.queue.slice(idx + 1));
    // might still be awaiting the function removed from queue
  }

  /**
   * Executes the next asynchronous request in the queue, resolving when the request is complete.
   * Does nothing if there are no requests left in the queue.
   *
   * @returns {Promise<void>}
   */
  async processNext() {
    if (this.queue.length) {
      let next = this.queue.pop();
      await next.request();
      if (next.onExecuted) {
        next.onExecuted();
      }
    }
  }

  getSize() {
    return this.queue.length;
  }
}

module.exports = RequestQueue;

////////////ORIGINAL CODE

// Background

// You're working on the infrastructure for the CodeSignal application, which involves processing code execution requests and returning the results. You've been tasked with creating an interface that accepts asynchronous code execution requests, processes them in order, and returns the results.

// Requirements

// Implement the RequestQueue class. This class must have the ability to enqueue an asynchronous request and accept a callback to notify when the request has resolved.

// The queue class must also have methods to cancel a request, get the current size of the queue, and process the next item (in FIFO order).

// See the class methods and comments in the RequestQueue.js file for more detail; the behavioral test cases in tests.js may also be helpful in understanding the desired behavior.

// Hints

// You are permitted to reference JavaScript language documentation, as long as you do not copy or share any code.
// Your code will be scored by the unit tests in tests.js (this file is visible but read-only) and hiddenTests.js (this file is hidden to prevent hard-coding).
// If it is helpful, you can write your own unit tests in sampleTests.js.
// You can also run your code directly without Mocha by changing the run mode to "Run Custom Script" and modifying the main.sh file.
// [execution time limit] 10 seconds

// /**
//  * Your mission:
//  * Create and return a request queue with the following methods.
//  * Carefully read the description of each method.
//  */
// class RequestQueue {
//   constructor() {
//     // TODO - optional, any setup you want
//   }

//   /**
//    * Adds an asynchronous request to the end of the queue.
//    *
//    * @param {() => Promise<any>} request - The asynchronous request.
//    * @param {?Function} onExecuted - An optional callback that should be executed with the resolved
//    *   result of the request.
//    * @returns {number} - An ID for the enqueued request.
//    */
//   enqueue(request, onExecuted) {
//     this.queue.
//   }

//   /**
//    * Cancels the request with the given ID.
//    *
//    * @param {number} id - The ID of the request.
//    */
//   cancel(id) {
//     // TODO
//   }

//   /**
//    * Executes the next asynchronous request in the queue, resolving when the request is complete.
//    * Does nothing if there are no requests left in the queue.
//    *
//    * @returns {Promise<void>}
//    */
//   async processNext() {
//     // TODO
//   }

//   /**
//    * Returns the current size of the queue.
//    */
//   getSize() {
//     // TODO
//   }
// }

// module.exports = RequestQueue;
