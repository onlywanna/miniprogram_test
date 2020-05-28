Page({
  data:{
    name : "lq",
    age: 18,
    students: [
      {id:110, name:"lobe0", age: 30},
      {id:111, name:"lobe1", age: 31},
      {id:112, name:"lobe2", age: 32}
    ],
    counter:0,
  },
  handleBtnClick(){
    // 1.错误做法： 界面是不会刷新的
    // this.data.counter += 1
    // console.log(this.data.counter)

    // 2.this.setData()
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleBtnClick2(){
    this.setData({
      counter: this.data.counter - 1
    })
  }
})