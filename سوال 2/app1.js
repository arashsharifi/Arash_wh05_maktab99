let obj = {
    take_a_Step: 0,
    //متدی که زیاد می کنه
    increase() {
        //++
        this.take_a_Step++
    },
    //متدی که نمایش می دهد 
    load() {
        console.log(this.take_a_Step)
    },
    // متدی که کمم می کند 
    decrease() {
        this.take_a_Step--
    },
    // کلا صفر میشه 
    reset() {
        this.take_a_Step = 0
    }
}
obj.increase();
obj.increase();
obj.increase();
obj.increase();
obj.increase();
obj.decrease();
obj.decrease();
obj.reset();
obj.load()