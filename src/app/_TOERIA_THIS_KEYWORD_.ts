function myFunction() {
  console.log(this);
}

myFunction(); // Window Object


const myObj = {

  metodoChiamante() {
    console.log(this);
  }

}

myObj.metodoChiamante(); // myCourseObj


class TestClass {
  metodoChiamante() {
    console.log(this);
  }
}

const instance = new TestClass();
instance.metodoChiamante(); // TestClass
