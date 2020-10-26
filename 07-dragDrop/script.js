// getting our dom elements
const draggables = document.querySelectorAll('.dragItem');
const containers = document.querySelectorAll('.container');


// adding drag event listeners to our draggables
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    })
    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    })
})

// adding event listeners on the drop containers
containers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault();
        const item = document.querySelector('.dragging');
        const dragOverElement = getDragOverItem(container, e.clientY);
        container.insertBefore(item, dragOverElement);
    })
})


const getDragOverItem = (container, y) => {
    const draggableElements = [...container.querySelectorAll('.dragItem:not(.dragging)')];
    
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - (box.top + (box.height/2));
        if(offset < 0 && offset > closest.offset){
            return {offset, element: child};
        }else{
            return closest;
        }
    }, {offset: Number.NEGATIVE_INFINITY}).element;
}
