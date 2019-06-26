var owl = function(){
    this.prey = ['mice', 'sparrows'];
    var hunt = () => {
        console.log(this);
        return this.prey;
    }
    hunt();
console.log(hunt());
}