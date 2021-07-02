import { useReducer } from "react"
import { apiFetch } from './../utils/api'

function reducer(state,action) {
 
    switch (action.type) {
        case 'FETCHING_OFFERS':
            return { ...state, loading: true }
        case 'SET_OFFERS':
            return { ...state, offers: action.payload, loading: false }
        case 'DELETE_OFFER':
            return { ...state, offers: state.offers.filter(offer => offer !== action.payload) }
        case 'ADD_OFFER':
            return { ...state, offers: [...state.offers, action.payload] }
        case 'UPDATE_OFFER':
            return { ...state, offers: state.offers.map(offer => offer === action.target ? action.payload : offer) }
        default : {}
    }
}

export function useOffers() {
    const [state, distpatch] = useReducer(reducer, {
        offers: null,
        loading:false
    })

    return {
        offers: state.offers,
        fetchOffers: async function () {
            if (state.loading || state.offers) {
                return;
            }
            distpatch({type : 'FETCHING_OFFERS'})
            const offers = await apiFetch("/offer/")
            distpatch({type : 'SET_OFFERS',payload : offers})
        },
        deleteOffer : async function(offer) {
            await apiFetch("/offer/delete/" + offer.id,{method:'DELETE'})
            distpatch({type:'DELETE_OFFER',payload:offer})
        }
    }
}