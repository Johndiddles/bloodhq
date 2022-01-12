import axios from 'axios';

export const fetchData = () => {
    const detailsPromise = deliveryDetails();
    return {
        deliveryDetails: wrapPromise(detailsPromise),
    }
}

const wrapPromise = (promise) => {
    let status = 'pending';

    let result;

    let suspender = promise.then(
        res => {
            status = 'success';
            result = res;
        }, 
        err => {
            status = 'error';
            result = err;
        }
    )

    return {
        read(){
            if(status === 'pending'){
                throw suspender;
            } else if(status === 'error'){
                throw result;
            } else if(status === 'success'){
                return result;
            }
        }
    }
}

const deliveryDetails =()=> {
    console.log('Fetching Details...')
    const token = localStorage.getItem('userToken')

    return axios.get('https://bloodhq-be.herokuapp.com/api/v1/payment', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
    .then(res => res.data)
    .catch(err => console.log(err))
}