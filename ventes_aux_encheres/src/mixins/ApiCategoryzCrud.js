import apiConfigs from "../configs/api.configs";

export default {
    methods: {
        getCategoryz() {
            return fetch(`http://localhost:3030/apiVentes/categoryz/`)
            .then(res=>res.json())
        }
    }
}