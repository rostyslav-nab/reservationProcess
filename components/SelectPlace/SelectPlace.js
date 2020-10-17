import React from "react"
import axios from 'axios'
import classes from './selectPlace.module.css'
import Input from "@material-ui/core/Input"
import ListItem from "@material-ui/core/ListItem"
import List from "@material-ui/core/List"
import ListItemText from "@material-ui/core/ListItemText"

const REACT_APP_MAPBOX_API_KEY = 'pk.eyJ1IjoiYmRlcHBvIiwiYSI6ImNrZ2N0aDJvMTAxMDYycnM0bzRmcndnbXAifQ.escrd3XYhRd83AfE2tnA6Q'
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
                <Input className={classes.AutocompletePlaceItems} type="text" value={this.state.search}
                       onChange={this.handleSearchChange} placeholder="Type an address"/>
                <List className={classes.AutocompletePlaceResults}>
                    {this.state.results.map(place => (
                        <ListItem
                            key={place.id}
                            className={classes.AutocompletePlaceItems}
                            onClick={() => this.handleItemClicked(place)}
                        >
                            <ListItemText>
                                {place.place_name}
                            </ListItemText>
                        </ListItem>
                    ))}
                    {this.state.isLoading && <li className={classes.AutocompletePlaceItems}>Loading...</li>}
                </List>
            </div>
        )
    }
}


