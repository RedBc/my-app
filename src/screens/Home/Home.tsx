import React from "react";
import { Image, Text, View } from "react-native";

import tailwind from 'tailwind-rn'
interface HomeProps {}

export const Home: React.FunctionComponent<HomeProps> = ({}) => {
  return (
    <View>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1551783037-abc1c6093c85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        }}
        resizeMode="cover"
        style={{
          width: 200,
          height: 200,
        }}
      />
      <Text style={tailwind("font-bold")}>Kimmy Love 💖</Text>
      <Text>24 ans / Chant / Vivre</Text>
      <Text>Envoyer un kiss 😘</Text>
    </View>
  );
};