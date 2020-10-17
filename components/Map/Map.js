import React, {useState} from "react"
import axios from 'axios'
import classes from './map.module.css'
import {Box} from "@material-ui/core";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";

const REACT_APP_MAPBOX_API_KEY='pk.eyJ1IjoiYmRlcHBvIiwiYSI6ImNrZ2N0aDJvMTAxMDYycnM0bzRmcndnbXAifQ.escrd3XYhRd83AfE2tnA6Q'
export default class AutocompletePlace extends React.Component {

        constructor(props) {
            super(props)
            this.state = {
                search: '',
                results: [],
                isLoading: false,
            }
            this.handleSearchChange = this.handleSearchChange.bind(this)

            if (!REACT_APP_MAPBOX_API_KEY) {
                throw new Error("You don't have any 'process.env.REACT_APP_MAPBOX_API_KEY'")
            }
        }

        handleSearchChange(e) {
            this.setState({
                search: e.target.value,
                isLoading: true
            })

            // Stop the previous setTimeout if there is one in progress
            clearTimeout(this.timeoutId)

            // Launch a new request in 1000ms
            this.timeoutId = setTimeout(() => {
                this.performSearch()
            }, 1000)
        }
        performSearch() {
            if (this.state.search === "") {
                this.setState({
                    results: [],
                    isLoading: false
                })
                return
            }
            axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.search}.json?access_token=${REACT_APP_MAPBOX_API_KEY}`)
                .then(response => {
                    this.setState({
                        results: response.data.features,
                        isLoading: false
                    })
                })
        }
        handleItemClicked(place) {
            this.setState({
                search: place.place_name,
                results: []
            })
            this.props.onSelect(place)
        }
        render() {
            return (
                <div className={classes.AutocompletePlace}>
                    <input className={classes.AutocompletePlaceItems} label="Put the address" type="text" value={this.state.search} onChange={this.handleSearchChange} placeholder="Type an address" />
                    <ul className={classes.AutocompletePlaceResults}>
                        {this.state.results.map(place => (
                            <li
                                key={place.id}
                                className={classes.AutocompletePlaceItems}
                                onClick={() => this.handleItemClicked(place)}
                            >
                                {place.place_name}
                            </li>
                        ))}
                        {this.state.isLoading && <li className={classes.AutocompletePlaceItems}>Loading...</li>}
                    </ul>
                </div>
            )
        }
    }






// export const Map = () => {
//     const [search, setSearch] = useState('')
//     const [results, setResults] = useState([])
//     const [isLoading, setIsLoading] = useState(false)
//
//     const handleSearchChange = (e) => {
//         setSearch(e.target.value)
//         setIsLoading(true)
//
//         // Stop the previous setTimeout if there is one in progress
//         clearTimeout(timeoutId)
//
//         // Launch a new request in 1000ms
//         const timeoutId = setTimeout(() => {
//             performSearch()
//         }, 1000)
//     }
//     const performSearch = () => {
//         if (search === "") {
//             setResults([])
//             setIsLoading(false)
//             return
//         }
//         axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?access_token=${process.env.REACT_APP_MAPBOX_API_KEY}`)
//             .then(response => {
//                 setResults(response.data.features)
//                 setIsLoading(false)
//             })
//     }
//     const handleItemClicked = (place) => {
//         setSearch(place.place_name)
//         setResults([])
//         props.onSelect(place)
//     }
//
//     return (
//         <>
//             <div className="AutocompletePlace">
//                 <input className="AutocompletePlace-input" type="text" value={search} onChange={handleSearchChange} placeholder="Type an address" />
//                 <ul className="AutocompletePlace-results">
//                     {results.map(place => (
//                         <li
//                             key={place.id}
//                             className="AutocompletePlace-items"
//                             onClick={() => handleItemClicked(place)}
//                         >
//                             {place.place_name}
//                         </li>
//                     ))}
//                     {isLoading && <li className="AutocompletePlace-items">Loading...</li>}
//                 </ul>
//             </div>
//             </>
//     )
// }