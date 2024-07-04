class FolderScroll{
    constructor( wrapper, sticky ){
        this.wrapper = wrapper ;
        this.sticky = sticky;
        this.children = this.sticky.querySelectorAll('.section');
        this.length = this.children.length;

        this.headerVh = 6;
        this.contentVh= (100 - (this.headerVh * this.length));

        this.start = 0;
        this.end = 0;
    }
    init(){
        this.start = this.wrapper.offsetTop + 100
        this.end = this.wrapper.offsetTop + this.wrapper.offsetHeight - innerHeight - 100;
    
        this.children.forEach((children, i) => {
            children.style.bottom = -11 + this.headerVh * (this.length - i) +  'vh';
            children.querySelector('.title').style.height = this.headerVh + 'vh';
            children.querySelector('.content').style.height = this.headerVh + 'vh';
        });
    }
    animate(){
        this.children.forEach(( child , i ) => {
            const unit = ( this.end - this.start )/this.length;
            const s = this.start + unit*i + 100;
            const e = this.start + unit*( i + 1 );

            if ( scrollY <= s ){
                child.style.transform = `translate3d(0,0,0)`;
            }else if( scrollY >= e ){
                child.style.transform = `translate3d(0,${(-1)*this.contentVh}% , 0)`;
            }else{
                child.style.transform =  `translate3d(0,${(scrollY -s)/((unit-100)*((-1)*this.contentVh))}% , 0)`;
            }

        });

    }
}
const foldedMainContent1 = document.querySelector('.main-content-1');
const sticky1 = document.querySelector('.sticky');
const folderScroll = new FolderScroll( foldedMainContent1, sticky1 );

folderScroll.init();
window.addEventListener('scroll',()=>{
    folderScroll.animate();
})
window.addEventListener('resize',()=>{
    folderScroll.init();
})