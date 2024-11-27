import React, { useContext } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator, Platform } from "react-native";
import { Context } from "../context/jobContext/Context";
import Loading from "../components/Loading";
import JobDetails from "../components/JobDetails";

export default function Result({ navigation, route }) {
  const { state, getResult } = useContext(Context);
  const { result, loading } = state;
  const id = route.params.id;

  useFocusEffect(
    React.useCallback(() => {
      const startScreen = async () => {
        await getResult(id);
      };
      startScreen();
    }, [navigation])
  );

  if (loading || !result) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" />
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <View style={styles.contentView}>
          <Text style={styles.jobName}>{result.nome_profissao}</Text>
          <Text style={styles.jobDescription}>{result.descricao_breve}</Text>
        </View>
      </View>
      <JobDetails job={result} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  jobName: {
    textAlign: 'center',
    fontSize: 33,
    color:'#303668',
    fontWeight: 'bold',
    paddingBottom: 17,
  },
  contentView: {
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: 'center',
    width: '90%',
    borderRadius: 50,
    marginTop: 20,
    borderBottomLeftRadius: 20,
  },
  jobDescription: {
    color: "#3c437d",
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  titleView: {
    paddingTop: Platform.OS === 'ios' ? 35 : 10,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: 'white',
    shadowColor: '#000',
    width: '100%',
    alignSelf: 'center',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 7,
    elevation: 5,
    marginBottom: 15,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#f8f9fa',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#4c4c4c",
  },
});
