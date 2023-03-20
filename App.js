import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";

const App = () => {
  const [cr, setcr] = useState("");

  const grayHandler = () => {
    setcr("gray");
  };

  const blueHandler = () => {
    setcr("blue");
  };

  const yellowHandler = () => {
    setcr("yellow");
  };

  return (
    <View style={styles.viewBox}>
      <View style={styles.viewBoxH}>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: `${cr}`,
          }}
        ></View>
      </View>
      <View style={styles.viewBoxF}>
        <View style={{ flex: 3, backgroundColor: "gray" }}>
          <Button title="Home" onPress={() => grayHandler()}></Button>
        </View>

        <View style={{ flex: 3, backgroundColor: "blue" }}>
          <Button title="Feed" onPress={() => blueHandler()}></Button>
        </View>

        <View style={{ flex: 3, backgroundColor: "yellow" }}>
          <Button title="Setting" onPress={() => yellowHandler()}></Button>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  viewBox: {
    flex: 1,
    flexDirection: "column",
  },

  viewBoxH: {
    flex: 9,
    justifyContent: "center",
    alignItems: "center",
  },

  viewBoxF: {
    flex: 1,

    flexDirection: "row",
    justifyContent: "center",
  },

  viewBoxButton: {
    flex: 3,
    backgroundColor: "red",
  },
});
