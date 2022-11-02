import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import Tag from './Tag';

export default class TagsArea extends PureComponent {
    render() {
        const { tags, onPress, onPressAddNew, onRenderTag, } = this.props;
        return <View style={styles.container}>

        {tags.map(tag =>
          <Tag
            key={tag.title}
            tag={tag}
            onPress={onPress}
            onRender={onRenderTag}
          />
        )}

        <Text
          style={styles.add}
          onPress={onPressAddNew}
        >
          Add new
        </Text>

      </View>
    }
}
const styles = {
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderColor: '#B3B1AF',
        borderRadius: 15,
        borderWidth: 1,
        paddingBottom: 10,
        paddingHorizontal: 15,
        paddingTop: 15,
        marginTop: 5
    },
    add: {
    backgroundColor: 'transparent',
    color: '#76736f',
        paddingHorizontal: 5,
        paddingVertical: 5,
        textDecorationLine: 'underline',
    },
};
