import React from 'react';
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Size} from '../../../../../../styles/FontSize';
import {Fonts} from '../../../../../../styles/Fonts';
import ArrowIcon from '../../../../../../svgs/arrowIcon';
import {Colors} from '../../../../../../styles/Colors';

interface DropdownMenuProps {
  dates: string[];
  onModalPress: (event?: GestureResponderEvent) => void;
  modalVisible: boolean;
  onDatePress: (dateValue: string, dateIndex: number) => void;
  selectedDate: string;
  color: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  dates,
  onModalPress,
  modalVisible,
  onDatePress,
  selectedDate,
  color,
}) => {
  return (
    <View>
      <View style={styles.row}>
        <Text style={[styles.date, {color}]}>{selectedDate}</Text>
        <TouchableOpacity onPress={onModalPress}>
          <ArrowIcon color={color} />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => onModalPress()}>
        <View style={styles.container}>
          <View style={styles.content}>
            <TouchableOpacity style={styles.doneBtn} onPress={onModalPress}>
              <Text style={styles.doneTxt}>Done</Text>
            </TouchableOpacity>

            <Picker
              selectedValue={selectedDate}
              onValueChange={(itemValue, itemIndex) =>
                onDatePress(itemValue, itemIndex)
              }>
              {dates.map(date => (
                <Picker.Item label={date} value={date} key={date} />
              ))}
            </Picker>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  date: {
    fontFamily: Fonts.medium,
    fontSize: Size.MD,
    color: Colors.rainyTxt,
    marginRight: '5.5%',
    marginTop: '3%',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  content: {
    backgroundColor: 'white',
    paddingBottom: 40,
  },
  doneBtn: {
    alignItems: 'flex-end',
    padding: 10,
  },
  doneTxt: {
    fontSize: 18,
    color: 'blue',
  },
});

export default DropdownMenu;
