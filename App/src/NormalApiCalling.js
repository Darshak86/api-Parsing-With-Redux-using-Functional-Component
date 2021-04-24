import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

const NormalApiCalling = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
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
              {'Flat List'}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "green",
                textAlign: "center",
                paddingBottom: 10,
                margin : 10
              }}
            >
              Photos Title
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

export default NormalApiCalling;
