import React, {useState} from 'react';
import {Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const styles = require('../styles/styles');

const TaskList = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={styles.taskListContainer}>
      <View style={styles.taskListTitleContainer}>
        <Text>¡Vamos a completar todo!</Text>
      </View>

      <View style={styles.task}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
        <Text style={{fontSize: 16}}>Tarea 1</Text>
      </View>
    </View>
  );
};

export default TaskList;
