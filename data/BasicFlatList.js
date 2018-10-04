import React, { Component } from 'react'
import { View, StyleSheet, Text, FlatList, Image, Alert } from 'react-native'
import flatListData from '../data/flatListData'
import Swipeout from 'react-native-swipeout';
import { Directions } from 'react-native-gesture-handler';

class FlatListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeRowKey: null,
        }
    }

    render() {
        const swipeSetting = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if (this.state.activeRowKey != null) {
                    this.setState({
                        activeRowKey: null
                    })

                }

            },
            onOpen: (secId, rowId, direction) => {
                this.setState({ activeRowKey: this.props.item.id })
            },
            right: [
                {
                    onPress: () => {
                        const deletingRowKey = this.state.activeRowKey

                        Alert.alert('Alert', 'Are you sure you want to delete ?',
                            [{ text: 'No', onPress: () => console.log('cancel Pressed'), style: 'cancel' }, {
                                text: 'Yes', onPress: () => {
                                    flatListData.splice(this.props.index, 1)
                                    this.props.parentFlatList.refreshFlatList(deletingRowKey)
                                }
                            }])
                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        }

        //    console.log(JSON.stringify(this.props.item.name));
        return (
            <Swipeout {...swipeSetting}>
                <View style={{ flex: 1, flexDirection: "column" }}>
                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'blue', }}>
                        <Image source={{ uri: this.props.item.imageUrl }} style={{ width: 100, height: 100, margin: 15, padding: 10 }}></Image>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                            <Text style={styles.flatListItem}>{this.props.item.color}</Text>
                        </View>
                    </View>
                    <View style={{ height: 1, backgroundColor: 'white' }}></View>
                </View>

            </Swipeout>



        )
    }
}


const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        fontSize: 20,
        padding: 10,

    }
})

export default class BasicFlatList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deleteRowKey: null,
        }
    }

    refreshFlatList = (deleteKey) => {
        this.setState((prevState) => {
            return {
                deleteRowKey: deleteKey
            }
        })
    }

    render() {
        return (
            <View style={{ flex: 1, marginTop: 22 }}>
                <FlatList data={flatListData}
                    renderItem={({ item, index }) => {
                        // console.log(`item = ${JSON.stringify(item)} , index = ${index}`)
                        return (
                            <FlatListItem item={item} index={index} parentFlatList={this}></FlatListItem>
                        )
                    }}></FlatList>


            </View>

        )
    }
}