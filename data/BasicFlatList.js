import React, { Component } from 'react'
import { View, StyleSheet, FlatList, Image, Alert, Platform, TouchableHighlight, RefreshControl, TouchableNativeFeedback, Linking } from 'react-native'
import { getPostRequest } from '../networking/server';
import moment from 'moment';
import { Text, Button, Card, Divider } from 'react-native-elements';

class FlatListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeRowKey: null,
            imgLink: ''
        }
    }

    componentDidMount() {
        this.downloadPostImg()
    }

    downloadPostImg = () => {

        const urlPostImg = 'https://gnews.network/wp-json/wp/v2/media/' + this.props.item.featured_media
        async function getPostImg() {
            try {
                let response = await fetch(urlPostImg);
                let responseJson = await response.json();
                return responseJson;
            } catch (error) {
                console.error(`Error is:  ${error}`)

            }
        }

        getPostImg().then((r) => {
            this.setState({ imgLink: r.source_url })
        }).catch((error) => { this.setState({ imgLink: '' }) })

    }

    render() {
        //  console.log('before checking ')
        //   console.log(this.props.item.id);

        const time = moment(this.props.item.date || moment.now()).fromNow();
        const defaultImg =
            'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg';

        //console.log(JSON.stringify(this.props.item.id));

        return (

            <TouchableNativeFeedback style={{ flex: 1 }} onPress={() => { Linking.openURL(this.props.item.link) }}>
                <Card style={{ flex: 1, flexDirection: "column" }} containerStyle={{ padding: 0 }}>
                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'grey', }}>
                        <Image source={{ uri: this.state.imgLink || defaultImg }} style={{ width: 100, height: 100, }}></Image>
                        <View style={{ flex: 1, flexDirection: "column", height: 100, justifyContent: 'center', marginRight: 6 }}>
                            <Text style={{ color: 'white', marginStart: 10, marginLeft: 10, fontSize: 14 }}>{this.props.item.title["rendered"]}</Text>
                            <Text style={{ color: 'white', marginLeft: 10, marginTop: 4, fontSize: 10 }}>{time}</Text>
                        </View>
                    </View>
                    <Divider style={{ backgroundColor: '#dfe6e9' }} />

                </Card>

            </TouchableNativeFeedback>

        )
    }
}


const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        fontSize: 12,
        padding: 10
    },
    noteStyle: {
        margin: 5,
        fontStyle: 'italic',
        color: '#b2bec3',
        fontSize: 10
    },
    featuredTitleStyle: {
        marginHorizontal: 5,
        textShadowColor: '#00000f',
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 3
    }
})

export default class BasicFlatList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deleteRowKey: null,
            refreshing: false,
            postResponse: []
        }
    }

    componentDidMount() {
        this.refreshDataFromServer()
    }

    refreshDataFromServer = () => {
        this.setState({ refreshing: true })
        getPostRequest().then((r) => {
            this.setState({ postResponse: r })
            this.setState({ refreshing: false })
        }).catch((error) => {
            this.setState({ postResponse: [] })
            this.setState({ refreshing: false })
        })
    }

    onRefresh = () => {
        this.refreshDataFromServer()
    }






    render() {
        return (
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
                <View style={{ flex: 1, marginTop: 22 }}>

                    <FlatList data={this.state.postResponse}
                        renderItem={({ item, index }) => {
                            // console.log(`item = ${JSON.stringify(item)} , index = ${index}`)
                            console.log(`item = ${JSON.stringify(item)} , index : ${index}`)
                            return (
                                <FlatListItem item={item} index={index} parentFlatList={this}></FlatListItem>
                            )
                        }}
                        keyExtractor={(item, index) => item.id.toString()}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this.onRefresh} />
                        }
                    ></FlatList>
                </View>

            </View>

        )
    }
}
