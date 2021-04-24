import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FlatList, Text, View } from "react-native";
import { fetchData } from "../redux/apiCalling";

const ApiParsingWithRedux = props => {
  const dispatch = useDispatch();

  const data = useSelector(state => state.getDataReducer.data);
  const isLoading = useSelector(state => state.getDataReducer.loading);
  const error = useSelector(state => state.getDataReducer.error);

  console.log("data:", data);
  console.log("isLoading:", isLoading);
  console.log("error:", error);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading
        ? <Text>Loading...</Text>
        : <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <Text style={{ fontSize: 18, color: "green", textAlign: "center" }}>
              {"Flat List"}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "green",
                textAlign: "center",
                paddingBottom: 10,
                margin: 10
              }}
            >
              Api parsing with redux
            </Text>
            <FlatList
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) =>
                <Text>
                  {item.id + ". " + item.title}
                </Text>}
            />
          </View>}
    </View>
  );
};

export default ApiParsingWithRedux;
