import style from './comps/styles.module.css'
export let tasks = [
    {
        id: 1,
        message: 'buy Milk',
        changed: false
    },
    {
        id: 2,
        message: 'create todoApp',
        changed: false
    },
    {
        id: 3,
        message: 'get Rest',
        changed: false
    }
]

export function toggleTodo(id, setstate) {
    setstate(tasks.map((res) => {
        if (res.id === id) {
            res.changed = !res.changed

        }
        return res.changed
    })
    )
}
export function DellAll(setstate) {
    setstate(
        tasks = []
    )
}
export function AddTask(values, setModal, setstate) {
    if (values.task == "") {
        setModal(true)
    }
    else {    
        let last_id
        if (tasks.length == 0) {
            last_id = 0
        }
        else (
            last_id = [...tasks].slice(-1)[0].id
        )

        setstate(
            tasks.push({ id: last_id + 1, message: values.task, changed: false })
        )
        setModal(false)
    }

}
export function delItem(id) {
    tasks = tasks.filter(res => res.id !== id)

}