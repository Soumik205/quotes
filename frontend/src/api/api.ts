import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:4788";

export function MotivationalQuote() {
    return axios.get(`${BASE_URL}/motivation`);
}

export function ProgrammingQuote() {
    return axios.get(`${BASE_URL}/programming`);
}


