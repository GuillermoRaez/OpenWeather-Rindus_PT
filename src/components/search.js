import { React, useState } from "react";


const Search = () => {
    const [citysearch, setCitysearch] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({citysearch});
        if(!citysearch)
         return null;
    }

    return (
        <div className="Search">
            <form onSubmit={onSubmit}>
                <div className='submit'>
                    <input type='text' className="form-control" placeholder="Introduce ciudad" onChange={(e) => setCitysearch(e.target.value)}/>
                    <button className="button" type="submit">Buscar</button>
                </div>

            </form>
        </div>
    )

}

export default Search;