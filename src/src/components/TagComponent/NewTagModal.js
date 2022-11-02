import React, { PureComponent } from 'react';
import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import InputField from './InputField';

export default class NewTagModal extends PureComponent {
    constructor() {
        super(...arguments);
        this.onSubmit = (tag) => {
            this.props.onClose();
            this.props.onSubmit(tag);
        };
    }

  render() {
    const { visible, onClose } = this.props;
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}
      >
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.container}>
            <InputField onSubmit={this.onSubmit} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,                              // take up the whole screen
    justifyContent: 'space-evenly',           // position input at the bottom
    backgroundColor: 'rgba(0,0,0,0.33)',  // semi transparent background
  },
});