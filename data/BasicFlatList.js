import React, { Component } from 'react'
import { View, StyleSheet, FlatList, Image, Alert, Platform, TouchableHighlight, RefreshControl, TouchableNativeFeedback, Linking } from 'react-native'
import { getPostRequest } from '../networking/server';
import moment from 'moment';
import { Text, Button, Card, Divider } from 'react-native-elements';
import MyModal from '../components/MyModel'
import HTMLView from 'react-native-htmlview'



//todo fix refresh rerendering

class FlatListItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            imgLink: ''
        }
    }

    _onPress = () => {
        this.props.onPressItem(this.props.item);
    };


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
        //   console.log('before checking ')
        //   console.log(this.props.item.id);

        const time = moment(this.props.item.date || moment.now()).fromNow();
        const defaultImg =
            'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg';

        //console.log(JSON.stringify(this.props.item.id));

        const title = this.props.item.title["rendered"]
        return (
            <TouchableNativeFeedback style={{ flex: 1 }}  {...this.props}
                onPress={this._onPress}>

                <Card style={{ flex: 1, flexDirection: "column" }} containerStyle={{ padding: 0 }}>
                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#03A9F4', }}>
                        <Image source={{ uri: this.state.imgLink || defaultImg }} style={{ width: 100, height: 100, }}></Image>
                        <View style={{ flex: 1, flexDirection: "column", height: 100, justifyContent: 'center', marginRight: 6 }}>
                            <HTMLView value={`<p> ${title} </p>`} stylesheet={myTitle} style={{ marginStart: 10, marginLeft: 10, }}></HTMLView>
                            <Text style={{ color: 'white', marginLeft: 10, marginTop: 4, fontSize: 10 }}>{time}</Text>
                        </View>
                    </View>
                </Card>
            </TouchableNativeFeedback>
        )
    }
}

const myTitle = StyleSheet.create({
    p: {
        fontSize: 13,
        fontWeight: '600',
        alignContent: 'center',
        color: 'white'
    }
});



export default class BasicFlatList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            refreshing: false,
            postResponse: [],
            page: 0,
            isModalVisible: false,
            selectedItem: null
        }
    }

    _onPressItem = (item) => {
        this._showModal(item);
    };

    _hideMyModal = () => {
        this.setState({ isModalVisible: false })
    }

    _showModal = (item) => this.setState({
        isModalVisible: true,
        selectedItem: item
    })




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
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <FlatList data={this.state.postResponse}
                    renderItem={({ item, index }) => {
                        // console.log(`item = ${JSON.stringify(item)} , index = ${index}`)
                        return (
                            <FlatListItem item={item} index={index} parentFlatList={this} onPressItem={() => this._onPressItem(item)} />

                        )
                    }}
                    keyExtractor={(item) => item.id.toString()}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.onRefresh} />
                    }
                ></FlatList>
                {this.state.isModalVisible &&
                    <MyModal selectedItem={this.state.selectedItem} modalVisible={this.state.isModalVisible} hideModal={this._hideMyModal} />}
            </View>
        )


    }
}



