import * as React from 'react'; import {
    Text, View,
    SafeAreaView,
    Image,
    TouchableOpacity
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { observer, inject } from 'mobx-react'

import Carousel from 'react-native-snap-carousel';
class Carou extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0, carouselItems: [
                {
                    id: 1,
                    image: require('../../assets/avatar1.png'),
                },
                {
                    id: 2,
                    image: require('../../assets/avatar2.png'),
                }, {
                    id: 3,
                    image: require('../../assets/avatar3.png'),
                }, {
                    id: 4,
                    image: require('../../assets/avatar4.png'),
                },

            ]
        }
    }
    _slideLeft = () => {
        if (this.state.activeIndex === 0) {

            this.setState({ activeIndex: this.state.carouselItems.length - 1 })
            this.carousel.snapToItem(this.state.carouselItems.length - 1)

        } else {
            this.setState({ activeIndex: this.state.activeIndex - 1 })
            this.carousel.snapToItem(this.state.activeIndex - 1)

        }
        this.props.storeConnexion.setProfilPicture(this.state.activeIndex-1)
    };

    _slideRight = () => {

        if (this.state.activeIndex === this.state.carouselItems.length - 1) {
            this.setState({ activeIndex: 0 })
            this.carousel.snapToItem(0)
        } else {
            this.setState({ activeIndex: this.state.activeIndex + 1 });
            this.carousel.snapToItem(this.state.activeIndex + 1)
        }
        this.props.storeConnexion.setProfilPicture(this.state.activeIndex+1)
    };
    _renderItem({ item, index }) {
        return (
            <View style={{
                padding: 10,
                flexDirection: 'row', justifyContent: 'center'

            }}>
                <Image source={item.image} style={{ width: 100, height: 100 }} />
            </View>
        )
    }
    render() {
        return (
            <SafeAreaView>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: "center" }}>
                    <TouchableOpacity onPress={() => { this._slideLeft() }} >
                        <AntDesign name="caretleft" size={24} color="black" />
                    </TouchableOpacity>
                    <Carousel

                        ref={ref => this.carousel = ref} data={this.state.carouselItems} sliderWidth={100} itemWidth={100} renderItem={this._renderItem}
                        onSnapToItem={index => this.setState({ activeIndex: index })}

                    />
                    <TouchableOpacity onPress={() => { this._slideRight() }} >
                        <AntDesign name="caretright" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}
export default inject('storeConnexion')(observer(Carou))