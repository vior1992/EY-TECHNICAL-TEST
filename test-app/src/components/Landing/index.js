import React, { Component } from 'react';
import Hotel from '../Hotel';
import logic from '../../logic'
import './styles.css'

class Landing extends Component {
    state = { 
        hotels: [], 
        brands: [], 
        order: 'default', 
        filter: 'default' 
    }

    componentDidMount = async () => {
        const hotels = await logic.retrieveHotels()

        const brands = []
        const _brands = hotels.forEach(hotel => {
            if (!brands.find(brand => brand === hotel.brand)) brands.push(hotel.brand)
        });

        this.setState({ hotels, brands })
    }

    handleOrderChange = async event => {
        const order = event.target.value

        const hotels = this.state.hotels

        if (order === 'default') this.setState({ hotels })
        
        else if (order === '1') {
            hotels.sort(function(a, b) {
                if (a.rating.score < b.rating.score) return 1
                
                if (a.rating.score > b.rating.score) return -1
                
                return 0
            })
            this.setState({ hotels })

        } else if (order === '2') { 
            hotels.sort(function(a, b) {
                if (a.rating.score > b.rating.score) return 1
                
                if (a.rating.score < b.rating.score) return -1

                return 0
            })
            this.setState({ hotels })

        }
    }

    handleFilterChange = async event => {
        const filter = event.target.value

        if (filter === 'default') {
            const hotels = await logic.retrieveHotels()

            this.setState({ hotels })
            
        } else {
            const _hotels = await logic.retrieveHotels()

            const hotels = _hotels.filter(hotel => hotel.brand === filter)

            this.setState({ hotels })
        }
    }

    render() {
        return <div className="landing">
            <div className="landing__selects">
                <div className="selects__orderContainer">
                    <h3 className="orderContainer__title">Order for</h3>
                    <select className="orderContainer__select" onChange={this.handleOrderChange}>
                        <option selected value='default'>none</option>
                        <option value='1'>+ score</option>
                        <option value='2'>- score</option>
                    </select>
                </div>
                <div className="selects__filterContainer">
                    <h3 className="filterContainer__title">Filter for</h3>
                    <select className="filterContainer__select" onChange={this.handleFilterChange}>
                        <option selected value='default'>All hotels</option>
                        {(this.state.brands || []).map(brand => 
                            <option value={brand}>{brand}</option>
                        )}
                    </select>
                </div>
            </div>
            <div className="landing__hotels">
                {this.state.hotels.map(hotel => <Hotel 
                    name={hotel.name} 
                    image={hotel.image}
                    score={hotel.rating.score}
                    reviews={hotel.rating.reviewNumber}
                />)}
            </div>
        </div>
    }
}

export default Landing




  

