import React, { Component }from 'react';

import BloodCard from '../../components/blood-cards/blood-cards.component';

import bloodImage from '../../assets/blood-card-image.png';
import './bloods.styles.css';

class Bloods extends Component {
    constructor(){
        super();

        this.state = {
            bloods: [],
            searchField: '',
            location: ''
        }
    }
    token = localStorage.getItem('userToken')

    componentDidMount(){
        const token = localStorage.getItem('userToken')
        Promise.all([
            fetch('https://bloodhq-be.herokuapp.com/api/v1/bloods'),
            fetch('https://bloodhq-be.herokuapp.com/api/v1/cart', {
              method: 'GET',
              headers: { 
                 'Content-Type': 'application/json',
                 'Authorization': 'Bearer ' + token
              }})
        ]).then(function (responses){
            return Promise.all(responses.map(function(response){
                return response.json()
            }));
        }).then(data => this.setState({
            bloods: data[0].data,
        })
        )
    }
    
    // componentDidMount(){
    //     Promise.all([
    //         fetch('https://bloodhq-be.herokuapp.com/api/v1/cart', {
    //          method: 'GET',
    //          headers: { 
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bearer ' + this.token
    //          }
    //     }).then(res => res.json()),
    //     fetch('https://bloodhq-be.herokuapp.com/api/v1/bloods')
    //      .then(response => response.json())
    //     ]).then(([data, blood]) => {
    //         this.setState({
    //         bloods: blood.data,
    //         cart: data
    //     })})
    
    // componentDidMount(){
    //     console.log(this.token)
    //     fetch('https://bloodhq-be.herokuapp.com/api/v1/cart', {
    //         method: 'GET',
    //         headers: { 
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bearer ' + this.token
    //         }
    //     }).then(response => response.json())
    //     .then(data => this.setState({
    //         cart_length: data
    //     }))
    // }
    // componentDidMount(){
    //     fetch('https://bloodhq-be.herokuapp.com/api/v1/bloods')
    //     .then(response => response.json())
    //     .then(blood => this.setState({ bloods: blood.data }))
    // }



    handleChange = e => {
        this.setState({searchField: e.target.value})
      }

    handleLocationChange = e => {
        this.setState({location: e.target.value})
    }
    handleCartAdd = () => {
        console.log(this.state.cart_length.length)
    }



    render() {
        const { bloods, searchField, location, cart_length } = this.state;
        const cartAddition = this.handleCartAdd

        const search = bloods.blood_type
        console.log(bloods)
        const filteredBlood = bloods.filter(blood => 
            (blood.city + blood.blood_type).toLowerCase().includes((location + searchField).toLowerCase()),
            
            )


        return (
            
            <div className="bloods-wrapper">

                <div className="search-wrapper">
                <select 
                    className='search'
                    type='text' 
                    placeholder= 'search ' 
                    onChange={this.handleChange}
                >
                    <option value='' >Choose Blood Type </option>
                    <option value="a_negative">A -</option>
                    <option value="b_negative">B -</option>
                    <option value="ab_negative">AB -</option>
                    <option value="o_negative">O -</option>
                    <option value="a_positive">A +</option>
                    <option value="b_positive">B +</option>
                    <option value="ab_positive">AB +</option>
                    <option value="o_positive">O +</option>
                </select>

                <select 
                    className='search'
                    type='text' 
                    placeholder= 'search ' 
                    onChange={this.handleLocationChange}
                >
                    <option value='' >Choose Location </option>
                    <option value="badagry">Badagry</option>
                    <option value="Benin">Benin</option>
                    <option value="calabar">Calabar</option>
                    <option value="lag">Lag</option>
                    <option value="Lagos">Lagos</option>
                    <option value="lekki">Lekki</option>
                    <option value="ny">NY</option>
                    <option value="Ogun">Ogun</option>
                    <option value="rm">RM</option>
                    <option value="Sagamu">Sagamu</option>
                    <option value="san francisco">San Francisco</option>
                    <option value="victoria island">Victoria Island</option>
                </select>

                {/* <input type="text" className="search" placeholder="Search by Location" onChange={this.handleLocationChange}/> */}
                
                </div>
                <div className="container d-flex justify-content-between blood-cards-wrapper w-100">
                    {filteredBlood.map(blood => (
                        <BloodCard blood={blood}></BloodCard>
                        
                    ))}
                </div>
            </div>
        )
    }
}


export default Bloods;