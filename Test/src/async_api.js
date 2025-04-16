// 비동기 처리
/*
// 동기 방식
const workA = () => {
  console.log('workA');
};
const workB = () => {
  console.log('workB');
};
const workC = () => {
  console.log('workC');
};

workA();
workB();
workC();
 */

// 비동기 방식
/*
setTimeout(() => {
  console.log("비동기");
}, 3000); // delay time으로 출력 시간 지연

console.log("종료"); // 해당 함수를 비동기 함수 내부에서 수행하고 싶음

const work = (callback) => {
  setTimeout(() => {
    console.log("비동기");
    callback();
  }, 3000);
};

work(() => {
  console.log("종료");
});
 */

/*
const workA = () => {
  setTimeout(() => {
    console.log('workA');
  }, 5000);
};

const workB = () => {
  setTimeout(() => {
    console.log('workB');
  }, 3000);
};

const workC = () => {
  setTimeout(() => {
    console.log('workC');
  }, 10000);
};

const workD = () => {
  console.log('workD');
}

workA();
workB();
workC();
workD();
 */

// 프로미스 객체
/*
const excutor = (resolve, reject) => {
  setTimeout(() => {
    resolve("성공");
    reject("실패");
  }, 3000);
};

const promise = new Promise(excutor);
promise.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});
 */

// 콜백 지옥
/*
const workA = (value, callback) => {
  setTimeout(() => {
    callback(value + 5);
  }, 5000);
};

const workB = (value, callback) => {
  setTimeout(() => {
    callback(value - 3);
  }, 3000);
};

const workC = (value, callback) => {
  setTimeout(() => {
    callback(value + 10);
  }, 10000);
};

workA(10, (resA) => {
  console.log(`workA: ${resA}`);
  workB(resA, (resB) => {
    console.log(`workB: ${resB}`);
    workC(resB, (resC) => {
      console.log(`workC: ${resC}`);
    });
  });
});
 */

// 프로미스 체이닝
/*
const workA = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value + 5);
    }, 5000);
  })
  return promise;
};

const workB = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value - 3);
    }, 3000);
  })
  return promise;
};

const workC = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value + 10);
    }, 10000);
  })
  return promise;
};
 */

/*
workA(10).then((resA) => {
  console.log(`workA: ${resA}`);
  workB(resA).then((resB) => {
    console.log(`workB: ${resB}`);
    workC(resB).then((resC) => {
      console.log(`workC: ${resC}`);
    });
  });
});
 */

/*
workA(10)
  .then((resA) => {
    console.log(`workA: ${resA}`);
    return workB(resA);
  })
  .then((resB) => {
    console.log(`workB: ${resB}`);
    return workC(resB);
  })
  .then((resC) => {
    console.log(`workC: ${resC}`);
  });
 */

// async & await
/*
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("3sec after..");
    }, ms);
  });
};
 */

/*
const start = () => {
  delay(3000).then((res) => {
    console.log(res);
  });
};
*/

/*
const start = async () => {
  let result = await delay(3000);
  console.log(result);
};
*/

/*
const start = async () => {
  try {
    let result = await delay(3000);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

start();
 */

/*
const workA = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("workA");
    }, 5000);
  });
};

const workB = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("workB");
    }, 3000);
  });
};

const workC = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("workC");
    }, 10000);
  });
};
 */

/*
const start = async () => { // 모든 소요 시간이 완료된 후에 실행됨
  try {
    let resultA = await workA();
    let resultB = await workB();
    let resultC = await workC();
    console.log(resultA);
    console.log(resultB);
    console.log(resultC);
  } catch (error) {
    console.log(error);
  };
}
 */

/*
const start = async () => { // 모든 작업이 완료되면 출력, 병렬처리해 모두 완료 시 바로 출력
  try {
    let results = await Promise.all([workA(), workB(), workC()]);
    results.forEach((element) => console.log(element));
  } catch (error) {
    console.log(error);
  };
}

start();
 */

// API 호출
/* 
const getData = async () => {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getData();
 */