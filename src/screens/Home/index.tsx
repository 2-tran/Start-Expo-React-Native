import React from "react";
import { Box, Text } from "native-base";
import styles from "./styles";

export default function Home() {
  return (
    <Box style={styles.container}>
      <Text style={styles.text}>This is home screen</Text>
    </Box>
  );
}