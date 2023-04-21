import React, { useState, useRef } from "react";
import "./DragNDrop.css"

function DragNDrop({ data }) {
    const [list, setList] = useState(data)
    const [dragging, setDragging] = useState(false)

    const dragItem = useRef()
    const dragNode = useRef()

    const handlerDragStart = (e, params) => {
        dragItem.current = params
        dragNode.current = e.target
        dragNode.current.addEventListener('dragend', handlerDragEnd)
        setTimeout(() => {
            setDragging(true)
        }, 0)
    }

    const handlerDragEnter = (e, params) => {
        const currentItem = dragItem.current
        if (e.target !== dragNode.current) {
            setList(oldList => {
                let newList = JSON.parse(JSON.stringify(oldList))
                newList[params.grpI].items.splice(params.itemI, 0, newList[currentItem.grpI].items.splice(currentItem.itemI, 1)[0])
                dragItem.current = params
                return newList
            })
        }
    }

    const handlerDragEnd = () => {
        setDragging(false)
        dragNode.current.removeEventListener('dragend', handlerDragEnd)
        dragItem.current = null
        dragNode.current = null
    }

    const getStyles = (params) => {
        const currentItem = dragItem.current
        if (currentItem.grpI === params.grpI && currentItem.itemI === params.itemI) {
            return 'current dnd-item'
        }
        return 'dnd-item'
    }

    return (
        <div className='drag-n-drop'>
            {list.map((grp, grpI) => (
                <div key={grp.title} className='dnd-group' onDragEnter={dragging && !grp.items.length?(e) => handlerDragEnter(e,{grpI, itemI: 0}): null}>
                    <div className='group-title'>{grp.title}</div>
                    {grp.items.map((item, itemI) => (
                        <div draggable onDragStart={(e) => { handlerDragStart(e, { grpI, itemI }) }}
                        onDragEnter={dragging ? (e) => { handlerDragEnter(e, { grpI, itemI }) } : null}
                        key={item}
                        className={dragging ? getStyles({ grpI, itemI }) : 'dnd-item'}>
                        {item}
                    </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default DragNDrop