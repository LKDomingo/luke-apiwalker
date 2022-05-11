import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'


const ResourceDisplay = (props) => {
    const history = useHistory();
    const { resource, id } = useParams();


    const [sWObject, setSWObject] = useState({});
    const [homeWorld, setHomeWorld] = useState("");


    const homeWorldSearch = () => {
        console.log('searching for homeworld');
        let homeWorldID = sWObject.homeworld.slice(-2,-1);
        
        history.push(`/planets/${homeWorldID}`)
    }


    useEffect(() => {
        console.log('fetching StarWars');
        axios.get(`https://swapi.dev/api/${resource}/${id}`)
            .then(response => {
                console.log('api response: ', response.data);
                setSWObject(response.data);
            }) 
            .catch(err => {
                history.push('/error')
            })

    }, [resource, id]);

    
    useEffect(() => {
        if (sWObject.homeworld) {
        axios.get(sWObject.homeworld)
            .then(response => {
                console.log('homeworld api response: ', response.data);
                setHomeWorld(response.data);
            })
            .catch(err => {
                console.log(err)
            })
        }

    }, [sWObject.homeworld]);


    if (resource === 'people') {

        return (
            <>
                <h1>{sWObject.name}</h1>
                <p><strong>Birth Year:</strong> {sWObject.birth_year}</p>
                <p><strong>Height:</strong> {sWObject.height}</p>
                <p><strong>Mass:</strong> {sWObject.mass}</p>
                <p><strong>Homeworld:</strong><a onClick={ homeWorldSearch } className='btn text-primary'>{homeWorld.name}</a></p>
                

            </>
        )
    } else if (resource === 'planets') {
        return (
            <>
                <h1>{sWObject.name}</h1>
                <p><strong>Population: </strong> {sWObject.population}</p>
                <p><strong>Orbital Period:</strong> {sWObject.orbital_period}</p>
                <p><strong>Terrain:</strong> {sWObject.terrain}</p>
                <p><strong>Climate:</strong> {sWObject.climate}</p>

            </>
        )
    } else if (resource === 'species') {
        return (
            <>
                <h1>{sWObject.name}</h1>
                <p><strong>Designation: </strong> {sWObject.designation}</p>
                <p><strong>Classification:</strong> {sWObject.classification}</p>
                <p><strong>Average Lifespan:</strong> {sWObject.average_lifespan}</p>
                <p><strong>Language:</strong> {sWObject.language}</p>
            </>
        )
    }
}

export default ResourceDisplay