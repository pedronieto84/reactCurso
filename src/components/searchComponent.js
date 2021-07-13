
const searchComponent = ({filterMethod}) =>{


    const searchChanged = (ev) =>{
        console.log('search changed', ev.target.value)
    }

    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Buscar</span>
            </div>
            <input
             onKeyUp={  filterMethod }  
             type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
    )
}

export default searchComponent;