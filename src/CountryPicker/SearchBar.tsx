import {
  View,
  StyleSheet,
  TextInput,
  Image,
  I18nManager,
  Platform,
} from "react-native";
import React, { useState } from "react";

const SearchBar = (props) => {
  const search = props.searchIcon
    ? props.searchIcon
    : require("../../res/ic_search.png");
  const [_text, setText] = useState("");
  return (
    <View style={[styles.searchBarStyle, props.searchBarContainerStyle]}>
      {!props.hideSearchBar && (
        <TextInput
          style={[styles.textInputStyle, props.searchInputStyle]}
          onChangeText={props.searchByCountryNameCode}
          onChange={(event) => {
            const { text } = event.nativeEvent;
            setText(text);
          }}
          placeholderTextColor={
            props.searchBarPlaceholderTextColor ?? "#A9A9A9"
          }
          placeholder={props.searchBarPlaceHolder ?? "Search"}
          keyboardType="default"
          returnKeyType={"done"}
          blurOnSubmit={true}
        />
      )}
    </View>
  );
};
export default SearchBar;

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: "center",
  },
  textInputStyle: {
    flex: 1,
    marginLeft: 10,
    height: 45,
  },
  searchBarStyle: {
    margin: 10,
    padding: 10,
    flexDirection: "row",
    height: 45,
    alignItems: "center",
    shadowOpacity: 1.0,
    shadowRadius: 5,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: Platform.OS === "ios" ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,1)",
    borderRadius: 10,
    elevation: 5,
  },
  imageStyle: {
    width: 20,
    height: 20,
    transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
  },
});
