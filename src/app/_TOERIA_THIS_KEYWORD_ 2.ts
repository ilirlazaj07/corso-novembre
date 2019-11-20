function myCourseFunction() {
  console.log(this);
}

const myCourseObj = {

  metodoChiamante() {
    console.log(this);
  }

}

// call
myCourseFunction();
myCourseFunction.call(myCourseObj);
myCourseFunction.call({ prop: 'value' });
myCourseFunction.call([1, 2, 3]);

// bind
const boundFunction = myFunction.bind({ bound: true });
boundFunction();
