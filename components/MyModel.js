import React, { Component } from 'react'
import {
    View, Modal, Text, TouchableHighlight, Image, StyleSheet
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import HTMLView from 'react-native-htmlview'

export default class MyModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: props.modalVisible,
            selecttem: props.selectedItem,
            imgLink: '',
        }
    };


    componentDidMount() {
        this.downloadPostImg()
    }

    downloadPostImg = () => {
        const urlPostImg = 'https://gnews.network/wp-json/wp/v2/media/' + this.props.selectedItem.featured_media
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


    _setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }


    render() {
        const defaultImg =
            'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg';

        const title = this.props.selectedItem.title["rendered"]
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.isModalVisible}
                    onRequestClose={() => { this.props.hideModal() }}>
                    <ScrollView>
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 1, flexDirection: "column" }}>
                                <HTMLView value={`<p> ${title} </p>`} stylesheet={myTitle} style={{ margin: 10, }}></HTMLView>
                                <Image source={{ uri: this.state.imgLink || defaultImg }} style={{ width: '100%', height: 200, }}></Image>
                                <HTMLView value={this.props.selectedItem.content["rendered"]} stylesheet={myContent} style={{ margin: 14 }}></HTMLView>
                            </View>
                        </View>
                    </ScrollView>
                </Modal>
            </View>
        );
    }
}


const myTitle = StyleSheet.create({
    a: {
        fontWeight: '300',
        color: '#FF3366', // make links coloured pink
    },
    p: {
        fontSize: 22,
        fontWeight: '600',
        alignContent: 'center',
    }
});


const myContent = StyleSheet.create({
    a: {
        fontWeight: '300',
        color: '#FF3366', // make links coloured pink
    },
    p: {
        fontSize: 14,
        fontWeight: '300',

    }
});
