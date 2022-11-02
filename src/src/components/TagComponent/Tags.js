import React, { PureComponent } from 'react';
import {
  LayoutAnimation,
  PanResponder,
  StyleSheet,
  View
} from 'react-native';
import TagsArea from './TagsArea';

export default class Tags extends PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            // Convert passed array of tag titles to array of objects of TagObject type,
            // so ['tag', 'another'] becomes [{ title: 'tag' }, { title: 'another' }]
            tags: [...new Set(this.props.tags)] // remove duplicates
                .map((title) => ({ title })),
        };

        // Remove tag
        this.removeTag = (tag) => {
            this.setState((state) => {
                const index = state.tags.findIndex(({ title }) => title === tag.title);
                return {
                    tags: [
                        // Remove the tag
                        ...state.tags.slice(0, index),
                        ...state.tags.slice(index + 1),
                    ]
                };
            });
        };
        // Update the tag in the state with given props
        this.updateTagState = (tag, props) => {
            this.setState((state) => {
                const index = state.tags.findIndex(({ title }) => title === tag.title);
                return {
                    tags: [
                        ...state.tags.slice(0, index),
                        Object.assign(Object.assign({}, state.tags[index]), props),
                        ...state.tags.slice(index + 1),
                    ],
                };
            });
        };
        // Add new tag to the state
        this.onSubmitNewTag = (title) => {
            // Remove tag if it already exists to re-add it to the bottom of the list
            const existingTag = this.state.tags.find((tag) => tag.title === title);
            if (existingTag) {
                this.removeTag(existingTag);
            }
            // Add new tag to the state
            this.setState((state) => {
                return {
                    tags: [
                        ...state.tags,
                        { title },
                    ],
                };
            });
        };
    }

  render() {
    const { tags } = this.state;
    return (
      <View
        style={styles.container}>

        <TagsArea
          tags={tags}
          onPress={this.removeTag}
          onPressAddNew={this.props.onPressAddNewTag}
        />

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
});