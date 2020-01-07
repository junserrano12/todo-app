import React, {useRef, useState, useEffect} from 'react'
import * as api from '../../api'
import '../../assets/sass/main.scss'
import style from './Todo.module.scss'

function Todo() {

    const formRef = useRef()
    const [hotelId, setHotelId] = useState(false)
    const [name, setName] = useState('')
    const [description, setdescription] = useState('')
    const [hotelLists, setHotelLists] = useState([])

    useEffect(() => {

        api.getHotels().then(results => {
            setHotelLists(results.data)
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hotelLists])

    const formSubmit = (e) => {
        e.preventDefault()

        let data = {
            name: name,
            description: description
        }

        if (hotelId) {
            console.log('to be updated')
            api.updateHotel(hotelId, data).then(result => {
                console.log(result)
                setHotelId(false)
            })
        } else {

            console.log('to be added')
            api.addHotel(data).then(result => {
                console.log(result)
                setHotelId(false)
            }).catch(error => {
                console.log(error)
            })
        }
    }

    const onDelete = (id) => {

        api.deleteHotel(id).then(result => {
            console.log(result)
        })
    }

    const onUpdate = (hotel) => {
        setHotelId(hotel._id)
        setName(hotel.name)
        setdescription(hotel.description)
    }

    return (
        <div className={style.Todo}>
            <div className={style.form}>
                <form onSubmit={formSubmit} ref={formRef}>
                    <input name="id" type="hidden" value={hotelId} />
                    <div className={style.inputGroup}>
                        <input className={style.inputText} name="name" type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} /><br/>
                    </div>
                    <div className={style.inputGroup}>
                        <textarea className={style.inputTextArea} name="description" placeholder="description" value={description} onChange={(e) => setdescription(e.target.value)}></textarea><br/>
                    </div>
                    <button type="submit" className="button-primary">Submit</button>
                </form>
            </div>
            <div className={style.listContainer}>
                <p>Lists</p>
                <table className={style.tableList} width="100%" cellPadding="0" cellSpacing="0">
                    <thead>
                        <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Delete</th>
                        <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                    {hotelLists.map((hotel, index) =>
                        <tr key={index}>
                        <td>{hotel._id}</td>
                        <td>{hotel.name}</td>
                        <td>{hotel.description}</td>
                        <td><button type="button" onClick={() => onDelete(hotel._id)}>delete</button></td>
                        <td><button type="button" onClick={() => onUpdate(hotel)}>update</button></td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Todo;
