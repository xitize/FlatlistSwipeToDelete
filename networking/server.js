import React, { Component } from 'react'
import { } from 'react-native'
const apiGetNews = 'https://gnews.network/wp-json/wp/v2/posts?categories=56&page=1'
async function getPostRequest() {
    try {
        let response = await fetch(apiGetNews);
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.error(`Error is:  ${error}`)

    }
}

export { getPostRequest }