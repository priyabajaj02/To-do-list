const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");
item.addEventListener(
    "keyup",
    function(event){
        if(event.key=="Enter"){
            // console.log(this.value)//this refers to item
            addToDo(this.value);
            this.value="";
        }
    }
)
const addToDo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        ${item}
        <i class="fas fa-times"></i>
    `;
    listItem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done")//listItem ki class list nikalega aur uski class ko toggle krega yaani add krna remove krna, add krna remove krna.. 
        }
    )
    listItem.querySelector("i").addEventListener(
        "click",
        function(){
            listItem.remove();
        }
    )
    toDoBox.appendChild(listItem)
}