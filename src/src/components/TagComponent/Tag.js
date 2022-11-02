// @flow

import React, { PureComponent } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Tag extends PureComponent {
    constructor() {
        super(...arguments);
        // Append styles.tagBeingDragged style if tag is being dragged
        this.getTagStyle = () => (Object.assign(Object.assign({}, styles.tag)));
        // Call view container's measure function to measure tag position on the screen
        // Handle tag taps
        this.onPress = () => {
            this.props.onPress(this.props.tag);
        };
    }
  render() {
    const { tag: { title } } = this.props;
    console.log(this.props);
    return (
      <View
        ref={el => this.container = el}
        style={styles.container}
      >
        <TouchableOpacity
          style={this.getTagStyle()}
          onPress={this.onPress}
        >
          <Icon name="ios-close-circle-outline" size={16} color="#FFF" />
          <Text>{' '}</Text>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  }

}

const styles = {
  container: {
    marginBottom: 8,
    marginRight: 6,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#b6b2af',
    borderColor: '#b6b2af',
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  title: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'normal',
  },
};